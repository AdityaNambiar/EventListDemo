import React from 'react';
import EventListItem from './EventListItem';
const EventListGroup = (props) => {
    const { eventList, deleteEvent } = props;
	return (
		<div className="row mt-3 ml-0">
			{ 
		        // Ternary operator syntax: 
		        // condition? true-block: false-block
		        eventList.length === 0 ? ( // True-block: Means no events in eventList.
		          <div className="card"> { /* Wrapper div */}
			          <div className="card-header bg bg-danger text-white">
			            No event found.
			          </div>
			          <div className="card-body bg bg-dark text-white">
			            <span>Please click "Create Event" button above to add an event</span>
			          </div>
		          </div>
		        ):( // False-block: Means there is atleast one event in eventList.
		        	eventList.map((event, index) => (
			        		<div className="col-md-4 mt-5">
				        		<EventListItem 
				        			key = { index }
				        			eventList = { event }
				        			deleteEvent = { deleteEvent } 
				        		/>
			        		</div>
		        		)
		        	)
		        )
		    }
		</div>
	)
}

export default EventListGroup;