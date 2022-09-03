// Complete the function/method so that it returns the url with anything after the anchor (#) removed.

function removeUrlAnchor(url){
    const hashIndex = url.split('').indexOf('#')
    if(hashIndex == -1){
      return url
    }
     else{
      return url.split('').splice(0, hashIndex).join('')
     }
     
   }