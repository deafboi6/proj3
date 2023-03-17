import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import 'bootstrap/dist/css/bootstrap.css';

import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import Footer from "./components/Footer";
import Header from "./components/Header";
import IncomeForm from "./components/IncomeForm";
import IncomeList from "./components/IncomeList";
import PieChart from "./utils/pieChart";

const client = new ApolloClient({
    uri: '/graphql',
    cache: new InMemoryCache(),
});

export default function App() {
    return (
        <ApolloProvider client={client}>
        <div>
            <Header />
            <div className="h-25 w-25">
                <PieChart />
            </div>
            <div>
                <ExpenseForm />
                <ExpenseList />
            </div>
            <div>
                <IncomeForm />
                <IncomeList />
            </div>
            <Footer />
        </div>
        </ApolloProvider>
    );
}
