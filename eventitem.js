// social links conditional based on if there is an instagram or website link in the dataset, and links to the corresponding pages

import wixLocation from 'wix-location';

$w.onReady(function () {

    $w("#dynamicDataset").onReady(() => {

        const item = $w("#dynamicDataset").getCurrentItem();

        const hasInstagram = item.instagram;
        const hasWebsite = item.website;

        if (!hasInstagram && !hasWebsite) {
            $w("#box198").collapse();
        }

        if (hasInstagram) {
            const username = item.instagram
                .split("instagram.com/")[1]
                .replaceAll("/", "");

            $w("#text242").text = `@${username}`;

            $w("#text242").onClick(() => {
                wixLocation.to(item.instagram);
            });

        } else {
            $w("#box200").collapse();
        }
        if (hasWebsite) {
            $w("#text243").text = "Official Website";

            $w("#text243").onClick(() => {
                wixLocation.to(item.website);
            });

        } else {
            $w("#box201").collapse();
        }

    });

});