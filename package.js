Package.describe({
  summary: "MJ Famous Integration"
});

var S = 'server';
var C = 'client';
var CS = [C, S];

Package.on_use(function (api) {
  api.add_files('famous.css', C);

  api.add_files('polyfills/classList.js', C);
  api.add_files('polyfills/functionPrototypeBind.js', C);
  api.add_files('polyfills/requestAnimationFrame.js', C);

  api.add_files('famous.js', C);

  api.export('famous');
});

Package.on_test(function (api) {
  api.use('mj-famous');
  api.use('tinytest');

  api.add_files('famous-tests.js', C);
});
