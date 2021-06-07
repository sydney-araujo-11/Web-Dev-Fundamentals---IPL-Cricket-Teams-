var addTeam = document.getElementById("add-player");

var addPlayerForm = document.getElementById('addPlayer-form');
addPlayerForm.onsubmit = function(e) {
    e.preventDefault();
}

var playerName = document.getElementById('playername');
var whichTeam = document.getElementById('whichteam');
var price = document.getElementById('price');
var status_ = document.getElementById('status');
var playerImage = document.getElementById('player-image');
var description = document.getElementById('description');

// function getCurrentTimein12HourFormat() {
//     var date = new Date();
//     var hours = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
//     hours = hours < 10 ? "0" + hours : hours;
//     var minutes = date.getMinutes();
//     minutes = minutes < 10 ? "0" + minutes : minutes;
//     var seconds = date.getSeconds();
//     seconds = seconds < 10 ? "0" + seconds : seconds;
//     var suffix = date.getHours() >= 12 ? "PM" : "AM";

//     return hours + ":" + minutes + ":" + seconds + " " + suffix;
// }

function myFunction(){
    var playerId = new Date().getTime();
    var Player_name = playerName.value;
    var which_team = whichTeam.value;
    var Price= price.value;
    var status = status_.value;
    var PlayerImage = playerImage.value;
    var Description = description.value;
    if (Player_name == "") {
        alert("Please enter Player Name");
        return false;
    }
    else if (Price == "") {
        alert("Please enter Price for the Player");
        return false;
    }
    else if (PlayerImage == "") {
        alert("Please enter Player Photo URL ");
        return false;
    }
    else if (Description == "") {
        alert("Please enter Description");
        return false;
    }
    else {
        var obj = {
            playerId: playerId,
            playerName: Player_name,
            from: which_team,
            price: Price,
            status: status,
            playerImage: PlayerImage,
            description: Description,
        }
    
        var AddPlayer= localStorage.getItem('New-Player') === null ? [] : JSON.parse(localStorage.getItem('New-Player'));
        AddPlayer.push(obj);
        localStorage.setItem("New-Player", JSON.stringify(AddPlayer));
    
        alert("New Player has been Added")
    }
  
}