const bjp = document.querySelector('#bjp');
const cong = document.querySelector('#congress');
const mns = document.querySelector('#mns');
const submit = document.querySelector('#submit');

let bjpVote = 0;
let congVote = 0;
let mnsVote = 0;
let totalVote = 0;

bjp.addEventListener('click', () =>{
    bjpVote += 1;
    document.getElementById('score1').innerText = bjpVote;

});
cong.addEventListener('click', () => {
    congVote += 1;
    document.getElementById('score2').innerText = congVote;
});

mns.addEventListener('click', ()=>{
    mnsVote += 1;
    document.getElementById('score3').innerText = mnsVote;
});

submit.addEventListener('click', ()=>{
    total = bjpVote + congVote + mnsVote;
    document.getElementById('total').innerHTML = "Total Vote :" + total;
});
