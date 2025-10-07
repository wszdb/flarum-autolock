System.register("wszdb/flarum-autolock/forum", ["flarum/forum/app"], function (_export, _context) {
  "use strict";

  var app;
  return {
    setters: [function (_flarumForumApp) {
      app = _flarumForumApp.default;
    }],
    execute: function () {
      app.initializers.add('wszdb/flarum-autolock', function () {
        console.log('[wszdb/flarum-autolock] Extension loaded');
      });
    }
  };
});