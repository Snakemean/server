var expect = require('chai').expect
var input
var label = ""
var mes = ""

describe('buildPredictiveSearchList()', function() {
label = 'Error: buildPredictiveSearchList()'
  it('buildPredictiveSearchList() should return err if no args', function() {
    mes = label+' expects [obj], received nothing'
    expect(buildPredictiveSearchList().err).to.equal(1)
    expect(buildPredictiveSearchList().res).to.equal(mes)
  })
  it('buildPredictiveSearchList() should return valid div for valid card', function() {
    input = [{type:'card', label:'Charizard'}]
    mes = '<div id="list_0" class="list-card">Charizard</div>'
    expect(buildPredictiveSearchList(input)).to.equal(mes)
  })
  it('buildPredictiveSearchList() should return valid div for valid set', function() {
    input = [{type:'set', label:'Charizard'}]
    mes = '<div id="list_0" class="list-set">Charizard</div>'
    expect(buildPredictiveSearchList(input)).to.equal(mes)
  })
  it('buildPredictiveSearchList() should return valid div for valid expansion', function() {
    input = [{type:'expansion', label:'Charizard'}]
    mes = '<div id="list_0" class="list-expan">Charizard</div>'
    expect(buildPredictiveSearchList(input)).to.equal(mes)
  })
  it('buildPredictiveSearchList() should return 3 valid divs for 3 valid objs', function() {
    input = [{type:'card', label:'Charizard'},{type:'set', label:'A Set Name'},{type:'expansion', label:'Expansion'}]
    mes = '<div id="list_0" class="list-card">Charizard</div><div id="list_1" class="list-set">A Set Name</div><div id="list_2" class="list-expan">Expansion</div>'
    expect(buildPredictiveSearchList(input)).to.equal(mes)
  })
  it('buildPredictiveSearchList() should sort valid divs by type for 3 valid but unsorted objs', function() {
    input = [{type:'expansion', label:'Expansion'},{type:'card', label:'Charizard'},{type:'set', label:'A Set Name'}]
    mes = '<div id="list_1" class="list-card">Charizard</div><div id="list_2" class="list-set">A Set Name</div><div id="list_0" class="list-expan">Expansion</div>'
    expect(buildPredictiveSearchList(input)).to.equal(mes)
  })
})
