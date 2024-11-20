import { sendMessageToBackground } from "../utils/messaging";
import handleSelection from "./selection-handler";

document.addEventListener("mouseup", () => {
  const selectedText = window.getSelection().toString().trim();
  if (selectedText) {
    handleSelection(selectedText);
  }
});
