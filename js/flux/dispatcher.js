export const dispatcher = (store, actions, render) => {
	return (actionName, props) => {
		store = actions[actionName](store, props);
		render(store);
	}; // what to return
}; // dispatcher