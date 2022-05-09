import { extend } from 'duroom/common/extend';
import classList from 'duroom/common/utils/classList';

import DiscussionListItem from 'duroom/forum/components/DiscussionListItem';

export default function addStickyClass() {
  extend(DiscussionListItem.prototype, 'elementAttrs', function (attrs) {
    if (this.attrs.discussion.isSticky()) {
      attrs.className = classList(attrs.className, 'DiscussionListItem--sticky');
    }
  });
}
