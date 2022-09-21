import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.round(Math.random() * (1000 - 100) + 100).toString(),
    };
    props.onAddExpense(expenseData);
    isEditingHandler();
  };

  const isEditingHandler = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div className="new-expense">
      {isEditing ? (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCanceledExpenseData={isEditingHandler}
        />
      ) : (
        <button onClick={isEditingHandler}>Add New Expense</button>
      )}
    </div>
  );
};

export default NewExpense;
