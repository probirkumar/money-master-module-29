function setTotalIncome(elementId){
    const totalIncomeField = document.getElementById(elementId);
    const totalIncomeFieldString = totalIncomeField.value;
    const totalIncomneValue = parseFloat(totalIncomeFieldString);
    return totalIncomneValue;
}

function calculateTotalExpenxe(elementId){
    const expenseField = document.getElementById(elementId);
    const expenseFieldStrinng = expenseField.value;
    const expenseFieldValue = parseFloat(expenseFieldStrinng);
    return expenseFieldValue;
}

document.getElementById('calculation-btn').addEventListener('click', function(){

    const totalIncomneValue = setTotalIncome('total-income');
    // console.log(totalIncomneFieldValue)

    const foodFieldValue = calculateTotalExpenxe('food-field')
    const rentFieldValue = calculateTotalExpenxe('rent-field')
    const clothesFieldValue = calculateTotalExpenxe('clothes-field')

    const totalExpenseValue = foodFieldValue + rentFieldValue + clothesFieldValue;
    // console.log(totalExpenseValue)

    const remaningBalance = totalIncomneValue - totalExpenseValue;

    const totalExpenseField = document.getElementById('total-expenses');
    totalExpenseField.innerText = totalExpenseValue;

    const remaningBalanceField = document.getElementById('remaning-balance');
    
    if(totalIncomneValue < totalExpenseValue){
        alert('expense is getter than money')
    }
    else{
        remaningBalanceField.innerText = remaningBalance;
    }
});




document.getElementById('save-btn').addEventListener('click', function(){
    const totalIncomneValue = setTotalIncome('total-income');


    const saveField = document.getElementById('saving-field');
    const saveFieldString = saveField.value;
    const saveFieldValue = parseFloat(saveFieldString);
    const saveValueParcenteg = saveFieldValue / 100;
    // console.log(saveFieldValue)
    const savingMoney = totalIncomneValue * saveValueParcenteg;
    // console.log(savingMoney)

    const totalSave = document.getElementById('total-save');
    totalSave.innerText = savingMoney;

    const remaningBalance = document.getElementById('remaning-balance');
    const remaningBalanceString = remaningBalance.innerText;
    const remaningBalanceNumber = parseFloat(remaningBalanceString);
    // console.log(typeof remaningBalanceNumber)
    // console.log(remaningBalanceNumber)

    const remaningBalanceAmount = remaningBalanceNumber - savingMoney;

    const remaningAmountBalance = document.getElementById('remaning-amount');
    remaningAmountBalance.innerText = remaningBalanceAmount;

});