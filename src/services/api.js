import axios from 'axios';

//const BASE_URL = 'https://ai-smart-class-py-backend.onrender.com'; // Change to your backend API URL

const BASE_URL = import.meta.env.VITE_BACKEND_BASE_URL; // Change to your backend API URL for local development
// Function to generate exam paper
export const generateExamPaper = async (classNum, subject, totalQuestions) => {
  try {
    const response = await axios.post(`${BASE_URL}/api/ai`, {
      class_num: classNum,
      subject: subject,
      total_questions: totalQuestions,
      feature: "exams" 
    }, {withCredentials: true});
    return response.data.exam_paper;
  } catch (error) {
    console.error("Error generating exam paper", error);
    throw error;
  }
};

// Function to generate revision notes
export const generateRevisionNotes = async (classNum, subject, topics) => {
  try {
    const response = await axios.post(`${BASE_URL}/api/ai`, {
      class_num: classNum,
      subject: subject,
      topics: topics,
      feature: "revision" // Specify the feature for revision notes
    }, {withCredentials: true});
    return response.data.revision_notes;
  } catch (error) {
    console.error("Error generating revision notes", error);
    throw error;
  }
};

// Function to generate quiz
export const generateQuiz = async (classNum, subject, topics) => {
  try {
    const response = await axios.post(`${BASE_URL}/api/ai`, {
      class_num: classNum,
      subject: subject,
      topics: topics,
      feature: "quizzes" 
    }, {withCredentials: true});
    return response.data.quizzes;
  } catch (error) {
    console.error("Error generating quiz", error);
    throw error;
  }
};

// Function to interact with the doubt solver assistant
export const askDoubtSolver = async (question) => {
  try {
    const response = await axios.post(`${BASE_URL}/api/ai`, { question, feature: "doubtSolving" }, {withCredentials: true});
    return response.data.answer;
  } catch (error) {
    console.error("Error asking doubt solver", error);
    throw error;
  }
};

export const getUsageStats = async (feature) => {
  try {
    const response = await axios.get(`${BASE_URL}/api/ai/usage/${feature}`, {withCredentials: true});
    return response.data;
  } catch (error) {
    console.error("Error fetching usage stats", error);
    throw error;
  }
}
