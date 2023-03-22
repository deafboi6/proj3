import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_EXPENSES } from "../../utils/queries";

const ExpenseList = () => {
  const { loading, data, error } = useQuery(QUERY_EXPENSES);
  console.log(data);
  
  if (loading) {
    return <p>Loading... {loading}</p>;
  }
  if (error) {
    return <p>Error! ${error}</p>;
  }

  return (
    <div className="">
      <div>
        {data?.User?.expenses?.map((expenses) => {
          console.log("this is the expense", expenses);
          return (
            <div key={expenses.id}>
              <h4>{expenses.name}</h4>
              <ul>
                <li>{expenses.price}</li>
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};

// const ExpenseList = () => {
//   const { loading, data, error, status } = useQuery(QUERY_EXPENSES);
//   console.log(data)

//   const SubExpenseList = () => {
//     if (!data.length) {
//       return <h3>No Expenses Yet</h3>
//     }

//     return (
//       <div>
//         <>
//           <h3 className="">Expenses</h3>
//           <div className="">
//             {data.map((expenses) => (
//             <div key={expenses._id}>
//               <h4 key={expenses.name}>
//                 {expenses.name}
//               </h4>
//               <ul>
//                 <li key={expenses.price}>
//                   {expenses.price}
//                 </li>
//               </ul>
//             </div>
//               ))}
//           </div>
//         </>
//       </div>
//     );
//   }

//   SubExpenseList();
// }

export default ExpenseList;
