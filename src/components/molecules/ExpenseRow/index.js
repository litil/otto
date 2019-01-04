import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { format, formatDistance, formatRelative, subDays } from 'date-fns'

import { expenseSubCategoryIcon } from '../../../enums';
import messages from '../../../messages';

import './styles.css';

export default class ExpenseRow extends Component {
  static propTypes = {
    /** An expense object */
    expense: PropTypes.object.isRequired,
    /** Function to delete the expense */
    deleteFn: PropTypes.func
  };

  render() {
    const { expense } = this.props;

    const expenseDate = new Date(parseInt(expense.creation_date, 10))

    return (
      <div className="ExpenseRow-container">
        <div className="ExpenseRow-left">

          <div className="ExpenseRow-category">
            <div className="ExpenseRow-categoryIcon">
              { expenseSubCategoryIcon[expense.category] ? expenseSubCategoryIcon[expense.category][expense.sub_category] : '-'}
            </div>
            <div className="ExpenseRow-categoryLabelContainer">
              <span className="ExpenseRow-subCategoryLabel">
                { messages[`EXPENSE_CATEGORY_${expense.sub_category}`] }
              </span>
              <span className="ExpenseRow-categoryLabel" >{ messages[`EXPENSE_CATEGORY_${expense.category}`] }</span>
            </div>
          </div>

          <div className="ExpenseRow-type">
          { messages[`EXPENSE_TYPE_${expense.expense_type}`] }
          </div>

          <div className="ExpenseRow-date">
          { format(expenseDate) }
          </div>
        </div>

        <div className="ExpenseRow-right">
          <div className="ExpenseRow-amount">
            { expense.amount }
          </div>
          <div className="ExpenseRow-delete" onClick={this.props.deleteFn}>
            X
          </div>
        </div>

      </div>
    );
  }
}
