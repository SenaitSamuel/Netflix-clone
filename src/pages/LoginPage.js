import React from "react";
import Login from "../Components/Login/Login";
import Jumbotron from "../Components/Jumbotron/Jumbotron";
import Form from "../Components/Form/Form";
import Footer from "../Components/Footer/Footer";
import Accordion from "../Components/Accordion/Accordion";

function LoginPage() {
  return (
    <div>
      <Login />
      <Jumbotron />
      <Accordion />

      <Footer />
    </div>
  );
}

export default LoginPage;
