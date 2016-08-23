import AppDispatcher from "../dispatcher/AppDispatcher";

export function hitRandomBee(index){
	AppDispatcher.dispatch({
		type : "HIT_RANDOM_BEE",
		//The index data it is only use in test.
		index : index
	})
}

export function resetBees(){
	AppDispatcher.dispatch({
		type : "RESET_BEES",
	})
}