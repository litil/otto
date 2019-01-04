import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ExpensesList from '../../organisms/ExpensesList'

import { expenseType, expenseCategory, expenseSubCategory } from '../../../enums.js'

import {API,graphqlOperation} from 'aws-amplify';
import { getExpense, listExpenses } from "../../../graphql/queries";
import { createExpense, deleteExpense, updateExpense } from "../../../graphql/mutations";

import './styles.css';

const searchExpense = `query searchExpenses($search: String){
  searchExpenses(filter:{description:{match:$search}}){
    items{
      id
      amount
      description
    }
  }
}`

export default class ExpensesListPage extends Component {

  constructor(props) {
    super(props)
    this.state = {
      id: "",
      expenses: [],
      searchResults:[],
      search: "",
      amount: 100,
      type: expenseType.MINE,  /* either reimbursment, advance, payment */
      category: expenseCategory.FOOD_DINING,
      sub_category: expenseSubCategory.FOOD_DINING.GROCERIES,
      description: "Description",
      displayAdd: true,
      displayUpdate:false,
      displaySearch:true
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.listExpenses = this.listExpenses.bind(this);
  }

  async componentDidMount(){
    const expenses = await API.graphql(graphqlOperation(listExpenses));
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
      expense_type: this.state.type,
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

async handleDelete(expense) {
  // build DeleteExpenseInput 
  const deleteExpenseInput = {
    id: expense.id
  }
  const params = {"input": deleteExpenseInput}

  await API.graphql(graphqlOperation(deleteExpense, params));

  this.listExpenses();
}
async handleUpdate(event) {
  event.preventDefault();
  event.stopPropagation();


  // build the UpdateExpenseInput
  const updateExpenseInput = {
    id: this.state.id,
    amount: this.state.amount,
    expense_type: this.state.type,
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
    const data = [].concat(this.state.searchResults).length > 0 ? 
      [].concat(this.state.searchResults) : [].concat(this.state.expenses);
    const expensesList = <ExpensesList expenses={data} deleteFn={this.handleDelete}/>

    return (
      <div className="ExpensesListPage-container">
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
          {expensesList}
          {this.state.displaySearch ?
            <button className="button btn-success float-right" onClick={this.listExpenses.bind(this)}>
              <span aria-hidden="true">Clear Search</span>
            </button>
          : null }
        </div>
      </div>
    );
  }
}
