import React from "react";


export default class NavBar extends React.Component {
      render() { 
        return (<nav id="mainNav" class="navbar navbar-default navbar-custom navbar-fixed-top">
                  <div class="container">
                      
                      <div class="navbar-header page-scroll">
                          <a class="navbar-brand page-scroll" href="#init">Bee Game</a>
                      </div>

                      
                      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                          <ul class="nav navbar-nav navbar-right">
                              <li class="hidden">
                                  <a href="#page-top"></a>
                              </li>
                              <li>
                                  <a class="page-scroll" href="#game">Game</a>
                              </li>
                              <li>
                                  <a class="page-scroll" href="#about">About</a>
                              </li>
                          </ul>
                      </div>
                  </div>
                </nav>)
      }
}