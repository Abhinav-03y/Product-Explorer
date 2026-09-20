const productContainer = document.getElementById("productContainer");
const priceInput = document.getElementById("priceInput");
const searchBtn = document.getElementById("searchBtn");


function displayProducts(products) {

    productContainer.innerHTML = "";

    products.forEach(product => {

        const card = document.createElement("div");

        card.className = "product-card";

        card.innerHTML = `
            <h3>${product.name}</h3>
            <p>Brand: ${product.brand}</p>
            <p>₹${product.price}</p>
            <p>⭐ ${product.rating}</p>
            <button>View Product</button>
        `;

        productContainer.appendChild(card);
    });
}


// Initially display products
displayProducts(products);


// Search closest products
searchBtn.addEventListener("click", () => {

    const targetPrice = Number(priceInput.value);

    if (!targetPrice || targetPrice < 0) {
        alert("Please enter a valid price");
        return;
    }

    const sortedProducts = [...products].sort((a, b) => {

        const differenceA = Math.abs(a.price - targetPrice);
        const differenceB = Math.abs(b.price - targetPrice);

        return differenceA - differenceB;
    });

    displayProducts(sortedProducts.slice(0, 3));
});