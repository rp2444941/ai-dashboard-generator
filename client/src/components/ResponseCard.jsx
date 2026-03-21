import { useState } from "react";

const ResponseCard = ({ response }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (!response) return;

    await navigator.clipboard.writeText(response);

    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="card">
      
      <div className="response-header">
        <h3>Generated Content</h3>

        {response && (
          <button className="copy-btn" onClick={handleCopy}>
            {copied ? "✔ Copied" : "Copy"}
          </button>
        )}
      </div>

      <p className="output">
        {response || "Your generated content will appear here."}
      </p>

    </div>
  );
};

export default ResponseCard;