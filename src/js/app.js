// src: https://tobiasahlin.com/moving-letters/#11

const personalDescriptors = ["Software Engineer 👨‍💻", "Web Developer 🖥", "Problem Solver ✅" , "Nerd 🤓"]

let currDescriptor = 0; 
const descriptor = document.querySelector('.letters')

// Wrap every letter in a span
const textWrapper = document.querySelector(".dynamic-text .letters");
textWrapper.innerHTML = textWrapper.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);


anime
  .timeline({ 
    loop: 1,
    begin: (anim) => {
    },
    complete: (anim) => {
      currDescriptor =
      currDescriptor < personalDescriptors.length - 1
      ? currDescriptor + 1
      : 0;
      descriptor.textContent = personalDescriptors[currDescriptor]
      anim.restart()
    },
    })
  .add({
    targets: ".dynamic-text .line",
    scaleX: [0, 1],
    opacity: [0.5, 1],
    easing: "easeInOutExpo",
    duration: 900,
  })
  .add({
    targets: ".dynamic-text .letter",
    opacity: [0, 1],
    translateX: [40, 0],
    translateZ: 0,
    scaleX: [0.3, 1],
    easing: "easeOutExpo",
    duration: 800,
    offset: "-=600",
    delay: (el, i) => 150 + 25 * i,
  })
  .add({
    targets: ".dynamic-text",
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000,
  });