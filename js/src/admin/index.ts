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
    .registerSetting(function () {
      // 获取所有标签
      const tags = app.store.all('tags');
      const exemptTagsJson = app.data.settings['wszdb-autolock.exempt_tags'] || '[]';
      let exemptTags: number[] = [];
      
      try {
        exemptTags = JSON.parse(exemptTagsJson);
      } catch (e) {
        console.error('[Auto Lock] Failed to parse exempt tags:', e);
      }

      return (
        <div className="Form-group">
          <label>{app.translator.trans('wszdb-autolock.admin.settings.exempt_tags_label')}</label>
          <div className="helpText">
            {app.translator.trans('wszdb-autolock.admin.settings.exempt_tags_help')}
          </div>
          <div style="margin-top: 10px;">
            {tags.length > 0 ? (
              tags.map((tag: any) => {
                const isChecked = exemptTags.includes(parseInt(tag.id()));
                
                return (
                  <div className="checkbox" style="margin-bottom: 8px;">
                    <label>
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onchange={(e: any) => {
                          const tagId = parseInt(tag.id());
                          let newExemptTags = [...exemptTags];
                          
                          if (e.target.checked) {
                            if (!newExemptTags.includes(tagId)) {
                              newExemptTags.push(tagId);
                            }
                          } else {
                            newExemptTags = newExemptTags.filter(id => id !== tagId);
                          }
                          
                          app.data.settings['wszdb-autolock.exempt_tags'] = JSON.stringify(newExemptTags);
                          this.setting('wszdb-autolock.exempt_tags')(JSON.stringify(newExemptTags));
                        }}
                      />
                      <span 
                        className="tagLabel" 
                        style={`background-color: ${tag.color()}; color: #fff; padding: 2px 8px; border-radius: 3px; margin-left: 5px;`}
                      >
                        {tag.name()}
                      </span>
                    </label>
                  </div>
                );
              })
            ) : (
              <div className="helpText">
                {app.translator.trans('wszdb-autolock.admin.settings.no_tags')}
              </div>
            )}
          </div>
        </div>
      );
    });
});