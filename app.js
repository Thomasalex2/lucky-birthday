var dob = document.querySelector("#dob")
var luckyNo = document.querySelector("#luckynumber")
var button = document.querySelector("#check-btn")
var results = document.querySelector("#results")

function checkLucky() {
    if (dob.value === "" || luckyNo.value === "") {
        results.innerText = "Fill in the above details"
        return
    }
    var digitsArr = dob.value.split("-")
    console.log(digitsArr)
    
    var sumOfDigits = 0
    for (var i = 0; i < digitsArr.length; i++) {
        var current = parseInt(digitsArr[i])
        while (current !== 0) {
            digit = current % 10;
            current = Math.floor(current / 10)
            sumOfDigits += digit;
        }
    }
    console.log("Sum of digits: ", sumOfDigits)

    if (sumOfDigits % luckyNo.value === 0) {
        results.innerText = "Yay! Your birthday is lucky 🥳"
    } else {
        results.innerText = "Whoops. You don't have a lucky birthday 😢"
    }
}

let clearResult = () => results.innerText = ""


button.addEventListener("click", checkLucky)
luckyNo.addEventListener("click", clearResult)
dob.addEventListener("click", clearResult)