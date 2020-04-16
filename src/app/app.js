import 'bootstrap/dist/css/bootstrap.css';
import angular from 'angular';

import '../style/app.css';

let app = () => {
  return {
    template: require('./app.html'),
    controller: 'MainCtrl',
    controllerAs: 'app'
  }
};

class MainCtrl {
  constructor() {
    
  }
}

const sellerApp = 'app';

angular.module(sellerApp, [])
  .directive('app', app)
  .controller('MainCtrl', MainCtrl);

export default sellerApp;