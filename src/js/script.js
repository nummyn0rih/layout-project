menu.onclick = function() {
  const nav = document.getElementById('myTopnav');

  if (nav.className === 'topnav') {
    nav.className += ' responsive';
  } else {
    nav.className = 'topnav';
  }
};

form.onclick = function(event) {
  event.preventDefault();

  if (this.lastElementChild.className === "form__submitted") {
    return;
  }

  if (event.target.className === 'submit') {
    const p = document.createElement('p');
    p.className = "form__submitted";
    p.innerHTML = "Form submitted";

    this.append(p);
  }
};
