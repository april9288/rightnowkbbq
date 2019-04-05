import React from 'react'
import bbq from '../photos/bbq.png'
import './Header.css';

const Header = () => {
	return (
		<section className="header-section">
		      <img className="rotate-center" alt="bbq" src={bbq} />
			  <h1>RRRight Now Korean BBQ</h1>
			  <img className="rotate-center" alt="bbq" src={bbq} />
		</section>
		)
}

export default Header;


