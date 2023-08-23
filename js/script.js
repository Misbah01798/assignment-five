function getCardPriceId(Id) {
    const priceFeird = document.getElementById(Id);
    const priceString = priceFeird.innerText;
    const price = parseFloat(priceString);
    return price;
}
function getTotalPriceId(totalPrice) {
    const totalFeird = document.getElementById(totalPrice);
    const previousTotalString = totalFeird.innerText;
    const previousTotal = parseFloat(previousTotalString);
    return previousTotal;
}
function getDiscountId(discount) {
    const discountFeird = document.getElementById(discount);
    const discountString = discountFeird.innerText;
    const totalDiscount = parseFloat(discountString);
    return totalDiscount;
}
function getTotalId(total) {
    const totalFeird = document.getElementById(total);
    const totalString = totalFeird.innerText;
    const totalamount = parseFloat(totalString);
    return totalamount;
}
function setTotalPriceId(totalPrice, newPrice) {
    const textElement = document.getElementById(totalPrice);
    textElement.innerText = newPrice;
}
function setTotalAmountId(totalAmount, newAmount) {
    const amountElement = document.getElementById(totalAmount);
    amountElement.innerText = newAmount;
}
function setItemId(itemName) {
    //console.log(itemName);
    const itemEntry = document.getElementById('item-list');
    const count = itemEntry.childElementCount;
    const p = document.createElement('p');
    p.innerHTML = `${count}. ${itemName}`;

    itemEntry.appendChild(p);
}

document.getElementById('card2').addEventListener('click', function () {
    const price2 = getCardPriceId('card2-price');
    const previousTotalprice = getTotalPriceId('total-price');
    const discountAmout = getDiscountId('discount');

    const newTotalPrice = (previousTotalprice + price2).toFixed(2);
    setTotalPriceId('total-price', newTotalPrice);



    setItemId('K. Accessories 2');
    const newTotalAmount = (newTotalPrice - discountAmout).toFixed(2);
    setTotalAmountId('total', newTotalAmount)



})

document.getElementById('card1').addEventListener('click', function () {
    const card1Price = getCardPriceId('card1-price');
    const totalElement = getTotalPriceId('total-price');
    const discountAmout = getDiscountId('discount');

    const newTotalPrice = (totalElement + card1Price).toFixed(2);

    setTotalPriceId('total-price', newTotalPrice);


    setItemId('K. Accessories');
    const newTotalAmount = (newTotalPrice - discountAmout).toFixed(2);
    setTotalAmountId('total', newTotalAmount)


})
document.getElementById('card3').addEventListener('click', function () {
    const card1Price = getCardPriceId('card3-price');
    const totalElement = getTotalPriceId('total-price');
    const discountAmout = getDiscountId('discount');

    const newTotalPrice = (totalElement + card1Price).toFixed(2);

    setTotalPriceId('total-price', newTotalPrice);

    setItemId('Home Cooker');
    const newTotalAmount = (newTotalPrice - discountAmout).toFixed(2);
    setTotalAmountId('total', newTotalAmount)


})
document.getElementById('card4').addEventListener('click', function () {
    const card1Price = getCardPriceId('card4-price');
    const totalElement = getTotalPriceId('total-price');
    const discountAmout = getDiscountId('discount');

    const newTotalPrice = (totalElement + card1Price).toFixed(2);

    setTotalPriceId('total-price', newTotalPrice);

    setItemId('Sports Back Cap');
    const newTotalAmount = (newTotalPrice - discountAmout).toFixed(2);
    setTotalAmountId('total', newTotalAmount)


})
document.getElementById('card5').addEventListener('click', function () {
    const card1Price = getCardPriceId('card5-price');
    const totalElement = getTotalPriceId('total-price');
    const discountAmout = getDiscountId('discount');

    const newTotalPrice = (totalElement + card1Price).toFixed(2);

    setTotalPriceId('total-price', newTotalPrice);

    setItemId('Full Jersey Set');
    const newTotalAmount = (newTotalPrice - discountAmout).toFixed(2);
    setTotalAmountId('total', newTotalAmount)


})
document.getElementById('card6').addEventListener('click', function () {
    const card1Price = getCardPriceId('card6-price');
    const totalElement = getTotalPriceId('total-price');
    const discountAmout = getDiscountId('discount');

    const newTotalPrice = (totalElement + card1Price).toFixed(2);

    setTotalPriceId('total-price', newTotalPrice);

    setItemId('Sports cates');
    const newTotalAmount = (newTotalPrice - discountAmout).toFixed(2);
    setTotalAmountId('total', newTotalAmount)


})

const codeInput = document.getElementById("cupon");
const applyButton = document.getElementById("apply-btn");
const totalPriceDisplay = document.getElementById("total-price");
const discountDisplay = document.getElementById("discount");
const totalAmountDisplay = document.getElementById("total");


    applyButton.addEventListener("click", applyDiscount);



function updateTotalPrice() {
    const totalPrice = parseFloat(totalPriceDisplay.textContent) || 0;
    totalPriceDisplay.textContent = totalPrice.toFixed(2);

    checkCode();
    
    
}
const priceinput = document.getElementById("total-price");
const applyButtonEnable = document.getElementById("apply-btn");

// Add an event listener to the price input to enable/disable the button
priceinput.addEventListener("DOMSubtreeModified", checkCode);

function checkCode() {
    const totalPrice = parseFloat(totalPriceDisplay.textContent) || 0;
    // const code = codeInput.value;

    if (totalPrice >= 200) {
        applyButton.disabled = false;
    } else {
        applyButton.disabled = true;
    }
}

const priceInput = document.getElementById("total");
const makeButton = document.getElementById("make");

// Add an event listener to the price input to enable/disable the button
priceInput.addEventListener("DOMSubtreeModified", toggleButton);

function toggleButton() {
    const totalPrice = parseFloat(priceInput.textContent)|| 0;

    if (totalPrice > 0) {
        makeButton.disabled = false;
    } else {
        makeButton.disabled = true;
    }
}


function applyDiscount() {
    const totalPrice = parseFloat(totalPriceDisplay.textContent) || 0;
    
    if (codeInput.value === "SELL200") {
        const discount = totalPrice * 0.20;
        const totalAmount = totalPrice - discount;

        discountDisplay.textContent = discount.toFixed(2);
        totalAmountDisplay.textContent = totalAmount.toFixed(2);
    
}
}

function home() {
    window.location.reload();

}










