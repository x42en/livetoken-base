Package.describe({
  name: 'benmz:livetoken-base',
  version: '0.1.0',
  summary: 'Basic methods for LiveToken.io interaction',
  git: 'https://github.com/x62en/livetoken-base.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  // Meteor releases below this version are not supported
  api.versionsFrom("1.2.0.1");

  // Core packages and 3rd party packages
  api.use("ddp");
  api.use("tracker");
  api.use('coffeescript',['server']);
  api.use("accounts-base");
  
  // The files of this package
  api.addFiles("livetoken.coffee", ["client", "server"]);

  // The variables that become global for users of your package
  api.export("Accounts.livetoken", ["server"]);
});

Package.onTest(function(api) {
  api.use('coffeescript');
  api.use('tinytest');
  api.use('benmz:livetoken-base');
  api.addFiles('livetoken-base-tests.js');
});
