import Title from "@/Components/Title";
import React from "react";

const TutorialPage = async ({ params }) => {
  //   const { technology, topic, pages_no, subject } = await params;

  const { slug } = await params;

  const [technology, topic, , pages_no, subject] = slug || [];
  //   console.log(result);
  return (
    <div>
      <Title>{technology} tutorials</Title>
      <h2>{topic}</h2> <hr />
      <div className="flex justify-between">
        <h3 className="font-bold">{subject}</h3>
        <p>page No :{pages_no} </p>
      </div>
      This is tutorials page
    </div>
  );
};

export default TutorialPage;
