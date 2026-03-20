const HistoryList = ({ history, onDelete, onSelect }) => {
  return (
    <div style={styles.card}>
      <h3>History</h3>
      {history.length === 0 ? (
        <p>No history yet.</p>
      ) : (
        history.map((item) => (
          <div key={item._id} style={styles.item}>
            <div style={styles.text} onClick={() => onSelect(item)}>
              <strong>{item.prompt}</strong>
            </div>
            <button onClick={() => onDelete(item._id)}>Delete</button>
          </div>
        ))
      )}
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
  item: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "12px",
    padding: "10px 0",
    borderBottom: "1px solid #eee",
  },
  text: {
    cursor: "pointer",
    flex: 1,
  },
};

export default HistoryList;