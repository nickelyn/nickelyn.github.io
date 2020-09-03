console.log('This would be the main JS file.');
/*
function getSteamProfile() {
  var id = '76561198042014259'
  var key = '8DDDBE9C6A344ECDA9EC11B6BA6C38DD'
  var url = `https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=${key}&steamids=${id}`
*/

const api = {

  url: 'https://api.steampowered.com/ISteamUser/',
  key: '8DDDBE9C6A344ECDA9EC11B6BA6C38DD',
  steamid: '76561198042014259',
}

const {url, key, steamid} = api
const ProfileURL = `${url}GetPlayerSummaries/v0002/?key=${key}&steamids=${steamid}`
console.log(ProfileURL)

fetch('https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=D719B3760729EF64236A0237802FDEF2&steamids=76561198042014259')
   .then( response => response.json() )
   .then( data => console.log(data) )
/*fetch(ProfileURL)
  .then( (data) => console.log(data.json()))
  .then( (personaState) => console.log(pokemon.json()))
*/
