// Functions to show/hide pages
function toggleMenu() {
    var menu = document.querySelector('nav ul');
    menu.classList.toggle('menu-open');
}
function showMessage(event) {
    // Prevent the form from submitting
    event.preventDefault();
    
    // Get the message container element
    var messageContainer = document.getElementById("messageContainer");
    
    // Set the message content
    messageContainer.innerHTML = "<p>Your message will be recorded.</p>";
    
    // Clear the form fields (optional)
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
}

function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => {
        page.style.display = 'none';
    });
    document.getElementById(pageId).style.display = 'block';
}


// Initial setup
window.onload = function() {
    showPage('sendMoneyPage');
};
