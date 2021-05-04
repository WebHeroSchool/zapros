let url = 'https://api.github.com/users/Solomon7and7';

async function getProfileInfo() {

  let profile = await fetch(url)
  if (profile.ok) {
    let json = await profile.json()

    let list = document.querySelector('.profile')

    list.innerHTML += `
      <img src="${json.avatar_url}" alt="avatar">
      <div><a href="${json.html_url}">${json.name}</a></div>
      <p>${json.bio}</p>
    `


    console.log(name, avatar, bio, html)
  } else {
      let list = document.querySelector('.profile')

      list.innerHTML += `
        <h3>Информация о пользователе не доступна</h3>
      `
      alert('Информация о пользователе не доступна')
      console.log('Информация о пользователе не доступна')
  }
}

getProfileInfo()