import app from 'flarum/forum/app';

app.initializers.add('wszdb/flarum-autolock', () => {
  console.log('[Auto Lock] Extension loaded');
  
  const enabled = app.forum.attribute('wszdb-autolock.enabled');
  const threshold = app.forum.attribute('wszdb-autolock.threshold');
  
  if (enabled) {
    console.log(`[Auto Lock] Enabled with threshold: ${threshold}`);
  }
});
