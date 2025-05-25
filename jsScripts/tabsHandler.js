const sideBarTabList = document.getElementById("sideBarTabList")
const urlSearcher = document.getElementById("topSearchBarForm")
const urlSearcherQuery = document.getElementById("topSearchBarInput")
const mainPage = document.getElementById("mainPage")

const google = 'https://www.google.com/search?q=';

const maxTabs = 10
let currentTabs = 0
let yMult = 4
let selectedId = 1

export function closeTab(tabId)
{   
    console.log(tabId)
    const tabToClose = document.getElementById(tabId)

    if (tabToClose == undefined) {return}

    currentTabs = document.getElementsByClassName("tabButton").length 

    tabToClose.style.opacity = 0

    setTimeout(() => {
        tabToClose.remove()
    }, 500)
}

export function createNewTab(URL)
{   
    if (currentTabs < maxTabs)
    {

        const newTabElement = document.createElement("button")
        const newTabCloseElement = document.createElement("button")
        const newTabTxtInElement = document.createElement("div")
        const newTabCloseTextElement = document.createElement("p")
        const newTabTextElement = document.createElement("p")
        const newTabIconElement = document.createElement("img")
        const newTabIFrameElement = document.createElement("iframe")

        let deleting = false;
        let savedURL = "https://gooogle.com"

        newTabElement.classList = "tabButton liftEffect brightEffect";
        newTabElement.id = `${currentTabs}`
        newTabElement.style.top = `${(currentTabs * yMult) + 1}%`;
        
        newTabTextElement.classList = "tabText";
        newTabTextElement.textContent = `New tab`;

        newTabIconElement.classList = "tabIcon";
        newTabIconElement.src = "https://google.com/favicon.ico";

        newTabTxtInElement.classList = "tabHolder"
        newTabTxtInElement.appendChild(newTabIconElement)
        newTabTxtInElement.appendChild(newTabTextElement)

        newTabCloseTextElement.textContent = "X"
        newTabCloseTextElement.classList = "tabCloseText"

        newTabIFrameElement.classList = "mainIframe"
        newTabIFrameElement.src = savedURL
        mainPage.appendChild(newTabIFrameElement)

        newTabCloseElement.classList = "tabClose"
        newTabCloseElement.appendChild(newTabCloseTextElement)

        currentTabs = document.getElementsByClassName("tabButton").length 
        
        setTimeout( () => {
            newTabElement.style.opacity = "1"
        }, 0)

        newTabCloseElement.addEventListener("click", () => {

            
            if (deleting == false)
            {
                if (currentTabs > 1)
                {
                    deleting = true
                    closeTab(parseInt(newTabElement.id))
                }
                else
                {
                    alert("You have to have 1 tab open!")
                }
            }

        })

        newTabElement.addEventListener("click", () => {

            if (deleting == false)
            {
                selectedId = parseInt(newTabElement.id)
                newTabIFrameElement.style.opacity = "1"
                newTabIFrameElement.style.zIndex = "99999"
            }
        })

        urlSearcher.addEventListener('submit', () => {
            const currentTab = document.getElementsByClassName("tabButton")[selectedId]

            if (selectedId == parseInt(newTabElement.id))
            {   
                const q = urlSearcherQuery.value
                savedURL = q;
                
                console.log(savedURL)

                newTabIconElement = savedURL + "/favicon.ico"
                newTabIFrameElement.style.opacity = "1"
                newTabIFrameElement.style.zIndex = "99999"
                newTabIFrameElement.src = savedURL
            }
            else
            {
                newTabIFrameElement.style.opacity = "0"
                newTabIFrameElement.style.zIndex = "5"
            }
        });

        newTabElement.appendChild(newTabTxtInElement)
        newTabElement.appendChild(newTabCloseElement)
        sideBarTabList.appendChild(newTabElement)
    }
    else
    {
        alert("You have reached max tabs! (10 is the max)")
    }
}