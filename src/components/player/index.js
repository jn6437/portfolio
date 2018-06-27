import React from 'react'
import { connect } from 'react-redux'
import playerSprite from './player.png'
import listentoInput from '../game_container/interaction.js'

function Player(props) {
	return (
		<div style = {{
			position: 'absolute',
			top: props.position[1],
			left: props.position[0],
			backgroundImage: `url('${playerSprite}')`,
			backgroundPosition: '0 0',
			width: '40px',
			height: '40px',
		}}>
		Player {props.position[0]}
		</div>
	)
}

function mapStateToProps(state) {
	return {
		//spread operator to get all player attribute
		...state.player,
	}
}

//connect will return new function and parse player as an argument 
export default connect(mapStateToProps)(listentoInput(Player))
