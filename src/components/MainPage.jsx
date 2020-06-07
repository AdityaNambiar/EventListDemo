import React from 'react';
import Header from './Header'; 
class MainPage extends React.Component {
	constructor(props){
		super(props); // recommended.

	}
	render() {
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
				        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
				        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
				          <span aria-hidden="true">&times;</span>
				        </button>
				      </div>
				      <div class="modal-body">
				        
				      </div>
				      <div class="modal-footer">
				        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
				        <button type="button" class="btn btn-primary">Save changes</button>
				      </div>
				    </div>
				  </div>
				</div>
			</div>
		);
	}
}

export default MainPage;