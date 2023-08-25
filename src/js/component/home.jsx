import React from "react";
import NavBar from "./nav.jsx";
import Jumbo from "./jumbotron.jsx";
import Card from "./card.jsx";
import Footer from "./footer.jsx"

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
				<div className="row row-cols-1 row-cols-md-4 g-4">
					<div className="col">
						<Card image="https://images.unsplash.com/photo-1509470475192-4516c145f8a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80" title="Street Photography" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." label="Find out more!" />
					</div>
					<div className="col">
						<Card image="https://images.unsplash.com/photo-1509470475192-4516c145f8a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80" title="Street Photography" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." label="Find out more!" />
					</div>
					<div className="col">
						<Card image="https://images.unsplash.com/photo-1509470475192-4516c145f8a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80" title="Street Photography" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." label="Find out more!" />
					</div>
					<div className="col">
						<Card image="https://images.unsplash.com/photo-1509470475192-4516c145f8a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80" title="Street Photography" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." label="Find out more!" />
					</div>
					</div>
					<div>
				<Footer />
			</div>
		

		</div>
		
	);
};

export default Home;
