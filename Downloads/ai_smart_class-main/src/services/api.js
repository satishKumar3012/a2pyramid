import axios from 'axios';

const BASE_URL = 'http://localhost:5000'; // Change to your backend API URL

// Function to generate exam paper
export const generateExamPaper = async (classNum, subject, totalQuestions) => {
  try {
    const response = await axios.post(`${BASE_URL}/exam/generate_exam`, {
      class_num: classNum,
      subject: subject,
      total_questions: totalQuestions
    });
    return response.data.exam_paper;
  } catch (error) {
    console.error("Error generating exam paper", error);
    throw error;
  }
};

// Function to generate revision notes
export const generateRevisionNotes = async (classNum, subject, topics) => {
  try {
    const response = await axios.post(`${BASE_URL}/revision/generate`, {
      class_num: classNum,
      subject: subject,
      topics: topics
    });
    return response.data.revision_notes;
  } catch (error) {
    console.error("Error generating revision notes", error);
    throw error;
  }
};

// Function to generate quiz
export const generateQuiz = async (classNum, subject, topics) => {
  try {
    const response = await axios.post(`${BASE_URL}/quiz/generate`, {
      class_num: classNum,
      subject: subject,
      topics: topics
    });
    return response.data.quizzes;
  } catch (error) {
    console.error("Error generating quiz", error);
    throw error;
  }
};

// Function to interact with the doubt solver assistant
export const askDoubtSolver = async (question) => {
  try {
    const response = await axios.post(`${BASE_URL}/chat/ask`, { question });
    return response.data.answer;
  } catch (error) {
    console.error("Error asking doubt solver", error);
    throw error;
  }
};
