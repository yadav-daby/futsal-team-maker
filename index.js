const express = require('express')
const app = express();
const port = 8000;

let list = [
    {
        name: 'Nishal',
        rating: 8
    },
    {
        name: 'Abay',
        rating: 8
    },
    {
        name: 'Shylesh',
        rating: 3
    }, {
        name: 'Kushal',
        rating: 5
    }, {
        name: 'Yadav',
        rating: 5
    },
    {
        name: 'Vikram',
        rating: 5
    }, {
        name: 'Yudish',
        rating: 6
    }, {
        name: 'Yoven',
        rating: 6
    }, {
        name: 'Avishek',
        rating: 5
    }, {
        name: 'Vidur',
        rating: 5
    }
]

list = list.sort(() => Math.random() - 0.5)

// get total rating of players
var totalRating = 0
for (let player of list) {
    totalRating = totalRating + player.rating
}

console.log("Total Rating: " + totalRating)

// find the balance rate
var teamBalanceRating = totalRating / 2

// balance both team equally
var teamARating = 0
var listOfPlayersTeamA = []
var listOfPlayersTeamB = []

for (let teamPlayer of list) {
    if (teamARating < teamBalanceRating && listOfPlayersTeamA.length < 5) {
        listOfPlayersTeamA.push(teamPlayer)
        teamARating = teamARating + teamPlayer.rating
    } else {
        listOfPlayersTeamB.push(teamPlayer)
    }
}

var fullTeam = [
    {
        teamA : listOfPlayersTeamA
    },
    {
        teamB : listOfPlayersTeamB
    }
]

console.log(listOfPlayersTeamA)
console.log(listOfPlayersTeamB)

app.get('/', (req, res) => {
  res.send(fullTeam)
});

app.listen(port, () => {
  console.log(`Futsal team maker app listening on port ${port}!`)
});