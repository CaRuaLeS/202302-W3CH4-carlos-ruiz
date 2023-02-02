/* eslint-disable no-new */
//import { Footer } from './components/footer/footer';
import { Header } from './components/1.header/header';
import { Menu } from './components/menu/menu';
//import { Tasks } from './components/tasks/tasks';
//import { TaskStorageRepo } from './services/repository/task.storage.repo';
import { Series } from './components/2.series/series';
import { SeriesPending } from './components/3.serie-pending/series-pending';
import { SeriesWatched } from './components/4.serie-watched/series-watched';

export type MenuOption = {
  label: string;
  path: string;
};

new Header('.container');
new Series('.main');
new SeriesPending('.series');
new SeriesWatched('.series');

// console.log('Load', location.pathname);
// new Header('#root');
// new Menu('.header', menuOptions);
// if (location.pathname === '/home') {
//   new Tasks('main', new TaskStorageRepo());
// }

// new Footer('#root');
