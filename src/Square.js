import React from "react";

export default function Square(props) {
  	const classnames = ['square'];

  	if (props.left) {
  		classnames.push('left');
  	} else if (props.right) {
  		classnames.push('right');
  	}

  	if (props.top) {
  		classnames.push('top');
  	} else if (props.bottom) {
  		classnames.push('bottom');
  	}

    return (
      <div class={classnames.join(' ')}>
        <div class=""></div>
      </div>
    );
  }
