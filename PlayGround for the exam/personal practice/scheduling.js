let a = 1;

// const increase = function () {
//     console.log(a);
//     a++;
// }

// const timeout = setInterval(function () {
//     increase();
//     if (a == 6) {
//         clearInterval(timeout);
//     }
// }, 1000);

function printBetween(from, to) {
    let current = from;
    let timeID = setInterval(() => {
        console.log(current);
        if (current == to) {
            clearInterval(timeID);
        }
        current++;
    }, 1000);
}


printBetween(2, 8);

