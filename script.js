// // building the constructor function

// const TypeWriter = function (txtElement, words, wait = 3000) {
//   this.txtElement = txtElement;
//   this.words = words;
//   this.txt = '';
//   this.wordIndex = 0;
//   this.wait = parseInt(wait, 10);
//   this.type();
//   this.isDeleting = false;
// };

// // Type Method
// TypeWriter.prototype.type = function () {
//   // console.log('Hello')
//   const current = this.wordIndex % this.words.length;
//   // get full text of current word
//   const fullTxt = this.words[current];
//   //   console.log(fullTxt);
//   // check if deleting the word
//   if (this.isDeleting) {
//     // remove a character
//     this.txt = fullTxt.substring(0, this.txt.length - 1);
//   } else {
//     // add a character
//     this.txt = fullTxt.substring(0, this.txt.length + 1);
//   }

//   //   output text into the header/span element
//   this.txtElement.innerHTML = `<span class='txt'>${this.txt}</span>`;

//   // setting the type speed - dynamic depending on function
//   let typeSpeed = 300;

//   if (this.isDeleting) {
//     typeSpeed /= 2; //dividing typeSpeed by 2 in shorthand
//   }

//   //   once word has finished loading

//   if (!this.isDeleting && this.txt === fullTxt) {
//     // word will pause once loaded
//     typeSpeed = this.wait;
//     //set delete to true
//     this.isDeleting = true;
//   } else if (this.isDeleting && this.txt === '') {
//     this.isDeleting = false;
//     // run the next word
//     this.wordIndex++;
//     // pause loading before starting the next word
//     typeSpeed = 500;
//   }

//   setTimeout(() => this.type(), typeSpeed);
// };
// // init on DOM load - need event handler

// document.addEventListener('DOMContentLoaded', init);

// // init app

// function init() {
//   const txtElement = document.querySelector('.txt-type');
//   const words = JSON.parse(txtElement.getAttribute('data-words'));
//   const wait = txtElement.getAttribute('data-wait');

//   // init TypeWriter

//   new TypeWriter(txtElement, words, wait);
// }

// ALT METHOD - USING ES6 CLASSES

class TypeWriter {
  constructor(txtElement, words, wait = 3000) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = '';
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
  }

  type() {
    const current = this.wordIndex % this.words.length;
    // get full text of current word
    const fullTxt = this.words[current];
    //   console.log(fullTxt);
    // check if deleting the word
    if (this.isDeleting) {
      // remove a character
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      // add a character
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    //   output text into the header/span element
    this.txtElement.innerHTML = `<span class='txt'>${this.txt}</span>`;

    // setting the type speed - dynamic depending on function
    let typeSpeed = 300;

    if (this.isDeleting) {
      typeSpeed /= 2; //dividing typeSpeed by 2 in shorthand
    }

    //   once word has finished loading

    if (!this.isDeleting && this.txt === fullTxt) {
      // word will pause once loaded
      typeSpeed = this.wait;
      //set delete to true
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      // run the next word
      this.wordIndex++;
      // pause loading before starting the next word
      typeSpeed = 500;
    }

    setTimeout(() => this.type(), typeSpeed);
  }
}


// init on DOM load - need event handler

document.addEventListener('DOMContentLoaded', init);

// init app

function init() {
  const txtElement = document.querySelector('.txt-type');
  const words = JSON.parse(txtElement.getAttribute('data-words'));
  const wait = txtElement.getAttribute('data-wait');

  // init TypeWriter

  new TypeWriter(txtElement, words, wait);
}