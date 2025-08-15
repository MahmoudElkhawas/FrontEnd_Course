async function basicfetch() {
    const allCards = document.querySelectorAll(".bord");
    const allTexts = document.querySelectorAll(".bord .text");
        
    allTexts.forEach(card => card.innerHTML = "");

    try {
        const response = await fetch('https://dummyjson.com/products');
        const data = await response.json();
        const products = data.products;

        products.slice(0, allCards.length).forEach((product, index) => {
            allCards[index].classList.add("show");

            allTexts[index].innerHTML = `
                <img src="${product.thumbnail}" alt="${product.title}" 
                    style="width:100%; height:200px; object-fit:cover;">
                <h3>${product.title}</h3>
                <p>${product.description.substring(0,60)}...</p>
                <strong>$${product.price}</strong>
            `;
        });

    } catch (err) {
        console.log("Error fetching data:", err);
    }
}
