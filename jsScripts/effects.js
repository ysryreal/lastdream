const clickEffectButtons = document.getElementsByClassName("clickEffect")

for (i = 0; i < clickEffectButtons.length; i++)
{
    const effectButton = clickEffectButtons[i]

    effectButton.addEventListener("mousedown", () => {
        effectButton.style.transform = "scale(1,1)"
    })

    effectButton.addEventListener("mouseup", () => {
        effectButton.style.transform = "scale(1,1)"
    })
}