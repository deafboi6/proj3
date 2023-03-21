import { gql } from '@apollo/client';

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
  mutation addExpense($name: String, $price: Number) {
    addExpense( 
      name: $name
      price: $price
    ) {
      _id
      name
      price
    }
  }
`;

export const ADD_INCOME = gql`
  mutation addIncome($amount: Number, $Month: String) {
    addIncome( 
      amount: $amount
      Month: $Month
    ) {
      _id
      amount
      Month
    }
  }
`;

export const ADD_INCOME = gql`
  mutation addIncome() {}
`;

export const ADD_INCOME = gql`
  mutation addIncome() {}
`;