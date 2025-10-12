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
    })
    .registerSetting(function (this: any) {
      // 保存当前组件的this引用
      const component = this;
      
      // 获取所有标签
      const tags = app.store.all('tags');
      
      // 获取当前豁免标签设置
      const getCurrentExemptTags = () => {
        const settingValue = this.setting('wszdb-autolock.exempt_tags')() || '[]';
        try {
          return settingValue ? JSON.parse(settingValue) : [];
        } catch (e) {
          console.error('[Auto Lock] Failed to parse exempt tags:', e);
          return [];
        }
      };
      
      // 获取当前豁免标签
      const exemptTags = getCurrentExemptTags();

      return m('div', { className: 'Form-group' }, [
        m('label', app.translator.trans('wszdb-autolock.admin.settings.exempt_tags_label')),
        m('div', { className: 'helpText' }, 
          app.translator.trans('wszdb-autolock.admin.settings.exempt_tags_help')
        ),
        m('div', { 
          style: 'margin-top: 10px; display: flex; flex-wrap: wrap; gap: 10px;'
        },
          tags.length > 0
            ? tags.map((tag: any) => {
                const tagId = parseInt(tag.id());
                const isChecked = exemptTags.includes(tagId);
                
                // 获取标签名称，如果有父标签则显示为 父标签@子标签
                let tagName = tag.name();
                if (tag.parent()) {
                  try {
                    const parentTag = app.store.getById('tags', tag.parent().id());
                    if (parentTag) {
                      tagName = `${parentTag.name()}@${tagName}`;
                    }
                  } catch (e) {
                    // 忽略父标签获取错误
                  }
                }
                
                return m('div', { 
                  className: 'checkbox', 
                  style: 'margin-bottom: 8px; white-space: nowrap; flex: 1 1 auto;'
                }, [
                  m('label', {
                    style: 'display: flex; align-items: center; cursor: pointer;'
                  }, [
                    m('input', {
                      type: 'checkbox',
                      checked: isChecked,
                      onchange: function(e: Event) {
                        const checked = (e.target as HTMLInputElement).checked;
                        
                        // 获取当前的豁免标签列表
                        let currentExemptTags = getCurrentExemptTags();
                        
                        if (checked) {
                          // 添加标签ID（避免重复）
                          if (!currentExemptTags.includes(tagId)) {
                            currentExemptTags.push(tagId);
                          }
                        } else {
                          // 移除标签ID
                          currentExemptTags = currentExemptTags.filter((id: number) => id !== tagId);
                        }
                        
                        // 更新设置值
                        const newValue = JSON.stringify(currentExemptTags);
                        component.setting('wszdb-autolock.exempt_tags')(newValue);
                        
                        // 关键修复：调用 dirty() 方法而不是设置属性
                        if (typeof component.dirty === 'function') {
                          component.dirty();
                        }
                        
                        // 触发重绘
                        m.redraw();
                        
                        console.log('[Auto Lock] Tags updated:', {
                          tagId,
                          checked,
                          exemptTags: currentExemptTags
                        });
                      }
                    }),
                    m('span', { style: 'margin-left: 5px;' }, tagName)
                  ])
                ]);
              })
            : m('div', { className: 'helpText' }, app.translator.trans('wszdb-autolock.admin.settings.no_tags_found'))
        )
      ]);
    });
});
