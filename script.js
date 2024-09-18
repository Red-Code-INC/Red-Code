const Red = {
  Code:"https://redcodeinc.netlify.app",
  Script:"https://redscript.netlify.app",
  CSS:"https://redcss.netlify.app",
  HTML:"https://redhtml.netlify.app",
  Icons:"https://redicons.netlify.app",
  X:"https://redx.netlify.app",
  Python:"https://rython.netlify.app",
  Java:"https://rava.netlify.app",
  C:"https://redc.netlify.app/c",
  Plus:"https://redc.netlify.app/plus",
  Sharp:"https://redc.netlify.app/sharp"
}
// async function populate() {
//   const requestURL = "https://red-code-inc.github.io/Red-Vault/links.json";
//   try {
//     const response = await fetch(requestURL);
//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }
//     const Red = await response.json();
//     alert(Red)
//     alert(JSON.stringify(Red)
//     console.log(Red);  // Ensure you're receiving the correct data
//     console.log(JSON.stringify(Red));  // View the structure

//     let LINKS = document.querySelectorAll("[data-link]");
//     LINKS.forEach(link => {
//       let linkType = link.getAttribute("data-link");
//       // Safely access Red object properties and handle missing ones
//       switch (linkType) {
//         case "red-code":
//           link.setAttribute("href", Red.Code || "#");
//           break;
//         case "red-script":
//           link.setAttribute("href", Red.Script || "#");
//           break;
//         case "red-css":
//           link.setAttribute("href", Red.CSS || "#");
//           break;
//         case "red-html":
//           link.setAttribute("href", Red.HTML || "#");
//           break;
//         case "red-icons":
//           link.setAttribute("href", Red.Icons || "#");
//           break;
//         case "red-x":
//           link.setAttribute("href", Red.X || "#");
//           break;
//         case "red-python":
//           link.setAttribute("href", Red.Python || "#");
//           break;
//         case "red-java":
//           link.setAttribute("href", Red.Java || "#");
//           break;
//         case "red-c":
//           link.setAttribute("href", Red.C || "#");
//           break;
//         case "red-plus":
//           link.setAttribute("href", Red.Plus || "#");
//           break;
//         case "red-sharp":
//           link.setAttribute("href", Red.Sharp || "#");
//           break;
//         default:
//           console.warn(`Unknown data-link type: ${linkType}`);
//       }
//     });
//   } catch (error) {
//     console.error("Failed to fetch and populate links:", error);
//   }
// }
function populate2(){
  alert(Red)
  alert(JSON.stringify(Red))
  let LINKS = document.querySelectorAll("[data-link]");
    LINKS.forEach(link => {
      let linkType = link.getAttribute("data-link");
      // Safely access Red object properties and handle missing ones
      switch (linkType) {
        case "red-code":
          link.setAttribute("href", Red.Code || "#");
          break;
        case "red-script":
          link.setAttribute("href", Red.Script || "#");
          break;
        case "red-css":
          link.setAttribute("href", Red.CSS || "#");
          break;
        case "red-html":
          link.setAttribute("href", Red.HTML || "#");
          break;
        case "red-icons":
          link.setAttribute("href", Red.Icons || "#");
          break;
        case "red-x":
          link.setAttribute("href", Red.X || "#");
          break;
        case "red-python":
          link.setAttribute("href", Red.Python || "#");
          break;
        case "red-java":
          link.setAttribute("href", Red.Java || "#");
          break;
        case "red-c":
          link.setAttribute("href", Red.C || "#");
          break;
        case "red-plus":
          link.setAttribute("href", Red.Plus || "#");
          break;
        case "red-sharp":
          link.setAttribute("href", Red.Sharp || "#");
          break;
        default:
          console.warn(`Unknown data-link type: ${linkType}`);
      }
    });
}
populate2();
// populate();

// let body = document.getElementsByTagName("body")[0]
// let tabbar = document.getElementById("tabs")
