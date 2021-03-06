//TODO Make it work without temporary access
const apiData = {
  url: 'https://cors-anywhere.herokuapp.com/https://api.steampowered.com/ISteamUser/',
  type: 'E611608D49739DF5CFE77EE05DA49549',
  id: '76561198042014259',
}

const {
  url,
  type,
  id
} = apiData

//doesnt fetch anymore
const apiUrl = `${url}GetPlayerSummaries/v0002/?key=${type}&steamids=${id}`

fetch(apiUrl)
  .then((data) => {
    if (data.ok) {
      return data.json()
    }
    throw new Error('Response not ok.');
  })
  .then(steaminfo => generateHtml(steaminfo))
  .catch(error => console.error('Error:', error))


const generateHtml = (data) => {
  //console.log(data)
  var player = data.response.players[0]
  var state = player.personastate
  var img = player.avatarfull
  var game = player.gameextrainfo
  const html = `
        <table class="details">
        <tr>
        <td>STATUS: </td>
        <td id="personastate${state == 1 && game == undefined ? 1 : state == 0 ? 0 : 6}">
        ${state == "0" ? "OFFLINE" : state == "1" && game == undefined  ? "ONLINE" : game}</td></tr>

        <img src=${img} class="avatar" id="personastate${state == 1 && game == undefined ? 1 : state == 0 ? 0 : 6}">
        </table>
    `
  console.log(player.timecreated)
  console.log(game)
  console.log(state);
  const newDiv = document.querySelector('.usercontent')
  newDiv.innerHTML = html
}
