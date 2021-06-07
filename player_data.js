console.log("Script Running")
var playerId = window.location.search.split('=')[1];

var PlayersFromStorage = localStorage.getItem('New-Player') === null ? [] : JSON.parse(localStorage.getItem('New-Player'));
var container = document.getElementById("container")

for(var i = 0; i < PlayersFromStorage.length; i++ )
{
    if(playerId == PlayersFromStorage[i].playerId)
    {
        var playerData = document.createElement("div")
        playerData.classList.add("player_data")

        var playerImg = document.createElement("img")
        playerImg.classList.add("image")
        playerImg.src = PlayersFromStorage[i].playerImage

        var overlay = document.createElement("div")
        overlay.classList.add("overlay")

        var playerDetails = document.createElement("div")
        playerDetails.classList.add("text")

        var playerName = document.createElement("h1")
        playerName.innerHTML =PlayersFromStorage[i].playerName
        var desc = document.createElement("p")
        desc.innerHTML = PlayersFromStorage[i].description
        var club = document.createElement("p")
        club.innerHTML = PlayersFromStorage[i].from
        var Price = document.createElement("p")
        Price.innerHTML = "Price: " + PlayersFromStorage[i].price;

        playerDetails.appendChild(playerName)
        playerDetails.appendChild(desc)
        playerDetails.appendChild(club)
        playerDetails.appendChild(Price)

        overlay.appendChild(playerDetails)

        playerData.appendChild(playerImg)
        playerData.appendChild(overlay)

        container.appendChild(playerData)
    }
}
/**    <div class="player_data">
        <img src="https://i.pinimg.com/originals/28/09/a8/2809a841bb08827603ccac5c6aee8b33.png" alt="Avatar" class="image">
        <div class="overlay">
          <div class="text">
            <h1>Rohit Sharma</h1>
            <p>Batsman</p>
            <p>Playing for RCB</p>
            <p>Price:- Rs.800000</p>
        </div>
    </div>
    </div> */