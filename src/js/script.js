menu.onclick = function() {
  const x = document.getElementById('myTopnav');

  if (x.className === 'topnav') {
    x.className += ' responsive';
  } else {
    x.className = 'topnav';
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
