import React from "react";

import Bee from "../components/Bee";
import * as BeeActions from "../actions/BeeActions";
import BeeStore from "../stores/BeeStore";

export default class Bees extends React.Component {
	constructor(){
		super();
		this.state = {
			bees : BeeStore.getAll(),
			completed : false,
			beeHit : null
		}
	}

	componentWillMount() {
		BeeStore.on("change", (i) => { this.setState ({ bees : BeeStore.getAll(), beeHit : i, completed : false})});
		BeeStore.on("finishGame", () => { this.setState ({ completed : true})});
	}

	hitBee() {
		BeeActions.hitRandomBee();
	}

	resetBees() {
		BeeActions.resetBees();
	}

	render() {
		const { bees, completed, beeHit } = this.state;
		const BeeComponents = bees.map((bee , i) => { return <Bee key = {i} bee = {bee}/>}); 
		var actionButton;
		var message;
		
		if(!completed){
			actionButton = (<a onClick ={this.hitBee.bind(this)} class="btn btn-xl">Hit</a>);
		}else{
			actionButton = (<a onClick ={this.resetBees.bind(this)}  class="btn btn-xl">Reset</a>);
		}

		if(beeHit != null){
			message = (<h1>The bee number {beeHit} was hit.</h1>)
		}else{
			message = (<h1>Click the Hit Button to Hit a Bee.</h1>)
		}

		return (
			<div class="container text-center">
					<div class="row">
						{BeeComponents}
					</div>
					{message}
					<br/>
					{actionButton}
			</div>
		);
	}
}