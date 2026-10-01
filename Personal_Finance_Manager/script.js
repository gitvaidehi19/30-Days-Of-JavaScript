const calculateBtn = document.getElementById("calculateBtn");

calculateBtn.addEventListener("click", function () {

    const income = Number(document.getElementById("income").value);

    const rent = Number(document.getElementById("rent").value);

    const food = Number(document.getElementById("food").value);

    const transport = Number(document.getElementById("transport").value);

    const entertainment = Number(document.getElementById("entertainment").value);

    const other = Number(document.getElementById("other").value);


    const totalExpenses =
        rent + food + transport + entertainment + other;


    const balance = income - totalExpenses;


    let savingPer = 0;

    if (income > 0) {
        savingPer = (balance / income) * 100;
    }


    document.getElementById("incomeResult").textContent =
        "₹ " + income;

    document.getElementById("expenseResult").textContent =
        "₹ " + totalExpenses;

    document.getElementById("balanceResult").textContent =
        "₹ " + balance;

    document.getElementById("savingsResult").textContent =
        savingPer.toFixed(2) + "%";


    const message = document.getElementById("message");


    if (savingPer < 0) {

        message.textContent =
            "⚠️ Your expenses exceed your income!";

    }
    else if (savingPer >= 30) {

        message.textContent =
            "🎉 Great job! You are saving well.";

    }
    else if (savingPer >= 15) {

        message.textContent =
            "👍 Good job! You are saving a decent amount.";

    }
    else {

        message.textContent =
            "💡 Consider reducing your expenses.";

    }

});