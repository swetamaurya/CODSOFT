var result = document.getElementById("result");

// show input numbers
function display(number){
    result.value += number;
    
}

// caltulet all value use the equal button
function cal(){
    var final_number =result.value;
    var final_result = eval(final_number);
    result.value = final_result;
}

// clear all input numbers
function clrs(){
    result.value = "";
}

// delte all numbers
function del(){
    result.value = result.value.slice(0,-1);
}

// calculatepercentage
function calculatePercentage(number, percentage) {
    return (number * percentage) / 100;
}
