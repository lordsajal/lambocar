var audio = document.createElement('audio');
audio.setAttribute('src','sound.mp3');
audio.loop=true;
 var v= audio.play();
 if (v!== undefined){
     v.then(_=>{
        
     }).catch(error=>{
         console.log(error);
     })
 }
 