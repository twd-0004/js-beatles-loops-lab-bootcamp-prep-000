function theBeatlesPlay(musicians, instruments) {
  var empArray = [];
  for (let i = 0; i < musicians.length; i++) {
    empArray.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return empArray
}