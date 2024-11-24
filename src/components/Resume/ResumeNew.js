import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { io } from "socket.io-client";
import Particle from "../Particle";

// Créez une connexion au serveur Socket.io (assurez-vous que le backend est à l'adresse correcte)
const socket = io("http://localhost:5000"); // Remplacez par l'URL de votre serveur backend

function Consulting() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState("User");

  useEffect(() => {
    // Écoutez les messages entrants du serveur
    socket.on("receive_message", (data) => {
      setMessages((prevMessages) => [...prevMessages, data]);
    });

    // Nettoyage de l'écouteur lors de la déconnexion du composant
    return () => {
      socket.off("receive_message");
    };
  }, []);

  // Fonction pour envoyer un message
  const sendMessage = () => {
    if (message.trim() !== "") {
      const messageData = { username, message };
      socket.emit("send_message", messageData); // Envoie au serveur
      setMessages((prevMessages) => [...prevMessages, messageData]); // Ajoute localement
      setMessage(""); // Réinitialise le champ de message
    }
  };

  return (
    <div>
      <Container fluid className="consulting-section">
        <Particle />
        <Row className="justify-content-center mt-4">
          <Col md={8}>
            <h2 className="text-center">Consulting Chat Room</h2>
            <div
              className="chat-box"
              style={{
                height: "400px",
                overflowY: "scroll",
                border: "1px solid #ccc",
                padding: "10px",
                borderRadius: "8px",
                backgroundColor: "#f9f9f9",
              }}
            >
              {messages.map((msg, index) => (
                <div key={index} style={{ marginBottom: "10px" }}>
                  <strong>{msg.username}:</strong> {msg.message}
                </div>
              ))}
            </div>
            <Form className="mt-3" onSubmit={(e) => e.preventDefault()}>
              <Form.Control
                type="text"
                placeholder="Enter your message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && sendMessage()}
              />
              <Button className="mt-2" variant="primary" onClick={sendMessage}>
                Send
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Consulting;
