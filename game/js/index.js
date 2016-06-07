//Variables
var textbox= document.getElementById("text");
function go(){
  //alert("come adventure your computer with me");
  textbox.innerHTML="come adventure your computer with me<br>would you like to play<br><button onclick='play()'>Play!</button> <button onclick='go()'>Do not play</button>";
//   if(sister){
//     //alert("yay!lets go play")
//     textbox.innerHTML="yay!lets go play";
//     play();
//   }
//   else{
//     //alert(" YOU HAVE TO")
//     textbox.innerHTML=" YOU HAVE TO"
//   go()
    
//   }
}
function play(){
  textbox.innerHTML="were would like to go google or safari?  google or safari<button onclick='google()'>Google</button> <button onclick='safari()'> safari</button>";
}
 function google() {
    prompt("type facebook.com see what happens")
    window.open("http://"+sister)
  }
    function safari() {
     var icecream =prompt("what website would you like to go to type wich one  kizi.com or slither.io(ater you play come back)");
      window.open("http://"+icecream)
    }
//   var dog=confirm("do you want to know the code of kizi if do listen ")
//   if(dog){
//     //alert("go to kizi right click press inspect there you go")
//     textbox.innerHTML="go to kizi right click press inspect there you go"
    
    
//   }