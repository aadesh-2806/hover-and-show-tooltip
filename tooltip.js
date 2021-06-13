const home = document.querySelector('.fa-home');
const user = document.querySelector('.fa-user');
const comment = document.querySelector('.fa-comment');
const circle = document.querySelector('.fa-question-circle');
const settings = document.querySelector('.fa-cog');
const move = document.querySelector('.circle');
const body = document.querySelector('body');

home.addEventListener('mouseover' , ()=>{
    home.style.color = 'white';
    move.style.left = 0 + 'px';
    body.style.backgroundColor = '#0077ff';
    move.style.backgroundColor = '#0077ff';
})
user.addEventListener('mouseover' , ()=>{
    body.style.backgroundColor = '#f53b57';
    move.style.backgroundColor = '#f53b57';
    home.style.color = 'black';
    move.style.left = 75 + 'px';
})
comment.addEventListener('mouseover' , ()=>{
    home.style.color = 'black';
    move.style.left = 150 + 'px';
    body.style.backgroundColor = '#3c40c6';
    move.style.backgroundColor = '#3c40c6';
})
circle.addEventListener('mouseover' , ()=>{
    home.style.color = 'black';
    move.style.left = 225 + 'px';
    body.style.backgroundColor = '#05c46b';
    move.style.backgroundColor = '#05c46b';
})
settings.addEventListener('mouseover' , ()=>{
    home.style.color = 'black';
    move.style.left = 300 + 'px';
    body.style.backgroundColor = '#0fbcf9';
    move.style.backgroundColor = '#0fbcf9';
})