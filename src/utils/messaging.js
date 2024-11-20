import Browser from "webextension-polyfill";

export function sendMessageToBackground(message) {
    Browser.runtime.sendMessage(message, (response) => {
      if (chrome.runtime.lastError) {
        console.error("Error sending message:", chrome.runtime.lastError);
      }
    });
  }
  
  export function listenForMessages(callback) {
    Browser.runtime.onMessage.addListener((message, sender, sendResponse) => {
      callback(message, sender, sendResponse);
    });
  }
  