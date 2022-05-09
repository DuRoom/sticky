import app from 'duroom/forum/app';
import Model from 'duroom/common/Model';
import Discussion from 'duroom/common/models/Discussion';

import DiscussionStickiedPost from './components/DiscussionStickiedPost';
import addStickyBadge from './addStickyBadge';
import addStickyControl from './addStickyControl';
import addStickyExcerpt from './addStickyExcerpt';
import addStickyClass from './addStickyClass';

app.initializers.add('duroom-sticky', () => {
  app.postComponents.discussionStickied = DiscussionStickiedPost;

  Discussion.prototype.isSticky = Model.attribute('isSticky');
  Discussion.prototype.canSticky = Model.attribute('canSticky');

  addStickyBadge();
  addStickyControl();
  addStickyExcerpt();
  addStickyClass();
});
