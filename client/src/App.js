import './App.v1.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { NavigationBar } from './components/NavigationBar/NavigationBar';
import { Kumgangsan } from './components/Kumgangsan/Kumgangsan';
import { Home } from './components/Home/Home';
import { AtlasInfoTimeline } from './components/AtlasInfoTimeline/AtlasInfoTimeline';
import { PubsPres } from './components/PubsPres/PubsPres';
import { FeaturedGraffiti } from './components/FeaturedGraffiti/FeaturedGraffiti';
import { NotFound } from './components/NotFound/NotFound';
import { Search } from './components/Search/Search';
import { SearchContext } from './contexts/SearchContext';
import { routes } from './routes';

import React, { useEffect, useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Acknowledgements } from './components/Acknowledgements/Acknowledgements';
import clone from 'just-clone';

const App = () => {
	const pageSize = 5;
	const storedSearchResults = JSON.parse(
		window.localStorage.getItem('searchResults')
	);
	const storedPageNum = JSON.parse(window.localStorage.getItem('pageNum'));
	console.log('storedpagenum', storedPageNum);
	const storedEnabledSearchFilters = JSON.parse(
		window.localStorage.getItem('enabledSearchFilters')
	);
	const defaultSearchResults =
		storedSearchResults && storedSearchResults.length > 0
			? storedSearchResults
			: [];
	const defaultPageNum = storedPageNum !== null ? storedPageNum : 1;
	// one for each AdvancedSearchController in (Search.js)>(Search component).
	const defaultEnabledSearchFilters =
		storedEnabledSearchFilters && storedEnabledSearchFilters.flat().length > 0
			? storedEnabledSearchFilters
			: [[], [], [], [], [], [], []];

	const [searchResults, _nocall_setSearchResults] =
		useState(defaultSearchResults);
	const [resultsPageNum, _nocall_setResultsPageNum] = useState(defaultPageNum);
	const [enabledSearchFilters, _nocall_setEnabledSearchFilters] = useState(
		defaultEnabledSearchFilters
	);
	const setEnabledSearchFilters = (row, index) => {
		const filtersCopy = clone(enabledSearchFilters);
		filtersCopy[index] = row;
		window.localStorage.setItem(
			'enabledSearchFilters',
			JSON.stringify(filtersCopy)
		);
		_nocall_setEnabledSearchFilters(filtersCopy);
	};
	const setSearchResults = searchResults => {
		window.localStorage.setItem(
			'searchResults',
			JSON.stringify(searchResults)
		);
		_nocall_setSearchResults(searchResults);
	};
	const setResultsPageNum = pageNum => {
		const maxPageCount = Math.ceil(searchResults.length / pageSize);
		pageNum = maxPageCount < pageNum ? maxPageCount : pageNum;
		pageNum = pageNum < 1 ? 1 : pageNum;
		window.localStorage.setItem('pageNum', JSON.stringify(pageNum));
		_nocall_setResultsPageNum(pageNum);
	};
	const defaultSearchContext = {
		searchResults,
		setSearchResults,
		enabledSearchFilters,
		setEnabledSearchFilters,
		resultsPageNum,
		setResultsPageNum,
		pageSize,
	};
	const [isEn, setEn] = useState(true);
	const handleLangSelect = val => {
		localStorage.setItem('isEn', JSON.stringify(val));
		setEn(val);
	};

	useEffect(() => {
		let current = localStorage.getItem('isEn');
		setEn(current === null ? true : JSON.parse(current));
	}, []);

	// console.log(searchResults);
	return (
		<div className="App">
			<BrowserRouter>
				<NavigationBar isEn={isEn} handleLangSelect={handleLangSelect} />
				<Switch>
					<Route
						exact
						path={routes.home}
						render={() => <Home isEn={isEn} />}
					/>
					<Route
						path={routes.publications}
						render={() => <PubsPres isEn={isEn} />}
					/>
					<Route
						path={routes.kumgangsan}
						render={() => <Kumgangsan isEn={isEn} />}
					/>
					<Route
						path={routes.atlas}
						render={() => <AtlasInfoTimeline isEn={isEn} />}
					/>
					<Route
						path={routes.acknowledgements}
						render={() => <Acknowledgements isEn={isEn} />}
					/>
					<Route
						path={routes.graffiti}
						render={() => <FeaturedGraffiti isEn={isEn} />}
					/>
					<Route
						path={routes.search}
						render={() => (
							<SearchContext.Provider value={defaultSearchContext}>
								<Search isEn={isEn} />
							</SearchContext.Provider>
						)}
					/>
					<Route render={() => <NotFound isEn={isEn} />} />
				</Switch>
			</BrowserRouter>
		</div>
	);
};

export default App;
