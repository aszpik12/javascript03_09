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

let aktualisKep = 0;

window.addEventListener("load", function () {
  const ARTICLEELEM = document.querySelectorAll("article");
  const SECTIONELEM = document.querySelectorAll("section");

  let szoveg = "<ul>";
  for (let i = 0; i < lista.length; i++) {
    szoveg += `<li><img src='${lista[i]}' alt='kep' onclick='changeImage(${i})'></li>`;
  }
  szoveg += "</ul>";
  console.log(szoveg);
  ARTICLEELEM[0].innerHTML = szoveg;

  document.getElementById("bal").addEventListener("click", prevImg);
  document.getElementById("jobb").addEventListener("click", nextImg);
});


function changeImage(i) {
  const image = document.querySelectorAll("section div img");
  image[0].src = lista[i];
  aktualisKep = i;
}


function nextImg() {
  const image = document.querySelectorAll("section div img");
  image[0].src = lista[aktualisKep + 1];
  aktualisKep = aktualisKep + 1;
}


function prevImg() {
  const image = document.querySelectorAll("section div img");
  image[0].src = lista[aktualisKep - 1];
  aktualisKep = aktualisKep - 1;
}
