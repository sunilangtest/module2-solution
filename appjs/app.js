(function(){
'use strict';

angular.module('ShoppingListCheckOff',[])
.controller('ToBuyController',ToBuyController)
.controller('AlreadyBoughtController',AlreadyBoughtController)
.service('ManageItemService',ManageItemService);

ToBuyController.$inject=['ManageItemService']
function ToBuyController(ManageItemService){
  var showlisttobuy=this;
  showlisttobuy.items=ManageItemService.gettobuyitems();
  showlisttobuy.checkitem=function(name,quantity,itemindex){
    ManageItemService.checkitem(name,quantity,itemindex);
  }
}

AlreadyBoughtController.$inject=['ManageItemService']
function AlreadyBoughtController(ManageItemService){
  var showlistalrdybrgt=this;
  showlistalrdybrgt.items=ManageItemService.getbroughtitems();
}

function ManageItemService(){
  var service=this;
  var itemlist=[
    {
      name:"cookies",
      quantity:"10"
    },
    {
      name:"cookies",
      quantity:"10"
    },
    {
      name:"cookies",
      quantity:"10"
    },
    {
      name:"cookies",
      quantity:"10"
    },
    {
      name:"cookies",
      quantity:"10"
    }
  ];
  var tobuyitems=itemlist;
  var broughtitems=[];
  service.checkitem=function(itemname,itemqty,itemindex)
  {
    var item={
      name:itemname,
      quantity:itemqty
    }
    tobuyitems.splice(itemindex,1);
    broughtitems.push(item);

  }
  service.gettobuyitems=function(){
    return tobuyitems;
  }
  service.getbroughtitems=function(){
    return broughtitems;
  }
}


})();
