import Browser from "webextension-polyfill";

Browser.runtime.onInstalled.addListener(() => {
  Browser.contextMenus.create({
    id: "text-selection",
    title: "Process selected text",
    contexts: ["selection"],
  });
});

Browser.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "text-selection" && info.selectionText) {
    Browser.scripting.executeScript({
      target: { tabId: tab.id },
      func: handleSelectedtext,
      args: [info.selectionText],
    });
  }
});

function handleSelectedText(selectedText) {
  console.log("Selected text", selectedText);
}
