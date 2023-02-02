/* eslint-disable no-unused-vars */
import { SerieStructure } from '../../models/serie';
import { Component } from '../component/component';

export class Film extends Component {
  constructor(
    public selector: string,
    public film: SerieStructure,
    public deleteSerie: (id: SerieStructure['id']) => void,
    public updateSerie: (task: SerieStructure) => void
  ) {
    super();
    this.film = { ...film };
    this.template = this.createTemplate();
    this.render('beforeend');
  }

  render(place: globalThis.InsertPosition) {
    super.render(place);
    // document
    //   .querySelector(`#b${this.film.id}`)
    //   ?.addEventListener('click', () => {
    //     this.deleteTask(this.film.id);
    //   });
    // document
    //   .querySelector(`#c${this.film.id}`)
    //   ?.addEventListener('change', () => {
    //     this.film.isCompleted = !this.film.isCompleted;
    //     this.updateTask(this.film);
    //   });
  }

  createTemplate() {
    return `
    <li class="serie">
      <img class="serie__poster"
        src="${this.film.poster}"
        alt="The Sopranos poster" />
      <h4 class="serie__title">${this.film.name}</h4>
      <p class="serie__info">${this.film.creator} (1999)</p>
      <ul class="score">
        <li class="score__star">
          <i class="icon--score fas fa-star" title="1/5"></i>
        </li>
        <li class="score__star">
          <i class="icon--score fas fa-star" title="2/5"></i>
        </li>
        <li class="score__star">
          <i class="icon--score fas fa-star" title="3/5"></i>
        </li>
        <li class="score__star">
          <i class="icon--score fas fa-star" title="4/5"></i>
        </li>
        <li class="score__star">
          <i class="icon--score fas fa-star" title="5/5"></i>
        </li>
      </ul>
      <i class="fas fa-times-circle icon--delete"></i>
    </li>`;
  }
}
