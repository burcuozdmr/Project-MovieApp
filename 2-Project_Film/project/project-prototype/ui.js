function UI(){

}
UI.prototype.addFilmToUI = function(newFilm){

  const filmCard = document.getElementById('film-card');
  filmCard.innerHTML += `
    <div class="col cards" >
      <div class="card text-light-emphasis overflow-hidden"  style="height: 18rem; ">
        <img src="${newFilm.url}" class="card-img-top mb-2" alt="...">
      </div>
      <div class="card-body p-0 mt-2">
        <p class="card-title single-line" style="font-weight: 700; font-size:0.8rem;">${newFilm.title.toUpperCase()}</p>
        <button type="button" class="btn bg-info-subtle mt-2" data-bs-toggle="modal" data-bs-target="#modal_${newFilm.title.replace(/[\s']/g, '_')}" style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;">More</button>
      </div>
    </div> 
  `;
}
UI.prototype.addFilmToModal = function(newFilm){

  const modals = document.getElementById('modals');
  modals.innerHTML += `
    <div class="modal fade" id="modal_${newFilm.title.replace(/[\s']/g, '_')}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-fullscreen">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-md-3 me-5">
                <img src="${newFilm.url}" class="card-img-top mb-2" alt="...">
              </div>
              <div class="col-lg-6 mt-3">
                <div class="input-group mb-3">
                  <textarea class="form-control card-title mt-3 text-uppercase" style="font-weight: 700; font-size: 22px; border: none;" aria-label="With textarea" readonly>${newFilm.title.toUpperCase()}</textarea>
                </div>
                <div class="input-group mb-3">
                  <span class="input-group-text bg-dark" style="border: none">Year :</span>
                  <input type="text" id="disabledTextInput" class="form-control bg-dark" style="border: none" placeholder="Disabled input" value="${newFilm.year}" disabled >
                </div>
                <div class="input-group mb-3">
                  <span class="input-group-text bg-dark" style="border: none">Genre :</span>
                  <input type="text" id="disabledTextInput" class="form-control bg-dark" style="border: none" placeholder="Disabled input" value="${newFilm.genre}" disabled >
                </div>
                <div class="input-group mb-3">
                  <span class="input-group-text bg-dark" style="border: none">IMDb :</span>
                  <input type="text" id="disabledTextInput" class="form-control bg-dark" style="border: none" placeholder="Disabled input" value="${newFilm.imdb}" disabled >
                </div>
                <div class="input-group mb-3">
                  <span class="input-group-text bg-dark" style="border: none">Director/s :</span>
                  <input type="text" id="disabledTextInput" class="form-control bg-dark" style="border: none" placeholder="Disabled input" value="${newFilm.director}" disabled>
                </div>
                <div class="input-group mb-3">
                  <span class="input-group-text bg-dark" style="border: none">Lead Actor/s :</span>
                  <input type="text" id="disabledTextInput" class="form-control bg-dark" style="border: none" placeholder="Disabled input" value="${newFilm.actors}" disabled >
                </div>
                <div class="input-group mb-3">
                      <span class="input-group-text bg-dark align-items-start" style="border: none">Information :</span>
                      <textarea class="form-control card-title" style="border: none;" aria-label="With textarea" readonly>${newFilm.info}</textarea>
                </div>
                <button type="button" class="btn btn-secondary btn-sm mt-5 btn-edit ms-2">Edit</button>
                
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-danger" id="btn-delete">Delete</button>
          </div>
        </div>
      </div>
    </div>
  `
}

UI.prototype.clearInputs = function(el1,el2,el3,el4,el5,el6,el7,el8){
  el1.value = '';
  el2.value = '';
  el3.value = '';
  el4.value = '';
  el5.value = '';
  el6.value = '';
  el7.value = '';
  el8.value = '';
}
UI.prototype.loadAllFilms = function(films){
  const filmCard = document.getElementById('film-card');
  const modals = document.getElementById('modals');
  Array.from(films).forEach(function(film){
    filmCard.innerHTML += `
      <div class="col cards">
        <div class="card text-light-emphasis overflow-hidden"  style="height: 18rem; ">
          <img src="${film.url}" class="card-img-top mb-2" alt="...">
        </div>
        <div class="card-body p-0 mt-2">
          <p class="card-title single-line" style="font-weight: 700; font-size:0.8rem;">${film.title.toUpperCase()}</p>
          <button type="button" class="btn bg-info-subtle mt-2" data-bs-toggle="modal" data-bs-target="#modal_${film.title.replace(/[\s']/g, '_')}" style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;">More</button>
        </div>
      </div> 
    `;

    modals.innerHTML += `
    <div class="modal fade" id="modal_${film.title.replace(/[\s']/g, '_')}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-fullscreen">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-md-3 me-5">
                <img src="${film.url}" class="card-img-top mb-2" alt="...">
              </div>
              <div class="col-lg-6 mt-3">
                <div class="input-group mb-3">
                  <textarea class="form-control card-title mt-3 text-uppercase" style="font-weight: 700; font-size: 22px; border: none;" aria-label="With textarea" readonly>${film.title.toUpperCase()}</textarea>
                </div>
                <div class="input-group mb-3">
                  <span class="input-group-text bg-dark" style="border: none">Year :</span>
                  <input type="text" id="disabledTextInput" class="form-control bg-dark" style="border: none" placeholder="Disabled input" value="${film.year}" disabled >
                </div>
                <div class="input-group mb-3">
                  <span class="input-group-text bg-dark" style="border: none">Genre :</span>
                  <input type="text" id="disabledTextInput" class="form-control bg-dark" style="border: none" placeholder="Disabled input" value="${film.genre}" disabled >
                </div>
                <div class="input-group mb-3">
                  <span class="input-group-text bg-dark" style="border: none">IMDb :</span>
                  <input type="text" id="disabledTextInput" class="form-control bg-dark" style="border: none" placeholder="Disabled input" value="${film.imdb}" disabled >
                </div>
                <div class="input-group mb-3">
                  <span class="input-group-text bg-dark" style="border: none">Director/s :</span>
                  <input type="text" id="disabledTextInput" class="form-control bg-dark" style="border: none" placeholder="Disabled input" value="${film.director}" disabled>
                </div>
                <div class="input-group mb-3">
                  <span class="input-group-text bg-dark" style="border: none">Lead Actor/s :</span>
                  <input type="text" id="disabledTextInput" class="form-control bg-dark" style="border: none" placeholder="Disabled input" value="${film.actors}" disabled >
                </div>
                <div class="input-group mb-3">
                      <span class="input-group-text bg-dark align-items-start" style="border: none">Information :</span>
                      <textarea class="form-control card-title" style="border: none;" aria-label="With textarea" readonly>${film.info}</textarea>
                </div>
                <button type="button" class="btn btn-secondary btn-sm mt-5 btn-edit ms-2">Edit</button>
               
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-danger" id="btn-delete">Delete</button>
          </div>
        </div>
      </div>
    </div>
  `
  })
}
UI.prototype.deleteFilmFromModal = function(element){
  
  element.parentElement.parentElement.parentElement.parentElement.remove();
  
}
UI.prototype.deleteFilmFromUI = function(element){

  const targetAttributeValue = element.parentElement.parentElement.parentElement.parentElement.id;
  const moreButton = document.querySelector(`[data-bs-target="#${targetAttributeValue}"]`) ;
  moreButton.parentElement.parentElement.remove();
  location.reload();
}
UI.prototype.clearAllFilmsFromUI = function(){
  const filmCards = document.getElementById('film-card');
  while(filmCards.firstElementChild !== null){
    filmCards.firstElementChild.remove();
  }
}
UI.prototype.filterFilmsGenre = function(films){

   const filmCards = document.querySelectorAll('.col.cards');
   const selectedText = genreSelect.options[genreSelect.selectedIndex].text.toLowerCase();
   const matchedFilms = films.filter(film => film.genre === selectedText);
   
   if (matchedFilms.length > 0) {
     allFilmsCard.style.display = "block";
     matchedFilms.forEach(film => {
       Array.from(filmCards).forEach(function(filmCard){
         if(!(filmCard.firstElementChild.nextElementSibling.firstElementChild.textContent === film.title)){
           filmCard.style.display = "none";
         }
         else{
           filmCard.style.display = "block";
         }
       })
     });
   } else {
     if(selectedText === 'all'){
       location.reload();
     }
     else{
       allFilmsCard.style.display = "none";
     }
   }
}
UI.prototype.searchFilmByName = function(){
  const searchInput = document.getElementById('input-search');
  const filmCards = document.querySelectorAll('.col.cards');
  
  Array.from(filmCards).forEach(function(filmCard){
    if(!(filmCard.firstElementChild.nextElementSibling.firstElementChild.textContent.toLowerCase().includes(searchInput.value.toLowerCase()))){
      filmCard.style.display = "none";
    }
    else{
      filmCard.style.display = "block";
    }
  })
  searchInput.value = '';
}
UI.prototype.editFilmInfo = function(e){
  //When click edit button 
  if(e.target.classList.contains('btn-edit')){
    const saveButton = `
      <button type="button" class="btn btn-success btn-sm mt-5 btn-save">Save</button>
    `
    e.target.insertAdjacentHTML('afterend', saveButton);
    e.target.style.display = 'none';
    const eachModal = e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement;
    const inputs = eachModal.querySelectorAll('input');
    const textareas = eachModal.querySelectorAll('textarea');
    textareas.forEach(textarea => {
      textarea.readOnly = false;
      textarea.classList.add('bg-transparent', 'border', 'border-success', 'border-opacity-50', 'custom-border-shadow');
    })
    inputs.forEach(input => {
      input.disabled = false;
      input.classList.add('bg-transparent', 'border', 'border-success', 'border-opacity-50', 'custom-border-shadow');
    });
  }
  //When click save button 
  if(e.target.classList.contains('btn-save')){
    e.target.style.display = 'none';
    e.target.previousElementSibling.style.display = 'block';
    const eachModal = e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement;
    const inputs = eachModal.querySelectorAll('input');
    const textareas = eachModal.querySelectorAll('textarea');
    textareas.forEach(textarea => {
      textarea.readOnly = true;
      textarea.classList.remove('bg-transparent', 'border', 'border-success', 'border-opacity-50', 'custom-border-shadow');
    })
    inputs.forEach(input => {
      input.disabled = true;
      input.classList.remove('bg-transparent', 'border', 'border-success', 'border-opacity-50', 'custom-border-shadow');
    }); 
  }
}
UI.prototype.revisedFilmName = function(e){
  if(e.target.classList.contains('btn-save')){
    const modalId = e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.id;
    const button = document.querySelector(`[data-bs-target="#${modalId}"]`);
    button.previousElementSibling.textContent = e.target.parentElement.firstElementChild.firstElementChild.value.trim().toUpperCase();
  }
}