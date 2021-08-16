const header = document.querySelector("#header")
const title = document.querySelector("#title")
const excerpt = document.querySelector("#excerpt")
const profile_img = document.querySelector("#profile_img")
const username = document.querySelector("#name")
const date = document.querySelector("#date")

const animated_bgs = document.querySelectorAll(".animated-bg")
const animated_bg_texts = document.querySelectorAll(".animated-bg-text")

setInterval(getData, 2000)

function getData(dog) {
  header.innerHTML = `<img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=2102&amp;q=80" alt="">`
  title.innerText = "Lorem ipsum dolor sit amet"
  excerpt.innerText =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perferendis"
  profile_img.innerHTML = `<img src="https://randomuser.me/api/portraits/men/45.jpg" alt="">`
  username.innerText = "John Doe"
  date.innerText = "Aug 01, 2021"

  animated_bgs.forEach((bg) => bg.classList.remove("animated-bg"))
  animated_bg_texts.forEach((bg) => bg.classList.remove("animated-bg-text"))
}
