// Unique ID for the className.
let MOUSE_VISITED_CLASSNAME = 'crx_mouse_visited';
const picsArray = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBwCpyjPFRkPN3AYiMuHvC4iCdpr-VrinB5giitaxmdxNurBmw",
  "https://img2.looper.com/img/gallery/the-worst-things-yoda-has-ever-done/yoda-the-quitter-1523454798.jpg",
  "https://www.sideshow.com/storage/product-images/100407/yoda_star-wars_gallery_5c4c03c5cf4ca.jpg",
  "https://starwarsblog.starwars.com/wp-content/uploads/2017/05/yoda-advice-featured-1.jpg",
  "https://upload.wikimedia.org/wikipedia/en/thumb/6/6f/Yoda_Attack_of_the_Clones.png/170px-Yoda_Attack_of_the_Clones.png",
  "https://fsmedia.imgix.net/bb/7d/35/fd/c6ff/4731/b8ef/c58e1428c86b/screen-shot-2017-03-13-at-70118-ampng.png?rect=0%2C0%2C1154%2C577&auto=format%2Ccompress&dpr=2&w=650",
  "https://dg.imgix.net/be-a-yoda-not-a-grinch-en/landscape/be-a-yoda-not-a-grinch-72755009078703b5d7faaefa9b787b8d.jpg?ts=1513795669&ixlib=rails-3.0.2&auto=format%2Ccompress&fit=min&w=700&h=394&dpr=2&ch=Width%2CDPR",
  "https://geekandsundry.com/wp-content/uploads/2016/11/Game-5.png",
  "https://aa1a5178aef33568e9c4-a77ea51e8d8892c1eb8348eb6b3663f6.ssl.cf5.rackcdn.com/p/full/9b57cd1b-8fb8-4d8a-8178-220ff100fc27.jpg",
  "https://www.actualise.co.za/wp-content/uploads/2019/01/Yoda.jpeg",
  "https://geekandsundry.com/wp-content/uploads/2016/11/Game-5.png",
  "https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/7501057372055",
  "https://www.fanthatracks.com/wp-content/uploads/2018/09/ironstudios_yoda_cover.jpg",
  "https://spacequotations.com/wp-content/uploads/2018/09/yoda-810x456.jpg",
  "https://i.pinimg.com/236x/d8/f7/bc/d8f7bc72c1ca0361bb647eaffc501aed--yoda-images-movieposter.jpg",
  "https://nerdist.com/wp-content/uploads/2018/06/YodaConcept-feature-6182018-1.jpg",
  "https://miro.medium.com/max/620/1*XIiHVgiHXm8G6tX_aLjOqw.jpeg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvSULGTKRNhrPxrc2k4ELDNzsPpSQbmXWp1oCDlwvkBT8kiyPL2Q",
  "https://leaderonomics.com/wp-content/uploads/2014/06/yoda.jpg",
  "https://live.staticflickr.com/39/85740389_00e3dfb5bf_b.jpg",
  "https://cdn.images.express.co.uk/img/dynamic/36/590x/secondary/Star-Wars-Yoda-fighting-fit-in-The-Revenge-of-the-Sith-1022808.jpg"
]
// Previous dom, that we want to track, so we can remove the previous styling.
let visited = [];
// let prevDOM = null;
let prevText = null;
// Mouse listener for any move event on the current document.
document.addEventListener('mousemove', function (e) {
    let srcElement = e.srcElement;

    if (srcElement.nodeName == 'IMG' && !visited.includes(srcElement)) {
      visited.push(srcElement)
      console.log(srcElement.src)
      srcElement.src = picsArray[Math.floor(Math.random()*picsArray.length)]

    }
    // Lets check if our underlying element is a IMG.
    if (srcElement.nodeName != 'IMG' && !visited.includes(srcElement)) {
      if(
        srcElement.nodeName == 'H1' || 
        srcElement.nodeName == 'H2' ||
        srcElement.nodeName == 'H3' ||
        srcElement.nodeName == 'H4' ||
        srcElement.nodeName == 'H5' ||
        srcElement.nodeName == 'COMMENT-TEXT' ||
        srcElement.nodeName == 'COMMENT-BODY' ||
        srcElement.nodeName == 'COMMENT-COPY' ||

        srcElement.nodeName == 'P' 

      
      ){
        // if (prevText != null ) {
        //   prevDOM.textContent = prevText;
        // }
    
        // console.log(srcElement.nodeName.textContent)
        // For NPE checking, we check safely. We need to remove the class name
        // Since we will be styling the new one after.
        // if (prevDOM != null) {
        //     prevDOM.classList.remove(MOUSE_VISITED_CLASSNAME);
        // }
        // Add a visited class name to the element. So we can style it.
        // srcElement.classList.add(MOUSE_VISITED_CLASSNAME);

        // The current element is now the previous. So we can remove the class
        // during the next iteration.
        visited.push(srcElement)
        // prevDOM = srcElement;
        prevText = srcElement.textContent

        const newYodaStr = new JediPowers()
        console.log("yoda", newYodaStr)
        newYodaStr.yodafy(srcElement.textContent)

        setTimeout(() => {
          console.log("yoda", newYodaStr.newYodaString)
          if (newYodaStr.newYodaString === null){
            srcElement.textContent = "A joke you are playing on Yoda, hrmmm?"
          }else{
            srcElement.textContent = newYodaStr.newYodaString
          }
          srcElement.style.color = "green";
        }, 2000);

        console.log(srcElement.textContent);
        // srcElement.textContent = "HI"
        console.log("PREV", prevText)
      }

    }
}, false);
