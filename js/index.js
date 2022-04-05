// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span');// Get the price element
  const quantity = product.querySelector('.quantity input'); // Get the quantity element
  const subtotal = product.querySelector('.subtotal span'); // Get the subtotal element

  const priceNumber = parseFloat(price.innerText); // Get the price value from the price element

  const quantityNumber = parseInt(quantity.value); // Get the quantity value from the quantity element


  const subtotalNumber = priceNumber * quantityNumber;

  subtotal.innerText = subtotalNumber;

  return subtotalNumber;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.

  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  const products = document.getElementsByClassName('product');

  const productsArray = [...products];
  let total = 0;

  // update each product on each loop
  productsArray.forEach(product => {
    updateSubtotal(product);

    total += parseFloat(product.querySelector(".subtotal span").innerText);
  });

 const totalValue = document.querySelector("#total-value span");

 totalValue.innerText = total;

  return total;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  // console.log('The target in remove is:', target);
  //... your code goes here

  target.parentNode.parentNode.remove();
  calculateAll();
}

// ITERATION 5

function createProduct() {
  const newProduct = document.querySelectorAll(".create-product input");

  const newProductName = newProduct[0].value;
  const newProductUnitPrice = newProduct[1].value;
  
  const productTemplate = document.querySelector('.product');

  productTemplate.querySelector(".name span").innerHTML = newProductName;
  productTemplate.querySelector(".price span").innerHTML = newProductUnitPrice;


  console.log(productTemplate);
  // let tableBody = document.getElementsByTagName("tbody");

  // let newBlock = document.createElement("tr");

  // tableBody.appendChild(newBlock);
  

//   document.tbody.createElement("");
//   const newElmen = document.createElement('tr');
//   newElmen.classList.add('product');
//   newElmen.innerHTML = <td class="name">
//   <span>${newProductName}</span>
// </td>
// <td class="price">$<span>25.00</span></td>
// <td class="quantity">
//   <input type="number" value="0" min="0" placeholder="Quantity" />
// </td>
// <td class="subtotal">$<span>0</span></td>
// <td class="action">
//   <button class="btn btn-remove" id="duck">Remove</button>
// </td>

}
window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeProductBtn = document.getElementsByClassName("btn-remove");
  const buttonsArray = [...removeProductBtn];

  buttonsArray.forEach(button => {
    button.addEventListener('click', removeProduct);
  });
  
  const createProductBtn = document.getElementById('create');
  createProductBtn.addEventListener('click', createProduct)
});
