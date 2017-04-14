'use strict'

module.exports={
    reduceInput: reduceInput
}

var pokemoncardlist = [
{"type": "card", "name":"Shroomish","number":"15", "set":"Primal Clash"},
{"type": "set", "name":"Primal Clash", "cards": ["Shroomish"]},
{"type": "card", "name":"Ivysaur","number":"30", "set":"Radiant Collection"},
{"type": "card", "name":"Jynx","number":"31", "set":"Roaring Skies"},
{"type": "card", "name":"Braixen","number":"9", "set":"Sun & Moon"},
{"type": "card", "name":"Breloom","number":"16", "set":"Primal Clash"}
]

var threshold = 3

console.log('arr is '+JSON.stringify(pokemoncardlist))

function reduceInput(input){
  var count = 0
  var arr = pokemoncardlist
  var list = arr.filter(function(e){
	while(count<threshold){
  	if(e.name.toLowerCase().startsWith(input.toLowerCase()))
    	{count++;return e}
  	else {return}
	}
  })
  if (count<threshold){return list}
  else{return null}
}

function reduceUI(input){

}

function reduceAPI(input){

}
