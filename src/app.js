

$(window).on('load',function(){
    $('#calcbutton').on('click',function(){
        calcValue();
    });
    
})


function calcValue(){
    let height = Number($('#height').val());
    let weight = Number($('#weight').val());
    let lenght = Number($('#lenght').val());
    let correctHeight = height - 10;
    let value = correctHeight*weight*lenght/1000000;
    $('#value').val(value);
    $('#height').val('');
    $('#weight').val('');
    $('#lenght').val('');
    
}
