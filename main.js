window.addEventListener("load", function () {
  const ARTICLEELEM = document.querySelectorAll("article");
  let lista = [
    "kepek/kep.jfif",
    "kepek/kep.jpg",
    "kepek/gods.png",
    "kepek/icy.jpg",
    "kepek/nurgle.jpg",
    "kepek/boris.jpg",
    "kepek/russia.jpg",
    "kepek/smort.jpg",
  ];
  let szoveg = "<ul>";
  for (let i = 0; i < lista.length; i++) {
    szoveg += `<li><img src='${lista[i]}' alt='' ></li>`;
  }
  szoveg += "</ul>";
  console.log(szoveg)
  ARTICLEELEM[0].innerHTML = szoveg;
});
