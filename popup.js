// loads popup for the map page and handles the click to open the chapter link.

import wixData from 'wix-data'; 
import wixLocation from 'wix-location'; 

let currentLink = null; 
let imageRequestId = 0; // race conditon 

$w.onReady(async function () {
  const res = await wixData.query("Import1").find(); 
  const cleanData = res.items.map(item => ({ 
    title: item.title, 
    name: item.name, 
    location: item.location, 
    latitude: Number(item.latitude), 
    longitude: Number(item.longitude), 
    link: item["link-import-1-title"], 
    image: item.image, 
  }));
    
  $w("#mapHtml").postMessage({ 
    type: "LOAD_MARKERS", 
    chapters: cleanData 
  }); 
  
  $w("#chapterPopup").collapse(); 
  $w("#mapHtml").onMessage((event) => { 
    const data = event.data; 
    if (!data || data.type !== "OPEN_POPUP") return; 
    
    console.log("MESSAGE RECEIVED:", data); 
    
    currentLink = data.link; 

    $w("#popupTitle").text = data.title || "No title"; 
    $w("#popupLocation").text = data.location || ""; 
    $w("#popupName").text = data.name || ""; 

    $w("#popupImage").hide(); 
    $w("#imageLoader").show(); 
    
    if (data.image) { 
      const imgSrc = data.image.src || data.image; 
      imageRequestId++; 
      
      const thisRequest = imageRequestId 
      $w("#popupImage").src = imgSrc; setTimeout(() => { 
          if (thisRequest !== imageRequestId) return; 
          
          $w("#imageLoader").hide(); 
          $w("#popupImage").show("fade", { 
            duration: 200 
          }); 
        }, 
        250); 
      } 
  
    setTimeout(() => { 
      $w("#chapterPopup").expand(); 
    }, 0); 
  }); 

  $w("#openChapterBtn").onClick(() => { 
    if (currentLink) { 
      wixLocation.to(currentLink); 
    } 
  }); 

  $w("#repeater1").onItemReady(($item, itemData, index) => {

  $item("#box198").onClick(() => {
    const link = itemData["link-import-1-title"];
    if (link) {
      wixLocation.to(link);
    }
  });
});

$w("#repeater3").onItemReady(($item, itemData, index) => {

  $item("#box204").onClick(() => {
    const link = itemData["link-import-1-title"];
    if (link) {
      wixLocation.to(link);
    }
  });
});

$w("#repeater2").onItemReady(($item, itemData, index) => {

  $item("#box202").onClick(() => {
    const link = itemData["link-import-1-title"];
    if (link) {
      wixLocation.to(link);
    }
  });
});

$w("#repeater4").onItemReady(($item, itemData) => {
  console.log("Repeater4 item:", itemData.title, itemData["link-import-1-title"]);

  $item("#box207").onClick(() => {
    const link = itemData["link-import-1-title"];

    if (link && typeof link === "string") {
      wixLocation.to(link);
    }
  });
});

});