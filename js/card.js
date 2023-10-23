let cards = document.querySelectorAll("card")

cards.forEach(card => {
    card.setAttribute("style", `
    background: ${card.getAttribute("default")};
    width: 100%;
    height: calc(50px + 50px);
    transition: .5s;
    `)
    card.addEventListener("mouseenter", () => {
        card.style.background = card.getAttribute("color")
    })
    card.addEventListener("mouseleave", () => {
        card.style.background = card.getAttribute("default")
    })
})
