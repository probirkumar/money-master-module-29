function totalSpend(elementId){
    const totalSpendField = document.getElementById(elementId);
    const totalSpendFieldString = totalSpendField.value;
    const totalSpendValue = parseFloat(totalSpendFieldString);
    return totalSpendValue;
}


document.getElementById('calculation-btn').addEventListener('click', function(){
    const totalIncomeField = document.getElementById('total-income');
    const totalIncomeFieldString = totalIncomeField.value;
    const totalIncomeValue = parseFloat(totalIncomeFieldString);
    // console.log(totalIncomeValue)

    const foodValue = totalSpend('food-field')
    const rentValue = totalSpend('rent-field')
    const clothesValue = totalSpend('clothes-field')
    // console.log(foodValue)
    const totalSpendMoney = foodValue + rentValue + clothesValue;
    // console.log(totalSpendMoney)
    const finalResult = totalIncomeValue - totalSpendMoney;
    // console.log(finalResult)

    const totalExpenses = document.getElementById('total-expenses');
    totalExpenses.innerText = totalSpendMoney;
    const remaningBalance = document.getElementById('remaning-balance');
    remaningBalance.innerText = finalResult

});

console.log('money .js checked')