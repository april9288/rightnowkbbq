import React from 'react'
import './Status.css'

const codeParsing = (code) => {
	if (code === "loading") {
		return (
			<section className="status-loading status-section">
				<h2>Loading!</h2>
				<h3>Please accept location request!</h3>
				<h5>Sometimes it might take up to 30 sec. I know but it's a free server. Sorry.</h5>
			</section>)
	} else if (code === "bad") {
		return (
			<section className="status-bad status-section">
				<h2>Bad Request</h2>
				<h3>Please try again!</h3>
			</section>)
	} else if (code === "denied") {
		return (
			<section className="status-denied status-section">
				<h2>Permission Denied</h2>
				<h3>Please turn on your location service</h3>
			</section>)
	}
}

const Status = ({code}) => {
	return codeParsing(code)
}

export default Status;