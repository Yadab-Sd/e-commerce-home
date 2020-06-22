import React, {ReactElement} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Layout from '../layout';
import Home from '../home';
import '../../assets/styles/main.scss';

const App = (): ReactElement => {
  return (
  	<BrowserRouter>
	    <Layout>
	        <Switch>
		      <Route exact path="/" component={Home} />
		    </Switch>
	    </Layout>
    </BrowserRouter>
  );
}

export default App;
