
// Book list with cost added
let books = [
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", price: "₹399" },
    { title: "Harry Potter", author: "J.K. Rowling", price: "₹599" },
    { title: "Atomic Habits", author: "James Clear", price: "₹450" },
    { title: "The Alchemist", author: "Paulo Coelho", price: "₹350" }
];

// Function to display books
function displayBooks() {
    let container = document.getElementById("bookRow");

    for (let i = 0; i < books.length; i++) {

        // Bootstrap column
        let col = document.createElement("div");
        col.className = "col-md-3 mb-3";

        // Card content
        col.innerHTML = `
            <div class="card p-3 shadow-sm">
                <h5>${books[i].title}</h5>
                <p class="text-muted">${books[i].author}</p>
                <p><strong>Cost: ${books[i].price}</strong></p>
            </div>
        `;

        container.appendChild(col);
    }
}

displayBooks();
