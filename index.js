console.log("Script is Ready!!")
//Getting data from Local Storage
var TeamsFromStorage = localStorage.getItem('New-Team') === null ? [] : JSON.parse(localStorage.getItem('New-Team'));
for(var i = 0; i < TeamsFromStorage.length; i++ )
{
    renderTeamCard( TeamsFromStorage[i].key,
                    TeamsFromStorage[i].TeamIcon,
                    TeamsFromStorage[i].TeamName,
                   // TeamsFromStorage[i].ChampionshipsWon,
                    )
}

function renderTeamCard(key,teamURL,teamname){
    var container = document.getElementById('container')
    var mainCard = document.createElement("div")
    mainCard.classList.add("card")

    var teamImg = document.createElement("img")
    teamImg.classList.add("img-")
    teamImg.src = teamURL;

    var teamName= document.createElement("p")
    teamName.classList.add("team-name")
    teamName.innerHTML = teamname;

    var overlay = document.createElement("div")
    overlay.classList.add("overlay")

    var button = document.createElement("div")
    button.classList.add("button")
    var link = document.createElement("a")
    link.href = './team_details.html?key='+key;
    link.innerHTML="GO TO TEAM"
    button.appendChild(link)

    mainCard.appendChild(teamName)
    mainCard.appendChild(teamImg)
    mainCard.appendChild(overlay)
    mainCard.appendChild(button)

    container.appendChild(mainCard)
}
function myFunction() {
    var input, filter, cards, cardContainer, title, i;
    input = document.getElementById("search");
    filter = input.value.toUpperCase();
    cardContainer = document.getElementById("container");
    cards = cardContainer.getElementsByClassName("card");
    for (i = 0; i < cards.length; i++) {
      title = cards[i].querySelector(".team-name");
      if (title.innerText.toUpperCase().indexOf(filter) > -1) {
        cards[i].style.display = "";
      } else {
        cards[i].style.display = "none";
      }
    }
  }
  