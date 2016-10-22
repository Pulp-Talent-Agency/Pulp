( function() {

  angular.module( 'Pulp' )
    
    .provider( 'runtimeStates', [ '$stateProvider', function runtimeStates( $stateProvider ) {

      this.$get = function( $q, $timeout, $state ) {
        return {
          duh: 'duh',
          addState: function( name, state ) {
            $stateProvider.state( name, state );
          }
        };
      }

    } ] );

} )();