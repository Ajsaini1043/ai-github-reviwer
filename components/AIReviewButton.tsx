"use client";

import { useState } from "react";

interface AIReviewButtonProps {
  repository: any;
}

export default function AIReviewButton({
  repository,
}: AIReviewButtonProps) {

  const [loading, setLoading] = useState(false);
  const [review, setReview] = useState<any>(null);
async function handleReview() {
  try {
    setLoading(true);

    const response = await fetch("/api/review", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        repository,
      }),
    });

    const data = await response.json();

if (!response.ok) {
  alert(data.error || "AI Review Failed");
  return;
}

const aiReview = JSON.parse(data.review);

setReview(aiReview);
  } catch (error) {
    console.error(error);
    alert("Failed to generate AI review.");
  } finally {
    setLoading(false);
  }

}


  return (
    <div className="mt-8">


      <button
        onClick={handleReview}
        className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg font-semibold"
      >
        {loading ? "Analyzing..." : "Review With AI"}
      </button>



      {review && (

        <div className="mt-8 space-y-5">


          <div className="bg-white text-black p-5 rounded-xl">
            <h2 className="text-2xl font-bold">
              📌 Summary
            </h2>

            <p className="mt-2">
              {review.summary}
            </p>
          </div>



          <div className="bg-white text-black p-5 rounded-xl">
            <h2 className="text-2xl font-bold">
              💪 Strengths
            </h2>

            <ul className="list-disc ml-5 mt-2">
              {review.strengths.map((item: string) => (
                <li key={item}>
                  {item}
                </li>
              ))}
            </ul>
          </div>




          <div className="bg-white text-black p-5 rounded-xl">
            <h2 className="text-2xl font-bold">
              ⚠️ Weaknesses
            </h2>

            <ul className="list-disc ml-5 mt-2">
              {review.weaknesses.map((item: string) => (
                <li key={item}>
                  {item}
                </li>
              ))}
            </ul>
          </div>




          <div className="bg-white text-black p-5 rounded-xl">
            <h2 className="text-2xl font-bold">
              🚀 Suggestions
            </h2>

            <ul className="list-disc ml-5 mt-2">
              {review.suggestions.map((item: string) => (
                <li key={item}>
                  {item}
                </li>
              ))}
            </ul>
          </div>




          <div className="bg-green-600 p-5 rounded-xl">
            <h2 className="text-3xl font-bold">
              ⭐ Rating: {review.rating}/10
            </h2>
          </div>



        </div>

      )}


    </div>
  );
}