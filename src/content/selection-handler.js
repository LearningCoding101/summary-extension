import { sendMessageToBackground } from '../utils/messaging';

export default function handleSelection(text) {
  sendMessageToBackground({ type: "TEXT_SELECTED", text });
}
