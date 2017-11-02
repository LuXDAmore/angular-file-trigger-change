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
	directive.link = link;

	// Linking
	function link( scope, element, attrs, NgModelController ) {

		if( ! NgModelController )
			return;

		function onChangeFunc( event ) {

			var files = null;

			if( event.target && event.target.files )
				files = event.target.files;

			NgModelController.$setViewValue( files );

		};
		element.change( onChangeFunc );

	};

	return directive;

};
