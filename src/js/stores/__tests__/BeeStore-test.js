"use strict";

jest.dontMock('../BeeStore');

describe('BeeStore', function() {

  var AppDispatcher;
  var BeeStore;
  var callback;

  // mock actions 
  var actionHitRandomBee = function(index){
    var resp = {};
    resp.type = "HIT_RANDOM_BEE";
    resp.index = index;
    return resp;
  }

  var actionResetBees = {
    type: 'RESET_BEES'
  };

  beforeEach(function() {
    AppDispatcher = require('../../dispatcher/AppDispatcher');
    BeeStore = require('../BeeStore');
    callback = AppDispatcher.register.mock.calls[0][0];
  });

  it('registers a callback with the dispatcher', function() {
    expect(AppDispatcher.register.mock.calls.length).toBe(1);
  });

  it('initializes with all bees alives', function() {
    var all = BeeStore.getAll();
    var amountOfDeaths = BeeStore.amountDeaths;
    expect(all.length).toEqual(14);
    expect(amountOfDeaths).toEqual(0);
    
    for(var i = 0 ; i < all.length ; i++){
      if(all[i].type == "queen"){
        expect(all[i].life).toBe(100);
      }
      if(all[i].type == "worker"){
        expect(all[i].life).toBe(75);
      }
      if(all[i].type == "drone"){
        expect(all[i].life).toBe(50);
      }
    }
  });

  it('kill the queen and then the rest should die', function() {
    var all    = BeeStore.getAll(),
        queen  = all[0],    
        amount = 100;

    expect(queen.type).toBe("queen");
    expect(queen.life).toBe(100);
    
    
    while(queen.life > 0){
      expect(queen.life).toBe(amount);
      callback(actionHitRandomBee(0));
      amount = amount - 8;        
    }
    
    for(var i = 0; i < all.length ; i++ ){
      expect(all[i].life).toBe(0);
    }
  });

  it('kill all the bees and they should remain dead', function() {
    var all   = BeeStore.getAll(),
        queen = all[0];
    
    for(var i = 1 ; i < all.length ; i++){
      while(all[i].life > 0){
        callback(actionHitRandomBee(1));  
      }
    }

    while(queen.life > 0){
      callback(actionHitRandomBee(0));
    }
    
    for(var i = 0; i < all.length ; i++ ){
      expect(all[i].life).toBe(0);
    }
  });

  it('reset the game and the bees should be alive', function() {
    var all    = BeeStore.getAll(),
        queen  = all[0],    
        amount = 100;

    expect(queen.type).toBe("queen");
    expect(queen.life).toBe(100);
    
    
    while(queen.life > 0){
      expect(queen.life).toBe(amount);
      callback(actionHitRandomBee(0));
      amount = amount - 8;        
    }

    callback(actionResetBees);
    
    all = BeeStore.getAll();

    for(var i = 0 ; i < all.length ; i++){
      if(all[i].type == "queen"){
        expect(all[i].life).toBe(100);
      }
      if(all[i].type == "worker"){
        expect(all[i].life).toBe(75);
      }
      if(all[i].type == "drone"){
        expect(all[i].life).toBe(50);
      }
    }
  });

});
