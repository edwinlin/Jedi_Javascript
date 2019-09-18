const yodaTestSentence = 'Create a perimeter around the survivors'

const splitWords = yodaTestSentence.split(' ');



console.log(splitWords)
const testURL = `https://dictionaryapi.com/api/v3/references/collegiate/json/${splitWords[0]}?key=82e0af33-78ba-4492-bdbd-30f85423f7be`;

function partOfSpeechDetector(word) {
  
}

$.get( testURL, function( data ) {

    console.log(data[0].fl);

  });