function theBeatlesPlay(musicians, instruments) {
  var empArray = [];
  for (let i = 0; i < musicians.length; i++) {
    empArray.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return empArray
}

function johnLennonFacts(facts) {
  var i = 0;
  while (i < facts.length) {
    facts[i] += "!!!";
    i++;
  }
}