import React from "react";
import "./ExpenseItem.css";

const ExpenseItem = () => {
    const expenseDate= new Date(2023, 2 ,28);
    const formattedDate = expenseDate.toDateString();
    const expenseTitle = "Car Insurance";
    const expenseAmount = 297.67;

  return (
    <div className="expense-item">
      <div>{formattedDate}</div>
      <div className="expense-item_description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item_price">${expenseAmount}</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
