// Sample book data (you can add more)
let books = [
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
    { title: "Harry Potter", author: "J.K. Rowling" },
    { title: "Atomic Habits", author: "James Clear" },
    { title: "The Alchemist", author: "Paulo Coelho" }
];

// Function to show books using a loop
function displayBooks() {
    let container = document.getElementById("bookRow");

    // Loop through each book
    for (let i = 0; i < books.length; i++) {

        // Create a Bootstrap column
        let col = document.createElement("div");
        col.className = "col-md-3 mb-3";

        // Card layout
        col.innerHTML = `
            <div class="card p-3 shadow-sm">
                <h5>${books[i].title}</h5>
                <p class="text-muted">${books[i].author}</p>
            </div>
        `;

        container.appendChild(col);
    }
}

// Call the function
displayBooks();
