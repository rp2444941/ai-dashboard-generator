const ResponseCard = ({ response }) => {
  const handleCopy = async () => {
    if (!response) return;
    await navigator.clipboard.writeText(response);
    alert("Copied to clipboard");
  };

  return (
    <div style={styles.card}>
      <div style={styles.header}>
        <h3>Generated Content</h3>
        {response && <button onClick={handleCopy}>Copy</button>}
      </div>
      <p>{response || "Your generated content will appear here."}</p>
    </div>
  );
};

const styles = {
  card: {
    marginTop: "20px",
    padding: "16px",
    background: "#fff",
    borderRadius: "10px",
    border: "1px solid #e5e7eb",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
};

export default ResponseCard;