import { useState } from "react";

const PromptForm = ({ onGenerate, loading }) => {
  const [prompt, setPrompt] = useState("");
  const [error, setError] = useState("");
  const maxLength = 50;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!prompt.trim()) return;

    if (prompt.length > maxLength) {
      setError(`❌ Max ${maxLength} characters allowed`);
      return;
    }

    setError("");
    onGenerate(prompt);
    setPrompt("");
  };

  return (
    <form onSubmit={handleSubmit} className="card prompt-form">

      {/* 🔴 Error message */}
      {error && <p className="error-text">{error}</p>}

      <textarea
        rows="5"
        placeholder="Enter your prompt here..."
        value={prompt}
        onChange={(e) => {
          setPrompt(e.target.value);
          setError("");
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSubmit(e);
          }
        }}
        className="prompt-input"
      />

      {/* 🔥 Character Counter */}
      <p
        className={`small-text counter ${
          prompt.length > maxLength ? "counter-error" : ""
        }`}
      >
        {prompt.length}/{maxLength} characters
      </p>

      <button
        type="submit"
        disabled={
          loading || !prompt.trim() || prompt.length > maxLength
        }
        className="generate-btn"
      >
        {loading ? "Generating..." : "Generate"}
      </button>

    </form>
  );
};

export default PromptForm;