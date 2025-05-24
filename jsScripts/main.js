const mainWebBody = document.getElementsByTagName("body")[0]
const mainbackButton = document.getElementById("backPage")
const mainforwardButton = document.getElementById("forwardPage")
const mainRefreshButton = document.getElementById("refreshPage")
const mainSettingsButton = document.getElementById("settingsPage")
const newTabButton = document.getElementById("newTabButton")
const urlInput = document.getElementById("topSearchBarForm")

import { createNewTab } from "./tabsHandler.js"

console.log(" - Javascript has been activated! - setting up main functions!")
createNewTab("google.com")

newTabButton.addEventListener("click", () => {
    createNewTab("google.com")
})

