let budget = {
  income: 1000,
  expense: 700
};

//Add the savings property based on the difference between income and expenses
budget.saving = budget.income - budget.expense;

// updating the income
budget.income = 1200;

// Recalculating the saving 
budget.saving = budget.income - budget.expense;

//print the updateted budget
console.log(budget);
