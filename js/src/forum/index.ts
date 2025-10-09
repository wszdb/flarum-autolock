import app from 'flarum/forum/app';

app.initializers.add('wszdb/flarum-autolock', () => {
  // 论坛端初始化 - 不需要读取设置，所有逻辑在后端处理
  console.log('[Auto Lock] Extension loaded in forum');
});
