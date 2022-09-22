
function showNav() {
    const navDropDown = document.querySelector(".nav-dropdown");
    const bottomPage = document.querySelector(".bottom-page")
    let displayStatus = navDropDown.style.display
    if (displayStatus === "none" || displayStatus === "") {
      navDropDown.style.display = "block";
      bottomPage.style.display = "none";
    } else {
      navDropDown.style.display = "none";
      bottomPage.style.display = "block";
    }
}