// main function
main()

async function main() {

  // check if sign in button exists;if button does not exist then it means that the user has logged in and there is no need to remove the elements
  let btn = await waitForElement(".header-main__signup.login-modal-btn")
  if (!btn || btn.innerHTML != "Sign In") {
    return
  }

  // grab the modal box
  let element = await waitForElement(".login-modal-div")
  // wait for the spinner element to load
  let spinner = await waitForElement(".spinner-loading-overlay")

  // remove the spinner and modal box
  spinner.remove()
  element.remove()

  // grab the article element
  let article = await waitForElement(".article--viewer")

  // add style to article element to enable scrolling
  article.style.height = "100vh"
  article.style.overflow = "auto"

}

// function to wait for element
async function waitForElement(selector) {

  return new Promise((resolve, reject) => {
    // check if element has loaded
    const checkElement = () => {
      let element = document.querySelectorAll(selector);

      // if element is found clear interval and resolve the promise
      
      if (element.length > 0) {
        clearInterval(interval);
        resolve(element[0]);
      }
    }

    // Call checkElement() every 1 second until the element is found
    let interval = setInterval(checkElement, 100);
  });
}
