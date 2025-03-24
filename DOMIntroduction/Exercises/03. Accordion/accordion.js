function toggle() {
    let extraDiv = document.getElementById("extra");
    let button = document.querySelector(".button");

    if (extraDiv.style.display === "none" || extraDiv.style.display === "") {
        extraDiv.style.display = "block";
        button.textContent = "Less"; 
    } else {
        extraDiv.style.display = "none";
        button.textContent = "More"; 
    }
}