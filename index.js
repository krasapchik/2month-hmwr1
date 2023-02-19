const answer = document.querySelector('.answer')
  const input = document.getElementById('email')
    const err = document.getElementById('para')

answer.addEventListener('click', function(){
    const testt = /.+\@\w+\.\w/
    if (testt.test(input.value)){
        alert('вы успешно зарегистрировались')
           err.style.display = 'none'
             input.style.borderBlockColor = ''
         }
          else{
             err.style.display = 'block'
                err.innerText = 'не корректный формат почты'
                  input.style.borderBlockColor = 'red'
        }   
})