/**
 * Learn fromYoutube EventEmit
 */

 const EventEmitter = require('events');
 class Customer extends EventEmitter{
   constructor(name,gender){
     super();  // Thừa kết all các property của hàm Cha 
     this.name = name;
     this.gender = gender;
   }
 }
 let callbackfunction = (foods,customer) =>{
      for (const key in foods) {
          console.log(`${customer.name} called ${foods[key]}`);
          
          
      }
  }
  const Thanh = new Customer('Thanh','male');
  const Uyen = new Customer('Uyen','female');
  Thanh.on('CallFood',callbackfunction);
  Uyen.on('CallFood',callbackfunction);

    console.log('do something....');
    
  Thanh.emit("CallFood",["Mi Quang","Com Suon"],Thanh)
  Uyen.emit("CallFood",['Mi Cay','Coca'],Uyen);
  
 /**
  * // Cách 1 dùng cho một người 
  *  const Thanh = new Customer('Thanh','male');
     Thanh.on("eventCallFood",(foods) => {
        for (let index in foods ){
           console.log(`${Thanh.name} called ${foods[index]}`);
        }
      })
      console.log('Do Something....');
      Thanh.emit("eventCallFood",['Com Suon',"Canh Rong Bien"]);
  */

 

