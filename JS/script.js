
//Retrieve info
const userAge = document.getElementById('user-age');
const travelDistance = document.getElementById('travel-distance')

//input button
const button = document.getElementById('button');

// discount variable creation
let discount; 

//Starting price
let price; 

//Calc final price
let finalPrice;


//click on button
button.addEventListener('click', 
function()
{

    if (userAge > 130 || userAge < 0) {
        message = "Invalid data"
    } else if ( userAge.value < 18) {
        discount = 19.4;
    } else if (userAge.value >= 65) {
        discount = 37.7;
    } else {
        message = "You are not suitable for any discount"
        discount = 0;
    } 



    console.log(discount)

    let price = (travelDistance.value * 0.233);

    console.log(price);
    
    let finalPrice = (price - ((discount / 100) * price)).toFixed(2);

    console.log(finalPrice)

    //Print on HTML
    const dataRecap = document.getElementById('data-recap');

    dataRecap.innerHTML = 
    "Passenger age: " + userAge.value + "<br>"
    + "Travel distance: " + travelDistance.value + "Km" + "<br>"
    + "Ticket price: " + price + "€" + "<br>"
    + "Discount applied: " + discount + "%" + "<br>"
    + "Final price: " + finalPrice + "€";
});