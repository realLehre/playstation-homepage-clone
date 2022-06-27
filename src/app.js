// const header = document.querySelector('#pri-header');
// const mainHeader = document.querySelector('.pri-header');
// const tabBtns = document.querySelectorAll('.link');
// const linkTabs = document.querySelectorAll('.link-tab');

// // header.addEventListener('click', (e) => {
// //   const id = e.target.dataset.id;
// // });

// tabBtns.forEach((btn) => {
//   btn.addEventListener('click', (e) => {
//     const id = e.target.dataset.id;

//     const tabsContainer = document.querySelector('#tabs-container');
//     const tabsSecondContainer = document.querySelector('.links-tabs-container');

//     if (!tabsContainer.classList.contains('open')) {
//       tabsContainer.classList.add('open');
//     } else {
//       tabsContainer.classList.remove('open');
//     }

//     if (id == 'games') {
//       document.getElementById('games').classList.add('open');
//       document.getElementById('hardware').classList.remove('open');
//       document.getElementById('services').classList.remove('open');
//       document.getElementById('news').classList.remove('open');
//       document.getElementById('shop').classList.remove('open');
//       document.getElementById('support').classList.remove('open');
//     }
//     if (id == 'hardware') {
//       document.getElementById('hardware').classList.toggle('open');
//       document.getElementById('games').classList.remove('open');
//       document.getElementById('services').classList.remove('open');
//       document.getElementById('news').classList.remove('open');
//       document.getElementById('shop').classList.remove('open');
//       document.getElementById('support').classList.remove('open');
//     }

//     if (id == 'services') {
//       document.getElementById('services').classList.toggle('open');
//       document.getElementById('games').classList.remove('open');
//       document.getElementById('hardware').classList.remove('open');
//       document.getElementById('news').classList.remove('open');
//       document.getElementById('shop').classList.remove('open');
//       document.getElementById('support').classList.remove('open');
//     }

//     if (id == 'news') {
//       document.getElementById('news').classList.toggle('open');
//       document.getElementById('games').classList.remove('open');
//       document.getElementById('hardware').classList.remove('open');
//       document.getElementById('services').classList.remove('open');
//       document.getElementById('shop').classList.remove('open');
//       document.getElementById('support').classList.remove('open');
//     }

//     if (id == 'shop') {
//       document.getElementById('shop').classList.toggle('open');
//       document.getElementById('games').classList.remove('open');
//       document.getElementById('services').classList.remove('open');
//       document.getElementById('news').classList.remove('open');
//       document.getElementById('hardware').classList.remove('open');
//       document.getElementById('support').classList.remove('open');
//     }

//     if (id == 'support') {
//       document.getElementById('support').classList.toggle('open');
//       document.getElementById('games').classList.remove('open');
//       document.getElementById('services').classList.remove('open');
//       document.getElementById('news').classList.remove('open');
//       document.getElementById('shop').classList.remove('open');
//       document.getElementById('hardware').classList.remove('open');
//     }
//   });
// });

// const tabsContainer = document.querySelector('#tabs-container');
// const containerHeight = tabsContainer.getBoundingClientRect();

// const tabsSecondContainer = document.querySelector('.links-tabs-container');
// const tabsSecondContainerHeight =
//   tabsSecondContainer.getBoundingClientRect().height;

// console.log(containerHeight);
// console.log(tabsSecondContainerHeight);

const header = document.getElementById('pri-header');
const links = document.querySelectorAll('.link');
const tabsContainer = document.querySelector('#tabs-container');
const tabs = document.querySelectorAll('.link-tab');

header.addEventListener('click', (e) => {
  const id = e.target.dataset.id;

  for (i = 0; i < tabs.length; i++) {
    tabs[i].classList.remove('open');
  }

  const tab = document.getElementById(id);
  if (id == tab.id) {
    tabsContainer.classList.add('open');
    tab.classList.add('open');
  }

  links.forEach((link) => {
    link.addEventListener('click', () => {
      link.classList.add('test');
    });
  });

  for (i = 0; i < links.length; i++) {
    if (links[i].classList.contains('test')) {
      tab.classList.remove('open');
    }
  }
});
