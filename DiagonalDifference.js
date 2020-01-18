/*
This code snippet is created by Joko Purnomo on Sat, 18 Jan 2020 
For Purpose of SID Recruitment

Description:
Given a square NxN matrix, we need to calculate the absolute difference between the sums of its diagonals.
*/

function CalcDiagonalDifference(input) {
    //get size of matrix's lines
    var lines = input.split("\n");
    var N = parseInt(lines[0]);
    
    var Diag1 = 0;
    var Diag2 = 0;
    //loop through each line and grab each diagonal's value
    for(i = 1; i <= N; i++) {
        var line = lines[i].split(" ");
    
        Diag1 = Diag1 + parseInt(line[i - 1]);
        Diag2 = Diag2 + parseInt(line[N - i]);
    }
    //calc absolute value
    console.log(Math.abs(Diag1-Diag2));
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});