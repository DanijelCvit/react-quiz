import "./App.css";
import { Question } from "./components/Question/Question";
import * as api from "./api/index.js";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Start } from "./components/Start";
import { Results } from "./components/Results/Results";

function App() {
  // set states
  const [questions, setQuestions] = useState([]);

  // get all questions from database
  useEffect(() => {
    const getQuestions = async () => {
      const questions = await api.fetchAllQuestions();
      setQuestions(questions);
    };
    getQuestions();
  }, []);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path={"/questions/:id"}
            element={questions.length > 0 && <Question questions={questions} />}
          />
          <Route path="/results" element={<Results />} />
          <Route path="/*" element={<Start />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
