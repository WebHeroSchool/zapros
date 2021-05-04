fetch('https://api.github.com/users/Solomon7and7')
  .then(res=>res.json())
  // let list = document.querySelector('.profile')
  .then(
    json=>document.querySelector('.profile').innerHTML+=`
      <img src="${json.avatar_url}" alt="avatar">
      <div><a href="${json.html_url}">${json.name}</a></div>
      <p>${json.bio}</p>
    `)

  .catch(err=>console.log('Информация о пользователе не доступна'))