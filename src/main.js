(function() {

  angular.module('sellerApp',[]).controller('MainCtrl', function MainCtrl() {
    let modal=this;
    modal.allCurrencies = ['AUD', 'CAD', 'GBR', 'EUR', 'USD'];
    modal.allOffices = ['JP','UK','US','FR','AU','IT','CA'];
    
    modal.sellerListData = [
      {
        name: "Wall Mart",
        currencies: ['USD', 'GBR', 'EUR'],
        offices: ['JP','UK','US','FR','AU','IT'],
        biddedDeals:true,
        guaranteedDeals:true,
        contactName:'Jim Beam',
        email:'jim@uk.com'
      },
      {
        name: "Burger King",
        currencies: ['USD'],
        offices: ['JP','IT'],
        biddedDeals:true,
        guaranteedDeals:true,
        contactName:'',
        email:''
      },
      {
        name: "Humber River",
        currencies: ['USD', 'CAD'],
        offices: ['US','CA'],
        biddedDeals:true,
        guaranteedDeals:false,
        contactName:'',
        email:''
      }    
    ]    
    
    modal.sellerToBeEdited = null;
      
    modal.createSeller = function(seller) {
      seller = JSON.parse(JSON.stringify(seller));
      modal.sellerListData.push(seller);      
    }
      
    modal.deleteSeller = function(seller) {
      let index = modal.sellerListData.indexOf(seller);
      if (index >= 0) {
        modal.sellerListData.splice(index, 1);
      }
    }

    modal.updateSeller = function(seller, updatedSeller){
      let index = modal.sellerListData.indexOf(seller);
      if (index >= 0) {
        const result = Object.assign(seller, updatedSeller);
        modal.sellerToBeEdited = null;
      }
    }
    
    modal.editSeller = function(seller){
      modal.sellerToBeEdited = seller;
    }   
  });
})();
