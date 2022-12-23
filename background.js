// listen to page updates and send a message to the content script
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo && changeInfo.status == "complete") {
        // wait for one second and send the message
        setTimeout(async () => {
            try {
                let res = await chrome.tabs.sendMessage(tabId, { data: tab })
            }
            catch (err) {
                console.log(err)
            }
        }, 1000)
    }
});