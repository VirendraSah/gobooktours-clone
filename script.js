let ThreeLineicon = document.querySelector(".menuBarIcon")
let NavElements = document.querySelector(".nav-element")
ThreeLineicon.addEventListener("click", () => {

    if (ThreeLineicon.innerHTML.includes('<i class="fa-solid fa-bars"></i>')) {
        ThreeLineicon.innerHTML = `<i class="fa-solid fa-xmark"></i>`
        ThreeLineicon.style.background = "red";

        // for Nav Elements Visiblity
        NavElements.classList.add("nav-elementVisible")
    }
    else {
        ThreeLineicon.innerHTML = '<i class="fa-solid fa-bars"></i>'
        ThreeLineicon.style.removeProperty('background');

        // for Nav Elements Hide
        NavElements.classList.remove("nav-elementVisible")
    }
})


// For Destination Megamenu
// for change megamenu icon angle up/down & Visible Megamenu

let DesHeadElement = document.querySelector(".DesItem")
let DesMega = document.querySelector(".Destination-megamenu")
DesHeadElement.addEventListener("click", () => {

    let Downarrow = DesHeadElement.lastElementChild
    console.log(Downarrow)
    if (Downarrow.outerHTML.includes('<i class="fa fa-angle-down"></i>')) {
        Downarrow.outerHTML = '<i class="fa-solid fa-angle-up"></i>'
        DesMega.classList.add("ShowDesMega")
        console.log(DesMega)
    }
    else {
        Downarrow.outerHTML = '<i class="fa fa-angle-down"></i>'
        DesMega.classList.remove("ShowDesMega")
        console.log(DesMega)
    }

})

// For Themes Megamenu
// for change megamenu icon angle up/down & Visible Megamenu
let ThemeHead = document.querySelector(".themeHeaderWrapper")
let themeMega = document.querySelector(".themes-dropdown")
ThemeHead.addEventListener("click", () => {
    let themedownArrow = ThemeHead.lastElementChild
    if (themedownArrow.outerHTML.includes('<i class="fa fa-angle-down"></i>')) {
        themedownArrow.outerHTML = '<i class="fa-solid fa-angle-up"></i>'
        themeMega.classList.add("showThemeMega")
    }
    else {
        themedownArrow.outerHTML = '<i class="fa fa-angle-down"></i>'
        themeMega.classList.remove("showThemeMega")
    }
})

// FAQS Effects
let QuestionELement = document.querySelectorAll(".FAQs-Ques")

QuestionELement.forEach((question, i) => {

    question.addEventListener("click", () => {
        let icon = question.lastElementChild;
        if (icon.outerHTML == '<i class="fa-solid fa-angle-down"></i>') {
            icon.outerHTML = '<i class="fa-solid fa-angle-up"></i>'
            question.style.background = "#5c1c4b";
            question.firstElementChild.style.color = "white";
            question.lastElementChild.style.color = "white";
            question.nextElementSibling.style.display = "block";
        }
        else {
            icon.outerHTML = '<i class="fa-solid fa-angle-down"></i>';
            question.style.removeProperty("background");
            question.firstElementChild.style.removeProperty("color")
            question.lastElementChild.style.removeProperty("color")
            question.nextElementSibling.style.removeProperty("display");
        }
    })

})