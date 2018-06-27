import store from '../../config/store'

export default function listentoInput(player) {
/*
	function handleEvent(e) {
		e.preventDefault()
		switch(e.keyCode) {
			default:
				console.log(e.keyCode)
				break
			case 32:
				console.log('space')
				break
			case 38:
				console.log('up')
				break
		}
	}

*/
	function dispatchCommand(action) {
		//console.log(action)
		store.dispatch({
			type: action
		})
	}

	window.addEventListener('keydown', (e) => {
		//handleEvent(e)
		switch(e.keyCode) {
			default:
				console.log(e.keyCode)
				break
			case 32:
				e.preventDefault()
				dispatchCommand('DIRECTION')
				break
			case 38:
				e.preventDefault()
				dispatchCommand('CLIMB')
				break
		}
	})
	return player
}