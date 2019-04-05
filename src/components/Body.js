import React from 'react'
import Card from './Card'

const dataStatus = (count) => {
	if (count === 0) {
		return (<div className="count-status-0">Sorry. No restaurant Available... Try later!</div>)
	} else {
		return (<div className="count-status">{`We've found ${count} resturants openning right now`}</div>)
	}
}


const Body = ({data, position}) => {
	const newData = data.sort((a, b) => 0.5 - Math.random())	
	return (
		<section>
		{dataStatus(newData.length)}
		<div className = "card-holder">
		      {
				newData.map((item, i)=>{
					return(
					<Card 
				      key={i}
				      link={item.url}
				      image_url={item.image_url}
				      name={item.name}
				      review_count={item.review_count}
				      location={item.location.display_address}
				      phone={item.phone}
				      rating={item.rating}
				      position={position}
				    />
					)
				})
		      }
		</div>
		</section>
		)
}

export default Body;