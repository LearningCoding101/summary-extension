import React, { useState, useEffect } from "react";
import ContextMenu from "././context-menu";
import { listenForMessages } from "../utils/messaging";

function App() {
  const [selectedText, setSelectedText] = useState("");
  const [showContextMenu, setShowContextMenu] = useState(false);

  useEffect(() => {
    listenForMessages((message) => {
      if (message.type === "TEXT_SELECTED") {
        setSelectedText(message.text);
        setShowContextMenu(true);
      }
    });
  }, []);

  return (
    <div>
      {showContextMenu && (
        <ContextMenu
          text={selectedText}
          onClose={() => setShowContextMenu(false)}
        />
      )}
    </div>
  );
}

export default App;
