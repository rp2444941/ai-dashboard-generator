const HistoryList = ({ history, onDelete, onSelect }) => {
  return (
    <div className="card">
      <h3 style={{ marginBottom: "10px" }}>History</h3>

      {history.length === 0 ? (
        <p className="small-text">No history yet.</p>
      ) : (
        history.map((item) => (
          <div key={item._id} className="history-item">
            
            <div
              className="history-text"
              onClick={() => onSelect(item)}
              title="Click to view response"
            >
              {item.prompt}
            </div>

            <button
              className="delete-btn"
              onClick={() => onDelete(item._id)}
            >
              delete
            </button>

          </div>
        ))
      )}
    </div>
  );
};

export default HistoryList;