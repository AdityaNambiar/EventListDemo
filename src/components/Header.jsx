import React, { Component } from 'react';

const Header = (props) => {
	return (
		<h5
			className="bg bg-warning"
			style={{
				height: "50px", 
				fontSize: "25px"
			}}
		>	
			<span className="m-2 p-3">Event List</span>
			{/* a Counter functionality will be added */}
		</h5>
	);
}

export default Header; // Default Export
//export { Header }; // Named Export 
