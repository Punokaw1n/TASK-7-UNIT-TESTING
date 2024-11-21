import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import ContactForm from "./pages/ContactForm";
import TodoList from "./components/TodoList";
import Card from "./components/Card";

const App: React.FC = () => (
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutMe />} />
      <Route path="/contact" element={<ContactForm />} />
      <Route path="/todolist" element={<TodoList />} />
      <Route path="/experience" element={<Card />} />
    </Routes>
  </Router>
);

export default App;
