function button(){
    document.getElementById("myBtn");
    myBtn.style.backgroundColor = "white"
    myBtn.style.color = "black"
}

 const body = document.getElementById("body");
      const button = document.getElementById("toggleBtn");

      button.addEventListener("click", () => {
        const isDark = body.classList.contains("bg-black");

        // Toggle body colors
        body.classList.toggle("bg-black");
        body.classList.toggle("text-white");
        body.classList.toggle("bg-white");
        body.classList.toggle("text-black");

        // Toggle button colors
        button.classList.toggle("bg-white");
        button.classList.toggle("text-black");
        button.classList.toggle("bg-black");
        button.classList.toggle("text-white");

        // Change icon + text
        button.innerHTML = isDark ? "🌙 Dark Mode" : "☀️ Light Mode";
      });