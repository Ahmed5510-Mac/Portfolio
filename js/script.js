const btnSkills =document.getElementById("btnSkils")
const btnpersent =document.getElementById("btnPersant")

const skillsGrid=document.getElementById("skillsGrid")
const skillsProgress=document.getElementById("skillsProgress")
// =====================================================================
btnSkills.addEventListener("click",() =>{
    skillsGrid.classList.remove("hidden")
    skillsProgress.classList.add("hidden")
    console.log("ahmed")
})  
btnpersent.addEventListener("click",() =>{
    skillsGrid.classList.add("hidden")
    skillsProgress.classList.remove("hidden")
    console.log("ahmed")
})  
// ==========================================Mixtup filter portfolio============================================
let mixerPortfolio = mixitup('.work__container', {
    selectors: {
        target: '.work__card'
    },
    animation: {
        duration: 300
    }
});
const linkWork=document.querySelectorAll(".work__item")
function activeWork(){
    linkWork.forEach(l=>l.classList.remove("active-work"));
    this.classList.add("active-work")
}
linkWork.forEach(l=>l.addEventListener("click",activeWork));
// ===============work popup ===================
document.addEventListener("click",(e)=>{
    if(e.target.classList.contains("work__button"))
    {
        togglePortfolioPopup();
        portfolioItemDetails(e.target.parentElement)
    }
})
function togglePortfolioPopup(){
    document.querySelector(".portfolio-popup").classList.toggle("open")
}

document.querySelector(".portfolio-popup-close").addEventListener("click",(e)=>{

    document.querySelector(".portfolio-popup").classList.remove("open")

});
function portfolioItemDetails(portfolioItem){
    document.querySelector(".pp__thumbnail img").src = portfolioItem.querySelector(".work__img").src;
    document.querySelector(".portfolio__popup-subtitle span").innerHTML=portfolioItem.querySelector(".work__title").innerHTML;
    document.querySelector(".portfolio_popup-body").innerHTML=portfolioItem.querySelector(".portfolio__items-details").innerHTML;



}