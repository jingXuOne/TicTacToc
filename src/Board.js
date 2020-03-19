import React from "react";

export default function Board(props) {
  
    return (

      <div class="game">
        <h1 align="center">Tic Tac Toc</h1>
        <button id="startButton">Start</button>
        <div id="info">Player X Player O</div>
        
        <div class="board">
          <div class="square top left">
            <div class=""></div>
          </div>
          <div class="square top">
            <div class=""></div>
          </div>
          <div class="square top right">
            <div class=""></div>
          </div>
          <div class="square left">
            <div class=""></div>
          </div>
          <div class="square">
            <div class=""></div>
          </div>
          <div class="square right">
            <div class=""></div>
          </div>
          <div class="square bottom left">
            <div class=""></div>
          </div>
          <div class="square bottom">
            <div class=""></div>
          </div>
          <div class="square bottom right">
            <div class=""></div>
          </div>
        </div>
      </div>
    );
  }