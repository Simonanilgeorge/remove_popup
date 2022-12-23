

main()

async function main(){
  
  let element = await waitForElement(".login-modal-div")
  let spinner=await waitForElement(".spinner-loading-overlay")
  
  spinner.remove()
  element.remove()

  let article=await waitForElement(".article--viewer")
  
  article.style.height="100vh"
  article.style.overflow="auto"
}



async function wait(amount){
  return new Promise((resolve,reject)=>{

    setTimeout(()=>{
      resolve()
    },amount)
  })
}

async function waitForElement(selector){
  return new Promise((resolve, reject) => {
    const checkElement = () => {
      let element = document.querySelectorAll(selector);
      if (element.length > 0) {
        clearInterval(interval);
        resolve(element[0]);
      }
    }

    // Call checkElement() every 1 second until the element is found
    let interval = setInterval(checkElement, 100);
  });
}
