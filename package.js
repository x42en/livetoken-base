Package.describe({
  name: 'benmz:livetoken-base',
  version: '0.1.0',
  summary: 'Basic methods for LiveToken.io interaction (token authentication system)',
  git: 'https://github.com/x62en/livetoken-base.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  // Meteor releases below this version are not supported
  api.versionsFrom('1.2.0.1');

  // Core packages and 3rd party packages
  api.use('ddp', ['client', 'server']);
  api.use('mongo', ['client', 'server']);
  api.use('coffeescript',['server']);
  api.use('accounts-base');
  
  // The files of this package
  api.addFiles('livetoken.coffee', ['client', 'server']);
  
});

Package.onTest(function(api) {
  api.use('coffeescript');
  api.use('tinytest');
  api.use('benmz:livetoken-base');
  api.addFiles('livetoken-base-tests.js');
});
