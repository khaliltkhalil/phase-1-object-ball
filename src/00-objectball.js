function gameObject() {
    const obj = {
        home: {
            teamName:"Brooklyn Nets",
            color:["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebound: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1

                },
                "Reggie Evans": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebound: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10

                },
                "Brook Lopez": {
                    number: 9,
                    shoe: 16,
                    points: 22,
                    rebound: 93,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1

                },
                "Mason Plumlee": {
                    number: 14,
                    shoe: 60,
                    points: 22,
                    rebound: 40,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1

                },
                "Jason Terry": {
                    number: 3,
                    shoe: 50,
                    points: 22,
                    rebound: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1

                }
            }
        },
        away: {
            teamName:"Charlotte Hornets",
            color:["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebound: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1

                },
                "Bismak Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebound: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10

                },
                "DeSagna Diop": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebound: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1

                },
                "Ben Gordon": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebound: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1

                },
                "Brendan Haywood": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebound: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1

                }
        }   }
    }
    return obj;
}

function numPointsScored(playerName) {
    const game = gameObject();
    for(let gameKey in game){
        const team = game[gameKey];
        for(let teamKey in team){
            if(teamKey === 'players') {
                const players = team[teamKey];
                for(let player in players) {
                    if(player === playerName) {
                        return players[player]["points"];
                    }
                }
            }
        }
    }
}

function shoeSize(playerName) {
    const game = gameObject();
    for(let gameKey in game){
        const team = game[gameKey];
        for(let teamKey in team){
            if(teamKey === 'players') {
                const players = team[teamKey];
                for(let player in players) {
                    if(player === playerName) {
                        return players[player]["shoe"];
                    }
                }
            }
        }
    }
}

function teamColors(teamName) {
    const game = gameObject();
    for(let gameKey in game) {
        const team = game[gameKey];
        if(team["teamName"] === teamName) {
            return team["color"];
        }
        
    }
}

function teamNames() {
    const game = gameObject();
    const teamNames = [];
    for(let gameKey in game) {
        teamNames.push(game[gameKey]['teamName'])
    }
    return teamNames;
}

function playersNumbers(teamName){
    const game = gameObject();
    const plyrNum = [];
    for(let gameKey in game) {
        const team = game[gameKey]
        if(team["teamName"] === teamName) {
            const players = team["players"];
            for(let player in players) {
                plyrNum.push(players[player]["number"]);
            }
        }
    }
    return plyrNum;
}
function playerStats(playerName) {
    const game = gameObject();
    for(let team in game) {
        const players = game[team]["players"];
        for(let player in players) {
            if (player === playerName) {
                return players[player];
            }
        }
    }
}



function playerWithLargestShoe(){
    
    let maxShoePlayer = {
        shoe: 0
    }
    const game = gameObject();
    for(let team in game) {
        const players = game[team]["players"];
        for(let player in players) {
           if(players[player]['shoe'] > maxShoePlayer['shoe']){
            maxShoePlayer = players[player];
           }
        }
    }
    return maxShoePlayer;
}
function bigShoeRebound() {
    const maxShoePlayer = playerWithLargestShoe();
    return maxShoePlayer['rebound'];
}

console.log(numPointsScored("Brook Lopez"));
console.log(shoeSize("Brook Lopez"));
console.log(teamColors("Brooklyn Nets"));
console.log(teamNames());
console.log(playersNumbers("Brooklyn Nets"));
console.log(playerStats("Jason Terry"));
console.log(bigShoeRebound())
