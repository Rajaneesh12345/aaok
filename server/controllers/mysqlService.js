const mysql = require('mysql2/promise');

// ***IMPORTANT** Corresponds to advanced filter categories in react application
const advancedFilterCategories = {
	locationNameInFrontEnd: 'Location',
	travelPeriodNameInFrontEnd: 'Travel Period',
	govPostNameInFrontEnd: 'Government Post',
	socialStatusNameInFrontEnd: 'Social Status',
	degreeHoldersNameInFrontEnd: 'Degree Holders',
	inscriptionTypeNameInFrontEnd: 'Inscription Type',
	calligraphyNameInFrontEnd: 'Calligraphy',
};

// ***IMPORTANT** Corresponds to sort options in react application
const sortOptions = {
	relevance: 'Relevance',
	locationAlphabetical: 'Location (A-Z)',
	locationRevAlphabetical: 'Location (Z-A)',
	nameAlphabetical: 'Name (A-Z)',
	nameRevAlphabetical: 'Name (Z-A)',
	reignChron: 'Reign (Old-New)',
	reignRevChron: 'Reign (New-Old)',
};

function generateEntireFilterSearchQuery(filters, orderBy) {
	try {
		filterSqlLookup = {};
		// ***IMPORTANT*** Ensure that the nameFilter value is escaped!
		const thisNameFilterValueHasBeenPreviouslyEscaped = filters.nameFilter;
		const keys = Object.keys(filters['advancedFilters']);
		keys.forEach(key => {
			let sqlStr = generateFiltersSql(key, filters.advancedFilters[key]);
			filterSqlLookup[key] = sqlStr;
		});
		console.log(filters);
		const sqlWhereClause = generateWhereClause(
			filterSqlLookup,
			// ***IMPORTANT*** Ensure that the nameFilter value is escaped!
			thisNameFilterValueHasBeenPreviouslyEscaped
		);
		const sqlSortByClause = generateSortByClause(orderBy);
		const query = sqlSortByClause
			? searchQuery + sqlWhereClause + sqlSortByClause
			: searchQuery + sqlWhereClause;
		return query;
	} catch (err) {
		console.log(err);
	}
}

function generateWhereClause(filterSqlLookup, nameFilterEscaped) {
	let sqlWhereClause = '';
	let numCategories = 0;
	console.log('filterSqlLookup', filterSqlLookup);
	Object.keys(filterSqlLookup).forEach(key => {
		if (filterSqlLookup[key]) {
			numCategories += 1;
		}
	});
	let categoriesAdded = 0;
	Object.keys(filterSqlLookup).forEach((category, i) => {
		if (filterSqlLookup[category].length > 0) {
			categoriesAdded += 1;
			sqlWhereClause += ` (${filterSqlLookup[category]}) `;
			if (categoriesAdded != numCategories || nameFilterEscaped) {
				sqlWhereClause += `AND `;
			}
		}
	});
	if (nameFilterEscaped) {
		let nameFilterStr = '';
		nameFilterStr += ` NameEnglish LIKE ${nameFilterEscaped} OR `;
		nameFilterStr += ` NameKorean LIKE ${nameFilterEscaped} OR `;
		nameFilterStr += ` NameHancha LIKE ${nameFilterEscaped} `;
		sqlWhereClause += ` (${nameFilterStr}) `;
	}
	if (sqlWhereClause) {
		sqlWhereClause = `\nWHERE ${sqlWhereClause}\n`;
	}
	return sqlWhereClause;
}

function generateSortByClause(orderBy) {
	switch (orderBy) {
		case sortOptions.relevance:
			return '';
		case sortOptions.locationAlphabetical:
			return 'ORDER BY LocationEngl, SubLocationEngl ASC';
		case sortOptions.locationRevAlphabetical:
			return 'ORDER BY LocationEngl, SubLocationEngl DESC';
		case sortOptions.nameAlphabetical:
			return 'ORDER BY NameEnglish ASC';
		case sortOptions.nameRevAlphabetical:
			return 'ORDER BY NameEnglish DESC';
		case sortOptions.reignChron:
			return 'ORDER BY StartYear ASC';
		case sortOptions.reignRevChron:
			return 'ORDER BY StartYear DESC';
		default:
			throw 'Invalid orderBy value.';
	}
}

// ***IMPORTANT***: The rest of the advancedFilterCategories still need to have
// their 'generateFiltersSql' cases created.
function generateFiltersSql(key, filtersArr) {
	let sqlFiltersStr = '';
	let filtersStr;
	switch (key) {
		case advancedFilterCategories.calligraphyNameInFrontEnd:
			filtersStr = generateCalligraphyFilters(key, filtersArr);
			sqlFiltersStr += filtersStr ? ` (${filtersStr}) ` : '';
			break;
		case advancedFilterCategories.inscriptionTypeNameInFrontEnd:
			filtersStr = generateInscriptionTypeFilters(key, filtersArr);
			sqlFiltersStr += filtersStr ? ` (${filtersStr}) ` : '';
			break;
		case advancedFilterCategories.travelPeriodNameInFrontEnd:
			filtersStr = generateTravelPeriodFilters(key, filtersArr);
			sqlFiltersStr += filtersStr ? ` (${filtersStr}) ` : '';
			break;
		case advancedFilterCategories.degreeHoldersNameInFrontEnd:
			filtersStr = generateDegreeHoldersFilters(key, filtersArr);
			sqlFiltersStr += filtersStr ? ` (${filtersStr}) ` : '';
			break;
		case advancedFilterCategories.govPostNameInFrontEnd:
			filtersStr = generateGovPostFilters(key, filtersArr);
			sqlFiltersStr += filtersStr ? ` (${filtersStr}) ` : '';
			break;
		default:
			console.warn(`Unknown filter category key: ${key}`);
			break;
	}
	return sqlFiltersStr;
}

function generateTravelPeriodFilters(category, filterArr) {
	let sqlFilterStr = '';
	filterArr.forEach((filter, i) => {
		switch (filter) {
			case 'knownOnly':
				// handled at end of method.
				return;
				break;
			case 'sonjo':
				sqlFilterStr +=
					'ReignId = 1 OR TravelYearFrom BETWEEN 1567 AND 1608 OR TravelYearTo BETWEEN 1567 AND 1608';
				break;
			case 'kwanghaegun':
				sqlFilterStr +=
					'ReignId = 2 OR TravelYearFrom BETWEEN 1608 AND 1623 OR TravelYearTo BETWEEN 1608 AND 1623';
				break;
			case 'injo':
				sqlFilterStr +=
					'ReignId = 3 OR TravelYearFrom BETWEEN 1623 AND 1649 OR TravelYearTo BETWEEN 1623 AND 1649';
				break;
			case 'hyojong':
				sqlFilterStr +=
					'ReignId = 4 OR TravelYearFrom BETWEEN 1649 AND 1659 OR TravelYearTo BETWEEN 1649 AND 1659';
				break;
			case 'hyonjong':
				sqlFilterStr +=
					'ReignId = 5 OR TravelYearFrom BETWEEN 1659 AND 1674 OR TravelYearTo BETWEEN 1659 AND 1674';
				break;
			case 'sukchong':
				sqlFilterStr +=
					'ReignId = 6 OR TravelYearFrom BETWEEN 1674 AND 1720 OR TravelYearTo BETWEEN 1674 AND 1720';
				break;
			case 'kyongjongYongjo':
				sqlFilterStr +=
					'ReignId = 7 OR TravelYearFrom BETWEEN 1720 AND 1776 OR TravelYearTo BETWEEN 1720 AND 1776';
				break;
			case 'chongjo':
				sqlFilterStr +=
					'ReignId = 8 OR TravelYearFrom BETWEEN 1776 AND 1800 OR TravelYearTo BETWEEN 1776 AND 1800';
				break;
			case 'sunjo':
				sqlFilterStr +=
					'ReignId = 9 OR TravelYearFrom BETWEEN 1800 AND 1834 OR TravelYearTo BETWEEN 1800 AND 1834';
				break;
			case 'honjong':
				sqlFilterStr +=
					'ReignId = 10 OR TravelYearFrom BETWEEN 1834 AND 1849 OR TravelYearTo BETWEEN 1834 AND 1849';
				break;
			case 'choljong':
				sqlFilterStr +=
					'ReignId = 11 OR TravelYearFrom BETWEEN 1849 AND 1864 OR TravelYearTo BETWEEN 1849 AND 1864';
				break;
			case 'kojong':
				sqlFilterStr +=
					'ReignId = 12 OR TravelYearFrom BETWEEN 1864 AND 1907 OR TravelYearTo BETWEEN 1864 AND 1907';
				break;
			case 'colonialPeriod':
				sqlFilterStr +=
					'ReignId = 13 OR TravelYearFrom BETWEEN 1907 AND 1945 OR TravelYearTo BETWEEN 1907 AND 1945';
				break;

			default:
				console.warn(`Unknown filter ${category}=>${filter}`);
		}
		if (sqlFilterStr && filterArr.length !== i + 1) {
			sqlFilterStr = `(${sqlFilterStr}) OR `;
		}
	});
	if (filterArr.includes('knownOnly')) {
		sqlFilterStr = ` ((TravelYearFrom IS NOT NULL OR TravelYearTo IS NOT NULL OR ReignId IS NOT NULL) ${
			sqlFilterStr ? `AND ${sqlFilterStr}` : ''
		}) `;
	}
	return sqlFilterStr;
}

function generateGovPostFilters(category, filterArr) {
	let sqlFilterStr = '';
	filterArr.forEach((filter, i) => {
		switch (filter) {
			case 'accountant':
				sqlFilterStr += 'GovernmentTitleId IN (104, 108, 110, 153)';
				break;
			case 'censor':
				sqlFilterStr += 'GovernmentTitleId IN (62, 82, 97, 96, 106)';
				break;
			case 'commander':
				sqlFilterStr +=
					'GovernmentTitleId IN (15, 39, 26, 24, 25, 27, 28, 29, 65, 66, 67, 68, 69, 70, 83, 122, 143)';
				break;
			case 'governor':
				sqlFilterStr += 'GovernmentTitleId IN (17, 18, 19, 20, 21, 22)';
				break;
			case 'guard':
				sqlFilterStr += 'GovernmentTitleId IN (114, 115, 132, 148)';
				break;
			case 'inspector':
				sqlFilterStr += 'GovernmentTitleId IN (23, 81, 85, 98)';
				break;
			case 'magistrate':
				sqlFilterStr +=
					'GovernmentTitleId IN (10, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 87, 88, 117, 118, 119, 120, 125, 128, 129, 137, 138, 139, 140, 141, 144, 146, 149, 150)';
				break;
			case 'minister':
				sqlFilterStr +=
					'GovernmentTitleId IN (11, 12, 13, 14 ,30, 34, 35, 71, 72, 126, 130, 135, 136, 152)';
				break;
			case 'primeMinister':
				sqlFilterStr += 'GovernmentTitleId = 1';
				break;
			case 'secretary':
				sqlFilterStr +=
					'GovernmentTitleId IN (40, 64, 74, 75, 79, 133, 151)';
				break;
			case 'stateCouncilor':
				sqlFilterStr += 'GovernmentTitleId IN (2, 3)';
				break;
			case 'govUndeterminedOther':
				sqlFilterStr +=
					'GovernmentTitleId IS NOT NULL AND GovernmentTitleId NOT IN (104, 108, 110, 153, 62, 82, 97, 96, 106, 17, 18, 19, 20, 21, 22, 114, 115, 132, 148, 23, 81, 85, 98, 10, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 87, 88, 117, 118, 119, 120, 125, 128, 129, 137, 138, 139, 140, 141, 144, 146, 149, 150, 15, 39, 26, 24, 25, 27, 28, 29, 65, 66, 67, 68, 69, 70, 83, 122, 143, 11, 12, 13, 14, 30, 34, 35, 71, 72, 126, 130, 135, 136, 152, 1, 40, 64, 74, 75, 79, 133, 151, 2, 3)';
				break;
			default:
				console.warn(`Unknown filter ${category}=>${filter}`);
		}
		if (sqlFilterStr && filterArr.length !== i + 1) {
			sqlFilterStr = `(${sqlFilterStr}) OR `;
		}
	});
	return sqlFilterStr;
}

function generateDegreeHoldersFilters(category, filterArr) {
	let sqlFilterStr = '';
	filterArr.forEach((filter, i) => {
		switch (filter) {
			case 'civilExam':
				sqlFilterStr += 'ExamId IN (1, 2, 3, 4)';
				break;
			case 'militaryExam':
				sqlFilterStr += 'ExamId IN (5, 6)';
				break;
			case 'technicalExam':
				sqlFilterStr += 'ExamId IN (7, 8, 9, 10, 11)';
				break;
			case 'dhUndetermined':
				sqlFilterStr +=
					'(ExamId IS NULL) OR (ExamId NOT IN (1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11))';
				break;
			default:
				console.warn(`Unknown filter ${category}=>${filter}`);
		}
		if (sqlFilterStr && filterArr.length !== i + 1) {
			sqlFilterStr = `(${sqlFilterStr}) OR `;
		}
	});
	return sqlFilterStr;
}

function generateInscriptionTypeFilters(category, filterArr) {
	let sqlFilterStr = '';
	filterArr.forEach((filter, i) => {
		switch (filter) {
			case 'agnatic':
				sqlFilterStr += 'IsAgnatic = TRUE';
				break;
			case 'associative':
				sqlFilterStr += 'IsAssociative = TRUE';
				break;
			case 'agnaticAssociative':
				sqlFilterStr += 'IsAgnatic = TRUE AND IsAssociative = TRUE';
				break;
			case 'singleName':
				sqlFilterStr += 'IsAgnatic = FALSE AND IsAssociative = FALSE';
				break;
			default:
				console.warn(`Unknown filter ${category}=>${filter}`);
				break;
		}
		if (sqlFilterStr && filterArr.length !== i + 1) {
			sqlFilterStr = `(${sqlFilterStr}) OR `;
		}
	});
	return sqlFilterStr;
}

function generateCalligraphyFilters(category, filterArr) {
	let sqlFilterStr = '';
	filterArr.forEach((filter, i) => {
		switch (filter) {
			case 'regular':
				sqlFilterStr += 'CalligraphyReg = TRUE';
				break;
			case 'sealCursive':
				sqlFilterStr += 'CalligraphySealCursive = TRUE';
				break;
			default:
				console.warn(`Unknown filter ${category}=>${filter}`);
		}
		if (sqlFilterStr && filterArr.length !== i + 1) {
			sqlFilterStr = `(${sqlFilterStr}) AND `;
		}
	});
	return sqlFilterStr;
}

function unduplicateRowsByCollapsingReignInfoAndExamInfoToASingleRow(rows) {
	condensedRowDict = {};
	rows.forEach(row => {
		if (condensedRowDict.hasOwnProperty(row['PersonId'])) {
			if (
				!condensedRowDict[row['PersonId']]['ExamsTaken'].hasOwnProperty(
					row['ExamId']
				)
			) {
				const exisitingPersonRow = condensedRowDict[row['PersonId']];
				exisitingPersonRow['ExamsTaken'][row['ExamId']] = {
					examId: row['ExamId'],
					examEnglTranslit: row['ExamEnglTranslit'],
					examHancha: row['ExamHancha'],
					examKorean: row['ExamKorean'],
					examEnglish: row['ExamEnglish'],
				};
			}
			if (
				!condensedRowDict[row['PersonId']]['Reigns'].hasOwnProperty(
					row['ReignId']
				)
			) {
				const exisitingPersonRow = condensedRowDict[row['PersonId']];
				exisitingPersonRow['Reigns'][row['ReignId']] = {
					reignEnglish: row['ReignEnglish'],
					reignKorean: row['ReignKorean'],
					reignHancha: row['ReignHancha'],
					startYear: row['StartYear'],
					endYear: row['EndYear'],
				};
			}
		} else {
			row['ExamsTaken'] = {};
			row['ExamsTaken'][row['ExamId']] = {
				examId: row['ExamId'],
				examEnglTranslit: row['ExamEnglTranslit'],
				examHancha: row['ExamHancha'],
				examKorean: row['ExamKorean'],
				examEnglish: row['ExamEnglish'],
			};
			row['Reigns'] = {};
			row['Reigns'][row['ReignId']] = {
				reignEnglish: row['ReignEnglish'],
				reignKorean: row['ReignKorean'],
				reignHancha: row['ReignHancha'],
				startYear: row['StartYear'],
				endYear: row['EndYear'],
			};
			condensedRowDict[row['PersonId']] = row;
		}
	});

	return Object.values(condensedRowDict);
}

/*
ReignEnglish
ReignKorean
ReignHancha
StartYear,
EndYear
*/

function getNewConnectionObject() {
	const connection = mysql.createConnection({
		host: process.env.MYSQL_HOST,
		user: process.env.MYSQL_USER,
		password: process.env.MYSQL_PASSWORD,
		database: process.env.MYSQL_DBNAME,
	});

	return connection;
}

async function withConnection(funcNeedingConnection, ...rest) {
	const conn = await getNewConnectionObject();
	let res = await funcNeedingConnection(conn, ...rest);
	conn.end();
	return res;
}

async function doSearchQuery(conn, filters, orderBy) {
	// escape the user-input name filter value
	if (filters.nameFilter != '') {
		const escapedFilter = conn.escape(filters.nameFilter);
		// insert '%' at the start and end of the escaped name filter value
		const escapedLIKEFilterValue = `${escapedFilter[0]}%${escapedFilter.slice(
			1,
			-1
		)}%${escapedFilter.slice(-1)}`;
		filters.nameFilter = escapedLIKEFilterValue;
	}
	const searchQuery = generateEntireFilterSearchQuery(filters, orderBy);
	console.log(searchQuery);
	const res = await conn.query(searchQuery);
	return res;
}

async function doIndividualInfoQuery(conn, personId) {
	const res = await conn.execute(individualSearchQuery, [personId]);
	return res;
}

async function doIndividualImgQuery(conn, imgId) {
	// const res = await conn.execute(
	// 	`SELECT Picture
	//   FROM Stiller.Pictures
	//   WHERE PictureId = ?`,
	// 	[imgId]
	// );
	const res = await conn.execute(
		`SELECT link FROM Stiller.Picture_links WHERE PictureId = ?`,
		[imgId]
	);
	console.log(res);
	return res;
}

async function doSameClusterQuery(conn, clusterId) {
	const res = await conn.execute(
		`
    SELECT p_in.PersonId, p.NameEnglish, p.NameKorean, p.NameHancha
    FROM
      (SELECT PersonId, ContainedInCluster
      FROM Stiller.Pictured_In
      WHERE ContainedInCluster = ?) p_in
    JOIN Stiller.People p
    ON p_in.PersonId = p.PersonId
    `,
		[clusterId]
	);
	return res;
}

async function doNumberOfLayersQuery(conn, clusterId) {
	const res = await conn.execute(
		`
    SELECT count(*)
    FROM Stiller.Layers
    WHERE ClusterId = ?
    GROUP BY ClusterId
    `,
		[clusterId]
	);
	return res;
}

async function doRelatedQuery(conn, peopleId) {
	const res = await conn.execute(
		`
    SELECT ar.PersonB AS OtherPersonId
          ,art.RoleBEnglish
          ,art.RoleBKorean
          ,art.RoleBHancha
          ,art.RelationshipEnglish
          ,art.RelationshipKorean
          ,art.RelationshipHancha
          ,p.NameEnglish
          ,p.NameKorean
          ,p.NameHancha
    FROM agnatic_relationships ar
    JOIN agnatic_relationship_types art ON
      ar.AgnaticRelationshipId = art.AgnaticRelationshipId
    JOIN People p ON
      ar.PersonB = p.PersonId
    WHERE  ar.PersonA = ?
    `,
		[peopleId]
	);
	return res;
}

var searchQuery = `
-- This joins each person and their metadata/inscription data with the info of each exam they're found to have
-- taken. This joins over a 1-M relationship for both exams and reigns, so rows will need to be deduplicated.
-- I also didn't know about temp tables, I'm sorry.
SELECT *
FROM
  -- Get all people and all information that could be displayed/filtered in the search results.
  (SELECT *
  FROM
    -- Join all of the information in People & Reigns tables with the corresponding Pictured_In row.
    (SELECT people_join_reign_join_gov.*,
            pic_in.PictureId,
            pic_in.LayerId,
            pic_in.LocationInPicture,
            pic_in.LaterAdditionToCluster,
            pic_in.ContainedInCluster
    FROM
      (SELECT people_join_gov.*,
              reigns_lived_in_join_reigns.ReignId,
              reigns_lived_in_join_reigns.ReignEnglish,
              reigns_lived_in_join_reigns.ReignKorean,
              reigns_lived_in_join_reigns.ReignHancha,
              reigns_lived_in_join_reigns.StartYear,
              reigns_lived_in_join_reigns.EndYear
      FROM
        (SELECT people.*,
                gov_info.FirstYearInGovPosition,
                gov_info.LastYearInGovPosition,
                gov_info.GovernmentTitleId,
                gov_info.FirstYearInHighestGovPos,
                gov_info.LastYearInHighestGovPos,
                gov_info.GovTitleHancha,
                gov_info.GovTitleKorean,
                gov_info.GovTitleEnglTranslit,
                gov_info.GovTitleEnglish,
                gov_info.HighestRank
        FROM Stiller.People people
        LEFT JOIN
          (SELECT gt.*,
                  gi.PersonId,
                  gi.FirstYearInGovPosition,
                  gi.LastYearInGovPosition,
                  gi.FirstYearInHighestGovPos,
                  gi.LastYearinHighestGovPos
          FROM Stiller.Government_Title gt
          JOIN Stiller.Government_Individual gi
            ON gt.GovernmentTitleId = gi.GovernmentTitleId)
        gov_info
          ON gov_info.PersonId = people.PersonId)
            people_join_gov
        LEFT JOIN
          (SELECT reign.*
                  ,rli.PeopleId
          FROM Stiller.Reigns_Lived_In rli
          LEFT JOIN Stiller.Reigns reign
          ON rli.ReignId = reign.ReignId)
        reigns_lived_in_join_reigns
          ON reigns_lived_in_join_reigns.PeopleId = people_join_gov.PersonId)
      people_join_reign_join_gov
      LEFT JOIN Stiller.Pictured_In pic_in
      ON people_join_reign_join_gov.PersonId = pic_in.PersonId)
      people_join_pictured_in_join_reigns
    -- Join Person information with the cluster/metadata, including location.
    JOIN
      -- Join all of the clusters and their metadata with their location from Locations.
      (SELECT clust.IsAgnatic,
              clust.IsAssociative,
              clust.ClusterId,
              loc.LocationEngl,
              loc.LocationEnglTranslit,
              loc.LocationHancha,
              loc.LocationKorean,
              loc.SubLocationEngl,
              loc.SublocationHancha,
              loc.SublocationEnglTranslit,
              loc.SublocationKorean
      FROM Stiller.Locations loc
      JOIN Stiller.Clusters  clust
      ON loc.LocationId = clust.LocatedAt) clusters_and_locations
    ON people_join_pictured_in_join_reigns.ContainedInCluster = clusters_and_locations.ClusterId) people_and_inscription_info
LEFT JOIN
	(SELECT e.*, et.PersonId as 'dontUseThisPersonId', et.DateTaken
    FROM Stiller.Exams e
    JOIN Stiller.Exams_Taken et
    ON e.ExamId = et.Exam) exam_info
  ON people_and_inscription_info.PersonId = exam_info.dontUseThisPersonId
`;

var individualSearchQuery = `
-- This is nearly identical to the above query, but it filters via a WHERE clause to a single PersonId. Because it also
-- includes joins to reigns and exams_taken, it will still have duplication (if a person has taken more than one exam or belongs to more
-- than one reign). This doesn't matter because we query exam info seperately for display on the InfoPage, and you should do the same for
-- reigns.
SELECT *
FROM
  -- Get all people and all information that could be displayed/filtered in the search results.
  (SELECT *
  FROM
    -- Join all of the information in People & Reigns tables with the corresponding Pictured_In row.
    (SELECT people_join_reign_join_gov.*,
            pic_in.PictureId,
            pic_in.LayerId,
            pic_in.LayerNumber,
            pic_in.LocationInPicture,
            pic_in.LaterAdditionToCluster,
            pic_in.ContainedInCluster
    FROM
      (SELECT people_join_gov.*,
              reigns_lived_in_join_reigns.ReignId,
              reigns_lived_in_join_reigns.ReignEnglish,
              reigns_lived_in_join_reigns.ReignKorean,
              reigns_lived_in_join_reigns.ReignHancha,
              reigns_lived_in_join_reigns.StartYear,
              reigns_lived_in_join_reigns.EndYear
      FROM
        (SELECT people.*,
                gov_info.FirstYearInGovPosition,
                gov_info.LastYearInGovPosition,
                gov_info.GovernmentTitleId,
                gov_info.FirstYearInHighestGovPos,
                gov_info.LastYearInHighestGovPos,
                gov_info.GovTitleHancha,
                gov_info.GovTitleKorean,
                gov_info.GovTitleEnglTranslit,
                gov_info.GovTitleEnglish,
                gov_info.HighestRank
        FROM Stiller.People people
        LEFT JOIN
          (SELECT gt.*,
                  gi.PersonId,
                  gi.FirstYearInGovPosition,
                  gi.LastYearInGovPosition,
                  gi.FirstYearInHighestGovPos,
                  gi.LastYearinHighestGovPos
          FROM Stiller.Government_Title gt
          JOIN Stiller.Government_Individual gi
            ON gt.GovernmentTitleId = gi.GovernmentTitleId)
        gov_info
          ON gov_info.PersonId = people.PersonId
        WHERE people.PersonId = ?)
        people_join_gov
        LEFT JOIN
          (SELECT reign.*
          ,rli.PeopleId
          FROM Stiller.Reigns_Lived_In rli
          LEFT JOIN Stiller.Reigns reign
          ON rli.ReignId = reign.ReignId)
        reigns_lived_in_join_reigns
          ON reigns_lived_in_join_reigns.PeopleId = people_join_gov.PersonId)
      people_join_reign_join_gov
      LEFT JOIN (
        SELECT
          pi.*,
          l.LayerNumber
        FROM Stiller.Pictured_In pi
        JOIN Layers l ON
          pi.LayerId = l.LayerId
      ) pic_in
      ON people_join_reign_join_gov.PersonId = pic_in.PersonId)
      people_join_pictured_in_join_reigns
    -- Join Person information with the cluster/metadata, including location.
    JOIN
      -- Join all of the clusters and their metadata with their location from Locations.
      (SELECT clust.IsAgnatic,
              clust.IsAssociative,
              clust.ClusterId,
              loc.LocationEngl,
              loc.LocationEnglTranslit,
              loc.LocationHancha,
              loc.LocationKorean,
              loc.SubLocationEngl,
              loc.SublocationHancha,
              loc.SublocationEnglTranslit,
              loc.SublocationKorean
      FROM Stiller.Locations loc
      JOIN Stiller.Clusters  clust
      ON loc.LocationId = clust.LocatedAt) clusters_and_locations
    ON people_join_pictured_in_join_reigns.ContainedInCluster = clusters_and_locations.ClusterId) people_and_inscription_info
LEFT JOIN
	(SELECT e.*, et.PersonId as 'dontUseThisPersonId', et.DateTaken
    FROM Stiller.Exams e
    JOIN Stiller.Exams_Taken et
    ON e.ExamId = et.Exam) exam_info
  ON people_and_inscription_info.PersonId = exam_info.dontUseThisPersonId
`;

module.exports = {
	doIndividualInfoQuery,
	doIndividualImgQuery,
	doSearchQuery,
	doSearchRequestWithFilters: generateEntireFilterSearchQuery,
	doSameClusterQuery,
	doNumberOfLayersQuery,
	doRelatedQuery,
	getNewConnectionObject,
	unduplicateRows: unduplicateRowsByCollapsingReignInfoAndExamInfoToASingleRow,
	withConnection,
};
