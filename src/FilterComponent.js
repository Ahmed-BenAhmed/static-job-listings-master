import React, { useState } from 'react';
export default function FilterComponent(props) {
	const filters = props.filter;
	return (
		<div className={filters.length === 0 ? 'filter none' : 'filter'}>
			{filters.map((filter, i) => (
				<div key={i} className="tag">
					<button className="tag-name">{filter}</button>
					<button
						className="remove-btn"
						onClick={(e) =>
							props.removeItem(
								e.target.tagName === 'IMG'
									? e.target.parentNode.parentNode.firstChild.childNodes[0].data
									: e.target.parentNode.firstChild.childNodes[0].data
							)}
					>
						<img src="./images/icon-remove.svg" alt="remove-btn" />
					</button>
				</div>
			))}
			<button className="clear" onClick={() => props.onClear()}>
				Clear
			</button>
		</div>
	);
}
