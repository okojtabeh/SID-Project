/*
This code snippet is created by Joko Purnomo on Sat, 18 Jan 2020 
For Purpose of SID Recruitment

Description:
Alice is playing an arcade game and wants to climb to the top of the leaderboard and wants to track her ranking. 
The game uses Dense Ranking, so its leaderboard works like this:
1. The player with the highest score is ranked number 1 on the leaderboard.
2. Players who have equal scores receive the same ranking number, and the next player(s) receive the immediately following ranking number.
*/

function main() {
    //number of all players
    var n = parseInt(readLine());
    //all players' scores in DECREASING order
    scores = readLine().split(' ');
    scores = scores.map(Number);
    //number of games alice plays
    var m = parseInt(readLine());
    //alice's game scores
    alice = readLine().split(' ');
    alice = alice.map(Number);
    //put scores in temp buffer
    var temp = scores[0];
    var vals = [temp];
    for(var i=1; i<n; i++){
        if(scores[i]!=temp){
            temp = scores[i];
            vals.push(temp);
        }
    }
    //loop through alice's game and compare her score vs scores in temp buffer
    var j = vals.length-1;
    for(var i=0; i<m; i++){
        while(vals[j]<=alice[i]){
            j--;
        }
        console.log(j+2);
    }

}

process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

