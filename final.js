/*function signature/sample */
// Problem 1
function newPrice(currentPrice , discount ) {
    if(typeof currentPrice  !=="number"||typeof discount  !=="number"){
        return"Invalid";
    }
    else if(discount <0 ||discount >100) {
        return "Invalid";
    }



    let discountAmount =(currentPrice * discount)/ 100;
    let finalPrice =currentPrice- discountAmount;
    return finalPrice.toFixed(3);

          // You have to write your code here
}


// problem 2
function validOtp(otp){
    if (typeof otp !== "string"){
        return "Invalid";
    }
    else if(otp.length===8 && otp.startsWith("ph-")){
        return true;
    }
    else{return false;}
}



// problem 3
/*function signature/sample */
function finalScore (omr) {
    //write your code here
    if(typeof omr!== "object"){
        return "Invalid";}
    const right = omr.right;
    const wrong = omr.wrong;
    const skip = omr.skip;
    if( typeof right !== "number" || typeof wrong !=="number" || typeof skip !== "number"){
        return "Invalid";
    }
    else if(right+wrong+skip !== 100){ return "Invalid";}


    let score = (right*1) -(wrong*0.5);
    return Math.round(score);

}


// problem 04
/*function signature/sample */
function gonoVote(array) {
    //write your code here
    if(!Array.isArray(array)){
        return "Invalid";
    }
    let haC = 0;
    let naC = 0;
    for (let i= 0; i < array.length; i++){
        if (array[i] === "ha"){
            haC +=1;
        }
        else if (array[i] === "na"){
            naC +=1
        }

    }
    if (haC > naC){ return true;}
    else if(haC ===naC){ return "equal"; }
    else{return false;}
}




// problem 5

/*function signature/sample */
function  analyzeText(str) {
    // You have to write your code here
    if (typeof str !== "string"){ return "Invalid"}

    let trimStr = str.trim();
    if(trimStr.length ===0){return "Invalid";}

    let word = trimStr.split(" ");
    let longest = word[0]
    for(let i =1; i<word.length; i++){
        if(word[i].length > longest.length ){longest = word[i];}
    }
    let tokenC = trimStr.split(" ").join("").length;
    return {
        longwords : longest,
        token : tokenC
    }

}


