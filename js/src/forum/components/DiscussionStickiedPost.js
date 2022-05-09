import EventPost from 'duroom/forum/components/EventPost';

export default class DiscussionStickiedPost extends EventPost {
  icon() {
    return 'fas fa-thumbtack';
  }

  descriptionKey() {
    return this.attrs.post.content().sticky
      ? 'duroom-sticky.forum.post_stream.discussion_stickied_text'
      : 'duroom-sticky.forum.post_stream.discussion_unstickied_text';
  }
}
