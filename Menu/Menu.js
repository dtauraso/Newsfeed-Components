/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  The function takes an array as its only argument.

  Step 2: Inside this function, iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.

  Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
*/

function makeMenu(menuElement){

    // define new elements
    let menu = document.createElement("div")
    let menuNames = document.createElement("ul")

    // Setup structure of elements
    menu.appendChild(menuNames)
    menuElement.forEach(menuString => {

      let myListItem = document.createElement("li")
      myListItem.textContent = menuString
      menuNames.appendChild(myListItem)


    })
    // set class names
    menu.classList.add("menu")

    // set text content
    // let set_nav_stuff = (arr1, arr2) => {
    //   // 3 parameters for forEach: element, index, array_to_left_of_dot
    //   arr1.forEach((k, i, array_to_left_of_dot) => {
    //       k.innerHTML = siteContent["nav"][arr2[i]]
    //       k.setAttribute("style", "color: green")
    //       // console.log(k.attributes)
    //       // k.color = "green"
    // })
    // menueObject
    // };
    // // console.log("here")
    // set_nav_stuff(Array.from(nav.children), nav_items)
    
    // set event listeners
    let myMenueButton = document.querySelector(".menu-button")
    myMenueButton.addEventListener("click", () => {
      menu.classList.toggle("menu--open")
    })
    return menu
}

let myMenueSelector = document.querySelector(".header")


// menuItems.forEach(dataText => {
//   myMenueSelector.appendChild(makeMenu(dataText))
// })

myMenueSelector.appendChild(makeMenu(menuItems))
