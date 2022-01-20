let headerLinks = document.querySelector('.mainHeader') ,
toggleBTN = document.querySelector('.mainHeader .toggleBTN') ,
navbar = document.querySelector('.mainHeader .links') ,
navLinks = document.querySelectorAll('.mainHeader .links a') ;

window.addEventListener('scroll',function(){
    if(this.scrollY >= 223){
        headerLinks.classList.add('Sticky')
    }else{
        
        headerLinks.classList.remove('Sticky')
    }
})
toggleBTN.addEventListener('click',function(){
    navbar.classList.toggle('active')
    
})

Array.from(navLinks).forEach(element => {
    Array.from(navbar.children).forEach(list=>{
        list.addEventListener('click',function(e){
            if (element.className = 'active') {
                element.classList.remove('active')
                    e.target.classList.add('active')
            }
            
        })
    })
});
