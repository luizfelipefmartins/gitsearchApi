import { getByUser } from "./requests.js";

export function searchUsers(){
    const input = document.querySelector('.input__search')
    const btn = document.querySelector('.btn__search')

    btn.addEventListener('click', async (event) => {
        event.preventDefault()
        const user = await getByUser(input.value)
    })
}