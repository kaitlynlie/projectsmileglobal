// social links conditional based on if there is an instagram or website link in the dataset, and links to the corresponding pages

import wixLocation from 'wix-location';

$w.onReady(function () {

    $w("#dynamicDataset").onReady(() => {

        const item = $w("#dynamicDataset").getCurrentItem();

        const hasInstagram = item.instagram;
        const hasWebsite = item.website;

        // if there are no social links, collapse the whole box
        if (!hasInstagram && !hasWebsite) {
            $w("#box198").collapse();
        }

        // if instagram exists, show the instagram link and link to the instagram page. otherwise, collapse the instagram box
        if (hasInstagram) {
            const username = item.instagram
                .split("instagram.com/")[1]
                .replaceAll("/", "");

            // display the instagram username instead of the full link
            $w("#text242").text = `@${username}`;

            $w("#text242").onClick(() => {
                wixLocation.to(item.instagram);
            });
        } else {
            $w("#box200").collapse();
        }

        // if website exists, show the website link and link to the website page. otherwise, collapse the website box
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