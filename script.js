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

// add transaction
function addTransaction(e) {
  e.preventDefault();

  if (text.value.trim() === '' || amount.value.trim() === "") {
    alert("Pleas add text and amount");
  } else {
    const transaction = {
      Id: generateID(),
      text: text.value,
      amount: amount.value
    };
    transactions.push(transaction);

    addTransactionDOM(transaction);

    updateValues();

    text.value = '';
    amount.value = '';
  }
}

// generate random Id
function getElementById() {
  return Math.floor(Math.random() * 100000000);
}

function addTransactionDOM(transaction) {
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

// Update the balance, income amd expense
function updateValues() {
  const amounts = transactions.map((transaction) => transaction.amount);

  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = (
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);

  balance.innerText = `$${total}`;
  money_plus.innerText = `$${income}`;
  money_minus.innerText = `$${expense}`;
}

// init app
function init() {
  list.innerHTML = "";

  transactions.forEach(addTransactionDOM);
  updateValues();
}

init();

form.addEventListener("submit", addTransaction);
