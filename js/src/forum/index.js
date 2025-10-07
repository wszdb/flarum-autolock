import app from 'flarum/forum/app';

app.initializers.add('wszdb/flarum-autolock', () => {
  // Forum-side initialization
  // Currently no frontend modifications needed for the forum
  // The locking happens automatically on the backend
  console.log('[wszdb/flarum-autolock] Extension loaded');
});