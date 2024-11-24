import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

// Define your Hume API URL and access token (in production, you'd want to retrieve it securely)
const HUME_API_URL = "https://api.hume.ai/v0/evi/chats/470a49f6-1dec-4afe-8b61-035d3b2d63b0/audio";
const ACCESS_TOKEN = "YMAnXi8r3Nul3ySqrV6pzToowooU8smBKNBoXz0kFkehEwYoG";  // Replace with the token you obtained server-side

function Project(props) {
  const [emotion, setEmotion] = useState(null);
  const [error, setError] = useState(null);

  // Function to analyze text for emotion
  const analyzeEmotion = async (text) => {
    try {
      const response = await fetch(HUME_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${ACCESS_TOKEN}`,  // Use the token here
        },
        body: JSON.stringify({ text }),
      });

      const data = await response.json();

      if (data && data.emotion) {
        setEmotion(data.emotion);
      } else {
        setEmotion(null);
      }
    } catch (error) {
      setError("Error analyzing emotion: " + error.message);
    }
  };

  useEffect(() => {
    const textToAnalyze = "I'm feeling great today!";
    analyzeEmotion(textToAnalyze); // Run the analysis when the component mounts
  }, []);

  return (
    <div>
      <h1>Hume AI Emotion Analysis</h1>
      <p>Emotion Analysis Result:</p>
      {error && <p style={{ color: "red" }}>{error}</p>} {/* Display error if any */}
      <pre>{JSON.stringify(emotion, null, 2)}</pre>

      <div>
        <Button variant="primary" href={props.ghLink} target="_blank">
          <BsGithub /> &nbsp;
          {props.isBlog ? "Blog" : "GitHub"}
        </Button>
        {"\n"}
        {"\n"}

        {/* If the component contains Demo link and it's not a Blog */}
        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp; Demo
          </Button>
        )}
      </div>
    </div>
  );
}

export default Project;
