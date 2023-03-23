import { Pie } from "react-chartjs-2";
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend
    } from "chart.js";
import { QUERY_EXPENSES } from "./queries";
import { useQuery } from "@apollo/client";

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend
);

const PieChart = () => {
    const { loading, data, error } = useQuery(QUERY_EXPENSES);
    console.log(data);

    if (loading) {
        return <div>Loading... {loading}</div>
    }
    if (error) {
        return <p>Error! ${error}</p>
    }

    const housing = [];
    const groceries = [];
    const insurance = [];
    const carPayment = [];
    const utilities = [];
    const savings = [];
    const other = [];


    const newUserData = data.User.expenses;
    console.log(newUserData);
    // this is the problem
    // console.log(newUserData.expenses);
    const ifStatement = () => {
        console.log("it reaches ifStatement");
        for (let i = 0; i < newUserData.length; i++) {
            const userData = newUserData[i].price;
            const catName = newUserData[i].name;
            console.log(catName);
            
            if (catName === "Housing") {
                housing.push(userData);
                console.log(userData);
            } else if (catName === "Groceries") {
                groceries.push(userData)
            } else if (catName === "Insurance") {
                insurance.push(userData) 
            } else if (catName === "Car-payment") {
                carPayment.push(userData)
            } else if (catName === "Utilities") {
                utilities.push(userData) 
            } else if (catName === "Savings") {
                savings.push(userData)
            } else if (catName === "Other") {
                other.push(userData)
            };
        };
    };

    if (newUserData === null) {
        console.log("data is considered empty");
    } else {
        console.log("it reaches the else statement");
        ifStatement();
    };
    

    const labels = ["Housing", "Groceries", "Insurance", "Car payment", "Utilities", "Savings", "Other"]

    const dataVals = {
        labels: labels,
        datasets: [{
            data: [housing, groceries, insurance, carPayment, utilities, savings, other],
            backgroundColor: ["blue", "orange", "purple", "red", "green", "chocolate", "aqua"],
            cutout: "50%"
        }]
    };

    const options = { 
        responsiveness: true,
        plugins: {
            legend: {
                position: "bottom"
            },
        }
    }
    return (
        <div style={{width:'25%', height:"25%"}}>
            <Pie data={dataVals} options={options} />
        </div>
    );
};

export default PieChart;