    // ----ON STANDBY UNTIL HOMEPAGE IS READY---- //
    const home = {
        name: "Home",
        amount: 15
    };

    const data = {
        labels: [home.name, "Groceries", "Insurance", "Car payment", "Utilities", "Savings", "Other"],
        datasets: [{
            data: [home.amount, 17, 12, 21, 7, 19, 5],
            backgroundColor: ["blue", "orange", "purple", "red", "green", "chocolate", "aqua"],
            cutout: "50%"
        }]
    };

        const options = {}

// --- What to input in the return field
// <Pie data={data} options={options} />

// --- What to add to top of App.js
// import {
// Chart as ChartJS,
// ArcElement,
// Tooltip,
// Legend
// } from "chart.js";

// import { Pie } from "react-chartjs-2";

// ChartJS.register(
// ArcElement,
// Tooltip,
// Legend
// );