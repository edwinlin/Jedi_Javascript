const inputTestSentence = 'Create a perimeter around the survivors';
const inputTestSentence2 = 'One does not cross the street';
const inputTestSentence3 = "You have much to learn"
const wordTypeArray = [];

function partOfSpeechDetector(inputSentence) {
  const splitWordsArray = inputSentence.split(' ');
  for(let i = 0 ; i < splitWordsArray.length ; i +=1){
    const wordToCheck = splitWordsArray[i];
    fetch(`https://dictionaryapi.com/api/v3/references/collegiate/json/${wordToCheck}?key=5fc2459a-0842-4952-a6d9-78d2b8ecc1ca`)
    .then(resp=>resp.json())
    .then(data=>{
      const wordTypeResult = data[0].fl;
      const wordTypeResultAlt = data[1].fl
      const processedWordObj = {};
      processedWordObj.word = splitWordsArray[i];
      processedWordObj.type = wordTypeResult;
      processedWordObj.altType = wordTypeResultAlt;
      wordTypeArray[i] = processedWordObj;

    })
    // $.get(`https://dictionaryapi.com/api/v3/references/collegiate/json/${wordToCheck}?key=5fc2459a-0842-4952-a6d9-78d2b8ecc1ca` , 
    //     function( data ) {
    //       const wordTypeResult = data[0].fl;
    //       const wordTypeResultAlt = data[1].fl
    //       const processedWordObj = {};
    //       processedWordObj.word = splitWordsArray[i];
    //       processedWordObj.type = wordTypeResult;
    //       processedWordObj.altType = wordTypeResultAlt;
    //       wordTypeArray[i] = processedWordObj;
    // });
  }
}
// input for processed array
function yodaSpeechParser(input) {
  let halfPoint = null;
  if(input.length %2 === 0) halfPoint = Math.floor(input.length /2);
  else halfPoint = Math.ceil((input.length /2)-1);
  const secondHalf = input.slice(halfPoint,input.length)
  const firstHalf = input.slice(0,halfPoint)
  const wordObjectSorted = secondHalf.concat(firstHalf);
  const yodaWordsArray = [];
  for(let i = 0 ; i < wordObjectSorted.length ; i +=1){
      if(i === halfPoint) yodaWordsArray.push(wordObjectSorted[i].word +',');
      else if(i === wordObjectSorted.length-1) yodaWordsArray.push(wordObjectSorted[i].word +'...');
      else yodaWordsArray.push(wordObjectSorted[i].word);
  }
  return yodaWordsArray.join(' ');
}


partOfSpeechDetector(inputTestSentence3);


// const sortedExampleArrayVersion2 = [
//   {word: "You", type: "pronoun", altType: "pronoun"},
//   {word: "have", type: "verb", altType: "noun"},
//   {word: "much", type: "adjective", altType: "adverb"},
//   {word: "to", type: "preposition", altType: "adverb"},
//   {word: "learn", type: "verb", altType: undefined}
// ]

// const sortedExampleArray = [
//   {word: "One", type: "adjective", altType: "noun"},
//   {word: "does", type: undefined, altType: "verb"},
//   {word: "not", type: "adverb", altType: "noun"},
//   {word: "cross", type: "noun", altType: "verb"},
//   {word: "the", type: "definite article", altType: "adverb"},
//   {word: "street", type: "noun", altType: "adjective"}

// ];

// console.log(yodaSpeechParser(sortedExampleArrayVersion2))
// console.log(yodaSpeechParser(sortedExampleArray))

//console.log(sortedExampleArrayVersion2[0])

setTimeout(function(){
  console.log(yodaSpeechParser(wordTypeArray));
}, 1000);




