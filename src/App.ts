import { Sequelize } from "sequelize-typescript";

import * as express from 'express';
import * as logger from 'morgan';
import * as bodyParser from 'body-parser';

import Database from "./Database";
import Schedule from "./Schedule";
import IndexRouter from "./app/routes/index";

class App {
  express: express.Application;
  connection: Sequelize;
  schedule: Schedule;

  private cors = (): void => {
    this.express.use(function (req: any, res: any, next) {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, OPTIONS");
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
      next();
    });
  };

  private database = (): void => {
    this.connection = new Database().connection;
  };

  private middleware = (): void => {
    this.express.use(logger('dev'));
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({ extended: false }));
  };

  private routes = (): void => {
    this.express.use('/', new IndexRouter().router);
  };

  private jobs = (): void => {
    this.schedule = new Schedule();
    this.schedule.startJobs();
  }

  constructor() {
    this.express = express();
    this.cors();
    this.database();
    this.middleware();
    this.routes();
    this.jobs();
  }

}

export default new App().express;