var accordionButton = document.querySelectorAll('.accordion__button');

for (var i = 0; i < accordionButton.length; i++) {
  accordionButton[i].addEventListener('click', function(evt) {
    evt.preventDefault();
    this.classList.toggle('accordion__button--active');

    var accordionTextContent = this.nextElementSibling;
    if(accordionTextContent.style.display === 'block') {
      accordionTextContent.style.display = 'none';
    } else {
      accordionTextContent.style.display = 'block';
    }
  });
}
