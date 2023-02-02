/* eslint-disable no-new */
/* eslint-disable no-unused-vars */

import { Component } from '../component/component';
export class Series extends Component {
  constructor(public selector: string) {
    super();
    this.template = this.createTemplate();
    this.render('afterbegin');
  }

  private createTemplate() {
    return `
      <section class="series">
        <h2 class="section-title">Series list</h2>
      <section class="series-pending">
      </section>
      <section class="series-watched">
      </section>
    `;
  }

  render(place: globalThis.InsertPosition) {
    super.render(place);
  }
}
