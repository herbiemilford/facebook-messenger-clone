import React, { useState, useEffect } from "react";
import "./App.css";
import { Button, FormControl, InputLabel, Input } from "@material-ui/core";
import Message from "./Message";

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { username: "sonny", text: "sir" },
    { username: "conner", text: "whazzz up" }
  ]);
  const [username, setUsername] = useState("");
  //useState = variable in REACT
  //useEffect = run code on a condition in REACT

  useEffect(() => {
    setUsername(prompt("Please enter your name"));
  }, []);

  const sendMessage = event => {
    event.preventDefault();
    setMessages([...messages, { username: username, text: input }]);
    setInput("");
  };

  return (
    <div className="App">
      <h1>Hello Wizards!</h1>
      <h2>{username}</h2>

      <form>
        <FormControl>
          <InputLabel htmlFor="my-input">Enter a message...</InputLabel>

          <Input
            value={input}
            onChange={event => setInput(event.target.value)}
          />

          <Button
            disabled={!input}
            variant="contained"
            color="primary"
            type="submit"
            onClick={sendMessage}
          >
            Send Message
          </Button>
        </FormControl>
      </form>

      {messages.map(message => (
        <Message username={username} message={message} />
      ))}
    </div>
  );
}

export default App;
