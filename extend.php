<?php

/*
 * This file is part of DuRoom.
 *
 * For detailed copyright and license information, please view the
 * LICENSE file that was distributed with this source code.
 */

use DuRoom\Api\Controller\ListDiscussionsController;
use DuRoom\Api\Serializer\DiscussionSerializer;
use DuRoom\Discussion\Event\Saving;
use DuRoom\Discussion\Filter\DiscussionFilterer;
use DuRoom\Discussion\Search\DiscussionSearcher;
use DuRoom\Extend;
use DuRoom\Sticky\Event\DiscussionWasStickied;
use DuRoom\Sticky\Event\DiscussionWasUnstickied;
use DuRoom\Sticky\Listener;
use DuRoom\Sticky\Listener\SaveStickyToDatabase;
use DuRoom\Sticky\PinStickiedDiscussionsToTop;
use DuRoom\Sticky\Post\DiscussionStickiedPost;
use DuRoom\Sticky\Query\StickyFilterGambit;

return [
    (new Extend\Frontend('forum'))
        ->js(__DIR__.'/js/dist/forum.js')
        ->css(__DIR__.'/less/forum.less'),

    (new Extend\Post())
        ->type(DiscussionStickiedPost::class),

    (new Extend\ApiSerializer(DiscussionSerializer::class))
        ->attribute('isSticky', function (DiscussionSerializer $serializer, $discussion) {
            return (bool) $discussion->is_sticky;
        })
        ->attribute('canSticky', function (DiscussionSerializer $serializer, $discussion) {
            return (bool) $serializer->getActor()->can('sticky', $discussion);
        }),

    (new Extend\ApiController(ListDiscussionsController::class))
        ->addInclude('firstPost'),

    (new Extend\Frontend('admin'))
        ->js(__DIR__.'/js/dist/admin.js'),

    new Extend\Locales(__DIR__.'/locale'),

    (new Extend\Event())
        ->listen(Saving::class, SaveStickyToDatabase::class)
        ->listen(DiscussionWasStickied::class, [Listener\CreatePostWhenDiscussionIsStickied::class, 'whenDiscussionWasStickied'])
        ->listen(DiscussionWasUnstickied::class, [Listener\CreatePostWhenDiscussionIsStickied::class, 'whenDiscussionWasUnstickied']),

    (new Extend\Filter(DiscussionFilterer::class))
        ->addFilter(StickyFilterGambit::class)
        ->addFilterMutator(PinStickiedDiscussionsToTop::class),

    (new Extend\SimpleDuRoomSearch(DiscussionSearcher::class))
        ->addGambit(StickyFilterGambit::class),
];
