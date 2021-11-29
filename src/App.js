import "./App.css";
import { Question } from "./components/Question/Question";
import * as api from "./api/index.js";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Start } from "./components/Start";
import { Results } from "./components/Results/Results";
import { Form } from "./components/Form";

function App() {
  // set states
  const [questions, setQuestions] = useState([]);
  const [showEditForm, setShowEditForm] = useState(false);

  // get all questions from database
  useEffect(() => {
    const getQuestions = async () => {
      const questions = await api.fetchAllQuestions();
      setQuestions(questions);
    };
    getQuestions();
  }, []);

  const handleSubmit = async (id, update) => {
    const ID = questions[id]._id;
    const updatedQuestion = await api.updateQuestion(ID, update);
    const newQuestions = questions.map((question) =>
      question._id === updatedQuestion._id ? updatedQuestion : question
    );
    setQuestions(newQuestions);
  };

  const resetDatabase = async () => {
    const newQuestions = [];

    for (const question of questions) {
      const updatedQuestion = await api.updateQuestion(question._id, {
        selected: null,
      });
      newQuestions.push(updatedQuestion);
    }

    setQuestions(newQuestions);
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path={"/questions/:id"}
            element={
              questions.length > 0 && (
                <div>
                  <div className="position-absolute top-0 end-0">
                    <button
                      onClick={() => {
                        setShowEditForm(!showEditForm);
                      }}
                      className="btn btn-link"
                    >
                      <span className="material-icons">edit</span>
                    </button>
                    <button className="btn btn-link">
                      <span className="material-icons">delete_outline</span>
                    </button>
                  </div>
                  {showEditForm ? (
                    <Form questions={questions} handleSubmit={handleSubmit} />
                  ) : (
                    <Question
                      questions={questions}
                      handleSubmit={handleSubmit}
                    />
                  )}
                </div>
              )
            }
          />
          <Route path="/results" element={<Results questions={questions} />} />
          <Route path="/*" element={<Start resetDatabase={resetDatabase} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
