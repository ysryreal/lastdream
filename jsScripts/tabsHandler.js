const sideBarTabList = document.getElementById("sideBarTabList")
const urlSearcher = document.getElementById("topSearchBarForm")
const urlSearcherQuery = document.getElementById("topSearchBarInput")
const mainPage = document.getElementById("mainPage")

const startURL = 'https://www.google.com/search?q=';

let maxTabs = 10
let currentTabs = 0

export function createTab()
{
    currentTabs += 1

    const newTabDiv = document.createElement("div")
    let tabId = currentTabs

    newTabDiv.classList = "tabButton"
    

    sideBarTabList.appendChild(newTabDiv)
}

