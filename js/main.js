/*****Navbar*****/
 let menuList = document.getElementById("menuList");
      let icon  = document.getElementById("icon");
          menuList.style.maxHeight="0px";

          function toggleMenu()
          {
            if(menuList.style.maxHeight=="0px"){
              menuList.style.maxHeight="300px";
              icon.classList.add("fa-times");

            }

            else{
              menuList.style.maxHeight="0px";
              icon.classList.remove("fa-times");
            }

          }

/***** ScrollTop Button*****/
const scrollTop = document.getElementById("scrollTop");

window.addEventListener("scroll",()=>{
  if (window.pageYOffset>300){
    scrollTop.classList.add("active");
  }

  else
  {
    scrollTop.classList.remove("active");
  }
});
 
 scrollTop.addEventListener("click",()=>{
          window.scrollTo(0 ,0);
     });
