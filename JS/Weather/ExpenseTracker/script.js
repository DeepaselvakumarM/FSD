document.addEventListener("DOMContentLoaded", loadExpenses);

const expenseForm = document.getElementById("expense-form");
const expenseList = document.getElementById("expense-list");
const totalExpense = document.getElementById("total-expense");

let expenses = JSON.parse(localStorage.getItem("expenses")) || [];

expenseForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("expense-name").value;
    const amount = document.getElementById("expense-amount").value;
    const category = document.getElementById("expense-category").value;

    if (name === "" || amount === "") {
        alert("Please enter all details!");
        return;
    }

    const expense = { id: Date.now(), name, amount: parseFloat(amount), category };
    expenses.push(expense);
    localStorage.setItem("expenses", JSON.stringify(expenses));

    displayExpenses();
    expenseForm.reset();
});

function displayExpenses() {
    expenseList.innerHTML = "";
    let total = 0;

    expenses.forEach(expense => {
        total += expense.amount;

        const li = document.createElement("li");
        li.innerHTML = `${expense.name} - ₹${expense.amount} (${expense.category}) 
            <button class="delete-btn" onclick="deleteExpense(${expense.id})">❌</button>`;
        
        expenseList.appendChild(li);
    });

    totalExpense.textContent = total;
}

function deleteExpense(id) {
    expenses = expenses.filter(expense => expense.id !== id);
    localStorage.setItem("expenses", JSON.stringify(expenses));
    displayExpenses();
}

function loadExpenses() {
    displayExpenses();
}
