import React, { useState } from 'react';
import ItemComponent from './ItemComponent';
import items from './data/data.json';
import './App.scss';
import FilterComponent from './FilterComponent';
function App() {
	const [ filter, setFilter ] = useState([]);
	function addToFilter(tagName) {
		if (filter.indexOf(tagName.toLowerCase()) === -1) {
			setFilter([ ...filter, tagName.toLowerCase() ]);
		}
	}
	function removeItem(tagName) {
		filter.splice(filter.indexOf(tagName), 1);
		setFilter([ ...filter ]);
	}
	function onClear() {
		setFilter([]);
	}
	return (
		<div>
			<div className="background" />
			<div className="App">
				<FilterComponent filter={filter} removeItem={removeItem} onClear={onClear} />
				{filter.length === 0 ? (
					items.map((item, index) => (
						<ItemComponent key={'item' + index} item={item} addToFilter={addToFilter} />
					))
				) : (
					items
						.filter((item) => {
							return (
								filter.indexOf(item.role.toLowerCase()) >= 0 ||
								filter.indexOf(item.level.toLowerCase()) >= 0
								// ||
								// item.languages.map((language) => filter.indexOf(language.toLocaleLowerCase()) >= 0)
							);
						})
						.map((item, index) => (
							<ItemComponent key={'item' + index} item={item} addToFilter={addToFilter} />
						))
				)}
			</div>
		</div>
	);
}

export default App;
