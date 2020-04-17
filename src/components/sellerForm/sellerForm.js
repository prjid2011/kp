import "./sellerForm.scss";

(function() {
  
  let sellerFormController = function(){
    let modal = this;    
    
    modal.updateMode=false;

    modal.selectedName='';
    modal.selectedCurrencies=[];
    modal.selectedOffices=[];
    modal.selectedBidded=false;
    modal.selectedGuaranteed=false;
    modal.selectedContactName='';
    modal.selectedEmail='';
    
    modal.editSellerData = null;
    
    modal.$onChanges = function(changes){
      if(changes.editSellerData && changes.editSellerData.currentValue !== null){
          const sellerData = changes.editSellerData.currentValue;
          modal.updateMode = true;
          modal.selectedName = sellerData.name;
          modal.selectedCurrencies = [...sellerData.currencies];
          modal.selectedOffices = [...sellerData.offices];
          modal.selectedBidded = sellerData.biddedDeals;
          modal.selectedGuaranteed = sellerData.guaranteedDeals;
          modal.selectedContactName = sellerData.contactName;
          modal.selectedEmail = sellerData.email;
          setTimeout(() => {
            $('.selectpicker').selectpicker('refresh'); // For clean dropdown value selected
          }, 0);
      }
    }
    
    modal.reset = function(){
      modal.updateMode = false;
      modal.selectedName = '';
      modal.selectedCurrencies = [];
      modal.selectedOffices = [];
      modal.selectedBidded = false;
      modal.selectedGuaranteed = false;
      modal.selectedContactName = '';
      modal.selectedEmail = '';      
      setTimeout(() => {
        $('.selectpicker').selectpicker('refresh');
      }, 0);      
    }
    
    modal._createSeller = function(){
      let dataLoad = {
        name: modal.selectedName,
        currencies: modal.selectedCurrencies,
        offices: modal.selectedOffices,
        biddedDeals: modal.selectedBidded,
        guaranteedDeals: modal.selectedGuaranteed,
        contactName: modal.selectedContactName,
        email: modal.selectedEmail
      }
      
      dataLoad = JSON.parse(JSON.stringify(dataLoad));
      
      modal.onCreate({'seller': dataLoad});
      modal.reset();
    }
    
    modal._updateSeller = function(){
      const prevSellerData = modal.editSellerData;
      const updatedSeller = {
        name: modal.selectedName,
        currencies: [...modal.selectedCurrencies],
        offices: [...modal.selectedOffices],
        biddedDeals: modal.selectedBidded,
        guaranteedDeals: modal.selectedGuaranteed,
        contactName: modal.selectedContactName,
        email: modal.selectedEmail
      }
      
      modal.onUpdate({
        'seller': prevSellerData,
        'updatedSeller': updatedSeller
      });
      
      modal.updateMode = false;
      modal.reset();
    }
    
    modal.save = function(){
      if(!modal.updateMode){
        modal._createSeller();
      }else{
        modal._updateSeller();
      }
    }
  }
  
  
  angular.module('sellerApp').component('sellerForm', {
    templateUrl: 'src/components/sellerForm/sellerForm.html',
    controller: sellerFormController,
    bindings: {
      'currencyOptions': '<',
      'officeOptions': '<',
      'editSellerData': '<',
      'onCreate': '&',
      'onUpdate': '&'
    }
  });


})();