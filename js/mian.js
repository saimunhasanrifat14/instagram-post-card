var imageContainer = document.querySelector('.image-container')
var loveIcon = document.querySelector('.loveIcon')
var like = document.querySelector('.like')
var likeNumber = document.querySelector('.likeNumber')
var number = parseInt(likeNumber.innerText)
var save = document.querySelector('.save')

var value = true;

imageContainer.addEventListener('dblclick', ()=>{
    loveIcon.style.transform = 'translate(-50%, -50%) scale(1)'
    loveIcon.style.opacity = .8
    if(value == true){
        like.className = "fa-solid fa-heart like"
        like.style.color = 'red'
        like.style.transform = 'scale(.8)'
        like.style.transform = 'scale(1)'
        number = number + 1;
        likeNumber.innerText = number;
        value = false;
    }else{
        like.className = "fa-regular fa-heart like"
        like.style.color = 'black'
        like.style.transform = 'scale(.8)'
        like.style.transform = 'scale(1)'
        number = number - 1;
        likeNumber.innerText = number;
        value = true
    }
    setTimeout(()=>{
        loveIcon.style.transform = 'translate(-50%, -50%) scale(.7)'
    }, 300)
    setTimeout(()=>{
        loveIcon.style.opacity = 0
    }, 1300)
    setTimeout(()=>{
        loveIcon.style.transform = 'translate(-50%, -50%) scale(0)'
    }, 2000)
})

like.addEventListener("click", ()=>{
    if(value == true){
        like.className = "fa-solid fa-heart like"
        like.style.color = 'red'
        like.style.transform = 'scale(.8)'
        like.style.transform = 'scale(1)'
        number = number + 1;
        likeNumber.innerText = number;
        value = false;
    }else{
        like.className = "fa-regular fa-heart like"
        like.style.color = 'black'
        like.style.transform = 'scale(.8)'
        like.style.transform = 'scale(1)'
        number = number - 1;
        likeNumber.innerText = number;
        value = true
    }
})

save.addEventListener("click",()=>{
    if(value == true){
        save.className = "fa-solid fa-bookmark save"
        save.style.transform = 'scale(.8)'
        save.style.transform = 'scale(1)'
        value = false;
    }else{
        save.className = "fa-regular fa-bookmark save"
        save.style.transform = 'scale(.8)'
        save.style.transform = 'scale(1)'
        value = true;
    }
})
