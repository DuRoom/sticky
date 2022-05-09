import app from 'duroom/admin/app';

app.initializers.add('duroom-sticky', () => {
  app.extensionData.for('duroom-sticky').registerPermission(
    {
      icon: 'fas fa-thumbtack',
      label: app.translator.trans('duroom-sticky.admin.permissions.sticky_discussions_label'),
      permission: 'discussion.sticky',
    },
    'moderate',
    95
  );
});
