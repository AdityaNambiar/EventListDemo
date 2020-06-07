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
			</div>
		);
	}
}

export default MainPage;