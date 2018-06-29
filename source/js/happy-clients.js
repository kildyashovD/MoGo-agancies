'use strict';

var happyClientsListElement = document.querySelector('.clients-reviews');
var happyClientsListTemplate = document.querySelector('#happy-clients-reviews-template');
var clientsName = ['Matthew Dix', 'Nick Karvounis', 'Jaelynn Castillo', 'Mike Petrucci']
var clients = [
  {
    name: clientsName[0],
    position: 'Graphic Design',
    comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.',
    avatar: 'img/dix-avatar.png'
  },
  {
    name: clientsName[1],
    position: 'Graphic Design',
    comment: 'Sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    avatar: 'img/karvounis-avatar.png'
  },
  {
    name: clientsName[2],
    position: 'Graphic Design',
    comment: 'Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    avatar: 'img/castillo-avatar.png'
  },
  {
    name: clientsName[3],
    position: 'Graphic Design',
    comment: 'Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.',
    avatar: 'img/petrucci-avatar.png',
  }
];

for (var i = 0; i < clients.length; i++) {
  var clientsElement = happyClientsListTemplate.content.cloneNode('true');

  clientsElement.querySelector('.clients-reviews__name').textContent = clients[i].name;

  clientsElement.querySelector('.clients-reviews__position').textContent = clients[i].position;

  clientsElement.querySelector('.clients-reviews__text').textContent = clients[i].comment;

  clientsElement.querySelector('.clients-reviews__avatar').setAttribute('src', clients[i].avatar);

  happyClientsListElement.appendChild(clientsElement);
}
