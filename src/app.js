const header = document.querySelector('#pri-header');
const tabBtns = document.querySelectorAll('.link');
const linkTabs = document.querySelectorAll('.link-tab');

tabBtns.forEach((tabBtn) => {
  tabBtn.addEventListener('click', (e) => {
    const id = e.target.dataset.id;

    const tab = document.getElementById(id);
  });
});
