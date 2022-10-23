//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


// ==============typing

var words = ['Desktop app Development', 'Mobile app Development', 'Game Development', 'Full-stack Development', 'problem-solving'],
    part,
    i = 0,
    offset = 0,
    len = words.length,
    forwards = true,
    skip_count = 0,
    skip_delay = 15,
    speed = 70;
var wordflick = function () {
  setInterval(function () {
    if (forwards) {
      if (offset >= words[i].length) {
        ++skip_count;
        if (skip_count == skip_delay) {
          forwards = false;
          skip_count = 0;
        }
      }
    }
    else {
      if (offset == 0) {
        forwards = true;
        i++;
        offset = 0;
        if (i >= len) {
          i = 0;
        }
      }
    }
    part = words[i].substr(0, offset);
    if (skip_count == 0) {
      if (forwards) {
        offset++;
      }
      else {
        offset--;
      }
    }
    document.getElementById("wordd").innerHTML = part+"|";
   
  },speed);
};


document.addEventListener('DOMContentLoaded', function() {
  wordflick();
}, false);
// ======

// ========project photo
var coll = document.getElementsByClassName("avcollapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("mouseenter", function() {

      var llw = this.parentElement.parentElement.parentElement.offsetWidth;
      var llh = this.parentElement.parentElement.parentElement.offsetHeight;
      console.log(llw);
      this.style.width = llw-10+"px";
      this.style.height = llh+"px";
    
  });
}
for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("mouseleave", function() {

      this.style.width = null;
      this.style.height = null;
   
  });
}

var coll2 = document.getElementsByClassName("rounded");
var i2;

for (i2 = 0; i2 < coll2.length; i2++) {
  coll2[i2].addEventListener("click", function() {

    if (this.style.width){
        this.style.width = null;
        console.log("done");
    } else {
        this.style.width = "300px";
        console.log("done2");
    } 
  });
}