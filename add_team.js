var addTeam = document.getElementById("addTeam");

var addTeamForm = document.getElementById('addTeam-form');
addTeamForm.onsubmit = function(e) {
    e.preventDefault();
}

var teamName = document.getElementById('teamname');
var shortTeamName = document.getElementById('short-teamname');
var championShipsWon = document.getElementById('championships');
var teamIcon = document.getElementById('teamicon');

function myFunction(){
    var Team_name = teamName.value;
    var Short_Team_name = shortTeamName.value;
    var championships_Won= championShipsWon.value;
    var Team_icon = teamIcon.value;

    if (Team_name == "") {
        alert("Please enter Team Name");
        return false;
    }
    else if (Short_Team_name == "") {
        alert("Please enter Short-form for Team Name");
        return false;
    }
    else if (championships_Won == "") {
        alert("Please enter ChampionShips Won");
        return false;
    }
    else if (Team_icon == "") {
        alert("Please enter Team Icon URL ");
        return false;
    }
   else {
     var obj = {
        TeamName: Team_name,
        key: Short_Team_name,
        ChampionshipsWon: championships_Won,
        TeamIcon: Team_icon,
    }

    var AddTeam = localStorage.getItem('New-Team') === null ? [] : JSON.parse(localStorage.getItem('New-Team'));
    AddTeam.push(obj);
    localStorage.setItem("New-Team", JSON.stringify(AddTeam));

    alert("New Team has been successfully added")
  }
   
}