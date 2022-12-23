// set the initial message as false
let messageSent = false;
chrome.runtime.onMessage.addListener(async function (request, sender, sendResponse) {

  // if page is loaded and message is received;this is used to prevent the calling of the main function more than once
  if (!messageSent) {
    // set the messageSent value as true to prevent multiple calls to main function
    messageSent = true;
    main();
  }

});


// function to check if element exists in the page
async function waitForElement(selector) {

  // create a new promise;promise is resolved when element is found
  return new Promise((resolve, reject) => {
    const checkExists = () => {
      const element = document.querySelectorAll(selector)[0];
      if (element) {
        resolve(element);
      } else {
        // repeatedly call the checkExists function to check if element is found;promise is resolved if element is found
        requestAnimationFrame(checkExists);
      }
    };

    // call the function the first time
    checkExists();
  });
}

// main function
async function main() {

  console.log("testing")
}
