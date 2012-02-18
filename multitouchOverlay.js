/**
 * MultitouchOverlay.js
 * 
 * This JavaScript based plugin creates a Multitouch feedback overlay over the container
 * you specify using the variable 'touchEventCaptorId' below. As soon as it's initialized,
 * it will place a red circle at the positions of the touch events.
 * You can disable the feature temporarily by including the string 'disableMultitouchOverlay'
 * in the window hash tag.
 * 
 * @author	raffael@raffael.me
 */

(function(){
	var touchEventCaptorId	= 'multitouchReceptor';
	
	window.onload = function(){

		var hash			= window.location.hash;
		
		var receptor		= jQuery('.multitouchReceptor')[0];
			
		/**
		 * Do nothing if no hash has been appended
		 * or the user has disabled MultitouchOverlay using the hash
		 */
		if (hash != undefined && hash.indexOf('disableMultitouchOverlay')>0) return false;

		/**
		 * Create the overlay that contains all touch event blobs (circles) to the body element
		 */	
		var overlay	= jQuery('<div id="multitouchOverlay" style="position: absolute; top:0; left:0; right:0; bottom:0;z-index:10000;pointer-events:none;"></div>').appendTo(jQuery('body'));
		/**
		 * Create an array that stores all blobs
		 */
		
		/**
		 * This method creates a blob, this is, it creates a DIV in the overlay container that
		 * represents a blob. The data attribute is the array entry of the touches array of a
		 * touch event. The position of the blob is based on the pageX / pageY event data.
		 * Every blob has to have a unique identifier which is stored in the 'rel' attribute of
		 * the DIV element.
		 */
		var makeBlob	= function(data) {
			if ($('#b'+data.identifier).length>0) return;
			var blob	= jQuery('<div class="blob" id="b'+data.identifier+'" style="top: '+data.pageY+'px; left: '+data.pageX+'px;"></div>');
			overlay.append(blob);
		};
		
		/**
		 * This method clears out a specific blob
		 */
		var clearBlob	= function(identifier){
			$('#b'+identifier).remove();
		};
		
		/**
		 * This method updates a blob, that is identified by its 'rel' attribute, so that
		 * it is placed on the correct position.
		 */
		var updateBlob = function(data){
			$('#b'+data.identifier).css({
				top: data.pageY,
				left: data.pageX
			});
		};
		
		/**
		 * On touchstart event, new blobs are created for every single changed touch of the touches array.
		 */
		receptor.addEventListener('touchstart', function(event) {
			for(var i=0;i<event.changedTouches.length;i++) makeBlob(event.changedTouches[i]);
		}, false);
		
		/**
		 * While moving the fingers, the touch event keeps alive and a touchmove event is fired.
		 * In this method, the blobs will be re-positioned across the overlay.
		 */
		receptor.addEventListener('touchmove', function(event) {
			for(var i=0;i<event.touches.length;i++)
				updateBlob(event.touches[i]);
		}, false);
		
		/**
		 * As soon as the touch event ends, the touchend event will be fired, remove the corresponding blob
		 */
		receptor.addEventListener('touchend', function(event) {
			clearBlob(event.changedTouches[0].identifier);
		}, false);
	};
})();