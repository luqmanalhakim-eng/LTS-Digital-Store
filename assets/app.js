
/* LTS Digital Store — app.js */

// Mobile navigation
const menu = document.getElementById('menu');
const nav = document.querySelector('.header nav');

menu?.addEventListener('click', () => {
  const opened = nav.classList.toggle('open');
  menu.setAttribute('aria-expanded', String(opened));
});

nav?.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    nav.classList.remove('open');
    menu?.setAttribute('aria-expanded', 'false');
  });
});

// Automatic copyright year
const year = document.getElementById('year');
if (year) {
  year.textContent = new Date().getFullYear();
}

// Product details popup
const dialog = document.getElementById('productDialog');
const productButton = document.getElementById('productButton');
const closeDialog = document.getElementById('closeDialog');

productButton?.addEventListener('click', () => {
  dialog?.showModal();
});

closeDialog?.addEventListener('click', () => {
  dialog?.close();
});

// Close popup when clicking outside its content
dialog?.addEventListener('click', e => {
  if (e.target === dialog) {
    dialog.close();
  }
});

// Close popup using Escape (native dialog behavior)

// Payhip checkout is handled by the HTML link:
// https://payhip.com/b/h6lYn
// No JavaScript checkout handler is required.
