// const words = document.getElementById("words")

// function addNum(){
//   let changeWords = Number(words.innerHTML)
//   changeWords++
//   words.innerHTML = changeWords
// }

// function minusNum(){
//   let changeWords = Number(words.innerHTML)
//   if(changeWords > 0){
//     changeWords--
//     words.innerHTML = changeWords
//   }else{
//     words.innerHTML = changeWords
//   }
// }







//   `;
// }

// // ✅ Handle previous image
// function reduceWords() {
//   index = (index - 1 + imgSlide.length) % imgSlide.length;
//   slide.innerHTML = `
//     <img src="${imgSlide[index].src}" alt="Slide Image">
//     <button onclick="reduceWords()">Previous</button>
//     <button onclick="addWords()">Next</button>
//   `;
// }






const slide = document.getElementById("slider-img")



const imgSlide = [
   "./appliance.gif",
   "./img.vic.gif",
   "./kid.gif" 
];

let index = 0;

function next(){
  index++
  index = index % imgSlide.length
    slide.src = imgSlide[index]
    // index++
    // if(index >= imgSlide.length){
    //     index = 0
    //     slide.src = imgSlide[index]
    // }
    
  };

function prev(){
  index--
  index = index % imgSlide.length
    slide.src = imgSlide[index]
};