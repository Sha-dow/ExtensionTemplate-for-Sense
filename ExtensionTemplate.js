define( [ 
	'jquery',
	'qlik',
    './properties',
    './init',
],
function ( $, qlik, props, init ) {

	return {
        definition: props,
        initialProperties: init,
        support: { snapshot: true, export: true },
        paint: function ( $element , layout ) {
        	console.log(layout.qHyperCube);
    		return qlik.Promise.resolve();
        },
        destroy: function($element) {
        	//Destroy event handling here
        }
    }
} );

