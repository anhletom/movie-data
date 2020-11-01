/*(function($){
    console.log($.fn.jquery);*/

    $('#movieName').on('change', function(e){
        console.log(e.target.value)
    })

    $('#search').on('click', function(){
        var input = $('#movieName').val()
        if (input === ''){
            return;}
        /*if(input !==''){
            $.ajax('http://www.omdbapi.com/?t=' + input + '&apikey=b10474d7')
            .done(function(resp){
            console.log(resp);
            })
            .fail(function(err){
            console.log(err)
            })
            .always(function(){
            console.log('API call done')
            })
        }
        console.log(input)
    })*/
        $.ajax('http://www.omdbapi.com/?t=' + input + '&apikey=b10474d7')

        .done(function(resp){
            console.log(resp)
            var formattedRating = resp.imdbRating*10 + '%'

            var { Poster, Title, Plot, imdbRating} = resp;

            if( Poster && Title && Plot && imdbRating) {
                $('#searchResult').html(`
            <div class="col-sm-4">
            <div class="card" style="width: 18rem;">
                <img src="${resp.Poster}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${resp.Title}</h5>
                  <p ${resp.Plot}</p>
                  <div class="progress">
                    <div class="progress-bar" role="progressbar" style="width: ${formattedRating};" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">${resp.imdbRating}</div>
                    </div>
                </div>
              </div>     
        </div>
            `)
            } else {
                $('#searchResult').html('<div>Oops found nothing matching that</div>')
            }
        })
        .fail(function(err){
            console.log(err)
        })
        .always(function(){
            console.log('API call done')
        })
})    
    
    
    /*fetch('http://www.omdbapi.com/?t=wall-e&apikey=b10474d7')
        .then(function(resp){
            return resp.json()
        })
        .then(function(json){
            console.log(json)
        })
        .catch(function(err){
            console.log(err)
        })
    ctrl/cmd + shift + 7 finnish kb layout for commenting
    axios*/
/*})(window.jquery)*/