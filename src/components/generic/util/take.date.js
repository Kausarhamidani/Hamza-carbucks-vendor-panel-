export function TakeDate(date) {
    var UserDate = date;
    var ToDate = new Date();
  
    if (new Date(UserDate).getTime() <= ToDate.getTime()) {
         
          return true;
     }
     else {
      return false;
     }
   
  }