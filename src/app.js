const header = document.querySelector('#pri-header');
const mainHeader = document.querySelector('.pri-header');
const tabBtns = document.querySelectorAll('.link');
const linkTabs = document.querySelectorAll('.link-tab');

// header.addEventListener('click', (e) => {
//   const id = e.target.dataset.id;
// });

tabBtns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const id = e.target.dataset.id;

    if (id == 'games') {
      document.getElementById('games').classList.toggle('open');
      document.getElementById('hardware').classList.remove('open');
      document.getElementById('services').classList.remove('open');
      document.getElementById('news').classList.remove('open');
      document.getElementById('shop').classList.remove('open');
      document.getElementById('support').classList.remove('open');
    }
    if (id == 'hardware') {
      document.getElementById('hardware').classList.toggle('open');
      document.getElementById('games').classList.remove('open');
      document.getElementById('services').classList.remove('open');
      document.getElementById('news').classList.remove('open');
      document.getElementById('shop').classList.remove('open');
      document.getElementById('support').classList.remove('open');
    }

    if (id == 'services') {
      document.getElementById('services').classList.toggle('open');
      document.getElementById('games').classList.remove('open');
      document.getElementById('hardware').classList.remove('open');
      document.getElementById('news').classList.remove('open');
      document.getElementById('shop').classList.remove('open');
      document.getElementById('support').classList.remove('open');
    }

    if (id == 'news') {
      document.getElementById('news').classList.toggle('open');
      document.getElementById('games').classList.remove('open');
      document.getElementById('hardware').classList.remove('open');
      document.getElementById('services').classList.remove('open');
      document.getElementById('shop').classList.remove('open');
      document.getElementById('support').classList.remove('open');
    }

    if (id == 'shop') {
      document.getElementById('shop').classList.toggle('open');
      document.getElementById('games').classList.remove('open');
      document.getElementById('services').classList.remove('open');
      document.getElementById('news').classList.remove('open');
      document.getElementById('hardware').classList.remove('open');
      document.getElementById('support').classList.remove('open');
    }

    if (id == 'support') {
      document.getElementById('support').classList.toggle('open');
      document.getElementById('games').classList.remove('open');
      document.getElementById('services').classList.remove('open');
      document.getElementById('news').classList.remove('open');
      document.getElementById('shop').classList.remove('open');
      document.getElementById('hardware').classList.remove('open');
    }
  });
});
