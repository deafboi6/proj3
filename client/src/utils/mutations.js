import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $email: String!
    $password: String!
  ) {
    addUser(
      email: $email
      password: $password
    ) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_EXPENSE = gql`
  mutation addExpense($name: String!, $price: String!) {
    addExpense( 
      name: $name,
      price: $price
    ) {
      name
      price
    }
  }
`;

export const ADD_INCOME = gql`
  mutation addIncome($amount: Number, $month: String) {
    addIncome( 
      amount: $amount,
      month: $month
    ) {
      _id
      amount
      month
    }
  }
`;
