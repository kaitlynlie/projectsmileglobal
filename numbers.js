// animated numbers for stats section on homepage

let hasAnimated = false;

$w.onReady(function () {

  function animateCount(element, target, duration = 1500) {
    const startTime = Date.now();

    function update() {

      // calculate the current value based on the elapsed time and apply an easing function for a smoother animation
      const now = Date.now();
      const progress = Math.min((now - startTime) / duration, 1);
      const value = Math.floor(target * (1 - Math.pow(1 - progress, 3)));
      element.text = value.toLocaleString();

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        element.text = target.toLocaleString() + "+";
      }
    }

    update();
  }

  const stats = [
  { _id: "1", value: 250, label: "ACTIVE VOLUNTEERS", tag: "NETWORK" },
  { _id: "2", value: 29, label: "ACTIVE CHAPTERS", tag: "OUTREACH" },
  { _id: "3", value: 3800, label: "PEOPLE SERVED", tag: "IMPACT" },
  { _id: "4", value: 4, label: "COUNTRIES", tag: "GLOBAL" }
];

  $w("#repeater2").data = stats;

  $w("#statsSection").onViewportEnter(() => {

    // only animate the numbers the first time the section enters the viewport
    if (hasAnimated) return;
    hasAnimated = true;

    $w("#repeater2").forEachItem(($item, itemData, index) => {

      // set initial value to 0 before animating up to the target value
      $item("#stat2000").text = "0";
      $item("#text245").text = itemData.label;
      $item("#text246").text = itemData.tag;

      // stagger the animation for each stat by 200ms
      setTimeout(() => {
        animateCount($item("#stat2000"), itemData.value, 1500);
      }, index * 200);

    });
  });
});