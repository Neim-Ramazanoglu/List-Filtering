let data = [];

const fetchData = () => {
  //verinin çekildiği yer
  fetch("data.json")
    .then((response) => {
      return response.json();
    })
    .then((responseData) => {
      //json'dan okunan verinin data array'ine atanması
      data = responseData;

      //veri geldikten sonra filtreleme butonu görünür olsun
      let filterButton = document.querySelector("#filterButton");
      filterButton.setAttribute("style", "");

      //veri geldikten sonra checkbox görünür olsun
      let checkBoxContainer = document.querySelector(".container");
      checkBoxContainer.setAttribute("style", "");


     
    })
    .catch((err) => {
      //hata yönetimi
      console.log(err);
    });
};

//verinin ul tag'i içerisinde listelenmesini sağlayan fonksiyon
const listData = (data) => {
  let list = document.querySelector(".list");
  list.innerHTML = data.map((element) => {
    return `
        <li id=${element.id}>
            <span class='bold'>name:</span> ${element.name}
            <span class='bold'>email:</span> ${element.email}
            <span class='bold'>age:</span> ${element.age}
            <span class='bold'>isActive:</span> ${element.isActive}
        </li>
        `;
  });
};

//verinin filtrelenmesini sağlayan fonksiyon
//TODO

function filterData(filter) {
  let age = document.querySelector("#yaş");
  let isActive = document.querySelector("#aktif");
  let firstLetter = document.querySelector("#isim");
  firstLetter.value = firstLetter.value.toUpperCase();
  let filteredData = [];

  if (age.checked) {
    filteredData = data.filter((element) => element.age >= 18);
  }

  if (isActive.checked) {
    if (filteredData.length == 0) {
      filteredData = data.filter((element) => element.isActive);
    } else {
      filteredData = filteredData.filter((element) => element.isActive);
    }
  }

  if (firstLetter.value !== "") {
    if (filteredData.length == 0) {
      filteredData = data.filter(
        (element) => element.name.charAt() == firstLetter.value.charAt()
      );
    } else {
      filteredData = filteredData.filter(
        (element) => element.name.charAt() == firstLetter.value.charAt()
      );
    }
  }

  listData(filteredData);
}

