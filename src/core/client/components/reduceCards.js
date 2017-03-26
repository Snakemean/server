'use strict'

module.exports={
    reduceCards: reduceCards
}

var pokemoncardlist =  {"cards":[{"name":"Shroomish","number":"15"},{"name":"Breloom","number":"16"},{"name":"Ivysaur","number":"30"},{"name":"Jynx","number":"31"},{"name":"Braixen","number":"9"}]}
console.log('arr is '+JSON.stringify(pokemoncardlist))

function reduceCards(input){
  var arr = pokemoncardlist.cards
  var list = arr.filter(function(e){
    if(e.name.startsWith(input)){return e}
    else {return}
  })
  return list
}

var mask = reduceCards('Br')
console.log('mask is '+JSON.stringify(mask))
