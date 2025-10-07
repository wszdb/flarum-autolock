import app from 'flarum/admin/app';

app.initializers.add('wszdb/flarum-autolock', () => {
  app.extensionData
    .for('wszdb-autolock')
    .registerSetting({
      setting: 'wszdb-autolock.enabled',
      type: 'boolean',
      label: app.translator.trans('wszdb-autolock.admin.settings.enabled_label'),
      help: app.translator.trans('wszdb-autolock.admin.settings.enabled_help'),
    })
    .registerSetting({
      setting: 'wszdb-autolock.threshold',
      type: 'number',
      label: app.translator.trans('wszdb-autolock.admin.settings.threshold_label'),
      help: app.translator.trans('wszdb-autolock.admin.settings.threshold_help'),
      min: 1,
      placeholder: '100',
    });
});
