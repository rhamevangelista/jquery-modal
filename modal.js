/*!
 * Jquery Modal Box
 * Author: Ramil Evangelista
 * Requires: jQuery v1.8 or later
 */
(function( $ ) {


	function appendBox(){
		$('body').append('<div id="overlay" ><div class="mainC"><div class="closeLink"><input type="button" class="closeBtn" onclick="$(\'#overlay\').remove();" value="[x]"></div><div class="overlay-container"></div></div></div>');
		$('#overlay').show();
	}

    $('a[data-modal="ajax"]').on('click',function() {

		var link = $(this).attr('data-link');

		if (link!=""){
			
			appendBox();

			var showResponse = function (originalRequest) { $('.overlay-container').html(originalRequest); };
			var showProgress = function () { $('.overlay-container').html('Loading...'); }
			var parameter = "";
			$.ajax({
				type: "POST",
				url: link,
				data: parameter,
				beforeSend: showProgress,
				success: showResponse
			});
		} else {
			console.log('No Ajax loaded.');
		}
		
		
    });


    $('a[data-modal="inline"]').on('click',function() {
       
		var link = $(this).attr('data-link');

		if (link!=""){
			appendBox();
			$('.overlay-container').html($(link).html());
		} else {
			console.log('No id or class declared.');
		}
		
		
    });



    $(document).mouseup(function (e){
	    var container = $(".mainC");

	    if (!container.is(e.target) // if the target of the click isn't the container...
	        && container.has(e.target).length === 0) // ... nor a descendant of the container
	    {
	        $('#overlay').remove();
	    }
	});


})( jQuery );
