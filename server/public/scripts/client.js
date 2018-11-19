$( document ).ready( readyNow );

function readyNow(){
    console.log( 'JQ' );
    $( '#addSongButton' ).on( 'click', addSong );
    getSongs( );
} // end readynow

function addSong( ){
    console.log( 'in addSong' );
    // get user input
    // package in obj
    // send to server via AJAX
    const objToSend = {
        artist: $('#artistIn').val(),
        track: $('#trackIn').val(),
        published: $('#publishedIn').val(),
        rank: $('#rankIn').val()
    }// end objToSend
    console.log('sending:', objToSend);
    $.ajax({
        method: 'POST',
        url: '/songs',
        data: objToSend
    }).then( function( res ){
        console.log( 'back from POST with:', res );
    }).catch( function( err ){
        // handle any errors
        console.log( err );
    })
}// end addSong

function getSongs( ){
    $.ajax({
        method: 'GET',
        url: '/songs'
    }).then( function( res ){
        console.log( 'back from GET with:', res );
        displaySongs( res );
        
    }).catch( function( err ){
        console.log( 'GET getSongs error', err );
    })
}// end getSongs

function displaySongs( songs ){
    for( let song of songs ){
        $('#songsDisplay').append(`<div>${song.track}</div>`)
    }
}