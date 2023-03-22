import { gql } from "@apollo/client";

export const QUERY_USER = gql`
  query user($email: String!) {
    user(email: $email) {
      _id
      email
      expenses {
        _id
        name
        price
      }
      incomes {
        _id
        amount
        month
      }
    }
  }
`;

export const QUERY_EXPENSES = gql`
  query getExpenses {
    User {
      expenses {
        _id
        name
        price
      }
    }
  }
`;

export const QUERY_INCOMES = gql`
  query getIncomes {
    incomes {
      _id
      amount
      month
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      email
      expenses {
        _id
        name
        price
      }
      incomes {
        _id
        amount
        month
      }
    }
  }
`;
