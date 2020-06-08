import React from 'react';

const h5Style = {
	height: "50px", 
	fontSize: "25px"
}
const Header = (props) => {
	const { noOfEvents } = props ;
	return (
		<h5
			className="bg bg-warning"
			style={ h5Style }
		>	
			<span className="m-2 p-3">Event List</span>
			{/* a Counter functionality will be added */}
			<span className="badge badge-pill badge-secondary m-2 float-right">
				Total Events: &nbsp;
				<span className="badge badge-pill badge-light">
					{ noOfEvents }
				</span>
			</span>
		</h5>
	);
}

export default Header; // Default Export
//export { Header }; // Named Export 
