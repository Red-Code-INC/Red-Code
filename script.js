async function populate() {
  const requestURL = "https://red-code-inc.github.io/Red-Vault/links.json";
  const request = new Request(requestURL);

  const response = await fetch(request);
  const Red = await response.json();
//   let Red_Icons = "1.3.6"
  console.log(Red)
  console.log(JSON.stringify(Red))
  
    let LINKS = document.querySelectorAll("[data-link]")
    LINKS.forEach(link =>{
        if (link.getAttribute("data-link") == "red-code"){
            link.setAttribute("href",Red.Code)
        } else if (link.getAttribute("data-link") == "red-script"){
            link.setAttribute("href",Red.Script)
        } else if (link.getAttribute("data-link") == "red-css"){
            link.setAttribute("href",Red.CSS)
        } else if (link.getAttribute("data-link") == "red-html"){
            link.setAttribute("href",Red.HTML)
        } else if (link.getAttribute("data-link") == "red-icons"){
            link.setAttribute("href",Red.Icons)
        } else if (link.getAttribute("data-link") == "red-x"){
            link.setAttribute("href",Red.X)
        } else if (link.getAttribute("data-link") == "red-python"){
            link.setAttribute("href",Red.Python)
        } else if (link.getAttribute("data-link") == "red-java"){
            link.setAttribute("href",Red.Java)
        } else if (link.getAttribute("data-link") == "red-c"){
            link.setAttribute("href",Red.C)
        } else if (link.getAttribute("data-link") == "red-plus"){
            link.setAttribute("href",Red.Plus)
        } else if (link.getAttribute("data-link") == "red-sharp"){
            link.setAttribute("href",Red.Sharp)
        }
    })
  }
populate()
// let body = document.getElementsByTagName("body")[0]
// let tabbar = document.getElementById("tabs")
