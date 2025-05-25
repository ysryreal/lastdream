const mainIframe = document.getElementsByClassName("mainIframe")[0]

import { encode } from "./codec.js";


export function goToLink(targetUrl)
{   
    if (!targetUrl.startsWith("http://") && !targetUrl.startsWith("https://")) {
        targetUrl = "https://" + targetUrl;
    }

    const newUrl = encode(targetUrl)

    const proxiedPath = "/service/" + newUrl;
    const fullUrl = location.origin + proxiedPath;

    mainIframe.src = fullUrl
}
