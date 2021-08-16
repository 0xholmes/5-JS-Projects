const header = document.querySelector("#header")
const title = document.querySelector("#title")
const excerpt = document.querySelector("#excerpt")
const profile_img = document.querySelector("#profile_img")
const username = document.querySelector("#name")
const date = document.querySelector("#date")

const animated_bgs = document.querySelectorAll(".animated-bg")
const animated_bg_texts = document.querySelectorAll(".animated-bg-text")

setInterval(getData, 2000)
setTimeout(() => getDog(), 100)

async function getDog() {
  const res = await fetch("https://dog.ceo/api/breeds/image/random")
  const { message } = await res.json()

  header.innerHTML = `<img src="${message}" alt="">`
}

function getData() {
  title.innerText = "Lorem ipsum dolor sit amet"
  excerpt.innerText =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perferendis"
  profile_img.innerHTML = `<img src="https://randomuser.me/api/portraits/men/45.jpg" alt="">`
  username.innerText = "John Doe"
  date.innerText = "Aug 01, 2021"

  animated_bgs.forEach((bg) => bg.classList.remove("animated-bg"))
  animated_bg_texts.forEach((bg) => bg.classList.remove("animated-bg-text"))
}
