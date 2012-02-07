# MultitouchOverlay.js

Once you have added the multitouchOverlay.js and the multitouchOverlay.css to your webpage, this library will show all Touch events as red blobs over your webpage.

MultitouchOverlay is useful for developing Touch enabled HTML5 applications on desktop and can be really handy while using the MacgicTrackpad as Touch device.

## Usage
1. Inject the two files in to your HTML document:
	<script type="text/javascript" src="multitouchOverlay.js"></script>
	<link rel="stylesheet" href="multitouchOverlay.ss" type="text/css">
Be sure to have jQuery embedded.
2. Create a DIV element with the ID 'multitouchReceptor' that stretches over the entire webpage to listen to Touch events. (Note: You can alter the name of the ID in the multitouchOverlay.js file)
3. That's it.

## Dependencies
*jQuery*
Used to handle Blob DIVs.
