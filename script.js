var overlayone=document.querySelector('.overlayone')
var overlaytwo=document.querySelector('.overlaytwo')
var overlaythree=document.querySelector('.overlaythree')

var overlays=[overlayone,overlaytwo,overlaythree]


for(let i=0;i<overlays.length;i++){
    setTimeout(()=>{
        console.log(i)
        overlays[i].classList.add("hideoverlay")
        if(i !== 2){
        overlays[i+1].style.opacity=1;
        }
    },i*1000)
} 


var h1oneDOM=document.querySelector('.one')
var h1twoDOM=document.querySelector('.two')
var h1threeDOM=document.querySelector('.three')
var text=h1oneDOM.textContent + h1twoDOM.textContent + h1threeDOM.textContent;

console.log(text.length)

h1oneDOM.innerHTML=""
h1twoDOM.innerHTML=""
h1threeDOM.innerHTML=""

for(var i=0;i<text.length;i++){
    if(i <= 9){
        h1oneDOM.innerHTML += "<span>" + text[i] + "</span>"
    }
     else if(i <= 44){
        h1twoDOM.innerHTML += "<span>" + text[i] + "</span>"
     }
     else{
        h1threeDOM.innerHTML += "<span>" + text[i] + "</span>"
     }
}
var counter=0;


function runIt(){
    var spans=document.querySelectorAll('span')
    if(counter === text.length){
        console.log("Finished");
        document.querySelector(".feelh1").style.left=0;
        document.querySelector(".betterh1").style.top=0;
        return;
    }
    spans[counter].classList.add('fade')
    counter++
    setTimeout(runIt,150)
}

setTimeout(()=>{
    runIt()
},3000)

console.log(text.split("").findIndex(l=>l === "."))