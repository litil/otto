import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ExpenseRow from '../../molecules/ExpenseRow';

import './styles.css';

export default class ExpensesList extends Component {
  static propTypes = {
    /** All the expenses data */
    expenses: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
    /** Function to delete the expense */
    deleteFn: PropTypes.func
  };

  
  render() {
    const { expenses } = this.props;

    return (
      <div className="ExpensesList-container">
        {expenses && expenses.length > 0
          ? expenses.map((expense, i) => (
              <ExpenseRow
                key={`expense-row-${i}`}
                expense={expense}
                deleteFn={() => this.props.deleteFn(expense)}
              />
            ))
          : 'No expenses yet'}
      </div>
    );
  }
}
