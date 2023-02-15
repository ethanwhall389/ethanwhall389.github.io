
const myImage = document.querySelector("img");
 
myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/ravi-pinisetti-1zikZJVXSfA-unsplash(small).jpg") {
    myImage.setAttribute("src", "images/ocean.jpg");
  } else {
    myImage.setAttribute("src", "images/ravi-pinisetti-1zikZJVXSfA-unsplash(small).jpg")
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h2");

function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Hello, ${myName}`;
  }
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Hello,
  ${storedName}`;
}

myButton.onclick = () => {
  setUserName();
}
