import todo from './src/store/todo.store';
import { App } from './src/todos/app';

import './style.css';

todo.initStore();

App('#app');