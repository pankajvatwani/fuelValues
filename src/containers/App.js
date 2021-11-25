import { Router, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Layout from './Layout';
import Taxes from './Taxes';
import Compute from './Compute';
import DefineTax from './DefineTax';
import DefineFees from './DefineFees';
import Upload from './Upload';

export const history = createBrowserHistory();

function App() {
	return (
		<div className="App">
			<Router history={history}>
				<Switch>
					<Layout path="/taxes" exact component={Taxes} />
					<Layout path="/taxes/new" exact component={DefineTax} />
					<Layout path="/taxes/edit" exact component={DefineTax} />
					<Layout path="/fees/new" exact component={DefineFees} />
					<Layout path="/compute" component={Compute} />
					<Layout path="/upload" component={Upload} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
