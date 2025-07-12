import { useState, useEffect } from "react";
import styled from "styled-components";
import { generateQuiz, getUsageStats } from "../services/api";
import AnimatedNumber from "../components/AnimatedNumber";

// Styled Components
const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 1rem;
  font-family: "Segoe UI", sans-serif;
  color: #222;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 2rem;
  font-size: 2rem;
  color: #333;
`;

const InputGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 1.5rem;
  justify-content: center;
`;

const Input = styled.input`
  flex: 1 1 200px;
  padding: 0.75rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  min-width: 150px;

  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;

const Button = styled.button`
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const QuizSection = styled.div`
  margin-top: 2rem;
`;

const QuizTitle = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 1rem;
  border-bottom: 2px solid #007bff;
  display: inline-block;
`;

const QuizCard = styled.div`
  background-color: #f8f9fa;
  border: 1px solid #ddd;
  border-radius: 12px;
  padding: 1rem;
  margin-bottom: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  white-space: pre-wrap;
  font-family: "Courier New", Courier, monospace;
`;

const UsageBox = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background: linear-gradient(90deg, #e3f0ff 0%, #f8faff 100%);
  border: 1.5px solid #007bff33;
  border-radius: 12px;
  padding: 0.75rem 2rem;
  margin-bottom: 1.5rem;
  font-weight: 600;
  font-size: 1.15rem;
  color: #1a237e;
  box-shadow: 0 2px 8px rgba(0, 123, 255, 0.07);
  letter-spacing: 0.5px;
  min-width: 220px;
`;

const AnimatedNumberBox = styled.span`
  display: inline-block;
  background: linear-gradient(90deg, #e3f0ff 0%, #f8faff 100%);
  border: 1.5px solid #007bff33;
  border-radius: 8px;
  padding: 0.3em 1em;
  margin: 0 0.3em;
  font-weight: 700;
  font-size: 1.15em;
  color: inherit;
  box-shadow: 0 2px 8px rgba(0, 123, 255, 0.07);
  letter-spacing: 0.5px;
`;

const SmartQuizGenerator = () => {
  const [classNum, setClassNum] = useState("");
  const [subject, setSubject] = useState("");
  const [topics, setTopics] = useState("");
  const [quizData, setQuizData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [usage, setUsage] = useState({ used: 0, limit: 0 });

  const handleGenerateQuiz = async () => {
    setLoading(true);
    try {
      const quizzes = await generateQuiz(classNum, subject, topics.split(","));
      setQuizData(quizzes);
      fetchUsageStats();
    } catch (error) {
      setQuizData(["❌ Error generating quiz. Please try again."], error);
    } finally {
      setLoading(false);
    }
  };

  const fetchUsageStats = async () => {
    try {
      const response = await getUsageStats("quizzes");
      if (response) {
        setUsage({ used: response.used || 0, limit: response.limit || 0 });
      }
    } catch (error) {
      console.error("Error fetching usage stats:", error);
      setUsage({ used: 0, limit: 0 });
    }
  };

  useEffect(() => {
    fetchUsageStats();
  }, []);

  return (
    <Container>
      <Title>🎯 Smart Quiz Generator</Title>

      <UsageBox
        style={{
          background: "none",
          border: "none",
          boxShadow: "none",
          padding: 0,
          marginBottom: "1.5rem",
        }}
      >
        Usage:{" "}
        <AnimatedNumberBox>
          <AnimatedNumber
            value={usage.used}
            color={usage.used >= usage.limit ? "#d32f2f" : "#007bff"}
          />
        </AnimatedNumberBox>
        {" / "}
        <AnimatedNumberBox>
          <AnimatedNumber value={usage.limit} color="#007bff" />
        </AnimatedNumberBox>
      </UsageBox>

      <InputGroup>
        <Input
          type="number"
          placeholder="Class Number"
          value={classNum}
          onChange={(e) => setClassNum(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Topics (comma separated)"
          value={topics}
          onChange={(e) => setTopics(e.target.value)}
        />
      </InputGroup>

      <div style={{ textAlign: "center", marginBottom: "2rem" }}>
        <Button
          disabled={usage.used >= usage.limit || loading}
          onClick={handleGenerateQuiz}
        >
          {loading ? "Generating..." : "Generate Quiz"}
        </Button>
      </div>

      <QuizSection>
        {quizData.length > 0 && <QuizTitle>Generated Quiz:</QuizTitle>}
        {quizData.map((quiz, idx) => (
          <QuizCard key={idx}>{quiz}</QuizCard>
        ))}
      </QuizSection>
    </Container>
  );
};

export default SmartQuizGenerator;
