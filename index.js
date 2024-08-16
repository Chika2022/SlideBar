var progress = document.getElementById("progress");
var prev = document.getElementById("prev");
var next = document.getElementById("next");
var circle = document.querySelectorAll(".circle");

var currentActive = 1;

// next
next.addEventListener("click", function () {
  currentActive++;
  if (currentActive > circle.length) {
    currentActive = circle.length;
  }
  update();
});

// prev
prev.addEventListener("click", function () {
  currentActive--;
  if (currentActive < 1) {
    currentActive = 1;
  }
  update();
});

function update() {
  circle.forEach(function (circle, idx) {
    if (idx < currentActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  var actives = document.querySelectorAll(".active");
  progress.style.width =
    ((actives.length - 1) / (circle.length - 1)) * 100 + "%";

  if (currentActive === 1) {
    prev.disabled = true;
  } else if (currentActive === circle.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
}
