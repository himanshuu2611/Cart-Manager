let quantity = 0;

function showQuantity() {
    if(quantity===0){
         document.getElementById('qty').textContent = "Cart is Empty";
}
    }
 

function addTwo() {
  quantity += 2;
  document.getElementById('qty').textContent = `Quantity in cart : ${quantity}`;
}

function addThree() {
  quantity += 3;
  document.getElementById('qty').textContent = `Quantity in cart : ${quantity}`;
}

function resetQuantity() {
  quantity = 0;
  document.getElementById('qty').textContent = `Quantity in cart : ${quantity}`;
}

function addOne() {
  quantity += 1;
  document.getElementById('qty').textContent = `Quantity in cart : ${quantity}`;
}
function removeOne(){
    quantity-=1;
     if(quantity<=0){
        quantity=0;
         document.getElementById('qty').textContent = "Cart is Empty - Please Add First";
}else{
    document.getElementById('qty').textContent= `Quantity in cart : ${quantity}`;
}
}
function removeTwo(){
    quantity-=2;
    if(quantity<=0){
        quantity=0;
         document.getElementById('qty').textContent = "Cart is Empty - Please Add First";
}else{
    document.getElementById('qty').textContent= `Quantity in cart : ${quantity}`;
}
}
