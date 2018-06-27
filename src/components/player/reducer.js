
const initialState = {
	position: [100, 0],
}


//playerReducer is a variable that returns anonymous function with state and action as a parameter
const playerReducer = (state=initialState, action) => {
	console.log(action.type)
	switch(action.type) {
		default:
			return state
	}
}

export default playerReducer