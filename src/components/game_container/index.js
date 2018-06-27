import React from 'react'
import Player from '../player'

function GameBox() {
	return (
		<div 
			style= {{
				position: 'relative',
				width: '18em',
				height: '32em',
				backgroundColor: 'black' ,
				margin: 'auto',
				color: 'white'
			}}
		>
			<h1> this is my gamebox 	</h1>
			<Player />
		</div>
	)
}

export default GameBox