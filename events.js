// links each event to their corresponding event page

import wixLocation from 'wix-location';

$w.onReady(function () {

  // when the repeater for upcoming events is ready, link each event box to the corresponding event page based on the link in the dataset

  // past events for guest speaker series
  $w("#repeater4").onItemReady(($item, itemData) => {
    $item("#box66").onClick(() => {
      wixLocation.to(itemData["link-news-title"]);
    });
  });

  // past events for community events
  $w("#repeater5").onItemReady(($item, itemData) => {
    $item("#box201").onClick(() => {
      wixLocation.to(itemData["link-news-title"]);
    });
  });
});