const url = `http://localhost:5000/questions`;

export const fetchAllQuestions = async () => {
  const res = await fetch(url);
  const data = await res.json();
  return data;
};

export const fetchQuestion = async (id) => {
  const res = await fetch(`${url}/${id}`);
  const data = await res.json();
  return data;
};

export const updateQuestion = async (id, update) => {
  const res = await fetch(`${url}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(update),
  });

  const data = await res.json();
  return data;
};
export const deleteQuestion = async (id) => {
  const res = await fetch(`${url}/${id}`, {
    method: "DELETE",
  });
  const data = await res.json();
  return data;
};

export const createQuestion = async (question) => {
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(question),
  });

  const data = await res.json();
  return data;
};
