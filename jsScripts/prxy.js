const http = require("http")     
const https = require('https');     
const { URL } = require('url');     

const PORT = 8080;

export function goToLink(targetUrl)
{
    const encodedUrl = encodeURIComponent(targetUrl)
    
    let savedData = ``

    http.get(encodedUrl, (data) => {
        savedData += data
        console.log(savedData)
    })
}
