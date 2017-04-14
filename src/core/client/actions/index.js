'use strict'

var reducers = require('../reducers')
var components = require('../components')

module.exports={
  getInput: getInput,
  attachList: attachList,
  attachDataInput: attachDataInput
}

function getInput(){

  searchbar.addEventListener('input', function(){
    console.log('into input capture, input is '+searchbar.value)
    var maskedlist = reducers.reduceInput(searchbar.value)
    console.log('masked list is '+ JSON.stringify(maskedlist))
    var dropdown = document.getElementById('dropdown')
    if (maskedlist != null) {
      attachList(maskedlist)
    } else {
      while (dropdown.firstChild) {
       dropdown.removeChild(dropdown.firstChild);
    }

    }
  })
}

function attachList(maskedlist){
  var result = components.buildPredictiveSearchList(maskedlist)
  var dropdown = document.getElementById('dropdown')
  dropdown.innerHTML = result
}

function attachDataInput(){

}
