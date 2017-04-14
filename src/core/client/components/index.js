'use strict'

var buildPredictiveSearchList = require('./buildPredictiveSearchList').buildPredictiveSearchList

module.exports={
    buildAPI: buildAPI,
    buildPredictiveSearchList: buildPredictiveSearchList
}

function buildAPI (input){
  var errLabel = 'Error: buildAPI() expects str, obj, or arr, received '
  if(!input){return { err:1, res: errLabel+'nothing'}}
  return 'https://api.pokemontcg.io/v1/cards?name='+input.toLowerCase()
}
