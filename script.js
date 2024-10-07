// Display products in catalog
const productList = document.getElementById("product-list");

products.forEach((product, index) => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("product");

    const productImage = document.createElement("img");
    productImage.src = product.images[0];

    const productName = document.createElement("h3");
    productName.textContent = product.name;

    const productPrice = document.createElement("p");
    productPrice.textContent = product.price;

    productDiv.appendChild(productImage);
    productDiv.appendChild(productName);
    productDiv.appendChild(productPrice);
    
    productDiv.addEventListener("click", () => openModal(index));

    productList.appendChild(productDiv);
});

// Modal elements
const modal = document.getElementById("product-modal");
const modalImg = document.getElementById("modal-img");
const modalTitle = document.getElementById("modal-title");
const modalPrice = document.getElementById("modal-price");
const closeModal = document.querySelector(".close");
let currentProductIndex = 0;
let currentImageIndex = 0;

// Open modal
function openModal(index) {
    currentProductIndex = index;
    currentImageIndex = 0;

    const product = products[currentProductIndex];
    modalImg.src = product.images[currentImageIndex];
    modalTitle.textContent = product.name;
    modalPrice.textContent = product.price;

    modal.style.display = "block";
}

// Close modal
closeModal.onclick = function() {
    modal.style.display = "none";
}

// Navigate images with icons
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

prevBtn.addEventListener("click", () => {
    if (currentImageIndex > 0) {
        currentImageIndex--;
        modalImg.src = products[currentProductIndex].images[currentImageIndex];
    }
});

nextBtn.addEventListener("click", () => {
    if (currentImageIndex < products[currentProductIndex].images.length - 1) {
        currentImageIndex++;
        modalImg.src = products[currentProductIndex].images[currentImageIndex];
    }
});

// Close modal when clicking outside content
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
