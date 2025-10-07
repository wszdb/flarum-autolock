import app from 'flarum/forum/app';

app.initializers.add('wszdb/flarum-autolock', () => {
  console.log('[wszdb/flarum-autolock] Extension loaded');
});
