import { getByUser, getByRepositories } from "./requests.js";

export async function renderProfile() {
  const headerContainer = document.querySelector(".header__container")
  const mainContainer = document.querySelector(".main__container")
  const headerBtn = document.querySelector(".btn__trade")

  headerContainer.innerHTML = ''

  const search = JSON.parse(localStorage.getItem("searchUser"))
  const header = createHeader(search)

  const login = search.login

  mainContainer.innerHTML = ''

  const repositories = await getByRepositories(login)
  const searchRepositories = JSON.parse(
    localStorage.getItem("searchRepositories")
  )
  
  searchRepositories.forEach((element) => {
    const repositoriesR = createCard(element)
    mainContainer.appendChild(repositoriesR)
  })

  headerContainer.appendChild(header)
  headerContainer.appendChild(headerBtn)
}

renderProfile();

function createHeader(element) {
  const profileContainer = document.createElement("div")
  const img = document.createElement("img")
  const h1 = document.createElement("h1")

  profileContainer.classList.add("profile__container")
  img.src = element.avatar_url
  h1.innerHTML = element.name

  profileContainer.append(img, h1)

  return profileContainer
}

function createCard(element) {
  const cardProject = document.createElement("section")
  const titlerepository = document.createElement("h2")
  const description = document.createElement("span")
  const btnProject = document.createElement("button")

  cardProject.classList.add("card__project")
  titlerepository.innerHTML = element.name
  description.innerHTML = element.description
  btnProject.classList.add("btn__project")
  btnProject.innerHTML = "Repositório"

  btnProject.addEventListener('click', async () => {
    window.location.href=element.html_url
  })

  cardProject.append(titlerepository, description, btnProject)

  return cardProject
}

function backpage(){
  const btnTrade = document.querySelector('.btn__trade')

  console.log(btnTrade)

  btnTrade.addEventListener('click', () => {
    window.location.replace("../../index.html")
  })
}

backpage()