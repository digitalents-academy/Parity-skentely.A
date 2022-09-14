function showNav() {
    const navDropDown = document.querySelector(".nav-dropdown");
    const bottomPage = document.querySelector(".bottom-page")
    if (navDropDown.style.display === "none") {
      navDropDown.style.display = "block";
      bottomPage.style.display = "none";
    } else {
      navDropDown.style.display = "none";
      bottomPage.style.display = "block";
    }
}