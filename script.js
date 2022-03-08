const panels = document.querySelectorAll('.panel')
panels.forEach((panels)=>{
    panels.addEventListener('click',()=>{
        removeActiveClass()
        
        panels.classList.add('active')

    })

})
function removeActiveClass(){
    panels.forEach(panel=>{
        panel.classList.remove('active')
    })
}