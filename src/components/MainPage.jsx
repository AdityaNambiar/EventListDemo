import React from 'react';
import Header from './Header'; 
import EventListGroup from './EventListGroup';

class MainPage extends React.Component {
	constructor(props){
		super(props); // recommended.

		this.state = {
			eventName: '',
			eventSchedule: '',
			eventDescription: '', 
			eventVenue: '',
			eventList: []	
		}

		// "this" keyword problem sol.: Function binding [ method(1) ]:
		this.onChange = this.onChange.bind(this);
	}
	onChange(e) { // e = form event
		//const name = e.target.name;
		//const value = e.target.value;
		// Object destructing syntax:
		const { name, value } = e.target; 
		this.setState((prevState) => ({
				[name]:value // '[name]' is using Computed property name syntax  
			})
		)	
	}
	// "this" keyword problem sol.: Arrow functions [ method(2) ]:
	handleSubmit = (e) => {
		e.preventDefault(); // to prevent reloading which is a default behavior of the button.
		const { eventName, eventVenue, eventSchedule, eventDescription } = this.state;
		const eventObj = {
			eventName: eventName,
			eventVenue: eventVenue,
			eventSchedule: eventSchedule,
			eventDescription: eventDescription
		}
		this.setState((prevState) => ({ 
				eventList: [...prevState.eventList, eventObj]
			})
		)
	}
	render() {
		const { eventList } = this.state;
		return(
			<div className="container"> 
				<Header />
				{/*
					Button-triggered Modal for creating events
				*/}

				<button 
					type="button" 
					class="btn btn-primary mt-3" 
					data-toggle="modal" 
					data-target="#exampleModal"
				>
				 Create event
				</button>

				{/* Modal */}
				<div class="modal fade" id="exampleModal" tabindex="-1" 
					 role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
				  <div class="modal-dialog">
				    <div class="modal-content">
				      <div class="modal-header">
				        <h5 class="modal-title" id="exampleModalLabel">Event Details</h5>
				        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
				          <span aria-hidden="true">&times;</span>
				        </button>
				      </div>
				      <div class="modal-body">
						{/* Event details form */}
				        <form 
				        	method="post" 
				        	onSubmit={this.handleSubmit}
				        >
				        	{/* Event name inputbox */}
				        	<div className="form-group row">
				        		<label 
				        			for="eventName" 
				        			className="col-sm-3 col-form-label"
				        		> 
				        			Name: 
				        		</label>
				        		<div className="col-sm-9">
			                        <input
			                          type="text"
			                          className="form-control"
			                          id="eventName"
			                          name="eventName"
			                          placeholder="Enter event name"
			                          onChange={this.onChange}
			                        />
			                     </div>
				        	</div>
							{/* Event Date & Time inputbox */}
				        	<div className="form-group row">
				        		<label 
				        			for="eventSchedule" 
				        			className="col-sm-3 col-form-label"
				        		> 
				        			Date & Time: 
				        		</label>
				        		<div className="col-sm-6">
			                        <input
			                          type="datetime-local"
			                          className="form-control"
			                          id="eventSchedule"
			                          name="eventSchedule"
			                          onChange={this.onChange}
			                        />
			                    </div>
				        	</div>
				        	{/* Event venue inputbox */}
				        	<div className="form-group row">
		                      <label
		                        for="eventVenue"
		                        className="col-sm-3 col-form-label"
		                      >
		                        Venue:
		                      </label>
		                      <div className="col-sm-9">
		                        <input
		                          type="text"
		                          className="form-control"
		                          id="eventVenue"
		                          name="eventVenue"
		                          placeholder="Enter event venue"
			                      onChange={this.onChange}
		                        />
		                      </div>
		                    </div>
		                	{/* Event Description inputbox */}
		                	<div className="form-group row">
		                      <label
		                        for="eventDescription"
		                        className="col-sm-3 col-form-label"
		                      >
		                        Description:
		                      </label>
		                      <div className="col-sm-9">
		                        <textarea
		                          className="form-control"
		                          id="eventDescription"
		                          name="eventDescription"
		                          rows="3"
		                          placeholder="Enter event description"
			                      onChange={this.onChange}
		                        ></textarea>
		                      </div>
		                    </div>
		                	{/* Submit button */}
		                	<button
		                      type="submit"
		                      className="btn btn-success float-right"
		                    >
		                      Add Event
		                    </button>
				        </form>
				      </div>
				    </div>
				  </div>
				</div>

				{/* 
					EventListGroup component
				*/}
				<EventListGroup eventList={ eventList }/>
			</div>
		);
	}
}

export default MainPage;