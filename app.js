// login button even handler
document.getElementById('submit-button').addEventListener('click', function () {
    const welcomeArea = document.getElementById('welcome-area');
    welcomeArea.style.display = 'none';
    const backPart = document.getElementById('back-part');
    backPart.style.display = 'block'
})

// deposit button even handler
document.getElementById('deposit-button').addEventListener('click', function () {
    const addDepositNumber = getInput('add-deposit-amount');

    updateFunction('current-deposit', addDepositNumber);
    updateFunction('current-balance', addDepositNumber);

    document.getElementById('add-deposit-amount').value = "";
});

// withdraw button even handler
document.getElementById('withdraw-button').addEventListener('click', function () {
    const addWithdrawNumber = getInput('add-withdraw-amount');

    updateFunction('current-withdraw', addWithdrawNumber);
    updateFunction('current-balance', -1 * addWithdrawNumber);

    document.getElementById('add-withdraw-amount').value = "";
});

//  function for merge deposit button and withdraw button
function getInput(id) {
    const amount = document.getElementById(id).value;
    const amountNumber = parseFloat(amount);
    return amountNumber;
}

// function for merge deposit and balance
function updateFunction(id, addDepositNumber) {
    const current = document.getElementById(id).innerHTML;
    const currentNumber = parseFloat(current);
    const total = addDepositNumber + currentNumber;
    document.getElementById(id).innerHTML = total;
}