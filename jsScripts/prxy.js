const mainIframe = document.getElementsByClassName("mainIframe")[0]

import { encode } from "./codec.js";

export function goToLink(targetUrl)
{   
    if (!targetUrl.startsWith("http://") && !targetUrl.startsWith("https://")) {
        targetUrl = "https://" + url;
    }

    const newUrl = encode(targetUrl)

    const proxiedPath = __uv$config.prefix + newUrl;
    const fullUrl = location.origin + proxiedPath;

    mainIframe.src = fullUrl
}
