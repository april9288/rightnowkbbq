import React from 'react'
import Card from './Card'
import './CardHolder.css'

const CardHolder = ({data, position}) => {

	const newData = data.sort((a, b) => a.distance - b.distance)

	return (
		<section>

			{
				(newData.length === 0)
				? <div className="count-status-0">Sorry. No restaurant Available... Try later!</div>
				: <div className="count-status">{`We've found ${newData.length} resturants open right now`}</div>
			}

			<div className = "card-holder">
			      {
					newData.map((item, i)=>{
						return(
						<Card 
					      key={i}
					      data={item}
					      position={position}
					    />
						)
					})
			      }
			</div>
		</section>
		)
}

export default CardHolder;