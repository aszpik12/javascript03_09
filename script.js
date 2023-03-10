window.addEventListener("load", function () {
  const ARTICLEELEM = document.querySelectorAll("article");
  ARTICLEELEM[0].innerHTML = "<div><img src='kep.jfif' alt='' ></div>";
  const DIVELEM = document.querySelectorAll("article div");
  ARTICLEELEM[0].innerHTML += "<button>OK</button>";
  const BUTTONELEM = document.querySelectorAll("article button");

  
  BUTTONELEM[0].addEventListener("click", function () {
    console.log(event.target);
    const DIVELEM = document.querySelectorAll("article div");
    console.log(DIVELEM[0]);
    DIVELEM[0].classList.add("formazas");
  });


  const KEPELEM = document.querySelectorAll("article div img");
  KEPELEM[0].addEventListener("mouseover", function (event) {
    event.target.style.border = "5px solid orange";
    event.target.src = "kep.jpg";
  });


  KEPELEM[0].addEventListener("mouseout", function (event) {
    event.target.style.border = "0px solid orange";
    event.target.src = "kep.jfif";
  });
});
