const tdItems = document.getElementById("todo-items")
const input = document.getElementById("input")



input.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    myAddItems();
  }
})

const myAddItems = () => {
  let parentDiv = document.createElement("div")
  let childDiv = document.createElement("div")
  let checkIcon = document.createElement("i")
  let deleteIcon = document.createElement('i')
  let icons = document.createElement('div')



  parentDiv.className = "parent"
  childDiv.innerHTML = input.value
  childDiv.className = "items"
  icons.className = "dcicon"

  checkIcon.className = "fa-solid fa-square-check"
  deleteIcon.className = "fa-solid fa-trash"
  checkIcon.addEventListener("click", () => {
    icon(p);
  })

  deleteIcon.addEventListener("click", () => parentDiv.remove())

  var p = true;
  function icon(k) {
    if (k == true) {
      checkIcon.style.color = "green";
      p = false
      tdItems.style.fontWeight = 'bold';
    } else {
      checkIcon.style.color = "black";
      p = true
      tdItems.style.fontWeight = 'normal';
      tdItems.style.fontSize = 'normal';
    }
    // console.log(k);
  }


  childDiv.append(checkIcon)
  childDiv.append(deleteIcon)
  childDiv.append(icons)
  icons.append(checkIcon)
  icons.append(deleteIcon)
  parentDiv.append(childDiv)
  tdItems.append(parentDiv)

  input.value = ""


}
