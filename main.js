const menuBtn = document.querySelector('.menu-btn');
const navbar = document.getElementById('navbar');
const navbarMenu = document.querySelector('.navbar-right');
const featureList = document.querySelector('.feature-list');
const showMore = document.querySelector('.more-btn');

// Feature data Object
const featureData = [
  {
    name: 'Baraka Danny',
    role: 'Full Stack Developer',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget consectetur sagittis.',
    image: 'img/profile-1.jpg',
  },
  {
    name: 'Sammy Lee',
    role: 'creative director',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget consectetur sagittis.',
    image: 'img/profile-2.jpg',
  },
  {
    name: 'John Doe',
    role: 'Team leader/ CEO',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget consectetur sagittis.',
    image: 'img/profile-3.jpg',
  },
  {
    name: 'Jane Hill',
    role: 'Network Engineer/ Developer',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget consectetur sagittis.',
    image: 'img/profile-4.jpg',
  },
  {
    name: 'zoey mary',
    role: 'Accountant Admin',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget consectetur sagittis.',
    image: 'img/profile-5.jpg',
  },
  {
    name: 'Tina Smith',
    role: 'Front End Developer',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget consectetur sagittis.',
    image: 'img/profile-3.jpg',
  },
];

// burger menu action
let menuOpen = false;

menuBtn.addEventListener('click', () => {
  if (!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    menuOpen = false;
  }
});

// sticky navigation menu
window.onscroll = function () {
  if (window.pageYOffset > 100) {
    // header.classList.add('sticky');
    navbar.classList.add('sticky');
  } else {
    // header.classList.remove('sticky');
    navbar.classList.remove('sticky');
  }
};

// open menu on click
menuBtn.addEventListener('click', (e) => {
  e.preventDefault();
  navbarMenu.classList.toggle('show-menu');
});

// generate Dynamic feature list
for (let i = 0; i < featureData.length; i += 1) {
  const featureD = featureData[i];

  const feature = document.createElement('div');
  feature.classList.add('feature');
  feature.innerHTML = `
    <div class="feature-item">
        <div class="feature-item-img">
            <img src="${featureD.image}" alt="">
        </div>
        <div class="feature-item-text">
            <h3>${featureD.name}</h3>
            <span class="role">${featureD.role} </span>
            <p>
                ${featureD.description}
            </p>
        </div>
    </div>
  `;
  featureList.appendChild(feature);
}

// unhide feature List on click
showMore.addEventListener('click', (e) => {
  e.preventDefault();
  featureList.classList.toggle('hide');
  showMore.textContent = showMore.textContent.includes('See More')
    ? 'See Less'
    : 'See More';
});
