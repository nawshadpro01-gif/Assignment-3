/*function signature/sample */
// Problem 1
function newPrice(currentPrice , discount ) {

    if(typeof currentPrice  !=="number"||typeof discount  !=="number"){
        return"Invalid";
    }
    else if(discount <0 || discount >100) {
        return "Invalid";
    }


    let discountAmount =(currentPrice * discount)/ 100;
    let finalPrice =currentPrice- discountAmount;
    return finalPrice.toFixed(3);

          // You have to write your code here
}
