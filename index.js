function showNav() {
    const navDropDown = document.querySelector(".nav-dropdown");
    const colorOverlay = document.querySelector(".color-overlay")
    let displayStatus = navDropDown.style.display
    
    if (displayStatus === "none" || displayStatus === "") {
      navDropDown.style.display = "block";
      colorOverlay.style.display = "block";
    } else {
      navDropDown.style.display = "none";
      colorOverlay.style.display = "none";
    }
}