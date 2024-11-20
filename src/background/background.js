import Browser from "webextension-polyfill";
import { fetchDataForText } from "../api/api-service";

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
      func: handleSelectedText,
      args: [info.selectionText],
    });
  }
});

async function handleSelectedText(selectedText) {
  console.log(await fetchDataForText(selectedText));
}
