import React, { useState } from "react";
import { useBudget } from "../context/BudgetContext";

const AddExpense = (props) => {
  const { expenseList, setExpenseList, cost, setCost } = useBudget();

  const [reason, setReason] = useState("");

  function addExpense() {
    if (reason && cost) {
      let newExpense = { reason, cost };
      setExpenseList([...expenseList, newExpense]);
      setReason("");
      setCost("");
    } else {
      alert("There are some empty fields, I suppose.");
      return;
    }
    props.spentAmount();
    props.remainingAmount();
  }
  const isDisabled = props.remaining <= 0;

  return (
    <div className="addExpense">
      <input
        type="text"
        onChange={(e) => setReason(e.target.value)}
        value={reason}
        placeholder="Expense?"
        className="reason"
        disabled={isDisabled}
      />
      <input
        type="number"
        min={0}
        value={cost}
        onChange={(e) => setCost(e.target.value)}
        placeholder="Expense Amount"
        className="cost"
        disabled={isDisabled}
      />
      <button
        onClick={addExpense}
        disabled={isDisabled}
        type="button"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Add Expense
        <svg
          class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg>
      </button>
    </div>
  );
};

export default AddExpense;
