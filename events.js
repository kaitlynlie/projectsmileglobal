// links each event to their corresponding event page

import wixLocation from 'wix-location';

$w.onReady(function () {
  $w("#repeater4").onItemReady(($item, itemData) => {

    $item("#box66").onClick(() => {
      wixLocation.to(itemData["link-news-title"]);
    });

  });

  $w("#repeater5").onItemReady(($item, itemData) => {

    $item("#box201").onClick(() => {
      wixLocation.to(itemData["link-news-title"]);
    });

  });
});