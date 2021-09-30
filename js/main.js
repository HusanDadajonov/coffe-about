let elBtn = document.querySelector(".bx-menu");
let elModal = document.querySelector(".hero__nav-bar");
let elClose = document.querySelector(".x-icon")

elBtn.addEventListener("click", function(){
    elModal.classList.add('open')
    elBtn.classList.add('remove')
    elClose.classList.remove('remove')
})

elClose.addEventListener('click', function(){
    elModal.classList.remove('open')
    elBtn.classList.remove('remove')
    elClose.classList.add('remove')

})