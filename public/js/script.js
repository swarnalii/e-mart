 // to search for products
 var searchProducts = document.querySelector('#search-product'),
 products = document.querySelectorAll('.box'),
 productData = document.querySelectorAll('.detail-box'),
 searchVal;

searchProducts.addEventListener('keydown', function() {
searchVal = this.value.toLowerCase();

for (var i = 0; i < products.length; i++) {
 if (!searchVal || productData[i].textContent.toLowerCase().indexOf(searchVal) > -1) {
   products[i].style['display'] = 'flex';
 }
 else {
   products[i].style['display'] = 'none';
 }
}
});