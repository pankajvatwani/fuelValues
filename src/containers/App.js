import { Router, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Layout from './Layout';
import Taxes from './Taxes';
import Compute from './Compute';

export const history = createBrowserHistory();

function App() {
	return (
		<div className="App">
			<Router history={history}>
				<Switch>
					<Layout path="/taxes" component={Taxes} />
					<Layout path="/compute" component={Compute} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
