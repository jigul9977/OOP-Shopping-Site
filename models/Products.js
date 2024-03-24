import Display from "./Display.js";

class Products extends Display {
  constructor(parent, products,cart) {
    super(parent,products);
    this.cart = cart;
  }
  showProducts() {
    this.products.forEach((product) => this.createCard(product));
  }
  
  productImgTag(data) {
    const { image, title } = data;
    const cardImgJSX = `<img src=${image} alt=${title} />`;
    return cardImgJSX;
  }
  productInfoTag(data) {
    const { id, title, price } = data;
    const infoJSX = `<div class="product-info">
		<h3>${title}</h3>
		<div>
		<span>$ ${price}</span>
		<i data-id=${id} class="fa-solid fa-plus"></i>
		</div>
		</div>`;
    return infoJSX;
  }
  handleEvent(event) {
    const element = event.target;
    
    if (element.tagName === "I") {
      this.addToCart(element.dataset.id);
    }
  }
  addToCart(id) {
    const product = this.products.find((i) => i.id === +id)
    this.cart.products.push(product);
    this.cart.showProducts();
  }
}

export default Products;
