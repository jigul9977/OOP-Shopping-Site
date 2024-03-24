import Cart from "../../models/cart.js";
import Products from "../../models/products.js";
import { fetchData } from "../../utils/httpreq.js";

const productsNode = document.getElementById("products");
const cartListNode = document.getElementById("cart-list");
const totalPriceNode = document.getElementById("total-price").querySelector("span");

async function render() {
	const productsData = await fetchData();
	
  const cartInstance = new Cart(cartListNode ,totalPriceNode);
  const productsInstance = new Products(productsNode, productsData,cartInstance);
  productsInstance.showProducts();
}
document.addEventListener("DOMContentLoaded", render); // fires when the HTML document has been completely parsed, and all deferred scripts (<script defer src="…"> and <script type="module">) have downloaded and executed.
