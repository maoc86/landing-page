import React from "react";
import NavBar from "./nav.jsx";
import Jumbo from "./jumbotron.jsx"

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
		<NavBar />
		
		<div>
					<Jumbo />
				</div>
		

		</div>
	);
};

export default Home;
