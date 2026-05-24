const fromCurrency = document.getElementById("fromCurrency");

const toCurrency = document.getElementById("toCurrency");

const amount = document.getElementById("amount");

const result = document.getElementById("result");

const convertBtn = document.getElementById("convertBtn");

const fromFlag = document.getElementById("fromFlag");

const toFlag = document.getElementById("toFlag");


// Currency and Country Codes

const countryList = {

    USD:"US",
    INR:"IN",
    EUR:"FR",
    GBP:"GB",
    JPY:"JP"

};


// Update Flag Function

function updateFlag(element, currency){

    let countryCode = countryList[currency];

    let newSrc =
    `https://flagsapi.com/${countryCode}/flat/64.png`;

    element.src = newSrc;
}


// Change From Flag

fromCurrency.addEventListener("change", ()=>{

    updateFlag(fromFlag, fromCurrency.value);

});


// Change To Flag

toCurrency.addEventListener("change", ()=>{

    updateFlag(toFlag, toCurrency.value);

});


// Convert Currency

convertBtn.addEventListener("click", async ()=>{

    let amt = amount.value;

    if(amt === "" || amt <= 0){

        amt = 1;

        amount.value = 1;
    }

    let URL =
    `https://api.exchangerate-api.com/v4/latest/${fromCurrency.value}`;


    let response = await fetch(URL);

    let data = await response.json();

    let rate = data.rates[toCurrency.value];

    let finalAmount = amt * rate;

    result.innerText =
    `${amt} ${fromCurrency.value} = ${finalAmount} ${toCurrency.value}`;

});