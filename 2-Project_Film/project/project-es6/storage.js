class Storage{

  static addFilmToStorage(newFilm){
    let films = this.getFilmsFromStorage();
    films.push(newFilm);
    localStorage.setItem('films',JSON.stringify(films));
  }
  static getFilmsFromStorage(){
    let films;
  
    if( localStorage.getItem('films') === null){
      films = [];
    }
    else{
      films = JSON.parse(localStorage.getItem('films'));
    }
  
    return films;
  }

  static deleteFilmFromStorage(filmTitle){
    let films = this.getFilmsFromStorage();
  
    films.forEach(function(film,index){
      if(film.title.toLowerCase() === filmTitle.toLowerCase()){
        films.splice(index,1);
      }
    })
    localStorage.setItem('films',JSON.stringify(films));
  }
  static clearAllFilmsFromStorage(){
    localStorage.removeItem('films');
  }

  static revisedFilmInfo(e){
    let films = this.getFilmsFromStorage();

    if(e.target.classList.contains('btn-save')){

      const posterUrl = e.target.parentElement.previousElementSibling.firstElementChild.getAttribute('src');
      films.forEach(function(film){ 
        if(film.url === posterUrl){
          film.title = e.target.parentElement.firstElementChild.firstElementChild.value.trim();
          film.year = e.target.parentElement.firstElementChild.nextElementSibling.lastElementChild.value.trim();
          film.genre = e.target.parentElement.firstElementChild.nextElementSibling.nextElementSibling.lastElementChild.value.trim();
          film.imdb = e.target.parentElement.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.lastElementChild.value.trim();
          film.director = e.target.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.lastElementChild.value.trim();
          film.actors = e.target.previousElementSibling.previousElementSibling.previousElementSibling.lastElementChild.value.trim();
          film.info = e.target.previousElementSibling.previousElementSibling.lastElementChild.value.trim();
        }
      })
      localStorage.setItem('films', JSON.stringify(films));
    }
  }
}




