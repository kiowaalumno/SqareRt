function findSquareRoot() {
    var theNumber = Number(prompt("Pick a number"));
    var squareRoot = theNumber * theNumber;
    document.getElementById("demo").innerHTML = squareRoot;
    console.log("Your number is the square root of " +
                                    theNumber * theNumber);
}