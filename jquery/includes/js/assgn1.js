  $(function(){

  	var tb1= $('#tbd');
    $('#search').on('click', function(){
    	var data1= $('#movies').val();
    	tb1.empty();
	
	$.ajax({
		url:'http://www.omdbapi.com/?s='+data1,
		type:'GET',
	    datatype:'json',
		success:function(data){

			$.each(data.Search, function(i, movie){

            tb1.append('<tr>'+
            	'<td>'+"<img src="+movie.Poster+' alt="Image not visible" class="img-responsive">"'+'</td>'+
            	'<td>'+movie.Title+'</td>'+
            	'<td>'+movie.Type+'</td>'+
            	'<td>'+movie.Year+'</td>'+
            	'<td>'+movie.imdbID+'</td>'+
            	'</tr>');


			})
		}
		
	});

	
	});
});