import app from 'duroom/forum/app';
import { extend } from 'duroom/common/extend';
import Discussion from 'duroom/common/models/Discussion';
import Badge from 'duroom/common/components/Badge';

export default function addStickyBadge() {
  extend(Discussion.prototype, 'badges', function (badges) {
    if (this.isSticky()) {
      badges.add(
        'sticky',
        Badge.component({
          type: 'sticky',
          label: app.translator.trans('duroom-sticky.forum.badge.sticky_tooltip'),
          icon: 'fas fa-thumbtack',
        }),
        10
      );
    }
  });
}
