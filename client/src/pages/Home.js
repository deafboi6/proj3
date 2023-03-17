import React from "react";
import { useQuery } from "@apollo/client";
import ExpenseList from "../components/ExpenseList";
import ExpenseForm from "../components/ExpenseForm";
import { QUERY_USER } from "../utils/queries";

const Home = () => {
  const { loading, data } = useQuery(QUERY_USER);
  const expenses = data?.expenses || [];

  return (
    <main>
      <div className="flex-row justify-center">
        <div
          className="col-12 col-md-10 mb-3 p-3"
          style={{ border: "1px dotted #1a1a1a" }}
        >
          <ExpenseForm />
        </div>
        <div className="col-12 col-md-8 mb-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <ExpenseList expenses={expenses} title="monthly expense(s)..." />
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;
