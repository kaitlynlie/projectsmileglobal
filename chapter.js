// individual chapter page for loading the gallery (if it exists) and the domain/instagram info (if they exist).

$w.onReady(function () {
  $w("#dynamicDataset").onReady(() => {

    const item = $w("#dynamicDataset").getCurrentItem();

	console.log("IMAGE FIELD:", item.mediagallery);

  const rawImages = item.mediagallery;

	const images =
	Array.isArray(rawImages)
		? rawImages
		: rawImages?.items
		? rawImages.items
		: rawImages
			? [rawImages]
			: [];

	const hasImages = images.length > 0;

	if (!hasImages) {
	$w("#gallerySection").collapse();
	} else {
	$w("#gallerySection").expand();
	}

    if (!item.domain) {
      $w("#domainLabel").collapse();
      $w("#domainLine").collapse();
    } else {
      $w("#domainLabel").expand();
      $w("#domainContainer").text = item.domain;
    }

    if (!item.instagram) {
      $w("#instagramLabel").collapse();
      $w("#instagramLine").collapse();
    } else {
      $w("#instagramLabel").expand();
      $w("#instagramContainer").text = item.instagram;
    }

  });
});