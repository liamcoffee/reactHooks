import React, { useState } from 'react';
import ResourceList from './ResrouceList';
import { UserList } from './UserList';

// functional version with hooks
// useState = allow functional component to use component level state
// useEffect = allow component to use lifecyclke methods
// useContext
// useRef - get refrence to element
// useReducer

const App = () => {
	// desctucture the array within useState which return an array
	// First element is the currentValue (this.state..), second is the function which allows us to setState.
	//  useState takes an initial value of statee
	const [ resource, setResource ] = useState('posts');

	return (
		<div>
			<UserList />
			<div>
				<button onClick={() => setResource('Posts')}>Posts</button>
				<button onClick={() => setResource('Todos')}>Todos</button>
			</div>
			<ResourceList resource={resource} />
		</div>
	);
};

export default App;

// export class app extends Component {
// 	state = {
// 		resource: 'posts'
// 	};
// 	render() {
// 		return (
// 			<div>
// 				<div>
// 					<button onClick={() => this.setState({ resource: 'Posts' })}>Posts</button>
// 					<button onClick={() => this.setState({ resource: 'Todos' })}>Todos</button>
// 				</div>
// 				{this.state.resource}
// 			</div>
// 		);
// 	}
// }

// export default app;
