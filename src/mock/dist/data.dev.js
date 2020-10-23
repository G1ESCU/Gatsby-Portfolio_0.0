"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.githubButtons = exports.footerData = exports.contactData = exports.projectsData = exports.aboutData = exports.heroData = exports.headData = void 0;

var _nanoid = require("nanoid");

// HEAD DATA
var headData = {
  title: '',
  // e.g: 'Name | Developer'
  lang: '',
  // e.g: en, es, fr, jp
  description: '' // e.g: Welcome to my website

}; // HERO DATA

exports.headData = headData;
var heroData = {
  title: '',
  name: 'George Vasilescu',
  subtitle: 'Web Developer',
  cta: ''
}; // ABOUT DATA

exports.heroData = heroData;
var aboutData = {
  img: 'profile.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://www.resumemaker.online/es.php' // if no resume, the button will not show up

}; // PROJECTS DATA

exports.aboutData = aboutData;
var projectsData = [{
  id: (0, _nanoid.nanoid)(),
  img: 'project.jpg',
  title: '',
  info: '',
  info2: '',
  url: '',
  repo: 'https://github.com/G1ESCU/Gatsby-Portfolio_0.0.git' // if no repo, the button will not show up

}, {
  id: (0, _nanoid.nanoid)(),
  img: 'project.jpg',
  title: '',
  info: '',
  info2: '',
  url: '',
  repo: 'https://github.com/cobidev/react-simplefolio' // if no repo, the button will not show up

}, {
  id: (0, _nanoid.nanoid)(),
  img: 'project.jpg',
  title: '',
  info: '',
  info2: '',
  url: '',
  repo: 'https://github.com/cobidev/react-simplefolio' // if no repo, the button will not show up

}]; // CONTACT DATA

exports.projectsData = projectsData;
var contactData = {
  cta: '',
  btn: '',
  email: ''
}; // FOOTER DATA

exports.contactData = contactData;
var footerData = {
  networks: [{
    id: (0, _nanoid.nanoid)(),
    name: 'twitter',
    url: ''
  }, {
    id: (0, _nanoid.nanoid)(),
    name: 'codepen',
    url: ''
  }, {
    id: (0, _nanoid.nanoid)(),
    name: 'linkedin',
    url: 'http://www.linkedin.com/in/george-vasilescu-635550114'
  }, {
    id: (0, _nanoid.nanoid)(),
    name: 'github',
    url: 'https://github.com/G1ESCU'
  }]
}; // Github start/fork buttons

exports.footerData = footerData;
var githubButtons = {
  isEnabled: true // set to false to disable the GitHub stars/fork buttons

};
exports.githubButtons = githubButtons;