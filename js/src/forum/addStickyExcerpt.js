import app from 'duroom/forum/app';
import { extend } from 'duroom/common/extend';
import DiscussionListState from 'duroom/forum/states/DiscussionListState';
import DiscussionListItem from 'duroom/forum/components/DiscussionListItem';
import DiscussionPage from 'duroom/forum/components/DiscussionPage';
import IndexPage from 'duroom/forum/components/IndexPage';
import { truncate } from 'duroom/common/utils/string';

export default function addStickyControl() {
  extend(DiscussionListState.prototype, 'requestParams', function (params) {
    if (app.current.matches(IndexPage) || app.current.matches(DiscussionPage)) {
      params.include.push('firstPost');
    }
  });

  extend(DiscussionListItem.prototype, 'infoItems', function (items) {
    const discussion = this.attrs.discussion;

    if (discussion.isSticky() && !this.attrs.params.q && !discussion.lastReadPostNumber()) {
      const firstPost = discussion.firstPost();

      if (firstPost) {
        const excerpt = truncate(firstPost.contentPlain(), 175);

        // Wrapping in <div> because ItemList entries need to be vnodes
        items.add('excerpt', <div>{excerpt}</div>, -100);
      }
    }
  });
}
