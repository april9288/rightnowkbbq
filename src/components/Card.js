import React from 'react'
import './Card.css';

//To return rating stars based on restaurant's rating number
const cardRating = (rating) => {
	let emptyArr = []
	for (let i = 0 ; i < rating; i++) {
		emptyArr.push(1)
	}
	return emptyArr.map(i => <i class="fas fa-star"></i>)
}

const Card = ({data, position}) => {

	const { url, image_url, name, review_count, location, phone, rating, distance } = data

	return (
		<section className="card-section" >
		<a href={url} rel="noopener noreferrer" target="_blank">
			  	<div>
			  		<h3>{name}</h3>
			  	</div>

			    <div className="card-image" >
			    	<img alt="bbq" src={image_url} />
			    </div>
		</a>
			    <div className="card-content">
			    	<button className="phone-button">
				    	<a href={`tel:${phone}`} rel="noopener noreferrer"><i className="fas fa-phone"></i>Click to Call</a>
				    </button>
				    <button className="direction-button">
				    	<a href={`https://www.google.com/maps/dir/${position[0]},${position[1]}/${location}`} rel="noopener noreferrer" target="_blank"><i class="fas fa-map-marker-alt"></i>Get Direction</a>
				    </button>
				</div>
				<div><i class="fas fa-location-arrow"></i>{`${Math.round(distance * 0.000621371)} miles away`}</div>
				<div><i class="fas fa-user"></i>{`${review_count} people reviewed`}</div>
				<div className="card-rating">
					{
						cardRating(rating)
					}
				</div>

		</section>
		)
}

export default Card;