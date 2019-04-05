import React from 'react'

const codeParsing = (code) => {
	if (code === "loading") {
		return (
			<section className="status-loading status-section">
				<h2>Loading!</h2>
				<h3>Please accept location request!</h3>
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
				<h3>Sorry. Come back again later!</h3>
			</section>)
	}
}

const Status = ({code}) => {
	return codeParsing(code)
}

export default Status;