'use strict'

module.exports={
  buildPredictiveSearchList: buildPredictiveSearchList
}
/*  build a div list to display results of predictive search
*
* @params arr [obj<,obj>]                            the array of input objects
* @params obj {type,label}
* @params obj.type  str <'card', 'number', 'expansion'> the type of input being matched
* @params obj.label str                              the text to display on the list
*
* @const 'list_' the DOM id the list item will be referenced by
*/

function buildPredictiveSearchList(arr){
  var errLabel = 'Error: buildPredictiveSearchList() expects [obj], received '
  if(!arr){return { err:1, res: errLabel+'nothing'}}
  var res = ''
  var cards = ''
  var numbers = ''
  var exps = ''
  var i = 0
  var len = arr.length
  while(i<len){
    if(arr[i].type=='card'){
        cards +='<div id="list_'+i+'" class="list-card">'+arr[i].name+'</div>'
    }
    else if(arr[i].type=='number'){
        numbers +='<div id="list_'+i+'" class="list-number">'+arr[i].name+'</div>'
    }
    else if(arr[i].type=='expansion'){
        exps +='<div id="list_'+i+'" class="list-expan">'+arr[i].name+'</div>'
    }
    i++
  }
  res = cards + numbers + exps
  return res
}
