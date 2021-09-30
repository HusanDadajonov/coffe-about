let elBtn = document.querySelector(".bx-menu");
let elModal = document.querySelector(".hero__nav-bar");
let elClose = document.querySelector(".x-icon")
let elBody = document.querySelector("body")

elBtn.addEventListener("click", function(){
    elModal.classList.add('open')
    elBody.classList.add("hidden")
    elBtn.classList.add('remove')
    elClose.classList.remove('remove')
})

elClose.addEventListener('click', function(){
    elModal.classList.remove('open')
    elBtn.classList.remove('remove')
    elBody.classList.remove("hidden")
    elClose.classList.add('remove')

})