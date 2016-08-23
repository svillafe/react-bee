import React from "react";

export default class Bee extends React.Component {
  render() {

    const { key, bee } = this.props;
    var img = null;
    if(bee.life == 0){
    	img = (<img src="img/bees/bee-dead.jpg" class="img-responsive" alt=""/>); 
    }else{
    	img = (<img src="img/bees/bee-alive.jpg" class="img-responsive" alt=""/>);
    }
    
    
    return (
      <div class="col-md-4 bee">
        <div class="bee-image">
        	{img}
        </div>
        <br/>
        <div class="bee-life">
        	<ul>
        		<li>Type of Bee: {bee.type}</li>
        		<progress max={bee.totalLife} value={bee.life}></progress>
  					<li>Amount of life: {bee.life}</li>
  				</ul>
        </div>
      </div>
    );
  }
}
	