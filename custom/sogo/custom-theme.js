/* Custom SOGo theme: primary colour #2f4ead (replaces the default indigo).
 * Mounted over SOGo's js/theme.js (see docker-compose.override.yml).
 * Based on SOGo's default theme.js; only the primary palette changed.
 */
(function() {
  'use strict';

  angular.module('SOGo.Common')
    .config(configure);

  configure.$inject = ['$mdThemingProvider'];
  function configure($mdThemingProvider) {

    // Brand palette derived from #2f4ead (500 = exact brand colour).
    var brand = $mdThemingProvider.extendPalette('indigo', {
      '50':  'EEF1F8',
      '100': 'D5DCEF',
      '200': 'B0BCE0',
      '300': '8B9CD1',
      '400': '5D75BF',
      '500': '2F4EAD',
      '600': '2A469C',
      '700': '253D87',
      '800': '1E326F',
      '900': '182756',
      'A100': 'A7B7E7',
      'A200': '7F96DC',
      'A400': '4B6BCE',
      'A700': '3355BD'
    });
    $mdThemingProvider.definePalette('brand', brand);

    // Same background greys as SOGo's default theme
    var greyMap = $mdThemingProvider.extendPalette('grey', {
      '200': 'ECEFF4',   // selected sidebar item, right panel, menus
      '300': 'D8DEE9',   // sidebar
      '1000': '4C566A'   // busy periods in the attendees editor
    });
    $mdThemingProvider.definePalette('frost-grey', greyMap);

    $mdThemingProvider.theme('default')
      .primaryPalette('brand', {
        'default': '500',  // top toolbars (exact #2f4ead)
        'hue-1': '500',
        'hue-2': '700',    // sidebar toolbar
        'hue-3': 'A700'
      })
      .accentPalette('brand', {  // selected rows, FAB buttons, checkboxes
        'default': '600',
        'hue-1': '300',    // centre list toolbar
        'hue-2': '300',
        'hue-3': 'A700'
      })
      .backgroundPalette('frost-grey');

    $mdThemingProvider.generateThemesOnDemand(false);
  }
})();
