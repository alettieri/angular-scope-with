(function(angular){
	'use strict';

	/**
	 * scope-with Directive
	 */
	function DirectiveScopeWith() {
		 
		 return {
		    
		    restrict: 'A',
		    
		    scope: {
		      scopeWith: '='
		    },
		    
		    transclude: 'element',

		    compile: function(tElement, tAttrs, linker) {
		      
		      return function( scope, element, attr) {
		      	
		        	// Grab the parent element
		        var parent = element.parent(),
		        	// With block, we'll store the previous element and scope here
		            withBlock = null,
		            // For when we create a new scope
		        	childScope
		            
		        ;
		        
		        // Watch the scope-with attribute for property value changes changes
		        scope.$watch('scopeWith', function(objChanges){

		          childScope = scope.$new();
		          
		          // Parse out the object properties and assign them to scope
		          angular.forEach(objChanges, function(val, prop){
		            childScope[prop] = val;
		          });
		          
		          // Remove and destroy previous element and scope
		          if(withBlock) {
		            withBlock.el.remove();
		            withBlock.scope.$destroy();
		          }
		          
		          // Link the child scope to the cloned element
		          linker(childScope, function(clone){
		            
		            parent.append(clone);
		            
		            // Store the current element and child scope
		            withBlock = {};
		            withBlock.el = clone;
		            withBlock.scope = childScope;

		          });
		          
		            
		        }, true);
		        
		      };
		      
		    }
		    
		  };
	}

	angular.module('al.directive.scopewith', []).directive('scopeWith', DirectiveScopeWith);

})(window.angular);