import React from "react";
import Square from './Square';


export default function Board(props) {

    return (

      <div class="game">
        <h1 align="center">Tic Tac Toc</h1>
        <button id="startButton">Start</button>
        <div id="info">Player X Player O</div>
        <div class="board">
        	<Square top left />
        	<Square top />
        	<Square top right />
        	<Square left />
        	<Square />
        	<Square right />
        	<Square bottom left />
        	<Square bottom />
        	<Square bottom right />
        </div>
      </div>
    );
  }
