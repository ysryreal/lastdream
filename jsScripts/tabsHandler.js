const sideBarTabList = document.getElementById("sideBarTabList")

const maxTabs = 10
let currentTabs = 0
let yMult = 4

export function closeTab(tabId)
{   
    console.log(tabId)
    const tabToClose = document.getElementById(tabId)

    if (tabToClose == undefined) {return}

    currentTabs--

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

        let deleting = false;
        let savedURL = "https://google.com"

        newTabElement.classList = "tabButton liftEffect brightEffect";
        newTabElement.id = `${currentTabs}`
        newTabElement.style.top = `${(currentTabs * yMult) + 1}%`;
        
        newTabTextElement.classList = "tabText";
        newTabTextElement.textContent = `I New tab`;

        newTabIconElement.classList = "tabIcon";
        newTabIconElement.src = "https://google.com/favicon.ico";

        newTabTxtInElement.classList = "tabHolder"
        newTabTxtInElement.appendChild(newTabIconElement)
        newTabTxtInElement.appendChild(newTabTextElement)

        newTabCloseTextElement.textContent = "X"
        newTabCloseTextElement.classList = "tabCloseText"

        newTabCloseElement.classList = "tabClose"
        newTabCloseElement.appendChild(newTabCloseTextElement)

        currentTabs++   
        
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
                
            }
        })

        newTabElement.appendChild(newTabTxtInElement)
        newTabElement.appendChild(newTabCloseElement)
        sideBarTabList.appendChild(newTabElement)
    }
    else
    {
        alert("You have reached max tabs! (10 is the max)")
    }
}