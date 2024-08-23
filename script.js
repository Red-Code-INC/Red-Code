async function populate() {
  const requestURL = "https://red-code-inc.github.io/Red-Vault/links.json";
  const request = new Request(requestURL);

  const response = await fetch(request);
  const Red = await response.json();
//   let Red_Icons = "1.3.6"
  document.getElementById("Scriptlink").setAttribute("href",Red.Script)
  document.getElementById("CSSlink").setAttribute("href",Red.CSS)
  document.getElementById("HTMLlink").setAttribute("href",Red.HTML)
  document.getElementById("Iconslink").setAttribute("href",Red.Icons)
  document.getElementById("Xlink").setAttribute("href",Red.X)
  document.getElementById("Pythonlink").setAttribute("href",Red.Python)
}
populate()
// let body = document.getElementsByTagName("body")[0]
// let tabbar = document.getElementById("tabs")