const balance = document.getElementById("balance");
const money_plus = document.getElementById("money-plus");
const money_minus = document.getElementById("money-minus");
const list = document.getElementById("list");
const form = document.getElementById("form");
const text = document.getElementById("text");
const amount = document.getElementById("amount");

const dummyTransactions = [
  { Id: 1, text: "Flower", amount: -20 },
  { Id: 2, text: "Salary", amount: 300 },
  { Id: 3, text: "Book", amount: -10 },
  { Id: 4, text: "Camera", amount: 150 },
];
let transactions = dummyTransactions;

// add transactions to DOM list on js section..add s

function addTransactionDOM(transactions) {
  // get sign on this function
  const sign = transaction.amount < 0 ? "-" : "+";

  const item = document.createElement("li");

  // add class bassed on value
  item.classList.add(transaction.amount < 0 ? "minus" : "plus");

  item.innerHTML = `
  ${transaction.text}<span>${sign}${Math.abs(transaction.amount)}</span>
  <span><button class="delet-btn">x</button></span>
  `;
  list.appendChild(item);
}

// init app 
function init(){
  list.innerHTML = '';

  transactions.forEach(addTransactionDOM);
}

init();