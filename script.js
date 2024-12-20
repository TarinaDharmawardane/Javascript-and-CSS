// Tarina Dharmawardane //
"use strict";

const WEIGHT_ERROR = "Weight must be between 0 and 50 kg.";
const APPLE_PRICE_ERROR = "Apple price must be between $0 and $10.";
const ORANGE_PRICE_ERROR = "Orange price must be between $0 and $20.";
const GRAPE_PRICE_ERROR = "Grape price must be between $0 and $15.";

function calculate() {
    // Helper function to get and convert input values
    function getInputValue(id) {
        return Number(document.getElementById(id).value) || 0;
    }

    // Retrieve values for weights and prices
    const appleWeight = getInputValue("appleWeight");
    const applePrice = getInputValue("applePrice");
    const orangeWeight = getInputValue("orangeWeight");
    const orangePrice = getInputValue("orangePrice");
    const grapeWeight = getInputValue("grapeWeight");
    const grapePrice = getInputValue("grapePrice");
    const discount = getInputValue("discount");

    // Validation
    if (appleWeight < 0 || appleWeight > 50) {
        alert(WEIGHT_ERROR);
        return;
    }
    if (applePrice < 0 || applePrice > 10) {
        alert(APPLE_PRICE_ERROR);
        return;
    }
    if (orangePrice < 0 || orangePrice > 20) {
        alert(ORANGE_PRICE_ERROR);
        return;
    }
    if (grapePrice < 0 || grapePrice > 15) {
        alert(GRAPE_PRICE_ERROR);
        return;
    }

    // Perform calculations
    const totalWeight = appleWeight + orangeWeight + grapeWeight;
    const totalPrice =
        appleWeight * applePrice +
        orangeWeight * orangePrice +
        grapeWeight * grapePrice;
    const discountedPrice = totalPrice * (1 - discount / 100);

    // Display results
    document.getElementById("totalWeight").textContent = totalWeight + " Kg";
    document.getElementById("totalPrice").textContent =
        "$" + discountedPrice.toFixed(2);
}

function resetWeights() {
    document.getElementById("appleWeight").value = "";
    document.getElementById("orangeWeight").value = "";
    document.getElementById("grapeWeight").value = "";
    document.getElementById("totalWeight").textContent = "0 Kg";
}

function resetPrices() {
    document.getElementById("applePrice").value = "";
    document.getElementById("orangePrice").value = "";
    document.getElementById("grapePrice").value = "";
    document.getElementById("totalPrice").textContent = "$0.00";
}

function resetAll() {
    resetWeights();
    resetPrices();
    document.getElementById("discount").value = "0";
}