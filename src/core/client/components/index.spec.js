var expect = require('chai').expect
var input
var label = ""
var mes = ""

var buildAPI = require('./index.js').buildAPI

describe('builAPI()', function() {
label = 'Error: buildAPI()'
  it('buildAPI() should return err if no args', function() {
    mes = label+' expects str, obj, or arr, received nothing'
    expect(buildAPI().err).to.equal(1)
    expect(buildAPI().res).to.equal(mes)
  })
  it('buildAPI() should return str for str', function() {
    mes = 'https://api.pokemontcg.io/v1/cards?name=charizard'
    expect(buildAPI('Charizard')).to.equal(mes)
  })
  it('buildAPI() should return str for str', function() {
    mes = 'https://api.pokemontcg.io/v1/cards?name=charizard&number=11'
    expect(buildAPI('Charizard 11')).to.equal(mes)
  })
})

var reduceCards = require('./reduceCards.js').reduceCards
describe('reduceCards()', function() {
  it('reduceCards() should return 2 cards for str "Br"', function() {
    mes = [{"name":"Breloom","number":"16"},{"name":"Braixen","number":"9"}]
    expect(reduceCards('Br')).to.equal(JSON.stringify(mes))
  })
})
