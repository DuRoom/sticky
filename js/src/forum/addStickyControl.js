import app from 'duroom/forum/app';
import { extend } from 'duroom/common/extend';
import DiscussionControls from 'duroom/forum/utils/DiscussionControls';
import DiscussionPage from 'duroom/forum/components/DiscussionPage';
import Button from 'duroom/common/components/Button';

export default function addStickyControl() {
  extend(DiscussionControls, 'moderationControls', function (items, discussion) {
    if (discussion.canSticky()) {
      items.add(
        'sticky',
        Button.component(
          {
            icon: 'fas fa-thumbtack',
            onclick: this.stickyAction.bind(discussion),
          },
          app.translator.trans(
            discussion.isSticky()
              ? 'duroom-sticky.forum.discussion_controls.unsticky_button'
              : 'duroom-sticky.forum.discussion_controls.sticky_button'
          )
        )
      );
    }
  });

  DiscussionControls.stickyAction = function () {
    this.save({ isSticky: !this.isSticky() }).then(() => {
      if (app.current.matches(DiscussionPage)) {
        app.current.get('stream').update();
      }

      m.redraw();
    });
  };
}
