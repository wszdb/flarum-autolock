import app from 'flarum/admin/app';
import { extend } from 'flarum/common/extend';
import ExtensionPage from 'flarum/admin/components/ExtensionPage';

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
    .registerSetting(function (this: ExtensionPage) {
      const tags = app.store.all('tags');
      const settingValue = this.setting('wszdb-autolock.exempt_tags')();
      let exemptTags: number[] = [];
      
      try {
        exemptTags = settingValue ? JSON.parse(settingValue) : [];
      } catch (e) {
        console.error('[Auto Lock] Failed to parse exempt tags:', e);
        exemptTags = [];
      }

      return m('div', { className: 'Form-group' }, [
        m('label', app.translator.trans('wszdb-autolock.admin.settings.exempt_tags_label')),
        m('div', { className: 'helpText' }, 
          app.translator.trans('wszdb-autolock.admin.settings.exempt_tags_help')
        ),
        m('div', { style: 'margin-top: 10px;' },
          tags.length > 0
            ? tags.map((tag: any) => {
                const tagId = parseInt(tag.id());
                const isChecked = exemptTags.includes(tagId);
                
                return m('div', { className: 'checkbox', style: 'margin-bottom: 8px;' }, [
                  m('label', [
                    m('input', {
                      type: 'checkbox',
                      checked: isChecked,
                      onchange: (e: Event) => {
                        const target = e.target as HTMLInputElement;
                        let newExemptTags = [...exemptTags];
                        
                        if (target.checked) {
                          if (!newExemptTags.includes(tagId)) {
                            newExemptTags.push(tagId);
                          }
                        } else {
                          newExemptTags = newExemptTags.filter(id => id !== tagId);
                        }
                        
                        // 保存到设置.
                        const jsonValue = JSON.stringify(newExemptTags);
                        this.setting('wszdb-autolock.exempt_tags')(jsonValue);
                        
                        // 标记为已修改。
                        this.dirty = true;
                      }
                    }),
                    m('span', {
                      className: 'tagLabel',
                      style: `background-color: ${tag.color()}; color: #fff; padding: 2px 8px; border-radius: 3px; margin-left: 5px;`
                    }, tag.name())
                  ])
                ]);
              })
            : m('div', { className: 'helpText' },
                app.translator.trans('wszdb-autolock.admin.settings.no_tags')
              )
        )
      ]);
    });
});

