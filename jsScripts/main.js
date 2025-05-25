const mainWebBody = document.getElementsByTagName("body")[0]
const mainbackButton = document.getElementById("backPage")
const mainforwardButton = document.getElementById("forwardPage")
const mainRefreshButton = document.getElementById("refreshPage")
const mainSettingsButton = document.getElementById("settingsPage")
const newTabButton = document.getElementById("newTabButton")
const urlInput = document.getElementById("topSearchBarForm")

import { createTab } from "./tabsHandler.js"
import { goToLink } from "./prxy.cjs"

console.log(" - Javascript has been activated! - setting up main functions!")
createTab("https://github.com")

newTabButton.addEventListener("click", () => {
    createTab("https://github.com")
})

goToLink("https://google.com")