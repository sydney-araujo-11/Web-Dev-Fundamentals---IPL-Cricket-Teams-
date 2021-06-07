console.log("script running")
var teamKey = window.location.search.split('=')[1]
//console.log(teamKey)
var teamData = localStorage.getItem('New-Team') === null ? [] : JSON.parse(localStorage.getItem('New-Team'));
//console.log(teamData)
var container = document.getElementById("container")
var count = 0;
var PlayersFromStorage = localStorage.getItem('New-Player') === null ? [] : JSON.parse(localStorage.getItem('New-Player'));
for(var i = 0; i < PlayersFromStorage.length; i++)
{
    if(teamKey == PlayersFromStorage[i].from){
        count += 1 
    }
    // var largest = 0;
    // var array = PlayersFromStorage[i].price.split("Rs.")
    // var data = array[1].trim();
    // console.log(data)
    // for (j=1; j<=largest;j++){
    //     if (data[i]>largest) {
    //         var largest=data[i];
    //     }
    // }
// console.log(largest)
}
for(var i = 0; i < teamData.length; i++ )
{
    if(teamKey == teamData[i].key)
    {
        //console.log(teamData[i].TeamName)
       
        var teamDetails = document.createElement("div")
        teamDetails.classList.add("team-details")

        var imgWrapper = document.createElement("div")
        imgWrapper.classList.add("img-wrapper")
        
        var img = document.createElement("img")
        img.src = teamData[i].TeamIcon
        imgWrapper.appendChild(img)
        teamDetails.appendChild(imgWrapper)

        var div =  document.createElement("div")
        div.classList.add("details-wrapper")
        var teamName = document.createElement("h2")
        teamName.innerHTML =  teamData[i].TeamName
        var teamPlayers = document.createElement("p")
        teamPlayers.innerHTML = "Total number of Players: " + count

        // var topBatsman = document.createElement("p")
        // topBatsman.innerHTML = "Top Batsman: " 
        // var topBowler= document.createElement("p")
        // topBowler.innerHTML = "Top Bowler: " 
        var championshipsWon= document.createElement("p")
        championshipsWon.innerHTML = "ChampionShips Won: " +teamData[i].ChampionshipsWon

        div.appendChild(teamName)
        div.appendChild(teamPlayers)
        // div.appendChild(topBatsman)
        // div.appendChild(topBowler)
        div.appendChild(championshipsWon)
        teamDetails.appendChild(div)
        container.appendChild(teamDetails)  
    }
}
var PlayersFromStorage = localStorage.getItem('New-Player') === null ? [] : JSON.parse(localStorage.getItem('New-Player'));
for(var i = 0; i < PlayersFromStorage.length; i++)
{
    if(teamKey == PlayersFromStorage[i].from){
        renderPlayerCards(  PlayersFromStorage[i].playerId,
                            PlayersFromStorage[i].playerImage,
                            PlayersFromStorage[i].playerName,
                            PlayersFromStorage[i].from,
                            PlayersFromStorage[i].description,
                            PlayersFromStorage[i].price,
                            PlayersFromStorage[i].status,
                        )
    }
   
}


function renderPlayerCards(id,ImageURL,name,club,role,cost,sts){
    var playerCard = document.createElement("div")
    playerCard.classList.add("player-card")

    var cardLink = document.createElement("a")
    cardLink.href = './player_data.html?key='+id;

    var playerImage = document.createElement("img")
    playerImage.src = ImageURL;
    playerImage.style.width = '100%'

    cardLink.appendChild(playerImage)

    var cardContainer = document.createElement("div")
    cardContainer.classList.add("card-container")

    var playerName = document.createElement("h3")
    playerName.classList.add("player-name")
    playerName.innerHTML = name
    var fromClub = document.createElement("p")
    fromClub.innerHTML = "From: " + club
    var Role = document.createElement("p")
    Role.innerHTML = "Role: "+role
    var Price = document.createElement("p")
    Price.innerHTML = "Price: "+cost
    var Status = document.createElement("p")
    Status.innerHTML = "Status: "+sts
    cardContainer.appendChild(playerName)
    cardContainer.appendChild(fromClub)
    cardContainer.appendChild(Role)
    cardContainer.appendChild(Price)
    cardContainer.appendChild(Status)

    playerCard.appendChild(cardLink)
    playerCard.appendChild(cardContainer)
    container.appendChild(playerCard)

}
function myFunction() {
    var input, filter, cards, cardContainer, title, i;
    input = document.getElementById("search");
    filter = input.value.toUpperCase();
    cardContainer = document.getElementById("container");
    cards = cardContainer.getElementsByClassName("player-card");
    for (i = 0; i < cards.length; i++) {
      title = cards[i].querySelector(".player-name");
      if (title.innerText.toUpperCase().indexOf(filter) > -1) {
        cards[i].style.display = "";
      } else {
        cards[i].style.display = "none";
      }
    }
  }
  