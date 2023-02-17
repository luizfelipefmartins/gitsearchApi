export async function getByUser(login) {
  const users = await fetch(`https://api.github.com/users/${login}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((res) => {
      localStorage.setItem("searchUser", JSON.stringify(res));

      if (res.login === login) {
        window.location.replace("./src/pages/profile.html");
      } else {
        window.location.replace("./src/pages/error.html");
      }
    });
  return users;
}

export async function getByRepositories(login){
  const repositories = await fetch(`https://api.github.com/users/${login}/repos`, {
    method: 'GET',
    headers: {
      "Content-Type": "application/json",
    }
  })
  .then((response) => response.json())
  .then( res => {
    localStorage.setItem("searchRepositories", JSON.stringify(res))
  });
  return repositories
}


