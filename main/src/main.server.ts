/// <reference types="node" />

import { enableProdMode } from '@angular/core';

import { environment } from './environments/environment';

if (environment.production) {
   enableProdMode();


   console.log = function () { return false; }
   console.error = function () { return false; }
   console.warn = function () { return false; }


}

export { AppServerModule } from './app/app.server.module';
export { ngExpressEngine } from '@nguniversal/express-engine';
export { provideModuleMap } from '@nguniversal/module-map-ngfactory-loader';

import { join } from 'path';
import { readFileSync } from 'fs';

const DIST_FOLDER = join(process.cwd(), 'dist/browser');
const template = readFileSync(join(DIST_FOLDER, 'index.html')).toString();
const domino = require('domino');
const win = domino.createWindow(template);

global['window'] = win;
// global['Node'] = win.Node;
// global['navigator'] = win.navigator;
global['Event'] = win.Event;
// global['Event']['prototype'] = win.Event.prototype;
global['document'] = win.document;
