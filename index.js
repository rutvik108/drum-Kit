var len=document.querySelectorAll(".drum").length;
for(i=0; i<len; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function () {
    //    var audio=new Audio("sounds/crash.mp3");
    //    audio.play();
    var value=this.innerHTML;
    sound(value);
    addAnumation(value)
    });
    //using keydown
     //event is which key we press use keypress or keydown
    document.addEventListener("keypress",function(event){
        //use .notation to add event with key
        //or event.key
      sound(event);
      addAnumation(event.key);
    })
    function addAnumation(key){
        var presskey=document.querySelector("."+key);
        presskey.classList.add("pressed");

        setTimeout(function(){
            presskey.classList.remove("pressed");
        },100);
    }

    function sound(key){
        switch(key){
            case "w": 
            var audio=new Audio("sounds/crash.mp3");
            audio.play();
        break;

        case "a": 
            var audio=new Audio("sounds/kick-bass.mp3");
            audio.play();
        break;

        case "s": 
            var audio=new Audio("sounds/snare.mp3");
            audio.play();
        break;

        case "d": 
            var audio=new Audio("sounds/tom-1.mp3");
            audio.play();
        break;

        case "j": 
            var audio=new Audio("sounds/tom-2.mp3");
            audio.play();
        break;

        case "k": 
            var audio=new Audio("sounds/tom-3.mp3");
            audio.play();
        break;

        case "l": 
            var audio=new Audio("sounds/tom-4.mp3");
            audio.play();
        break;

        default:
            console.log("spomethig wrong happen");
            break;
    
        }
    }
}