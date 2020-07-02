let names = [];
const select = document.getElementById("packageName");
let options = [];

async function getThisFcnNames() {
  await fetch("/namesRequest", { method: "POST" })
    .then((e) => e.json())
    .then((data) => {
      names = data;
      options = names.map((e) => {
        const newElement = document.createElement("option");
        newElement.textContent = e;
        return newElement;
      });
      options.forEach((e) => select.appendChild(e));
    });
}

getThisFcnNames();
