// Add click events to metric cards
document.querySelectorAll(".metric-card").forEach((card) => {
    card.addEventListener("click", () => {
        alert(`You clicked on ${card.querySelector("h4").textContent}`);
        card.style.borderColor = "#ff5733"; // Highlight clicked card
    });
});
document.getElementById('searchInput').addEventListener('input', function () {
    const filter = this.value.toLowerCase();
    const cards = document.querySelectorAll('.metric-card');

    cards.forEach(card => {
        const asinText = card.querySelector('h4').textContent.toLowerCase();
        if (asinText.includes(filter)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});
