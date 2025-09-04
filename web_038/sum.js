let n = parseInt(prompt("Enter a number:"));  // take input from user
let sum = 0;

for (let i = 0; i <= n; i++) {
    sum = sum + i;
}

console.log("The sum of " + n + " numbers is: " + sum);
// alert("The sum of " + n + " numbers is: " + sum); // also show in alert
