$(function(){
    let showBtn = $('.ab')
    let hideBtn = $('.bc')
    let tglBtn = $('.cd')
    let sldUpBtn = $('.de')
    let sldDownBtn= $('.ef')
    let sldtglBtn= $('.gh')
    let box= $('.box')
    showBtn.click(function(){
        box.show(350)
    })
    hideBtn.click(function(){
        box.hide(350)
    })
    tglBtn.click(function(){
        box.toggle(350)
    })
    sldUpBtn.click(function(){
        box.slideUp(350)
    })
    sldDownBtn.click(function(){
        box.slideDown()
    })
    sldtglBtn.click(function(){
        box.slideToggle()
    })
})