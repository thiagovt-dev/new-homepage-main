function toggleNavBtn() {
    const navBtn = document.getElementById("nav-btn");
    navBtn.classList.toggle("hide");
  }
  
  function openMenu() {
    document.getElementById("nav").style.width = "100%";
    document.getElementsByTagName('body')[0].classList.add("nav-bkg");
    toggleNavBtn();
  }
  
  function closeMenu() {
    document.getElementById("nav").style.width = "0%";
    document.getElementsByTagName('body')[0].classList.remove("nav-bkg");
    toggleNavBtn();
  }  