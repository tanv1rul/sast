const span = document.getElementById('cute');
var count = 1

function cute(){

    count = count+1

    if (count % 2 == 0) {
        span.textContent = 'Pochuuuu';
    } else {
        span.textContent = "Cute"
    }
}