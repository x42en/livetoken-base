Package.describe({
  name: 'benmz:livetoken-base',
  version: '0.1.5',
  summary: 'Basic methods for LiveToken.io interaction (token authentication system)',
  git: 'https://github.com/x62en/livetoken-base.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  // Meteor releases below this version are not supported
  api.versionsFrom('1.2.0.1');

  // Core packages and 3rd party packages
  api.use('accounts-base');
  api.use('coffeescript');
  api.use('session', 'client');
  api.use('check', 'server');
  api.use('http', 'server');

  api.use('meteorhacks:async@1.0.0', 'server');
  api.use('jparker:crypto-sha1@0.1.0', 'server');
  api.use('momentjs:moment@2.12.0', 'server');

  // The files of this package
  api.addFiles('livetoken-base.coffee');

});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('benmz:livetoken-base');
  api.use('coffeescript');

  api.addFiles('livetoken-base-tests.js');
});
