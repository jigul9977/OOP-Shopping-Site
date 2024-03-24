class Display {
  constructor(parent, products) {
    this.parent = parent;
    this.products = products;
    this.parent.addEventListener("click", this);
  }
  showProducts() {
    this.toShow = [...new Set(this.products)]; //Remove duplicate array items
    this.parent.innerHTML = ""; // In order not to repeat product every time that wants to update the shopping cart
    this.toShow.forEach((product) => {
      const quantity = this.products.filter((p) => p.id === product.id).length;
      this.createCard(product, quantity);
    });
    this.calculateFinalPrice();
  }
  createCard(data, quantity) {
    const cardElement = document.createElement("div");

    const imgElement = this.productImgTag(data);
    const infoElement = this.productInfoTag(data);
    cardElement.innerHTML = imgElement;
    cardElement.innerHTML += infoElement;

    if (this.constructor.name === "Products") {
      cardElement.classList.add("product-wrapper");
    }
    if (this.constructor.name === "Cart") {
      const controlElement = this.productControlTag(data, quantity);
      cardElement.innerHTML += controlElement;
    }
    this.parent.appendChild(cardElement);
	}
	
}
export default Display;
