require.config({
  shim: {

  },
  paths: {
    main: "./scripts/main",
    player: "./scripts/utils/player",
    ui: "./scripts/utils/ui",
    jquery: "../bower_components/jquery/dist/jquery",
    loglevel: "../bower_components/loglevel/dist/loglevel.min",
    SecondLevelDomains: "../bower_components/urijs/src/SecondLevelDomains",
    punycode: "../bower_components/urijs/src/punycode",
    IPv6: "../bower_components/urijs/src/IPv6",
    urijs: "../bower_components/urijs/src/URI",
    moment: "../bower_components/moment/moment"
  },
  packages: [

  ]
});
require( ["main"] );
