import React from 'react';

const closeBtnCss = {
	cursor: "pointer"
}
const EventListitem = (props) => {
	const { eventList, deleteEvent } = props;
	return (
		<div className="card">
			<div className="card-header m-1 row justify-content-between">
				<h5 className="card-title">{ eventList.eventName } </h5>
				<span 
					className="text-dark"
					style={ closeBtnCss }
					onClick={() => deleteEvent(eventList.eventName)}
				>
					&#x2715;
				</span>
			</div>
			<div className="card-body bg bg-dark">
				<div className="card-text text-white">
					<p>Date and time: { eventList.eventSchedule } </p>
					<p>Venue: { eventList.eventVenue } </p>
					<p>Description: { eventList.eventDescription } </p>
				</div>
			</div>
		</div>
	)
}

export default EventListitem;
