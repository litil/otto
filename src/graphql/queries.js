// eslint-disable
// this is an auto generated file. This will be overwritten

export const getExpense = `query GetExpense($id: ID!) {
  getExpense(id: $id) {
    id
    amount
    expense_type
    category
    sub_category
    description
    creation_date
  }
}
`;
export const listExpenses = `query ListExpenses(
  $filter: ModelExpenseFilterInput
  $limit: Int
  $nextToken: String
) {
  listExpenses(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      amount
      expense_type
      category
      sub_category
      description
      creation_date
    }
    nextToken
  }
}
`;
export const searchExpenses = `query SearchExpenses(
  $filter: SearchableExpenseFilterInput
  $sort: SearchableExpenseSortInput
  $limit: Int
  $nextToken: Int
) {
  searchExpenses(
    filter: $filter
    sort: $sort
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      amount
      expense_type
      category
      sub_category
      description
      creation_date
    }
    nextToken
  }
}
`;
