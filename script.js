// Todo:
// egy div amibe csinalj egy sorban egy szoveges mezot nev ertekkel, 
//egy szoveges mezot email ertekkel, 
//egy checkbox elemet, 
//a sor vegere egy delete gombot es egy edit gombot. 
//25 elembol alljon, de a vegen legyen egy gomb amivel bovitheto

function _load() {
  console.log("Gergo is the best programmer :D");
  
  //0. valtozo letrehozasa a div root-nak
  let the_div = document.getElementById("root");

  //1. valtozo letrehozasa backtikkekkel(``) input text-value=name+ input text-value=name +checkbox+delete button-delete classsal + edit button edit classal
  let row = `
  <div class="row">
    <input type="text" value="Name">
    <input type="email" value="Email">
    <input type="checkbox">
    <button class="delete">Delete</button>
    <button class="edit">Edit</button>
  </div>`;
  //console.log(row);

  //2. valtozo letrehozasa a mennyisegnek alias25
  let itemNumber = 25;

  //3. for ciklussal elszamoltatunk itemNumber mennyisegeig & 4. insertadjecent htmllel beillesszuk (beforeenddel)
  for (let i = 0; i < itemNumber; i++) {
    the_div.insertAdjacentHTML("beforeend", row);
  }

  //5. insertadjecent htmllel (afterend) hozzaadunk egy add gombot(id) a root diven kivul
  the_div.insertAdjacentHTML("afterend", `
    <button id="addButton">Add new line</buttton>  
  `);

  //6. document.getelemntbyid. alapjan meghivni az add-ra a click esemenyt (a fenti sor elemekkel meghatarozott valtozot letrehozza a click esemenyre)
  function addNewItem() {
    the_div.insertAdjacentHTML("beforeend", row);
    //TODO: valahogy itt kéne rátenni az új elemre is a törlés függvényt.
  };

    document.getElementById("addButton").addEventListener("click", addNewItem);

  //7. query selectorba mentsuk el osszes torles gombot, majd for ciklussal menjunk vegig a tombon (elemek szama) mindegyikre tegyunk ra egy clikk esemenyt amihez keszitunk egy fuggvenyt
  let deleteButtons = the_div.querySelectorAll(".delete")
  //console.log(deleteButtons);

  function deleteRow(e) {
    console.log("delete Button was clicked");
    console.log(e.target.parentElement);
    e.target.parentElement.remove();
  };

  for (let i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].addEventListener("click", deleteRow); 
  };
  

}; //the end
  
  window.addEventListener("load", _load);