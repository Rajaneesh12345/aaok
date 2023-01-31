// filters of type: {advancedOptionsKey[string]: optionValue[Set<string>]}
const getSearchResults = async (filters, sortOption) => {
	console.log('getSearchResults', filters);
	let filtersAsArrays = {};
	Object.keys(filters.advancedFilters).forEach(key => {
		if (filters.advancedFilters[key].length > 0) {
			return;
		}
		filtersAsArrays[key] = [];
		filters.advancedFilters[key].forEach(filter => {
			filtersAsArrays[key].push(filter);
		});
	});

	let preparedFilters = {
		advancedFilters: filtersAsArrays,
		nameFilter: filters.nameFilter,
	};

	let err = false;
	console.log(filters, sortOption);
	const response = await fetch('http://localhost:5000/api/searchfiltered', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ filters: preparedFilters, sort: sortOption }),
	});
	console.log(response);
	if (!response.ok) {
		err = true;
		console.log('error', err);
	}
	const data = await response.json();
	console.log('data', data);
	return [data, err];
};

const getIndividualInfo = async id => {
	let err = false;
	const response = await fetch('http://localhost:5000/api/individual', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ id: id }),
	});
	if (!response.ok) {
		err = true;
	}
	let { data } = await response.json();

	return [data, err];
};

const getIndividualImg = async id => {
	let err = false;
	const response = await fetch(`http://localhost:5000/api/img/${id}`, {
		headers: {
			'Cache-Control': 'public, max-age=604800, immutable',
		},
	});
	if (!response.ok) {
		err = true;
	}
	const data = await response.json();
	const imgObjURL = data['result'];
	return [imgObjURL, err];
};

const getOthersInCluster = async cid => {
	let err = false;
	const response = await fetch(`http://localhost:5000/api/in-cluster/${cid}`);
	if (!response.ok) {
		err = true;
	}
	const data = (await response.json())[0];
	console.log('otherInCluster', data);
	return [data, err];
};

const getRelated = async pid => {
	let err = false;
	const response = await fetch(`http://localhost:5000/api/related/${pid}`);
	if (!response.ok) {
		err = true;
	}
	const data = (await response.json())[0];
	console.log('related', data);
	return [data, err];
};

const getNumberOfLayers = async cid => {
	let err = false;
	const response = await fetch(
		`http://localhost:5000/api/number-of-layers/${cid}`
	);
	if (!response.ok) {
		err = true;
	}
	const data = (await response.json())[0];
	console.log('otherInCluster', data);
	return [data, err];
};

export {
	getIndividualImg,
	getIndividualInfo,
	getNumberOfLayers,
	getOthersInCluster,
	getRelated,
	getSearchResults,
};
