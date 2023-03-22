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
    const { loading, data, error, status } = useQuery(QUERY_EXPENSES);
    console.log(data);
    const housing = [];
    const groceries = [];
    const insurance = [];
    const carPayment = [];
    const utilities = [];
    const savings = [];
    const other = [];

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
            // title: {
            //     display: true,
            //     text: "Expenses Chart"
            // }
        }
    }

    return (
        <div style={{width:'25%', height:"25%"}}>
            <Pie data={dataVals} options={options} />
        </div>
    );
};

export default PieChart;