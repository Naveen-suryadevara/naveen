var allstatistics = [];

function Statistics(players) {

    if (typeof players == 'string') {
        console.log(players);
    } else if (typeof players == 'object') {

        for (var item in players) {

            console.log(item + ":" + players[item]);
        }
    }
}

function getinput(games, callback) {
    allstatistics.push(games);
    callback(games);
}
getinput({ name: 'Ram', speciality: 'volleyball' }, Statistics);