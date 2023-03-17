import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import 'bootstrap/dist/css/bootstrap.css';

import PieChart from "./utils/pieChart";
// import Time from "./utils/displayTime";


const client = new ApolloClient({
    uri: '/graphql',
    cache: new InMemoryCache(),
});

export default function App() {
    return (
        <ApolloProvider client={client}>
        <div>
            <h1>This is the Start of Project 3!</h1>
            <div className="h-25 w-25">
                <PieChart />
            </div>
        </div>
        </ApolloProvider>
    );
}