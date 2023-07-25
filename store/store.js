import Vue from 'vue';

export const store = Vue.observable({
  isNavOpen: false
});

export const email = 'emanuele.deluca9@gmail.com';

export const navLinks = [
  {
    name: 'About',
    url: '#about'
  },
  {
    name: 'Experience',
    url: '#experience'
  },
  {
    name: 'Projects',
    url: '#projects'
  }
];

export const socialLinks = [
  {
    name: 'github',
    url: 'https://github.com/manudeluca'
  },
  {
    name: 'linkedin',
    url: 'https://www.linkedin.com/in/emanueledeluca/'
  },
  {
    name: 'instagram',
    url: 'https://instagram.com/manudelucaa'
  }
];