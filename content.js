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

  // grab the body element
  let body = await waitForElement("body")
  // check if blocking styles have loaded for body
  let status = await waitForElementStyle(body)

  if (status) {
    // add style to  body to enable scrolling
    body.style.height = "100vh"
    body.style.overflow = "auto"
    body.style.position = "static"
  }


}

// function to check if blocking styles have been added to body
async function waitForElementStyle(body) {

  let interval = null
  // create a new promise;promise gets resolved when blocking styles are added to the body
  return new Promise((resolve, reject) => {
    // function to check if styles have been added
    const checkStyle = () => {
      // get computed styles
      let computedStyle = window.getComputedStyle(body)
      // check if styles have been added
      if (computedStyle.overflow == "hidden" && computedStyle.position == "fixed") {
        clearInterval(interval)
        resolve(true)
      }
    }
    // call checkElement() every 1 second until blocking styles have been added
    interval = setInterval(checkStyle, 1000)
  })

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

    // Call checkElement() every 100 ms until the element is found
    let interval = setInterval(checkElement, 100);
  });
}
