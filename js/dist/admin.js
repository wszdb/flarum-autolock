System.register('wszdb/flarum-autolock/admin', ['flarum/admin/app'], function (_export) {
  'use strict';

  var app;
  return {
    setters: [function (_flarumAdminApp) {
      app = _flarumAdminApp.default;
    }],
    execute: function () {
      app.initializers.add('wszdb/flarum-autolock', function () {
        app.extensionData
          .for('wszdb-flarum-autolock')
          .registerSetting({
            setting: 'wszdb-autolock.enabled',
            type: 'boolean',
            label: app.translator.trans('wszdb-autolock.admin.settings.enabled_label'),
            help: app.translator.trans('wszdb-autolock.admin.settings.enabled_help')
          })
          .registerSetting({
            setting: 'wszdb-autolock.post_threshold',
            type: 'number',
            label: app.translator.trans('wszdb-autolock.admin.settings.threshold_label'),
            help: app.translator.trans('wszdb-autolock.admin.settings.threshold_help'),
            min: 1,
            placeholder: '100'
          });
      });
    }
  };
});