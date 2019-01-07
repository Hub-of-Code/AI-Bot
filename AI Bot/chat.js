var t = 0;
var cnt = 0;
function wel(){
   var ti = setTimeout(function(){
   var d = new Date();
   var h = d.getHours();
   var m = d.getMinutes();
   if (h < 12 && h > 0){
   	 document.getElementById("mess").innerHTML += '<p align="left" style="padding-top:15px;padding-left:10px"><table><tr><td style="max-width:50%;white-space:pre-wrap;background-color:white;border-radius:10px;padding:8px;font-family:tahoma;font-size:20px">Good morning, dear</td></tr></table></p>';
   }
   if (h >=12 && h <=15){
   	 document.getElementById("mess").innerHTML += '<p align="left" style="padding-top:15px;padding-left:10px"><table><tr><td style="max-width:50%;white-space:pre-wrap;background-color:white;border-radius:10px;padding:8px;font-family:tahoma;font-size:20px">Good afternoon, dear</td></tr></table></p>';
   }
   if (h >=16 && h <=23){
   	 document.getElementById("mess").innerHTML += '<p align="left" style="padding-top:15px;padding-left:10px"><table><tr><td style="max-width:50%;white-space:pre-wrap;background-color:white;border-radius:10px;padding:8px;font-family:tahoma;font-size:20px">Good evening, dear</td></tr></table></p>';
   }
   },2000);
   var o = setTimeout(function(){
    document.getElementById("mess").innerHTML += '<p align="left" style="padding-top:15px;padding-left:10px"><table><tr><td style="max-width:50%;white-space:pre-wrap;background-color:white;border-radius:10px;padding:8px;font-family:tahoma;font-size:20px">Anything I can help you with?</td></tr></table></p>';
    document.getElementById("cont").scrollTop = document.getElementById("cont").scrollHeight;
    cnt = 1;
   },65000);
}
function snd(){
   var inb = document.getElementById("msg").value;
   var m = document.getElementById("msg");
   m.value="";
   document.getElementById("mess").innerHTML += '<p align="right" style="padding-top:5px;padding-right:10px"><table><tr><td style="max-width:50%;white-space:pre-wrap;background-color:red;color:white;border-radius:10px;padding:8px;font-family:tahoma;font-size:20px">' + inb + '</td></tr></table></p>';
   var r = inb.toLowerCase();
   if (r.includes("hello")){
   	  setTimeout(function(){
        document.getElementById("mess").innerHTML += '<p align="left" style="padding-top:15px;padding-left:10px"><table><tr><td style="max-width:50%;white-space:pre-wrap;background-color:white;border-radius:10px;padding:8px;font-family:tahoma;font-size:20px">Hi, friend</td></tr></table></p>';
   	  document.getElementById("cont").scrollTop = document.getElementById("cont").scrollHeight;
   	  },1500);
   }
   if (r.includes("how") && r.includes("you") && r.includes("your")==false){
   	  setTimeout(function(){
        document.getElementById("mess").innerHTML += '<p align="left" style="padding-top:15px;padding-left:10px"><table><tr><td style="max-width:50%;white-space:pre-wrap;background-color:white;border-radius:10px;padding:8px;font-family:tahoma;font-size:20px">Quite good. You?</td></tr></table></p>';
   	  document.getElementById("cont").scrollTop = document.getElementById("cont").scrollHeight;
   	  },1500);
   }
   if (r.includes("how") && r.includes("you") && r.includes("your")==true){
   	  setTimeout(function(){
        document.getElementById("mess").innerHTML += '<p align="left" style="padding-top:15px;padding-left:10px"><table><tr><td style="max-width:50%;white-space:pre-wrap;background-color:white;border-radius:10px;padding:8px;font-family:tahoma;font-size:20px">Nice, friend. How about yours?</td></tr></table></p>';
   	  document.getElementById("cont").scrollTop = document.getElementById("cont").scrollHeight;
   	  },1500);
   }
   if (r.includes("good") && r.includes("afternoon")){
   	  setTimeout(function(){
        var d = new Date();
        var h = d.getHours();
        var m = d.getMinutes();
      if (h >=12 && h <=15){
   	    document.getElementById("mess").innerHTML += '<p align="left" style="padding-top:15px;padding-left:10px"><table><tr><td style="max-width:50%;white-space:pre-wrap;background-color:white;border-radius:10px;padding:8px;font-family:tahoma;font-size:20px">Good afternoon, dear. How are you?</td></tr></table></p>';
      }
      else{
        document.getElementById("mess").innerHTML += '<p align="left" style="padding-top:15px;padding-left:10px"><table><tr><td style="max-width:50%;white-space:pre-wrap;background-color:white;border-radius:10px;padding:8px;font-family:tahoma;font-size:20px">Hey, that is wrong. Check the time</td></tr></table></p>';
      }
       document.getElementById("cont").scrollTop = document.getElementById("cont").scrollHeight;
   	  },1500);
   }
   if (r.includes("good") && r.includes("morning")){
   	  setTimeout(function(){
        var d = new Date();
        var h = d.getHours();
        var m = d.getMinutes();
      if (h < 12 && h > 0){
   	    document.getElementById("mess").innerHTML += '<p align="left" style="padding-top:15px;padding-left:10px"><table><tr><td style="max-width:50%;white-space:pre-wrap;background-color:white;border-radius:10px;padding:8px;font-family:tahoma;font-size:20px">Good morning, dear. How are you doing?</td></tr></table></p>';
      }
      else{
        document.getElementById("mess").innerHTML += '<p align="left" style="padding-top:15px;padding-left:10px"><table><tr><td style="max-width:50%;white-space:pre-wrap;background-color:white;border-radius:10px;padding:8px;font-family:tahoma;font-size:20px">Not correct, friend. Check well</td></tr></table></p>';
      }
       document.getElementById("cont").scrollTop = document.getElementById("cont").scrollHeight;
   	  },1500);
   }
   if (r.includes("good") && r.includes("evening")){
   	  setTimeout(function(){
        var d = new Date();
        var h = d.getHours();
        var m = d.getMinutes();
      if (h >=16 && h <=23){
   	    document.getElementById("mess").innerHTML += '<p align="left" style="padding-top:15px;padding-left:10px"><table><tr><td style="max-width:50%;white-space:pre-wrap;background-color:white;border-radius:10px;padding:8px;font-family:tahoma;font-size:20px">Good evening, dear. How was your day?</td></tr></table></p>';
      }
      else{
        document.getElementById("mess").innerHTML += '<p align="left" style="padding-top:15px;padding-left:10px"><table><tr><td style="max-width:50%;white-space:pre-wrap;background-color:white;border-radius:10px;padding:8px;font-family:tahoma;font-size:20px">Wrong. Not evening</td></tr></table></p>';
      }
       document.getElementById("cont").scrollTop = document.getElementById("cont").scrollHeight;
   	  },1500);
   }
   if (r.includes("good") && r.includes("night")){
   	  setTimeout(function(){
        var d = new Date();
        var h = d.getHours();
        var m = d.getMinutes();
      if (h >=18){
   	    document.getElementById("mess").innerHTML += '<p align="left" style="padding-top:15px;padding-left:10px"><table><tr><td style="max-width:50%;white-space:pre-wrap;background-color:white;border-radius:10px;padding:8px;font-family:tahoma;font-size:20px">Okay. Good night</td></tr></table></p>';
      }
      else{
        document.getElementById("mess").innerHTML += '<p align="left" style="padding-top:15px;padding-left:10px"><table><tr><td style="max-width:50%;white-space:pre-wrap;background-color:white;border-radius:10px;padding:8px;font-family:tahoma;font-size:20px">Quite early. Bye</td></tr></table></p>';
      }
       document.getElementById("cont").scrollTop = document.getElementById("cont").scrollHeight;
   	  },1500);
   }
   if (r.includes("i") && r.includes("fine") || r.includes("cool") || r.includes("okay") || r.includes("alright") || r.includes("nice") || r.includes("awesome") || r.includes("great") || r.includes("good") && r.includes("night")== false && r.includes("morning")== false && r.includes("afternoon")== false && r.includes("evening")== false){
   	  setTimeout(function(){
      document.getElementById("mess").innerHTML += '<p align="left" style="padding-top:15px;padding-left:10px"><table><tr><td style="max-width:50%;white-space:pre-wrap;background-color:white;border-radius:10px;padding:8px;font-family:tahoma;font-size:20px">Nice. No problem</td></tr></table></p>';
   	  document.getElementById("cont").scrollTop = document.getElementById("cont").scrollHeight;
   	  },1500);
   }
   if (r.includes("thank")){
   	  setTimeout(function(){
        document.getElementById("mess").innerHTML += '<p align="left" style="padding-top:15px;padding-left:10px"><table><tr><td style="max-width:50%;white-space:pre-wrap;background-color:white;border-radius:10px;padding:8px;font-family:tahoma;font-size:20px">Lol. Anytime. You are Welcome &#128540;</td></tr></table></p>';
   	  document.getElementById("cont").scrollTop = document.getElementById("cont").scrollHeight;
   	  },1500);
   }
   if (r == "hi"){
   	  setTimeout(function(){
        document.getElementById("mess").innerHTML += '<p align="left" style="padding-top:15px;padding-left:10px"><table><tr><td style="max-width:50%;white-space:pre-wrap;background-color:white;border-radius:10px;padding:8px;font-family:tahoma;font-size:20px">Hello</td></tr></table></p>';
   	  document.getElementById("cont").scrollTop = document.getElementById("cont").scrollHeight;
   	  },1500);
   }
   if (r.includes("what") && r.includes("up")){
   	  setTimeout(function(){
        document.getElementById("mess").innerHTML += '<p align="left" style="padding-top:15px;padding-left:10px"><table><tr><td style="max-width:50%;white-space:pre-wrap;background-color:white;border-radius:10px;padding:8px;font-family:tahoma;font-size:20px">Hey. How are you?</td></tr></table></p>';
   	  document.getElementById("cont").scrollTop = document.getElementById("cont").scrollHeight;
   	  },1500);
   }
   if (r =="hey"){
   	  setTimeout(function(){
        document.getElementById("mess").innerHTML += '<p align="left" style="padding-top:15px;padding-left:10px"><table><tr><td style="max-width:50%;white-space:pre-wrap;background-color:white;border-radius:10px;padding:8px;font-family:tahoma;font-size:20px">Hi</td></tr></table></p>';
   	  document.getElementById("cont").scrollTop = document.getElementById("cont").scrollHeight;
   	  },1500);
   }
   if (r.includes("what") && r.includes("name") && r.includes("your")){
   	  setTimeout(function(){
      document.getElementById("mess").innerHTML += '<p align="left" style="padding-top:15px;padding-left:10px"><table><tr><td style="max-width:50%;white-space:pre-wrap;background-color:white;border-radius:10px;padding:8px;font-family:tahoma;font-size:20px">My name is Smith. You?</td></tr></table></p>';
   	  t = 1;
   	  document.getElementById("cont").scrollTop = document.getElementById("cont").scrollHeight;
   	  },1500);
   }
   if (r.includes("you") && r.includes("best") || r.includes("favourite")){
   	  setTimeout(function(){
      document.getElementById("mess").innerHTML += '<p align="left" style="padding-top:15px;padding-left:10px"><table><tr><td style="max-width:50%;white-space:pre-wrap;background-color:white;border-radius:10px;padding:8px;font-family:tahoma;font-size:20px">I do not have favourites or bests. Just an AI Bot, you know.... &#128542;</td></tr></table></p>';
   	  document.getElementById("cont").scrollTop = document.getElementById("cont").scrollHeight;
   	  },1500);
   }
   if (r.includes("no") && r.includes("prob")){
   	  setTimeout(function(){
      document.getElementById("mess").innerHTML += '<p align="left" style="padding-top:15px;padding-left:10px"><table><tr><td style="max-width:50%;white-space:pre-wrap;background-color:white;border-radius:10px;padding:8px;font-family:tahoma;font-size:20px">Sure</td></tr></table></p>';
   	  document.getElementById("cont").scrollTop = document.getElementById("cont").scrollHeight;
   	  },1500);
   }
   if (r.includes("what") && r.includes("time")){
   	  setTimeout(function(){
      var d = new Date();
   var h = d.getHours();
   var m = d.getMinutes();
     document.getElementById("mess").innerHTML += '<p align="left" style="padding-top:15px;padding-left:10px"><table><tr><td style="max-width:50%;white-space:pre-wrap;background-color:white;border-radius:10px;padding:8px;font-family:tahoma;font-size:20px">The time is '+ h + ':'+ m +'</td></tr></table></p>';
   	  document.getElementById("cont").scrollTop = document.getElementById("cont").scrollHeight;
   	  },1500);
   }
   if (r.includes("tell") && r.includes("time")){
   	  setTimeout(function(){
      var d = new Date();
   var h = d.getHours();
   var m = d.getMinutes();
     document.getElementById("mess").innerHTML += '<p align="left" style="padding-top:15px;padding-left:10px"><table><tr><td style="max-width:50%;white-space:pre-wrap;background-color:white;border-radius:10px;padding:8px;font-family:tahoma;font-size:20px">The time is '+ h + ':'+ m +'</td></tr></table></p>';
   	  document.getElementById("cont").scrollTop = document.getElementById("cont").scrollHeight;
   	  },1500);
   }
   if (r.includes("you") && r.includes("sure")){
   	  setTimeout(function(){
     document.getElementById("mess").innerHTML += '<p align="left" style="padding-top:15px;padding-left:10px"><table><tr><td style="max-width:50%;white-space:pre-wrap;background-color:white;border-radius:10px;padding:8px;font-family:tahoma;font-size:20px">Yup. Definitely</td></tr></table></p>';
   	  document.getElementById("cont").scrollTop = document.getElementById("cont").scrollHeight;
   	  },1500);
   }
   if (r.includes("lol")){
   	  setTimeout(function(){
      document.getElementById("mess").innerHTML += '<p align="left" style="padding-top:15px;padding-left:10px"><table><tr><td style="max-width:50%;white-space:pre-wrap;background-color:white;border-radius:10px;padding:8px;font-family:tahoma;font-size:20px">You can say that again &#128522;</td></tr></table></p>';
   	  document.getElementById("cont").scrollTop = document.getElementById("cont").scrollHeight;
   	  },1500);
   }
   if (r.includes("sorry")){
   	  setTimeout(function(){
      document.getElementById("mess").innerHTML += '<p align="left" style="padding-top:15px;padding-left:10px"><table><tr><td style="max-width:50%;white-space:pre-wrap;background-color:white;border-radius:10px;padding:8px;font-family:tahoma;font-size:20px">Yeah. Thanks</td></tr></table></p>';
   	  document.getElementById("cont").scrollTop = document.getElementById("cont").scrollHeight;
   	  },1500);
   }
   if (r.includes("hectic") || r.includes("stress") || r.includes("rough") || r.includes("tired")){
   	  setTimeout(function(){
      document.getElementById("mess").innerHTML += '<p align="left" style="padding-top:15px;padding-left:10px"><table><tr><td style="max-width:50%;white-space:pre-wrap;background-color:white;border-radius:10px;padding:8px;font-family:tahoma;font-size:20px">Oh. Sorry. Take heart</td></tr></table></p>';
   	  document.getElementById("cont").scrollTop = document.getElementById("cont").scrollHeight;
   	  },1500);
   }
   if (t==1){
   	  setTimeout(function(){
      document.getElementById("mess").innerHTML += '<p align="left" style="padding-top:15px;padding-left:10px"><table><tr><td style="max-width:50%;white-space:pre-wrap;background-color:white;border-radius:10px;padding:8px;font-family:tahoma;font-size:20px">Okay. Good</td></tr></table></p>';
   	  t=0;
   	  document.getElementById("cont").scrollTop = document.getElementById("cont").scrollHeight;
   	  },1500);
   }
   if (cnt == 1){
   	setTimeout(function(){
     	document.getElementById("mess").innerHTML += '<p align="left" style="padding-top:15px;padding-left:10px"><table><tr><td style="max-width:50%;white-space:pre-wrap;background-color:white;border-radius:10px;padding:8px;font-family:tahoma;font-size:20px">Whoa. Wish I could... Sorry</td></tr></table></p>';
   	  cnt=0;
   	  document.getElementById("cont").scrollTop = document.getElementById("cont").scrollHeight;
   	  },1500);
   }
    document.getElementById("cont").scrollTop = document.getElementById("cont").scrollHeight;
}
