const code = "TDBWM1UtQQ=="
const decoded = "L0V3-U"

function goFullscreen() {
      // Check if screen width is mobile-sized
      if (window.innerWidth <= 800) {
        const elem = document.documentElement;

        if (elem.requestFullscreen) {
          elem.requestFullscreen();
        } else if (elem.webkitRequestFullscreen) { // Safari
          elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) { // IE11
          elem.msRequestFullscreen();
        }
      }
    }
function checkCode() {
    const input = document.getElementById("codeInput").value.trim();
        
    // Example: Check for a specific code like "1234"
    if (input === decoded) {
        // Redirect to your target page
        window.location.href = "a9d3f6z2l8q7x1b4m5n0yckwtuvhjgr.html"; // Change this to your actual HTML page
        goFullscreen()
    } else {
        alert("Incorrect code. Try again!");
        inputField.value = "";
    }
    }
    window.addEventListener("DOMContentLoaded", () => {
        const loader = document.getElementById("transition-screen");
        const content = document.getElementById("main-content");
      
        setTimeout(() => {
          loader.classList.add("fade-out");
      
          // Wait for fade animation to finish before hiding it
          setTimeout(() => {
            loader.style.display = "none";
            content.style.display = "block";
          }, 1000); // match fadeOut duration
        }, 3000); // wait 3s before starting fade
      });
      
