import React, { Component } from 'react';
import './App.css';

import { Switch, Route } from 'react-router-dom';
import ExpensesListPage from './components/pages/ExpensesListPage'
import DefaultLayout from "./components/templates/DefaultLayout";

import 'bootstrap/dist/css/bootstrap.min.css';
import Amplify from 'aws-amplify';
import { withAuthenticator} from 'aws-amplify-react'; 
import aws_exports from './aws-exports'; // specify the location of aws-exports.js file on your project
Amplify.configure(aws_exports);


class App extends Component {

  render() {
    return (
      <div className="App">
        <Switch>
                <DefaultLayout
                  exact
                  path="/"
                  component={ExpensesListPage}
                />
              </Switch>
      </div>
    );
  }
}

export default withAuthenticator(App, { includeGreetings: true });
