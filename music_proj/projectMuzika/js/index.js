// для лайка на album html
let likeNode = document.querySelector(`.like`)

likeNode.addEventListener(`click`,function (){

    let likeCount = Number(likeNode.innerHTML)


    likeNode.classList.toggle(`btn-danger`)
    likeNode.innerHTML=`<i class="fa-solid fa-heart"></i> ${likeCount+1}`
})
















