// DOM JS

function deleteItem(){

}

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice( ){}

function createQuantityInput(){

}

function createDeleteButton(){

}

function createQuantityNode(){

}

function createItemNode(dataType, itemData){

}

function createNewItemRow(itemName, itemUnitPrice){
  console.log (itemName, itemUnitPrice)
  let html = `<div class="row">
  <p class="col"> IronShirt</p>
  <p class="col"> $15.00</p>
  <form class="col">

    <label class="inline-block" for="price">QTY:</label>

    <input class="inline-block" type="text" name="price" placeholder="0">
  </form>


  <p class="col"> $0.00</p>

  <button type="button" class=" col btn-delete">Delete</button>
</div>`

document.querySelector("body > section").innerHTML += (html)
  //should add new row with product description, price, qty, (qty*price) and delete button//
}

function createNewItem(e){



 //do something in here that gets itemNsme and itemprice
  createNewItemRow()
}

window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  console.log (calculatePriceButton)
  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};

