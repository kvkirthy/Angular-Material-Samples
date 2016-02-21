import 'github:angular/bower-material@1.0.5/angular-material.min.css!';

import 'angular';
import 'angular-animate';
import 'angular-aria';
import 'angular-material';
import controller from './controllers';

angular.module('es6Sample', ['ngMaterial'])
.controller('firstController', controller);
