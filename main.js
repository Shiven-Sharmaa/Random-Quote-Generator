const bg = document.getElementById('container');
const btn = document.getElementById('btn');
const txt = document.getElementById('text');
const qt = document.getElementById('quote');
const bdy = document.body;

let colors = ['#ee352a','#57A0D3','#e1ad01']
let i=1;
let t=0;
let tempindex=0;
let ind=0;
let transitionCount=0;

const changeQuote = async () =>{
    var url="https://type.fit/api/quotes";    
    const response = await fetch(url);
    const quotes = await response.json();
    while(tempindex==ind){
    ind = Math.floor(Math.random()*quotes.length);}
    tempindex=ind;
    const quote = quotes[ind].text;
    text.innerHTML="\""+quote+"\"";
}

changeQuote();

btn.addEventListener('click', function onClick() {
    if (i==3){
        i=0;
    }
    if(t==3){
        t=0;
    }


    changeQuote();
    bdy.style.backgroundColor=colors[t];    
    bg.style.backgroundColor = colors[i];

    i+=1;
    t+=1;
    if (transitionCount){
        bg.classList.remove("trans1");
        bg.classList.remove("trans2");
        void bg.offsetWidth;
        bg.classList.add('trans1');
        transitionCount=0;
    }
    else{
        bg.classList.remove("trans1");
        bg.classList.remove("trans2");
        void bg.offsetWidth;
        bg.classList.add('trans2');
        transitionCount=1;
    }
});