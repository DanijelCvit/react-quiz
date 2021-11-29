import "./App.css";
import { Question } from "./components/Question/Question";
import * as api from "./api/index.js";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Start } from "./components/Start";
import { Results } from "./components/Results/Results";
import { Form } from "./components/Form";
import { Delete } from "./components/Delete";

function App() {
  // Set states
  const [questions, setQuestions] = useState([]);
  const [showForm, setShowForm] = useState({ show: false, action: "edit" });

  // Get all questions from database
  useEffect(() => {
    const getQuestions = async () => {
      const questions = await api.fetchAllQuestions();
      setQuestions(questions);
    };
    getQuestions();
  }, []);

  // Called when Editing a question or submitting an answer
  const handleSubmit = async (id, update) => {
    const ID = questions[id]._id;
    const updatedQuestion = await api.updateQuestion(ID, update);
    const newQuestions = questions.map((question) =>
      question._id === updatedQuestion._id ? updatedQuestion : question
    );
    setQuestions(newQuestions);
  };

  // Resets 'selected' answer attribute in the database at start of each quiz
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

  // Called when deleting a question
  const handleDelete = async (id) => {
    const ID = questions[id]._id;
    await api.deleteQuestion(ID);
    const newQuestions = questions.filter((question) => question._id !== ID);
    setQuestions(newQuestions);
  };

  // Called when creating a new question
  const handleCreate = async (question) => {
    const newQuestion = await api.createQuestion(question);

    const newQuestions = [...questions, newQuestion];
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
                        setShowForm({ show: true, action: "create" });
                      }}
                      className="btn btn-link"
                    >
                      <span className="material-icons">add</span>
                    </button>
                    <button
                      onClick={() => {
                        setShowForm({ show: true, action: "edit" });
                      }}
                      className="btn btn-link"
                    >
                      <span className="material-icons">edit</span>
                    </button>
                    {
                      <Delete
                        handleDelete={handleDelete}
                        questions={questions}
                        disabled={showForm.show}
                      />
                    }
                  </div>
                  {showForm.show ? (
                    <Form
                      questions={questions}
                      handleAction={
                        showForm.action === "edit" ? handleSubmit : handleCreate
                      }
                      setShowForm={setShowForm}
                      showForm={showForm}
                    />
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
