const $body = document.querySelector('body')
const $checkbox = document.querySelector('#switch')

$checkbox.addEventListener('change', function(){
    $body.classList.toggle('dark-mode')
})