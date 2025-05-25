const mainWebBody = document.getElementsByTagName("body")[0]
const mainbackButton = document.getElementById("backPage")
const mainforwardButton = document.getElementById("forwardPage")
const mainRefreshButton = document.getElementById("refreshPage")
const mainSettingsButton = document.getElementById("settingsPage")
const newTabButton = document.getElementById("newTabButton")
const urlInputForm = document.getElementById("topSearchBarForm")
const urlInput = document.getElementById("topSearchBarInput")

import { goToLink } from "./prxy.js"

urlInputForm.addEventListener("submit", function(event)
{
    event.preventDefault()

    goToLink(urlInput.value)
})