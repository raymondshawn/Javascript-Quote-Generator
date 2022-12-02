
const data=()=>{

    const response=fetch("https://type.fit/api/quotes")
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
     
      return data
    });
    return response
}




let quotes; 
 
 data().then(response=>{
   
    console.log('first then response')
    quotes=response
    return response
    
 }).then(()=>{
    
    console.log('second then finished');
 })
   

setTimeout(()=>{

    
},1000) 
  
 
