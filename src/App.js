import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Amplify, {API,graphqlOperation} from 'aws-amplify';
import { withAuthenticator} from 'aws-amplify-react'; 
import aws_exports from './aws-exports'; // specify the location of aws-exports.js file on your project
import { getExpense, listExpenses } from "./graphql/queries";
import { createExpense, deleteExpense, updateExpense } from "./graphql/mutations";
Amplify.configure(aws_exports);

const searchExpense = `query searchExpenses($search: String){
  searchExpenses(filter:{description:{match:$search}}){
    items{
      id
      amount
      description
    }
  }
}`


class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      id: "",
      expenses: [],
      searchResults:[],
      search: "",
      amount: 100,
      type: "PAYMENT",  /* either reimbursment, advance, payment */
      category: "FOOD",
      sub_category: "GROCERIES",
      description: "Description",
      displayAdd: true,
      displayUpdate:false,
      displaySearch:true
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  async componentDidMount(){
    const expenses = await API.graphql(graphqlOperation(listExpenses));
    console.log('componentDidMount', expenses)
    this.setState({expenses:expenses.data.listExpenses.items});
  }

  handleChange = (key, value) => {
    this.setState({ [key]: value })
  }

  guid = () => {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
      s4() + '-' + s4() + s4() + s4();
  }

  async handleSubmit(event) {
    event.preventDefault();
    event.stopPropagation();

    // build the CreateExpenseInput
    const date = new Date()
    const createExpenseInput = {
      id: this.guid(),
      amount: this.state.amount,
      type: this.state.type,
      category: this.state.category,
      sub_category: this.state.sub_category,
      description: this.state.description,
      creation_date: date.getTime()
    }

    const expense = {"input": createExpenseInput}

    await API.graphql(graphqlOperation(createExpense, expense));
    this.listExpenses();

    this.setState({search:""});
}

async handleSearch(event) {
  event.preventDefault();
  event.stopPropagation();

  const search = {"search":this.state.search};
  const result = await API.graphql(graphqlOperation(searchExpense, search));
  this.setState({searchResults:result.data.searchExpenses.items,expenses:[],displaySearch:true,search:""});   
  if(JSON.stringify(result.data.searchExpenses.items) === '[]'){
    this.setState({searchResults:[{expense:"No Match: Clear the search to go back to your Expenses"}]});
  };
}

async handleDelete(id) {
  const expenseId = {"id":id};

  // build DeleteExpenseInput 
  const deleteExpenseInput = {
    id: id
  }
  const expense = {"input": deleteExpenseInput}


  await API.graphql(graphqlOperation(deleteExpense, expense));
  this.listExpenses();
}
async handleUpdate(event) {
  event.preventDefault();
  event.stopPropagation();


  // build the UpdateExpenseInput
  const updateExpenseInput = {
    id: this.state.id,
    amount: this.state.amount,
    type: this.state.type,
    category: this.state.category,
    sub_category: this.state.sub_category,
    description: this.state.description
  }

  const expense = {"id":this.state.expense,"expense":updateExpenseInput};
  await API.graphql(graphqlOperation(updateExpense, expense));
  this.listExpenses();
  this.setState({displayAdd:true,displayUpdate:false,search:""});
}

selectExpense(expense){
  this.setState({id:expense.id,value:expense.expense, displayAdd:false,displayUpdate:true});
}

async listExpenses(){
  const expenses = await API.graphql(graphqlOperation(listExpenses));
  this.setState({expenses:expenses.data.listExpenses.items, searchResults: []});
}

  render() {
    const data = [].concat(this.state.expenses)
      .map((item,i)=> 
      <div className="alert alert-primary alert-dismissible show" role="alert" key={`expense-${i}`}>
        <span onClick={this.selectExpense.bind(this, item)}>{`${item.description} in ${item.category} for ${item.amount}`}</span>
        <button type="button" className="close" data-dismiss="alert" aria-label="Close" onClick={this.handleDelete.bind(this, item.id)}>
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
)
const searchResults = [].concat(this.state.searchResults)
      .map((item,i)=> 
        <div className="alert alert-success show" role="alert" key={`search-expenses-${i}`}>
          <span key={item.i}>{`${item.description} in ${item.category} for ${item.amount}`}</span>
        </div>
)


    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Expenses App</h1>
        </header>

        <div className="container">
          {this.state.displayAdd ?
            <form onSubmit={this.handleSubmit}>
              <div className="input-group mb-3">
                <input type="text" 
                  className="form-control form-control-lg" 
                  placeholder="New Expense" aria-label="Expense" 
                  aria-describedby="basic-addon2" 
                  value={this.state.description} onChange={(event) => this.handleChange("description", event.target.value)}/>
                <div className="input-group-append">
                  <button className="btn btn-primary border border-light" type="button" onClick={this.handleSubmit}>Add Expense</button>
                </div>
              </div>
              <div className="input-group mb-3">
                <input type="text" 
                  className="form-control form-control-lg" 
                  placeholder="Search for expense" aria-label="search-expense" 
                  aria-describedby="basic-addon2" 
                  value={this.state.search} onChange={(event) => this.handleChange("search", event.target.value)}/>
                <div className="input-group-append">
                  <button className="btn btn-primary border border-light" type="button" onClick={this.handleSearch}>Search for expense</button>
                </div>
              </div>
            </form>
          : null }
          {this.state.displayUpdate ?
            <form onSubmit={this.handleUpdate}>
              <div className="input-group mb-3">
                <input type="text" className="form-control form-control-lg" placeholder="Update Expense" aria-label="Expense" aria-describedby="basic-addon2" value={this.state.description} onChange={(event) => this.handleChange("description", event.target.value)}/>
                <div className="input-group-append">
                  <button className="btn btn-primary" type="submit">Update Expense</button>
                </div>
              </div>
            </form>
          : null }
        </div>
        <br/>
        <div className="container">
          {searchResults}
          {this.state.displaySearch ?
            <button className="button btn-success float-right" onClick={this.listExpenses.bind(this)}>
              <span aria-hidden="true">Clear Search</span>
            </button>
          : null }
          <div style={{ "marginTop": "80px"}}>{data}</div>
</div>
      </div>
    );
  }
}

export default withAuthenticator(App, { includeGreetings: true });
