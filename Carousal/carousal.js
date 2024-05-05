let slides = [ {value: 1},
    {value: 2},
    {value: 3},
    {value: 4},
    {value: 5}
]
let slide = document.getElementById('slide')



function createSlide(item,index){
    let div = document.createElement('div')
    div.textContent = item.value
    div.classList.add('slides')
    if(index === Math.floor(slides.length/2)) {
        div.classList.add('slides_highlight')
    }
    if(index === Math.floor(slides.length/2)-1) {
        div.classList.add('slides_left')
    }
    if(index === Math.floor(slides.length/2)+1) {
        div.classList.add('slides_right')
    }
    slide.appendChild(div)
}


slides.forEach((item,index) => {
   
    
})