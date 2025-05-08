// apply saved theme on page load
function applyStoredTheme() {
    const savedTheme = localStorage.getItem("salonTheme") || "day";
    document.body.className = savedTheme;
    document.getElementById("themeSelect").value = savedTheme;
}

// Theme selector
document.getElementById("themeSelect").addEventListener("change", function() {
const selectTheme = this.value;
localStorage.setItem("salonTheme", selectedTheme);
document.body.className = selectedTheme;
});

// Button animation
const bookBtn = document.getElementById("bookBtn");
bookBtn.addEventListener("click", function () {
    this.classList.add("animate");
    setTimeout(() => this.classList.remove("animate"), 600);
    alert("Appointment booked!💅")
});

applyStoredTheme(); // call the function to apply the stored theme on page load