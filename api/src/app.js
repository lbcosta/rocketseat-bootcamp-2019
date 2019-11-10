// Creating Application

import express from 'express';
import path from 'path';
import routes from './routes';

import './database';

/*
 * Classes are a good way of naming and representing a feature
 */
class App {
  constructor() {
    this.server = express(); // The Application has a HTTP server

    this.middlewares();
    this.routes();
  }

  // Register middlewares
  middlewares() {
    this.server.use(express.json());
    this.server.use(
      '/files',
      express.static(path.resolve(__dirname, '..', 'tmp', 'uploads'))
    );
  }

  // Register routes
  routes() {
    this.server.use(routes);
  }
}

export default new App().server; // Exporting server from a instance of the Application
