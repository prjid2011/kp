import './sellerList.scss';

(function() {
  
  let sellerListController = function() {
    let ctrl = this;
    
    ctrl.$onInit = function() {
    }

    ctrl.deleteSeller = function(seller) {      
      ctrl.onDelete({'seller':seller})
    }
    
    ctrl.editSeller = function(seller) {      
      ctrl.onEdit({'seller':seller});
    }   

  }
  
  angular.module('sellerApp').component('sellerList', {
    templateUrl: 'src/components/sellerList/sellerList.html',
    controller: sellerListController,
    bindings: {
      list: '<',
      onDelete:'&',
      onEdit:'&'
    }
  });

})();