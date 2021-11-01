$(document).ready(function(){
$('#search').keyup(function(){
    var searchbox = $('#search').val()
    var myExp = new RegExp(searchbox,"i");

    $.getJSON('datajson1.json',function(data){
        var output = '<div class="card">'
            $.each(data,function(key,val){
                if((val.name.search(myExp) !== -1 || val.description.search(myExp) !== -1 || val.family.search(myExp) !== -1)){
                    output += '<div class="boximage"> ' +'<img  src=" ' + val.image + ' "/>' + '</div>'  ;
                    output +='<div class="container">';
                    output +='<h2>' + val.name + '</h2>';
                    output +='<h2>' + val.family + '</h2>';
                    output +='<p>' + val.description + '</p>';
                    output += '</div>'
                }
            })
        output += '</div>';
        $('.container').html(output);

        if (searchbox===""){
            $('.container').empty()
        }

    })
})
});