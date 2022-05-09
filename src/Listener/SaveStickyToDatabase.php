<?php

/*
 * This file is part of DuRoom.
 *
 * For detailed copyright and license information, please view the
 * LICENSE file that was distributed with this source code.
 */

namespace DuRoom\Sticky\Listener;

use DuRoom\Discussion\Event\Saving;
use DuRoom\Sticky\Event\DiscussionWasStickied;
use DuRoom\Sticky\Event\DiscussionWasUnstickied;

class SaveStickyToDatabase
{
    /**
     * @param Saving $event
     */
    public function handle(Saving $event)
    {
        if (isset($event->data['attributes']['isSticky'])) {
            $isSticky = (bool) $event->data['attributes']['isSticky'];
            $discussion = $event->discussion;
            $actor = $event->actor;

            $actor->assertCan('sticky', $discussion);

            if ((bool) $discussion->is_sticky === $isSticky) {
                return;
            }

            $discussion->is_sticky = $isSticky;

            $discussion->raise(
                $discussion->is_sticky
                    ? new DiscussionWasStickied($discussion, $actor)
                    : new DiscussionWasUnstickied($discussion, $actor)
            );
        }
    }
}
