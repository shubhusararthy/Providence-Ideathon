//Questionnaire
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet, Alert } from 'react-native';
import MyButton from '@/components/MyButton';
import { useRouter } from "expo-router";
import Dashboard from '@/components/Dashboard'; 


const questions = [
  {
    question: "What is your age?",
    type: "multiple-choice",
    options: ["6-12", "12-20", "21-30", "31-50", "51-70", ">70"],
  },
  {
    question: "How do you identify?",
    type: "multiple-choice",
    options: ["Male", "Female", "Other", "Prefer not to say"],  
  },
  {
    question: "Where are you based? (Zip Code / City)",
    type: "type",
  },
  {
    question: "What is your profession?",
    type: "type",
  },
  {
    question: "What is your income like?",
    type: "multiple-choice",
    options: ["Nil", "Low", "Below Average", "Average", "Above Average", "High"],  
  },
  {
    question: "Do you have any existing health conditions?",
    type: "multiple-choice",
    options: ["yes", "no"],  
  },
  {
    question: "Got any allergies? (list them if any)",
    type: "type", 
  },
  {
    question: "Are you taking any regular medications? (list them if any)",
    type: "type", 
  },
  {
    question: "Have you had any surgeries or major procedures before?",
    type: "multiple-choice",
    options: ["yes", "no"],  
  },
  {
    question: "What is your current diet?",
    type: "multiple-choice",
    options: ["Vegetarian", "Vegan", "Omnivore", "Other"],  
  },
  {
    question: "How often do you grab fast food?",
    type: "multiple-choice",
    options: ["Daily", "Weekly", "Monthly", "Rarely"],  
  },
  {
    question: "How many meals do you usually have?",
    type: "multiple-choice",
    options: ["1", "2", "3", "More"],  
  },
  {
    question: "What activities do you love? (E.g.: Running, Swimming, Yoga)",
    type: "type",
  },
  {
    question: "How long do you stay active daily? (Minutes per day)",
    type: "type",
  },
  {
    question: "What’s your main goal?",
    type: "multiple-choice",
    options: ["Weight loss", "Weight gain", "Muscle gain", "Stay healthy"],
  },
  {
    question: "Interested in personalized meal plans?",
    type: "multiple-choice",
    options: ["yes", "no"],  
  },
  {
    question: "Would you like health camp alerts nearby?",
    type: "multiple-choice",
    options: ["yes", "no"],  
  },
  {
    question: "What info would help you most?",
    type: "multiple-choice",
    options: ["Nutrition tips", "Fitness advice", "Mental health resources", "Anything else"],  
  },
  {
    question: "How often do you want updates on your progress",
    type: "multiple-choice",
    options: ["Daily", "Weekly", "Monthly"],  
  },
  {
    question: "Any specific dietary preferences or restrictions? (Please list them below)",
    type: "type",
  }
];

const Questionnaire = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [selectedOptions, setSelectedOptions] = useState<Record<number, string | null>>({});
  const [isCompleted, setIsCompleted] = useState(false);

  const handleAnswer = (answer: string | number) => {
    const questionKey = `Q${currentQuestion}`;
    setAnswers({ ...answers, [questionKey]: answer.toString() });

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setIsCompleted(true); // Set completion state
    }
  };

  const handleOptionSelect = (questionIndex: number, option: string) => {
    const newSelectedOptions = { ...selectedOptions };

    if (newSelectedOptions[questionIndex] === option) {
      // Deselect option if already selected
      newSelectedOptions[questionIndex] = null;
    } else {
      // Select option
      newSelectedOptions[questionIndex] = option;
    }

    setSelectedOptions(newSelectedOptions);
    setAnswers({ ...answers, [`Q${questionIndex}`]: newSelectedOptions[questionIndex] || '' });
  };
  const router= useRouter();

  const onSubmit = () =>
    { 
      if (isCompleted) {
        return <Dashboard answers={answers} />; // Render Dashboard when completed
      }
      //router.navigate("/questionnaire")
    }

    

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      {questions.map((questionData, questionIndex) => (
        <View key={questionIndex} style={styles.questionContainer}>
          <Text style={styles.question}>{questionData.question}</Text>

          {/* Multiple-choice Question */}
          {questionData.type === "multiple-choice" && questionData.options && (
            questionData.options.map((option, idx) => (
              <TouchableOpacity
                key={idx}
                style={[
                  styles.optionButton,
                  selectedOptions[questionIndex] === option && styles.selectedOptionButton // Highlight if selected
                ]}
                onPress={() => handleOptionSelect(questionIndex, option)}
              >
                <Text
                  style={[
                    styles.optionText,
                    selectedOptions[questionIndex] === option && styles.selectedOptionText // Change text color if selected
                  ]}
                >
                  {option}
                </Text>
              </TouchableOpacity>
            ))
          )}

          {/* Text Input Question */}
          {questionData.type === "type" && (
            <TextInput
              style={styles.input}
              placeholder="Answer here"
              onSubmitEditing={(e) => setAnswers({ ...answers, [`Q${questionIndex}`]: e.nativeEvent.text })}
            />
          )}
        </View>
      ))}
      <MyButton title={"Submit"} onPress={onSubmit}/>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  questionContainer: {
    marginBottom: 30,
  },
  question: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  optionButton: {
    backgroundColor: '#f5f069',
    padding: 10,
    marginVertical: 5,
    alignItems: 'center',
    borderRadius: 5,
  },
  selectedOptionButton: {
    backgroundColor: '#4CAF50', // Highlight selected option
  },
  optionText: {
    color: 'black',
    fontSize: 16,
  },
  selectedOptionText: {
    color: '#fff', // Highlight text color when selected
  },
  input: {
    borderWidth: 1,
    padding: 10,
    marginVertical: 10,
    width: '100%',
    borderRadius: 5,
    borderColor: '#ccc',
  },
});

export default Questionnaire;