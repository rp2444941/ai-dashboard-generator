import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import PromptForm from "../components/PromptForm";
import ResponseCard from "../components/ResponseCard";
import HistoryList from "../components/HistoryList";
import api from "../services/api";

const Dashboard = () => {
  const [response, setResponse] = useState("");
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchHistory = async () => {
    try {
      const res = await api.get("/history");
      setHistory(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchHistory();
  }, []);

  const handleGenerate = async (prompt) => {
    try {
      setLoading(true);
      setError("");
      const res = await api.post("/generate", { prompt });
      setResponse(res.data.response);
      fetchHistory();
    } catch (err) {
      setError(err.response?.data?.message || "Generation failed");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      await api.delete(`/history/${id}`);
      fetchHistory();
    } catch (err) {
      console.log(err);
    }
  };

  const handleSelect = (item) => {
    setResponse(item.response);
  };

  return (
    <div>
      <Navbar />
      <div style={styles.container}>
        <h1>Dashboard</h1>
        {error && <p style={styles.error}>{error}</p>}
        <PromptForm onGenerate={handleGenerate} loading={loading} />
        <ResponseCard response={response} />
        <HistoryList
          history={history}
          onDelete={handleDelete}
          onSelect={handleSelect}
        />
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "900px",
    margin: "20px auto",
    padding: "20px",
  },
  error: {
    color: "red",
  },
};

export default Dashboard;