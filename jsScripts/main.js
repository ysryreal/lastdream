const mainWebBody = document.getElementsByTagName("body")[0]
const mainbackButton = document.getElementById("backPage")
const mainforwardButton = document.getElementById("forwardPage")
const mainRefreshButton = document.getElementById("refreshPage")
const mainSettingsButton = document.getElementById("settingsPage")
const newTabButton = document.getElementById("newTabButton")
const urlInputForm = document.getElementById("topSearchBarForm")
const urlInput = document.getElementById("topSearchBarInput")

import { goToLink, generateLink } from "./prxy.js"

goToLink("https://discord.com")

mainbackButton.addEventListener("click", () => {
    let nextTab = getUrlById(getId() - 1)

    console.log(nextTab)

    if (nextTab !== undefined)
    {
        setId(getId() - 1)
        goToLink(nextTab)
    }
})

mainforwardButton.addEventListener("click", () => {
    let nextTab = getUrlById(getId() + 1)

    if (nextTab !== undefined)
    {   
        setId(getId() + 1)
        goToLink(nextTab)
    }
})

mainRefreshButton.addEventListener("click", () => {
    goToLink(getUrlById(getId()))
})

urlInputForm.addEventListener("submit", function(event)
{
    event.preventDefault()

    generateLink(urlInput.value)

    goToLink(urlInput.value)
    pushNewLink(urlInput.value)
})