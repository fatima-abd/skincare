const showBox = document.querySelector(".handle-btn");
const boxInfo = document.querySelector(".box-info");
const close = document.querySelector(".close-box");
showBox.addEventListener("click", function () {
  boxInfo.style.display = "block";

  close.addEventListener("click", function () {
    boxInfo.style.display = "none";
  });
});

const closeAsk = document.querySelector(".close-ask");
const askBox = document.querySelector(".ask-box");
closeAsk.addEventListener("click", function () {
  askBox.style.display = "none";
  closeAsk.style.display = "none";
});

// ************************************THIS IS FOR SKIN TREATMENTS****************************************

const SkinItems = document.querySelectorAll(".skin-list");
const SkinTreatmentList = document.querySelector(".skin-treatments-list");

SkinItems.forEach((item) => {
  item.addEventListener("mouseover", () => {
    SkinTreatmentList.style.display = "block";
    SkinTreatmentList.style.display = "flex";
    BrowsBeautyList.style.display = "none";
  });

  item.addEventListener("mouseout", () => {
    if (!SkinTreatmentList.contains(event.relatedTarget)) {
      SkinTreatmentList.style.display = "none";
    }
  });
});

SkinTreatmentList.addEventListener("mouseover", () => {
  SkinTreatmentList.style.display = "block";
  SkinTreatmentList.style.display = "flex";
});

SkinTreatmentList.addEventListener("mouseout", () => {
  if (!SkinTreatmentList.contains(event.relatedTarget)) {
    SkinTreatmentList.style.display = "none";
  }
});

SkinTreatmentList.addEventListener("click", (event) => {
  // Handle item selection here
  const selectedItem = event.target;
  if (selectedItem.tagName === "LI") {
    // Do something with the selected item, e.g., log its text
    console.log("Selected item:", selectedItem.textContent);
    // Hide the list after selection
    SkinTreatmentList.style.display = "none";
  }
});

// **************************************THIS IS FOR CONCERNS********************************************

const Concerns = document.querySelectorAll(".concerns");
const ConcernsList = document.querySelector(".concerns-list");
const itemsChanged = document.querySelector(".items-changed");

Concerns.forEach((item) => {
  item.addEventListener("mouseover", () => {
    ConcernsList.style.display = "block";
    BrowsBeautyList.style.display = "none";
  });

  item.addEventListener("mouseout", () => {
    if (!ConcernsList.contains(event.relatedTarget)) {
      ConcernsList.style.display = "block";
    }
  });
});

ConcernsList.addEventListener("mouseover", () => {
  ConcernsList.style.display = "block";
});

ConcernsList.addEventListener("mouseout", () => {
  if (!ConcernsList.contains(event.relatedTarget)) {
    ConcernsList.style.display = "none";
  }
});

ConcernsList.addEventListener("click", (event) => {
  // Handle item selection here
  const selectedItem = event.target;
  if (selectedItem.tagName === "LI") {
    // Do something with the selected item, e.g., log its text
    console.log("Selected item:", selectedItem.textContent);
    // Hide the list after selection
    shopList.style.display = "none";
  }
});

itemsChanged.addEventListener("mouseover", () => {
  ConcernsList.style.display = "none";
});
// **************************************THIS IS FOR BROWS BEAUTY****************************************

const BrowsItems = document.querySelectorAll(".brows-list");
const BrowsBeautyList = document.querySelector(".brows-beauty-list");

BrowsItems.forEach((item) => {
  item.addEventListener("mouseover", () => {
    BrowsBeautyList.style.display = "block";
    ConcernsList.style.display = "none";
  });

  item.addEventListener("mouseout", () => {
    if (!BrowsBeautyList.contains(event.relatedTarget)) {
      BrowsBeautyList.style.display = "block";
    }
  });
});

BrowsBeautyList.addEventListener("mouseover", () => {
  BrowsBeautyList.style.display = "block";
});

BrowsBeautyList.addEventListener("mouseout", () => {
  if (!BrowsBeautyList.contains(event.relatedTarget)) {
    BrowsBeautyList.style.display = "none";
  }
});

BrowsBeautyList.addEventListener("click", (event) => {
  // Handle item selection here
  const selectedItem = event.target;
  if (selectedItem.tagName === "LI") {
    // Do something with the selected item, e.g., log its text
    console.log("Selected item:", selectedItem.textContent);
    // Hide the list after selection
    BrowsBeautyList.style.display = "none";
  }
});

BrowsItems.addEventListener("mouseover", () => {
  ConcernsList.style.display = "none";
});
// **********************************THIS IS FOR SHOP*******************************************

const Shop = document.querySelectorAll(".shop-item");
const shopList = document.querySelector("shop-list");

Shop.forEach((item) => {
  item.addEventListener("mouseover", () => {
    shopList.style.display = "block";
  });

  item.addEventListener("mouseout", () => {
    if (!shopList.contains(event.relatedTarget)) {
      shopList.style.display = "block";
    }
  });
});

shopList.addEventListener("mouseover", () => {
  shopList.style.display = "block";
});

shopList.addEventListener("mouseout", () => {
  if (!shopList.contains(event.relatedTarget)) {
    shopList.style.display = "none";
  }
});

shopList.addEventListener("click", (event) => {
  // Handle item selection here
  const selectedItem = event.target;
  if (selectedItem.tagName === "LI") {
    // Do something with the selected item, e.g., log its text
    console.log("Selected item:", selectedItem.textContent);
    // Hide the list after selection
    shopList.style.display = "none";
  }
});

Shop.addEventListener("mouseover", () => {
  BrowsBeautyList.style.display = "none";
  ConcernsList.style.display = "none";
});

// *********************************ICON MOBILE NAV***************************************
function showSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "flex";
}

function hideSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "none";
}

// **********************SHOW BOX********************
