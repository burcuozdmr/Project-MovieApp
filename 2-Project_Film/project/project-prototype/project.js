const filmTitle = document.getElementById('film-title');
const filmDirector = document.getElementById('film-director');
const filmActors = document.getElementById('film-actors');
const filmYear = document.getElementById('film-year');
const filmImdb = document.getElementById('film-imdb');
const filmUrl = document.getElementById('film-url');
const filmGenre = document.getElementById('film-genre');
const filmInfo = document.getElementById('film-info');
const addButton = document.getElementById('btn-add');
const filmForm = document.getElementById('film-form');
const addNewFilm = document.getElementById('add-new-film');
const modals = document.getElementById('modals');
const clearButton = document.getElementById('clear-films');
const genreSelect = document.getElementById('genre-select');
const allFilmsCard = document.getElementById('film-card');
const searchButton = document.getElementById('search-button');
const editButtons = document.querySelectorAll('.btn-edit');


const filmModal = new bootstrap.Modal(document.getElementById('staticBackdrop'));
//UI Object 
const ui = new UI();

//Storage Object Creating
const storage = new Storage();

//Event Listeners
eventListeners();

function eventListeners(){
  addButton.addEventListener('click',addFilm);
  addNewFilm.addEventListener('click',resetValidation);
  document.addEventListener('DOMContentLoaded',function(){
    let films = storage.getFilmsFromStorage();
    ui.loadAllFilms(films);
  });
  modals.addEventListener('click',deleteFilm);
  modals.addEventListener('click',editFilm);
  clearButton.addEventListener('click',clearAllFilms);
  genreSelect.addEventListener('change', filterFilms);
  searchButton.addEventListener('click',searchFilms);
  document.addEventListener('keyup',function(e){
    if (e.key === "Enter") {
      searchFilms();
    }
  })
}

function editFilm(e){

  ui.editFilmInfo(e);
  ui.revisedFilmName(e);
  storage.revisedFilmInfo(e);
 
}

function searchFilms(){
  ui.searchFilmByName();
}

function filterFilms(){
  let films = storage.getFilmsFromStorage();
  ui.filterFilmsGenre(films);
}
 
function clearAllFilms(){
  if(confirm('If you press OK, all films will be deleted.')){
    ui.clearAllFilmsFromUI();
    storage.clearAllFilmsFromStorage();
  }
}
function deleteFilm(e){
  
  if(e.target.id === 'btn-delete'){
    ui.deleteFilmFromUI(e.target);
    ui.deleteFilmFromModal(e.target);

    storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.firstElementChild.firstElementChild.nextElementSibling.firstElementChild.textContent.trim());
    
  }
}

function resetValidation(){
  filmForm.classList.remove('was-validated');
}

function addFilm(e){
  const title = filmTitle.value;
  const director = filmDirector.value;
  const actors = filmActors.value;
  const year = filmYear.value;
  const imdb = filmImdb.value;
  const url = filmUrl.value;
  const genre = filmGenre.value;
  const info = filmInfo.value;
  
  if(!filmForm.checkValidity()){
    filmForm.classList.add('was-validated');
  }
  else{
    const newFilm = new Film(title,director,actors,year,imdb,url,genre,info);

    ui.addFilmToUI(newFilm);
    ui.addFilmToModal(newFilm);

    storage.addFilmToStorage(newFilm);
    
    filmModal.hide();
  }
  ui.clearInputs(filmTitle,filmDirector,filmActors,filmYear,filmImdb,filmUrl,filmGenre,filmInfo); 
}





