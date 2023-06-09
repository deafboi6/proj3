import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import 'bootstrap/dist/css/bootstrap.css';

import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import Footer from "./components/Footer";
import Header from "./components/Header";
import IncomeForm from "./components/IncomeForm";
import IncomeList from "./components/IncomeList";
import PieChart from "./utils/pieChart";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Auth from "./utils/auth";

import "./App.css";

const httpLink = createHttpLink({
    uri: "/graphql"
});

const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem('id_token');
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : '',
        },
    };
});

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
})

export default function App() {
    return (
        <ApolloProvider client={client}>
        <Router>
        {Auth.loggedIn() ? (
            <div>
            <Header />
            <div className="row">
            <div className="col">
                <ExpenseForm />
                <ExpenseList />
            </div>
            <div className="col">
                <IncomeForm />
                <IncomeList />
            </div>
            <div className="col">
                <PieChart />
            </div>
            </div>
            <div style={{float: "left", display: "block"}}>
            <Footer />
            </div>
        </div>
        ) : (
            <div>
                <Header />
                <div style={{marginTop: "7%"}}>
                    <Login />
                    <Signup />
                </div>
                <Footer />
            </div>
        )}
        </Router>
        </ApolloProvider>
    );
}
