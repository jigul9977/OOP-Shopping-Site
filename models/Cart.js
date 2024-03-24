import Display from "./Display.js";

class Cart extends Display {
  constructor(parent, price) {
    super(parent);
    this.price = price;
    this.products = [];
    this.toShow = [];
  }
  // showProducts() {
  //   this.toShow = [...new Set(this.products)]; //Remove duplicate array items
  //   this.parent.innerHTML = ""; // In order not to repeat product every time that wants to update the shopping cart
  //   this.toShow.forEach((product) => {
  //     const quantity = this.products.filter((p) => p.id === product.id).length;
  //     this.createCard(product, quantity);
  //   });
  //   this.calculateFinalPrice();
  // }
  
  productImgTag(data) {
    const { image, title } = data;
    const cardImgJSX = `<img class="cart-product-img" alt="${title}" src="${image}"/>`;
    return cardImgJSX;
  }
  productInfoTag(data) {
    const { title, price } = data;
    const infoJSX = `<div class="cart-info">
		<h4>${title}</h4>
		<p>$ ${price}</p>
		</div>`;
    return infoJSX;
  }
  productControlTag(data, quantity) {
    const { id } = data;
    const controlJSX = `
		<div class="cart-control">
			<div>
			<i data-id=${id} data-type=decrease class="fa-solid fa-minus"></i>
				<span>${quantity}</span>
				<i data-id=${id} data-type=increase class="fa-solid fa-plus"></i>
			</div>
			<i data-id=${id} data-type=remove class="remove-btn">Remove</i>
		</div>`;
    return controlJSX;
  }
  handleEvent(event) {
    const elementTagName = event.target.tagName;
    const id = event.target.dataset.id;
    const type = event.target.dataset.type;
    if (elementTagName !== "I") {
      return;
    }
    switch (type) {
      case "increase":
        this.increase(id);
        break;
      case "decrease":
        this.decrease(id);
        break;
      case "remove":
        this.remove(id);
        break;
    }
  }
  increase(id) {
    const product = this.products.find((p) => p.id === +id);
    this.products.push(product);
    this.showProducts();
  }
  decrease(id) {
    const index = this.products.findIndex((p) => p.id === +id);
    this.products.splice(index, 1);
    this.showProducts();
  }
  remove(id) {
    console.log(id);
    const newProducts = this.products.filter((p) => p.id !== +id);
    this.products = newProducts;
    this.showProducts();
  }
  calculateFinalPrice() {
    const total = this.products.reduce((accu, cur) => (accu += cur.price), 0);
    this.price.innerText = "$ " + total;
  }
}

export default Cart;
