class JediPowers{
  constructor(){
    this.author = "Joseph Wolensky & Edwin Lin"
    this.newYodaString = null;
  }

  yodafy(inputString){
    // console.log("THIS", this)
    // console.log(`this thang top: ${this.newYodaString}`)
    partOfSpeechDetector(inputString)
    const wordTypeArray = [];

    function partOfSpeechDetector(inputSentence) {
      const splitWordsArray = inputSentence.split(' ');
      for(let i = 0 ; i < splitWordsArray.length ; i +=1){
        const wordToCheck = splitWordsArray[i];
        $.get(`https://dictionaryapi.com/api/v3/references/collegiate/json/${wordToCheck}?key=5fc2459a-0842-4952-a6d9-78d2b8ecc1ca` , 
            function( data ) {
              const wordTypeResult = data[0].fl;
              const wordTypeResultAlt = data[1].fl
              const processedWordObj = {};
              processedWordObj.word = splitWordsArray[i];
              processedWordObj.type = wordTypeResult;
              processedWordObj.altType = wordTypeResultAlt;
              wordTypeArray[i] = processedWordObj;
        });
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

    let user = {
      firstName: "John",
      sayHi() {
        alert(`Hello, ${this.firstName}!`);
      }
    };
    
    setTimeout(()=>{
      this.newYodaString = yodaSpeechParser(wordTypeArray);
    },500)

    
  }

}






