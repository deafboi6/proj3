
import { Pie } from "react-chartjs-2";

const PieChart = () => {
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

    return (
        <div>
            <Pie data={data} options={options} />
        </div>
    );
};

export default PieChart;