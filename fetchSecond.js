const log = console.log;
const url = 'https://api.github.com/users/Solomon7and7';
let preloader = document.getElementById('preloader');

setTimeout(function() {
  preloader.classList.add('hidden');
}, 4000);


const getDate = new Promise((resolve, reject) => {
  setTimeout(() => new Date ? resolve(Date) : reject('Дата не найдена'), 4000);
});

Promise.all([getDate, url])
  .then(([getDate, url]) => fetch(`${url}`))
  .then(res=>res.json())
  .then(
    json=>document.querySelector('.profile').innerHTML+=`
      <img src="${json.avatar_url}" alt="avatar">
      <div><a href="${json.html_url}">${json.name}</a></div>
      <p>${json.bio}</p>
      <p>${Date()}</p>
    `)

  .catch(err=>log('Информация о пользователе не доступна'))