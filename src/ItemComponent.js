import React from 'react';
function ItemComponent(props) {
	const item = props.item;
	return (
		<div className={item.featured ? 'item border' : 'item'}>
			<div className="item-img">
				<img src={item.logo} alt={item.position} />
			</div>
			<div className="item-info">
				<div className="tags">
					<span className="company-tag">{item.company}</span>
					{item.new ? <span className="new-tag">New!</span> : <span />}
					{item.featured ? <span className="featured-tag">Featured</span> : <span />}
				</div>
				<div className="item-position">
					<h3>{item.position}</h3>
				</div>
				<div className="info">
					<span className="date">{item.postedAt}</span>
					<span className="contract">{item.contract}</span>
					<span className="location">{item.location}</span>
				</div>
			</div>
			<div className="item-tags">
				<button className="tag" onClick={(e) => props.addToFilter(e.target.childNodes[0].data)}>
					{item.role}
				</button>

				<button className="tag" onClick={(e) => props.addToFilter(e.target.childNodes[0].data)}>
					{item.level}
				</button>

				{item.languages.map((language, index) => (
					<button
						key={'tag' + index}
						className="tag"
						onClick={(e) => props.addToFilter(e.target.childNodes[0].data)}
					>
						{language}
					</button>
				))}
			</div>
		</div>
	);
}

export default ItemComponent;
