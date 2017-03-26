'use strict'

module.exports={
    buildAPI: buildAPI
}

var searchbar = document.getElementById('searchbar')
searchbar.addEventListener('input', function(){
    console.log('searchbar.innerText is '+searchbar.value)
    var reduceCards = require('./reduceCards.js').reduceCards
    var list = reduceCards(searchbar.value)
    console.log('Masked list is '+JSON.stringify(list))
    var threshold = 2 // use 2 for dev when list is already short
  // attachList is local for now so it won't throw errors
  //       it needs to move out to /components
  if(list.length<threshold){
    attachList(list)
  }
})

function buildAPI (input){
  var errLabel = 'Error: buildAPI() expects str, obj, or arr, received '
  if(!input){return { err:1, res: errLabel+'nothing'}}
  return 'https://api.pokemontcg.io/v1/cards?name='+input.toLowerCase()
}


/*
*  This needs to be broken out into its own module
*
* @params list [] the valid options available to the user
*
* @const 'searchbar' the DOM id the list will attach to
*/
function attachList(list){
    // this is where we inject the llist onto the DOM id
}
