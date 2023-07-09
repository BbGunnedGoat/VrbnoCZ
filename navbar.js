const nav = document.createElement('nav');
nav.classList.add('navbar', 'navbar-expand-lg', 'navbar-light', 'bg-light');

const container = document.createElement('div');
container.classList.add('container-fluid');

const brand = document.createElement('a');
brand.classList.add('navbar-brand');
brand.href = '#';
brand.textContent = 'VRBNO CZ';

const button = document.createElement('button');
button.classList.add('navbar-toggler');
button.type = 'button';
button.dataset.toggle = 'collapse';
button.dataset.target = '#navbarNav';
button.innerHTML = '<span class="navbar-toggler-icon"></span>';

const collapse = document.createElement('div');
collapse.classList.add('collapse', 'navbar-collapse');
collapse.id = 'navbarNav';

const list = document.createElement('ul');
list.classList.add('navbar-nav');

const items = [
  { text: 'Domů', href: 'index.html' },
  { text: 'Historie', href: 'historie.html' },
  { text: 'Demografie', href: 'demografie.html' },
  { text: 'Fotografie', href: '#' },
  { text: 'Firmy', href: '#' },
  { text: 'Vaše články', href: '#' },
  { text: 'Diskuse', href: '#' },
  { text: 'Zdroje', href: '#' },
  { text: 'Odkazy', href: '#' },
  { text: 'Kam zajít', href: '#' },
  { text: 'Napište nám', href: '#' },
  { text: 'Mapa', href: '#' },
  { text: 'Admin', href: '#' },
];

items.forEach((item) => {
  const listItem = document.createElement('li');
  listItem.classList.add('nav-item');

  const link = document.createElement('a');
  link.classList.add('nav-link');
  link.href = item.href;
  link.textContent = item.text;

  listItem.appendChild(link);
  list.appendChild(listItem);
});

collapse.appendChild(list);
container.appendChild(brand);
container.appendChild(button);
container.appendChild(collapse);
nav.appendChild(container);


document.getElementById("nav").appendChild(nav);
