import { useState } from "react";

const PromptForm = ({ onGenerate, loading }) => {
  const [prompt, setPrompt] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!prompt.trim()) return;
    onGenerate(prompt);
    setPrompt("");
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <textarea
        rows="5"
        placeholder="Enter your prompt here..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        style={styles.textarea}
      />
      <button type="submit" disabled={loading} style={{
    ...styles.button,
    opacity: loading || !prompt.trim() ? 0.7 : 1,
    cursor: loading || !prompt.trim() ? "not-allowed" : "pointer",
  }}>
        {loading ? "Generating..." : "Generate"}
      </button>
    </form>
  );
};

const styles = {
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
  textarea: {
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "16px",
  },
  button: {
    width: "160px",
    padding: "12px",
    background: "#2563eb",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },
};

export default PromptForm;