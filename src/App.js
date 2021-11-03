import React from "react";
import { BsKey } from "react-icons/bs";
import {
  FacebookLoginButton,
  GoogleLoginButton
} from "react-social-login-buttons";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

function App() {
  return (
    <div>
      <Form className="w-100 h-100 p-4 mx-auto my-3 mw-350 border border-1 border-secondary rounded-3">
        <h1 className="fw-bold">MyWebSite.com</h1>
        <h2 className="text-center">Welcome!</h2>
        <FormGroup>
          <Label>Email:</Label>
          <Input type="email" placeholder="Email" />
          <Label>Password:</Label>
          <Input type="password" placeholder="Password" />
        </FormGroup>
        <div className="d-grid gap-2">
          <Button className="btn-lg" color="primary">
            <BsKey /> Login
          </Button>
          <span className="text-center fw-bold">
            Continue with your social account
          </span>
          <FacebookLoginButton />
          <GoogleLoginButton />
        </div>
        <div className="text-center">
          <a href="/signup">Sign Up</a>
          <span> | </span>
          <a href="/signup">Forgot Password</a>
        </div>
      </Form>
    </div>
  );
}

export default App;
