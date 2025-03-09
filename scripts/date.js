const current_year = document.querySelector('#current_year');
const last_modification = document.querySelector('#last_modification');


current_year.innerHTML = new Date().getFullYear();
last_modification.innerHTML = new Date(document.lastModified).toLocaleString();