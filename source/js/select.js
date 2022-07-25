const selectSingle = document.querySelector('.__select');
const selectSingle_title = selectSingle.querySelector('.__select__title');
const selectSingle_labels = selectSingle.querySelectorAll('.__select__label');
var lab = document.getElementById("del");
var inp = document.getElementById("singleSelect0");


// Toggle menu
selectSingle_title.addEventListener('click', () => {
  
  if ('active' === selectSingle.getAttribute('data-state')) {
    selectSingle.setAttribute('data-state', '');
  } else {
    selectSingle.setAttribute('data-state', 'active');
  }

  if  (document.getElementById('del') !== null && document.getElementById('del').getAttribute('data-value') == 'Материалы') {
    lab.remove();
    inp.remove();
    document.getElementById("singleSelect1").setAttribute('checked', '')
  }
});

// Close when click to option
for (let i = 0; i < selectSingle_labels.length; i++) {
  selectSingle_labels[i].addEventListener('click', (evt) => {
    selectSingle_title.textContent = evt.target.textContent;
    selectSingle.setAttribute('data-state', '');
  });
}