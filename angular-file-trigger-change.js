/*
	Just add the directive to your file. Then you have the model in-sync.
	You can use the 'ng-change' to. Ex.
	<input
		type="file"
		ng-model="vm.files"
		ng-change="vm.fileChanged()"
		ng-file-trigger-change
		accept="image/*"
		capture
		multiple
	/>
*/

/**
 * @ngdoc function Directive
 * @name directive ng-file-trigger-change
 * @description trigger a file-change and a model-change.
 */

(
    function( document, window, angular ) {
		'use strict';
		
		// Module
		angular
			.module( 'ngFileTriggerChange', [] )
			.directive( 'ngFileTriggerChange', Directive )
		;

		// NgFileTrigger
		Directive.$inject = [];

		function Directive() {

			var directive = {};

			directive.restrict = 'A';
			directive.require = '?ngModel';
			directive.scope = {
				ngModel: "=",
			};
			directive.link = link;

			// Linking
			function link( scope, element, attrs, ngModelController ) {

				if( ! ngModelController )
					return;

				// onChange Function
				function onChangeFunc( event ) {

					var files = null;

					if( event.target && event.target.files )
						files = event.target.files;

					ngModelController.$setViewValue( files );

				};
				element.change( onChangeFunc );

				// Destroy Event
				scope.$on(
					"$destroy",
					function() {

						element.off();

					}
				);

			};

			return directive;

		};
		
	}
)( document, window, angular );
