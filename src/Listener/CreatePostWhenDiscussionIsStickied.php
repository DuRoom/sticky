<?php

/*
 * This file is part of DuRoom.
 *
 * For detailed copyright and license information, please view the
 * LICENSE file that was distributed with this source code.
 */

namespace DuRoom\Sticky\Listener;

use DuRoom\Discussion\Discussion;
use DuRoom\Sticky\Event\DiscussionWasStickied;
use DuRoom\Sticky\Event\DiscussionWasUnstickied;
use DuRoom\Sticky\Post\DiscussionStickiedPost;
use DuRoom\User\User;

class CreatePostWhenDiscussionIsStickied
{
    /**
     * @param DiscussionWasStickied $event
     */
    public static function whenDiscussionWasStickied(DiscussionWasStickied $event)
    {
        static::stickyChanged($event->discussion, $event->user, true);
    }

    /**
     * @param DiscussionWasUnstickied $event
     */
    public static function whenDiscussionWasUnstickied(DiscussionWasUnstickied $event)
    {
        static::stickyChanged($event->discussion, $event->user, false);
    }

    /**
     * @param Discussion $discussion
     * @param User $user
     * @param bool $isSticky
     */
    protected static function stickyChanged(Discussion $discussion, User $user, $isSticky)
    {
        $post = DiscussionStickiedPost::reply(
            $discussion->id,
            $user->id,
            $isSticky
        );

        $discussion->mergePost($post);
    }
}
