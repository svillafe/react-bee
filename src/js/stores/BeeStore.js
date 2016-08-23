"use strict";

var EventEmitter  = require("events").EventEmitter;
var AppDispatcher = require('../dispatcher/AppDispatcher');

class BeeStore extends  EventEmitter{
	constructor() {
		super();
		this.amountDeaths = 0;
		this.bees = getBees();
	}

	resetBees(){
		this.bees 				= getBees();
		this.amountDeaths = 0;
		this.emit("change", null);
		return;
	}

	hitRandomBee(beeIndex){
		var index = beeIndex;
		
		if(beeIndex == undefined){
			index = Math.floor(Math.random() * (this.bees.length - this.amountDeaths));
		}
		var aux = 0;
		var bee = null;
		var beeIndex = 0;
		
		for(var i = 0 ; i < this.bees.length ; i++){
			
			if(this.bees[i].life > 0){
				if(aux == index){
					bee = this.bees[i];
					beeIndex = i;
					break;	
				}
				aux++;
			}

		}


		bee.life = bee.life - bee.hitImpact;
		
		if(bee.life <= 0){
			bee.life = 0;
			this.amountDeaths++;
			if(bee.type == "queen" || this.amountDeaths == this.bees.length){
				
				for(var i = 0 ; i < this.bees.length ; i++){
					this.bees[i].life = 0;
				}

				this.emit("finishGame");
				return;	
			}	
		}

		this.emit("change", beeIndex);
		return;
	}

	getAll(){
		return this.bees;
	}

	handleActions(action) {
		switch(action.type){
			
			case "HIT_RANDOM_BEE" :
				this.hitRandomBee(action.index);
				break;

			case "RESET_BEES" : 
				this.resetBees();
				break;
		}
		return;
	}
}


function getBees(){
		var resp = [];
		//this parameter should be read from a config file
		for(var i = 0 ; i < 1 ; i++){
			var bee = {};
			bee.type = 'queen';
			bee.life = 100;
			bee.totalLife = 100;
			bee.hitImpact = 8;
			resp.push(bee);
		}
		for(var i = 0 ; i < 5 ; i++){
			var bee = {};
			bee.type = 'worker';
			bee.life = 75;
			bee.totalLife = 75;
			bee.hitImpact = 10;
			resp.push(bee);
		}
		for(var i = 0 ; i < 8 ; i++){
			var bee = {};
			bee.type = 'drone';
			bee.life = 50;
			bee.totalLife = 50;
			bee.hitImpact = 12;
			resp.push(bee);
		}
		return resp;
	}

const beeStore = new BeeStore;

//I register this Store to the Flux Dispatcher
AppDispatcher.register(beeStore.handleActions.bind(beeStore));

module.exports = beeStore;