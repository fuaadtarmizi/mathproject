'use client'

import React, { useState } from 'react';

const Worksheet = () => {
  const [name, setName] = useState('');
  const [answers, setAnswers] = useState(Array(12).fill(''));
  const [score, setScore] = useState(null);
  const [feedback, setFeedback] = useState(Array(12).fill(null));

  // Correct answers for each question in terms of A, B, or C
  const correctAnswers = ['B', 'B', 'C', 'B', 'C', 'A', 'A', 'A', 'C', 'C', 'A', 'B'];

  // Questions and choices
  const questions = [
    {
      question: "17 rounded to the nearest 10",
      options: { A: 10, B: 20, C: 17 }
    },
    {
      question: "75 rounded to the nearest 10",
      options: { A: 70, B: 80, C: 175 }
    },
    {
      question: "64 rounded to the nearest 10",
      options: { A: 64, B: 70, C: 60 }
    },
    {
      question: "98 rounded to the nearest 10",
      options: { A: 80, B: 100, C: 89 }
    },
    {
      question: "94 rounded to the nearest 10",
      options: { A: 100, B: 94, C: 90 }
    },
    {
      question: "445 rounded to the nearest 10",
      options: { A: 450, B: 440, C: 500 }
    },
    {
      question: "45 rounded to the nearest 10",
      options: { A: 50, B: 45, C: 40 }
    },
    {
      question: "19 rounded to the nearest 10",
      options: { A: 20, B: 10, C: 19 }
    },
    {
      question: "0 rounded to the nearest 10",
      options: { A: 10, B: 1, C: 0 }
    },
    {
      question: "199 rounded to the nearest 10",
      options: { A: 190, B: 100, C: 200 }
    },
    {
      question: "165 rounded to the nearest 10",
      options: { A: 160, B: 170, C: 150 }
    },
    {
      question: "999 rounded to the nearest 10",
      options: { A: 990, B: 1000, C: 909 }
    }
  ];

  const handleChange = (index, value) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  const handleReset = () => {
    setAnswers(Array(12).fill(''));
    setScore(null);
    setFeedback(Array(12).fill(null));
  };

  const handleSubmit = () => {
    if (!name) {
      alert('Please enter your name');
      return;
    }

    const newFeedback = answers.map((answer, index) => {
      if (answer === correctAnswers[index]) {
        return 'Correct';
      } else {
        return `Incorrect, the correct answer is ${correctAnswers[index]}`;
      }
    });

    const calculatedScore = newFeedback.filter((f) => f === 'Correct').length;
    setScore(calculatedScore);
    setFeedback(newFeedback);
  };

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold">Rounding Worksheet</h1>
      <img src="https://www.mathinenglish.com/worksheetsimages/grade4/big/Rounding10MultipleP4(2).gif" alt="Worksheet" />

      <div className="mt-5">
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2"
        />
      </div>

      <div className="mt-5 grid grid-cols-1 gap-3">
        {questions.map((q, index) => (
          <div key={index} className="flex flex-col">
            <label>{q.question}</label>
            <div className="flex">
              {Object.keys(q.options).map((key) => (
                <label key={key} className="mr-4">
                  <input
                    type="radio"
                    name={`question-${index}`}
                    value={key}
                    onChange={(e) => handleChange(index, e.target.value)}
                    checked={answers[index] === key}
                  />
                  {`${key}. ${q.options[key]}`}
                </label>
              ))}
            </div>
            {feedback[index] && <span className="text-sm text-red-500">{feedback[index]}</span>}
          </div>
        ))}
      </div>

      <div className="mt-5">
        <button onClick={handleSubmit} className="bg-blue-500 text-white p-2 rounded">
          Submit
        </button>
        <button onClick={handleReset} className="ml-3 bg-gray-500 text-white p-2 rounded">
          Reset
        </button>
      </div>

      {score !== null && (
        <div className="mt-5">
          <h2 className="text-xl">Your score: {score}/12</h2>
        </div>
      )}
    </div>
  );
};

export default Worksheet;
