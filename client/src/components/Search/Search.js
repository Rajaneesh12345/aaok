import '../../App.v1.css';
import './Search.css';
import { getSearchResults } from '../../services/api';
import { InfoPage } from '../InfoPage/InfoPage';
import { SearchGuide } from '../SearchGuide/SearchGuide';
import { SearchGuide_kr } from '../SearchGuide/SearchGuide_kr';
import { LargePage } from '../LargePage/LargePage';
import { SearchContext } from '../../contexts/SearchContext';
import { routes } from '../../routes.js';
import {
	Row,
	Col,
	Badge,
	Button,
	FormControl,
	InputGroup,
	Dropdown,
	Accordion,
	AccordionContext,
	useAccordionToggle,
	ListGroup,
} from 'react-bootstrap';
import { Link, Route, Switch, useRouteMatch } from 'react-router-dom';
import React, { useState, useContext, forwardRef, useEffect } from 'react';
import { Lang } from '../Lang/Lang';
import * as constants_en from '../Constants/Constants_en';
import * as constants_kr from '../Constants/Constants_kr';

const sortOptions = {
	relevance: 'Relevance',
	locationAlphabetical: 'Location (A-Z)',
	locationRevAlphabetical: 'Location (Z-A)',
	nameAlphabetical: 'Name (A-Z)',
	nameRevAlphabetical: 'Name (Z-A)',
	reignChron: 'Reign (Old-New)',
	reignRevChron: 'Reign (New-Old)',
};

const Search = props => {
	const advancedFilters = {
		Calligraphy: {
			sealCursive: (
				<Lang
					isEn={props.isEn}
					en={constants_en.sealCursive}
					kr={constants_kr.sealCursive}
				></Lang>
			),
			regular: (
				<Lang
					isEn={props.isEn}
					en={constants_en.regular}
					kr={constants_kr.regular}
				></Lang>
			),
		},
		'Inscription Type': {
			agnatic: (
				<Lang
					isEn={props.isEn}
					en={constants_en.agnatic}
					kr={constants_kr.agnatic}
				></Lang>
			),
			agnaticAssociative: (
				<Lang
					isEn={props.isEn}
					en={constants_en.agnaticAssociative}
					kr={constants_kr.agnaticAssociative}
				></Lang>
			),
			associative: (
				<Lang
					isEn={props.isEn}
					en={constants_en.associative}
					kr={constants_kr.associative}
				></Lang>
			),
			singleName: (
				<Lang
					isEn={props.isEn}
					en={constants_en.singleName}
					kr={constants_kr.singleName}
				></Lang>
			),
		},
		'Government Post': {
			accountant: (
				<Lang
					isEn={props.isEn}
					en={constants_en.accountant}
					kr={constants_kr.accountant}
				></Lang>
			),
			censor: (
				<Lang
					isEn={props.isEn}
					en={constants_en.censor}
					kr={constants_kr.censor}
				></Lang>
			),
			commander: (
				<Lang
					isEn={props.isEn}
					en={constants_en.commander}
					kr={constants_kr.commander}
				></Lang>
			),
			governor: (
				<Lang
					isEn={props.isEn}
					en={constants_en.governor}
					kr={constants_kr.governor}
				></Lang>
			),
			guard: (
				<Lang
					isEn={props.isEn}
					en={constants_en.guard}
					kr={constants_kr.guard}
				></Lang>
			),
			inspector: (
				<Lang
					isEn={props.isEn}
					en={constants_en.inspector}
					kr={constants_kr.inspector}
				></Lang>
			),
			magistrate: (
				<Lang
					isEn={props.isEn}
					en={constants_en.magistrate}
					kr={constants_kr.magistrate}
				></Lang>
			),
			minister: (
				<Lang
					isEn={props.isEn}
					en={constants_en.minister}
					kr={constants_kr.minister}
				></Lang>
			),
			primeMinister: (
				<Lang
					isEn={props.isEn}
					en={constants_en.primeMinister}
					kr={constants_kr.primeMinister}
				></Lang>
			),
			secretary: (
				<Lang
					isEn={props.isEn}
					en={constants_en.secretary}
					kr={constants_kr.secretary}
				></Lang>
			),
			stateCouncilor: (
				<Lang
					isEn={props.isEn}
					en={constants_en.stateCouncilor}
					kr={constants_kr.stateCouncilor}
				></Lang>
			),
			govUndeterminedOther: (
				<Lang
					isEn={props.isEn}
					en={constants_en.govUndeterminedOther}
					kr={constants_kr.govUndeterminedOther}
				></Lang>
			),
		},
		Location: {
			jadeStreamRavine: (
				<Lang
					isEn={props.isEn}
					en={constants_en.jadeStreamRavine}
					kr={constants_kr.jadeStreamRavine}
				></Lang>
			),
			manmulcho: (
				<Lang
					isEn={props.isEn}
					en={constants_en.manmulcho}
					kr={constants_kr.manmulcho}
				></Lang>
			),
			myogilsangBuddha: (
				<Lang
					isEn={props.isEn}
					en={constants_en.myogilsangBuddha}
					kr={constants_kr.myogilsangBuddha}
				></Lang>
			),
			nineDragonFalls: (
				<Lang
					isEn={props.isEn}
					en={constants_en.nineDragonFalls}
					kr={constants_kr.nineDragonFalls}
				></Lang>
			),
			podokHermitage: (
				<Lang
					isEn={props.isEn}
					en={constants_en.podokHermitage}
					kr={constants_kr.podokHermitage}
				></Lang>
			),
			tenThousandFallsRavine: (
				<Lang
					isEn={props.isEn}
					en={constants_en.tenThousandFallsRavine}
					kr={constants_kr.tenThousandFallsRavine}
				></Lang>
			),
			threeBuddhaRock: (
				<Lang
					isEn={props.isEn}
					en={constants_en.threeBuddhaRock}
					kr={constants_kr.threeBuddhaRock}
				></Lang>
			),
			locUndeterminedOther: (
				<Lang
					isEn={props.isEn}
					en={constants_en.locUndeterminedOther}
					kr={constants_kr.locUndeterminedOther}
				></Lang>
			),
		},
		'Travel Period': {
			knownOnly: (
				<Lang
					isEn={props.isEn}
					en={constants_en.knownOnly}
					kr={constants_kr.knownOnly}
				></Lang>
			),
			sonjo: (
				<Lang
					isEn={props.isEn}
					en={constants_en.sonjo}
					kr={constants_kr.sonjo}
				></Lang>
			),
			kwanghaegun: (
				<Lang
					isEn={props.isEn}
					en={constants_en.kwanghaegun}
					kr={constants_kr.kwanghaegun}
				></Lang>
			),
			injo: (
				<Lang
					isEn={props.isEn}
					en={constants_en.injo}
					kr={constants_kr.injo}
				></Lang>
			),
			hyojong: (
				<Lang
					isEn={props.isEn}
					en={constants_en.hyojong}
					kr={constants_kr.hyojong}
				></Lang>
			),
			hyonjong: (
				<Lang
					isEn={props.isEn}
					en={constants_en.hyonjong}
					kr={constants_kr.hyonjong}
				></Lang>
			),
			sukchong: (
				<Lang
					isEn={props.isEn}
					en={constants_en.sukchong}
					kr={constants_kr.sukchong}
				></Lang>
			),
			kyongjongYongjo: (
				<Lang
					isEn={props.isEn}
					en={constants_en.kyongjongYongjo}
					kr={constants_kr.kyongjongYongjo}
				></Lang>
			),
			chongjo: (
				<Lang
					isEn={props.isEn}
					en={constants_en.chongjo}
					kr={constants_kr.chongjo}
				></Lang>
			),
			sunjo: (
				<Lang
					isEn={props.isEn}
					en={constants_en.sunjo}
					kr={constants_kr.sunjo}
				></Lang>
			),
			honjong: (
				<Lang
					isEn={props.isEn}
					en={constants_en.honjong}
					kr={constants_kr.honjong}
				></Lang>
			),
			choljong: (
				<Lang
					isEn={props.isEn}
					en={constants_en.choljong}
					kr={constants_kr.choljong}
				></Lang>
			),
			kojong: (
				<Lang
					isEn={props.isEn}
					en={constants_en.kojong}
					kr={constants_kr.kojong}
				></Lang>
			),
			colonialPeriod: (
				<Lang
					isEn={props.isEn}
					en={constants_en.colonialPeriod}
					kr={constants_kr.colonialPeriod}
				></Lang>
			),
		},
		'Social Status': {
			chungin: (
				<Lang
					isEn={props.isEn}
					en={constants_en.chungin}
					kr={constants_kr.chungin}
				></Lang>
			),
			commoner: (
				<Lang
					isEn={props.isEn}
					en={constants_en.commoner}
					kr={constants_kr.commoner}
				></Lang>
			),
			female: (
				<Lang
					isEn={props.isEn}
					en={constants_en.female}
					kr={constants_kr.female}
				></Lang>
			),
			marginalizedYangban: (
				<Lang
					isEn={props.isEn}
					en={constants_en.marginalizedYangban}
					kr={constants_kr.marginalizedYangban}
				></Lang>
			),
			monk: (
				<Lang
					isEn={props.isEn}
					en={constants_en.monk}
					kr={constants_kr.monk}
				></Lang>
			),
			slave: (
				<Lang
					isEn={props.isEn}
					en={constants_en.slave}
					kr={constants_kr.slave}
				></Lang>
			),
			yangban: (
				<Lang
					isEn={props.isEn}
					en={constants_en.yangban}
					kr={constants_kr.yangban}
				></Lang>
			),
			ssUndetermined: (
				<Lang
					isEn={props.isEn}
					en={constants_en.ssUndetermined}
					kr={constants_kr.ssUndetermined}
				></Lang>
			),
		},
		'Degree Holders': {
			civilExam: (
				<Lang
					isEn={props.isEn}
					en={constants_en.civilExam}
					kr={constants_kr.civilExam}
				></Lang>
			),
			militaryExam: (
				<Lang
					isEn={props.isEn}
					en={constants_en.militaryExam}
					kr={constants_kr.militaryExam}
				></Lang>
			),
			technicalExam: (
				<Lang
					isEn={props.isEn}
					en={constants_en.technicalExam}
					kr={constants_kr.technicalExam}
				></Lang>
			),
			dhUndetermined: (
				<Lang
					isEn={props.isEn}
					en={constants_en.dhUndetermined}
					kr={constants_kr.dhUndetermined}
				></Lang>
			),
		},
	};
	const [selectedResultAdjacent, setSelectedResultAdjacent] = useState({
		index: null,
		prev: null,
		next: null,
	});
	const [nameFilterValue, setNameFilterValue] = useState('');
	const [sortOption, setSortOption] = useState(sortOptions.relevance);
	const [isLoading, setIsLoading] = useState(false);
	const { path } = useRouteMatch();

	const getAdjacentPersonIds = index => {
		const trueIndex = (resultsPageNum - 1) * pageSize + index;
		const prevResultId =
			trueIndex - 1 > -1 ? searchResults[trueIndex - 1]['PersonId'] : null;
		const nextResultId =
			trueIndex + 1 < searchResults.length
				? searchResults[trueIndex + 1]['PersonId']
				: null;

		return [prevResultId, nextResultId];
	};

	const setAdjacentPersonIds = index => {
		const [prevResultId, nextResultId] = getAdjacentPersonIds(index);
		setSelectedResultAdjacent({
			index: index,
			prev: prevResultId,
			next: nextResultId,
		});
	};

	// START - search logic

	// add Enter keypress listener to Search component (passed to SearchToggle)
	const searchOnEnterKeypress = e => {
		if (e.keyCode === 13) {
			e.preventDefault();
			doSearch(filters, resultsPageNum);
		}
	};
	const {
		searchResults,
		setSearchResults,
		resultsPageNum,
		setResultsPageNum,
		enabledSearchFilters,
		pageSize,
	} = useContext(SearchContext);
	const [resultsPageMin, resultsPageMax] = [
		(resultsPageNum - 1) * pageSize,
		resultsPageNum * pageSize,
	];

	// when search button is clicked
	const doSearch = (filters, pageNum) => {
		setIsLoading(true);
		getSearchResults(filters, sortOption)
			.then(res => {
				setIsLoading(false);
				const [data, err] = res;
				if (err) {
					alert(
						'Error fetching results. Please try again. internal error'
					);
					setSearchResults([]);
				} else {
					setResultsPageNum(1);
					setSearchResults(data.result);
				}
			})
			.catch(e => {
				setIsLoading(false);
				alert('Error fetching results. Please try again.');
				throw e;
			});
	};
	// return type: {advancedFiltersKey[string]: optionValue[Set<string>]}
	const mapFilterArraysToSets = enabledSearchFilters => {
		const filterObject = {};
		Object.keys(advancedFilters).forEach((key, i) => {
			const filterSet = new Set();
			enabledSearchFilters[i].forEach(filterString => {
				filterSet.add(filterString);
			});
			filterObject[key] = filterSet;
		});

		return filterObject;
	};
	// END - search logic
	// various handlers/conditions
	const handleSortSelect = eventKey => {
		setSortOption(sortOptions[eventKey]);
	};
	const optionsKeys = Object.keys(advancedFilters);
	const showResults = searchResults && searchResults.length > 0;
	// console.log('searchResults', searchResults, showResults);
	const filters = {
		nameFilter: nameFilterValue,
		advancedFilters: mapFilterArraysToSets(enabledSearchFilters),
	};
	const resultsToShow =
		showResults &&
		searchResults.slice(resultsPageMin, resultsPageMax).length > 0 ? (
			searchResults
				.slice(resultsPageMin, resultsPageMax)
				.map((row, index) => (
					<ListGroup.Item
						style={index % 2 === 1 ? { backgroundColor: '#a39c95' } : {}}
						key={index}
					>
						<Link
							style={{ color: 'inherit', textDecoration: 'inherit' }}
							onClick={() => setAdjacentPersonIds(index)}
							to={
								routes.search +
								routes.searchResult +
								'/' +
								encodeURI(row['PersonId'])
							}
						>
							<ResultRow row={row} />
						</Link>
					</ListGroup.Item>
				))
		) : (
			<ListGroup.Item className="no-hover">
				<div className="centered-row">
					<p>
						<i>No results.</i>
					</p>
				</div>
			</ListGroup.Item>
		);
	return (
		<Switch>
			<Route exact path={routes.search}>
				<LargePage>
					<div>
						<div id="search-panel">
							<div id="search-container">
								<Col>
									<Row style={{ marginBottom: '1rem' }}>
										<h3
											style={{
												color: 'white',
												padding: 0,
												width: 'unset',
												marginBottom: '0px',
											}}
										>
											<Lang
												isEn={props.isEn}
												en={constants_en.search_the_database}
												kr={constants_kr.search_the_database}
											></Lang>
										</h3>
										<Link
											id="help-link"
											to={path + routes.searchGuide}
											target="_blank"
											rel="noopener noreferrer"
										>
											<nav>
												<b>Help</b>
											</nav>
										</Link>
									</Row>
									<Row>
										<Accordion
											id="advanced-accordion"
											defaultActiveKey={
												searchResults.length === 0 ? '0' : null
											}
										>
											<InputGroup>
												<FormControl
													id="filter-input"
													placeholder="Enter a name..."
													aria-label="Filter"
													aria-describedby="filter-dropdown"
													value={nameFilterValue}
													onChange={e =>
														setNameFilterValue(e.target.value)
													}
												/>
												<SearchToggle
													searchOnEnterKeypress={
														searchOnEnterKeypress
													}
													eventKey="0"
												>
													<button
														type="button"
														className="btn orange"
														onClick={() =>
															doSearch(filters, resultsPageNum)
														}
													>
														Search
													</button>
												</SearchToggle>
											</InputGroup>
											<Dropdown
												className="mt-2"
												onSelect={handleSortSelect}
											>
												<span class="badge">
													<Lang
														isEn={props.isEn}
														en={'Sort: ' + sortOption}
														kr={'특정 순서로 정렬'}
													/>
												</span>
												<Dropdown.Toggle
													as={SortDropdown}
													text={sortOption}
													id="dropdown-custom-components"
												/>
												<Dropdown.Menu className="super-colors">
													{Object.keys(sortOptions).map(
														(key, i) => (
															<Dropdown.Item
																as="button"
																key={i}
																eventKey={key}
															>
																{sortOptions[key]}
															</Dropdown.Item>
														)
													)}
												</Dropdown.Menu>
											</Dropdown>
											<span class="badge">
												<Lang
													isEn={props.isEn}
													en={'Advanced Search'}
													kr={'검색 필터'}
												/>
											</span>

											<AdvancedToggle eventKey="0" />

											<Accordion.Collapse eventKey="0">
												<Row id="accordion-body">
													<Col id="adv-col1" xs={12} lg={4}>
														<AdvancedSelectController
															key={3}
															title=<Lang
																isEn={props.isEn}
																en={'Location'}
																kr={'장소'}
															/>
															item={
																advancedFilters[optionsKeys[3]]
															}
															options={advancedFilters}
															index={3}
														/>
														<AdvancedSelectController
															key={5}
															title=<Lang
																isEn={props.isEn}
																en={'Social Status'}
																kr={'신분'}
															/>
															item={
																advancedFilters[optionsKeys[5]]
															}
															options={advancedFilters}
															index={5}
														/>
													</Col>
													<Col id="adv-col2" xs={12} lg={4}>
														<AdvancedSelectController
															key={4}
															title=<Lang
																isEn={props.isEn}
																en={'Travel Period'}
																kr={'유람시기'}
															/>
															item={
																advancedFilters[optionsKeys[4]]
															}
															options={advancedFilters}
															index={4}
														/>
														<AdvancedSelectController
															key={6}
															title=<Lang
																isEn={props.isEn}
																en={'Degree Holders'}
																kr={'과거 급제'}
															/>
															item={
																advancedFilters[optionsKeys[6]]
															}
															options={advancedFilters}
															index={6}
														/>
													</Col>
													<Col id="adv-col3" xs={12} lg={4}>
														<AdvancedSelectController
															key={2}
															title=<Lang
																isEn={props.isEn}
																en={'Government Post'}
																kr={'관직'}
															/>
															item={
																advancedFilters[optionsKeys[2]]
															}
															options={advancedFilters}
															index={2}
														/>
														<AdvancedSelectController
															key={1}
															title=<Lang
																isEn={props.isEn}
																en={'Inscription Type'}
																kr={'제명 유형'}
															/>
															item={
																advancedFilters[optionsKeys[1]]
															}
															options={advancedFilters}
															index={1}
														/>
														<AdvancedSelectController
															key={0}
															title=<Lang
																isEn={props.isEn}
																en={'Calligraphy'}
																kr={'서체'}
															/>
															item={
																advancedFilters[optionsKeys[0]]
															}
															options={advancedFilters}
															index={0}
														/>
													</Col>
												</Row>
											</Accordion.Collapse>
										</Accordion>
									</Row>
								</Col>
							</div>
						</div>
						<div className="results-container">
							{showResults ? (
								<Col className="results-header">
									<Row>
										<p>
											[{searchResults.length}] results.
											<br />
											Showing [{resultsPageMin + 1}] - [
											{searchResults.length < resultsPageMax
												? searchResults.length
												: resultsPageMax}
											].
										</p>
									</Row>
									<Row>
										<Col xs={12} sm={2}>
											<h6>Name</h6>
										</Col>
										<Col xs={12} sm={2}>
											<h6>Reign</h6>
										</Col>
										<Col xs={12} sm={2}>
											<h6>Inscription Type</h6>
										</Col>
										<Col xs={12} sm={2}>
											<h6>Status</h6>
										</Col>
										<Col xs={12} sm={4}>
											<h6>Location</h6>
										</Col>
									</Row>
								</Col>
							) : null}
							<Col>
								<Row>
									<ListGroup>
										{isLoading ? (
											<ListGroup.Item className="no-hover">
												<div className="centered-row">
													<p>
														<i>Loading...</i>
													</p>
												</div>
											</ListGroup.Item>
										) : (
											resultsToShow
										)}
									</ListGroup>
								</Row>
							</Col>
						</div>
						{showResults ? (
							<Row className="page-settings">
								<nav className="centered-row">
									<div
										className="left-btns"
										aria-label="Results page selection"
									>
										{resultsPageNum > 1 ? (
											<>
												<button
													title="-50"
													className="orange btn"
													onClick={() => {
														setResultsPageNum(
															resultsPageNum - 50
														);
													}}
												>
													&lt;&lt;&lt;
												</button>
												<button
													title="-10"
													className="orange btn"
													onClick={() => {
														setResultsPageNum(
															resultsPageNum - 10
														);
													}}
												>
													&lt;&lt;
												</button>
												<button
													title="-1"
													className="orange btn"
													onClick={() => {
														setResultsPageNum(resultsPageNum - 1);
													}}
												>
													&lt;
												</button>
											</>
										) : (
											<>
												<button className="orange btn" disabled>
													&lt;&lt;&lt;
												</button>
												<button className="orange btn" disabled>
													&lt;&lt;
												</button>
												<button className="orange btn" disabled>
													&lt;
												</button>
											</>
										)}
									</div>
									{resultsPageNum}/
									{Math.ceil(searchResults.length / pageSize)}
									<div className="right-btns">
										{resultsPageNum !==
										Math.ceil(searchResults.length / pageSize) ? (
											<>
												<Button
													title="+1"
													className="orange btn"
													onClick={() => {
														setResultsPageNum(resultsPageNum + 1);
													}}
												>
													&gt;
												</Button>
												<Button
													title="+10"
													className="orange btn"
													onClick={() => {
														setResultsPageNum(
															resultsPageNum + 10
														);
													}}
												>
													&gt;&gt;
												</Button>
												<Button
													title="+50"
													className="orange btn"
													onClick={() => {
														setResultsPageNum(
															resultsPageNum + 50
														);
													}}
												>
													&gt;&gt;&gt;
												</Button>
											</>
										) : (
											<>
												<Button className="orange btn" disabled>
													&gt;
												</Button>
												<Button className="orange btn" disabled>
													&gt;&gt;
												</Button>
												<Button className="orange btn" disabled>
													&gt;&gt;&gt;
												</Button>
											</>
										)}
									</div>
								</nav>
							</Row>
						) : null}
					</div>
				</LargePage>
			</Route>
			<Route
				path={routes.search + routes.searchGuide}
				render={() => (
					<Lang
						isEn={props.isEn}
						en={<SearchGuide />}
						kr={<SearchGuide_kr />}
					/>
				)}
			/>
			<Route
				path={routes.search + routes.searchResult + '/:id'}
				render={() => (
					<InfoPage
						setAdjacentPersonIds={setAdjacentPersonIds}
						adjacentResults={selectedResultAdjacent}
					/>
				)}
			/>
		</Switch>
	);
};

function ResultRow(props) {
	const clusterType = row => {
		// console.log(row);
		if (row['IsAgnaticAssociative']) {
			return 'Agnatic-associative Cluster';
		}
		if (row['IsAgnatic']) {
			return 'Agnatic Cluster';
		}
		if (row['IsAssociative']) {
			return 'Associative Cluster';
		}
		return 'Single Name';
	};
	const check = field => (field === null ? 'N/A' : field);

	return (
		<Row>
			<Col xs={12} sm={2}>
				<p>
					<span style={{ fontSize: '1rem' }}>
						{props.row['NameEnglish']}
					</span>
					<br />
					{props.row['NameKorean']}
					<br />
					{props.row['NameHancha']}
				</p>
			</Col>
			<Col xs={12} sm={2}>
				<p>
					{check(props.row['ReignEnglish'])}
					<br />
					{check(props.row['ReignKorean'])}
					<br />
					{check(props.row['ReignHancha'])}
					<br />
				</p>
			</Col>
			<Col xs={12} sm={2}>
				<p>{clusterType(props.row)}</p>
			</Col>
			<Col xs={12} sm={2}>
				<p>{props.row['IsYangban'] ? 'Yangban' : null}</p>
			</Col>
			<Col xs={12} sm={4}>
				<p>
					{check(props.row['SubLocationEngl']) + ', '}
					<br />
					{check(props.row['LocationEngl'])}
					<div style={{ fontSize: '.7rem' }}>
						<br />
						{check(props.row['SublocationEnglTranslit']) +
							', ' +
							check(props.row['LocationEnglTranslit'])}
						<br />
						{check(props.row['SublocationKorean']) +
							', ' +
							check(props.row['LocationKorean'])}
						<br />
						{check(props.row['SublocationHancha']) +
							', ' +
							check(props.row['LocationHancha'])}
					</div>
				</p>
			</Col>
		</Row>
	);
}

const AdvancedToggle = ({ children, eventKey, callback }, props) => {
	const currentEventKey = useContext(AccordionContext);
	const toggleAccordian = useAccordionToggle(
		eventKey,
		() => callback && callback(eventKey)
	);
	const isCurrentEventKey = currentEventKey === eventKey;

	return (
		<Badge onClick={toggleAccordian}>{isCurrentEventKey ? '▲' : '▼'}</Badge>
	);
};

const SearchToggle = ({
	children,
	eventKey,
	callback,
	searchOnEnterKeypress,
}) => {
	const currentEventKey = useContext(AccordionContext);
	const toggleAccordian = useAccordionToggle(
		eventKey,
		() => callback && callback(eventKey)
	);
	const isCurrentEventKey = currentEventKey === eventKey;

	useEffect(() => {
		document.addEventListener('keypress', searchOnEnterKeypress);
		return () => {
			document.removeEventListener('keypress', searchOnEnterKeypress);
		};
	});

	return isCurrentEventKey ? (
		<div onClick={toggleAccordian}>{children}</div>
	) : (
		<div>{children}</div>
	);
};

const AdvancedSelectController = props => {
	const { enabledSearchFilters, setEnabledSearchFilters } =
		React.useContext(SearchContext);
	const selected = enabledSearchFilters[props.index];
	const setSelected = row => {
		setEnabledSearchFilters(row, props.index);
	};
	let [selectNotDeselect, setSelectNotDeselect] = useState(true);
	const handleSelect = key =>
		isSelected(key)
			? setSelected(selected.filter(item => item !== key))
			: setSelected(selected.concat([key]));
	const isSelected = key => selected.includes(key);
	const handleAllButton = () => {
		if (selectNotDeselect) {
			const newSelected = Object.keys(props.item);
			setSelected(newSelected);
			setSelectNotDeselect(!selectNotDeselect);
		} else {
			setSelected([]);
			setSelectNotDeselect(!selectNotDeselect);
		}
	};
	return (
		<>
			<h4 className="advanced-option-title">{props.title}</h4>
			<button
				className="advanced-option-select-all"
				onClick={handleAllButton}
			>
				{selectNotDeselect ? '[Select All]' : '[Deselect All]'}
			</button>
			{Object.keys(props.item).map((key, i) => (
				<AdvancedSelect
					key={i}
					title={key}
					value={props.item[key]}
					handleSelect={handleSelect}
					isSelected={isSelected(key)}
				/>
			))}
		</>
	);
};

const AdvancedSelect = props => {
	return (
		<div onClick={() => props.handleSelect(props.title)} className="d-flex">
			<input
				style={{ marginRight: '6px' }}
				type="checkbox"
				id={props.value}
				value={props.isSelected}
				checked={props.isSelected}
			/>
			<label style={{ marginBottom: '4px' }}>{props.value}</label>
		</div>
	);
};

const SortDropdown = forwardRef((props, { children, onClick, text }, ref) => (
	<Badge
		ref={ref}
		onClick={e => {
			e.preventDefault();
			onClick(e);
		}}
	>
		{' ▼'}
	</Badge>
));

export { Search };
