const sliderLeftBtn = document.querySelector("#btn-signin")
const sliderRightBtn = document.querySelector("#btn-signup");
const leftPanel = document.querySelector("left-panel");
const rightPanel = document.querySelector("right-panel");
const slidingPanelLeft = document.querySelector(".sliding-panel-left")
const slidingPanelRight = document.querySelector(".sliding-panel-right")



slidingPanelRight.style.display = "none";

sliderLeftBtn.addEventListener("click", () => {
   slidingPanelLeft.style.display = "none";
   slidingPanelRight.style.display = "flex";
})

sliderRightBtn.addEventListener("click",()=>{
   slidingPanelLeft.style.display = "flex";
   slidingPanelRight.style.display = "none";
})