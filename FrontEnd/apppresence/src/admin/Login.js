

import React from "react";
import { Link } from "react-router-dom";

import { Input, FormGroup, Button, Label, Form } from "reactstrap";

export default function LogIn () {
  return ( 

<Form className="form">
  <FormGroup>
    <Label for="exampleEmail">
      Email
    </Label>
    <Input
      id="exampleEmail"
      name="email"
      placeholder="with a placeholder"
      type="email"
    />
  </FormGroup>
  <FormGroup>
    <Label for="examplePassword">
      Password
    </Label>
    <Input
      id="examplePassword"
      name="password"
      placeholder="password placeholder"
      type="password"
    />
  </FormGroup>
  <Button>
    connecter
  </Button><b>  <Link to ="/sign">Signup</Link></b>
  
  
</Form>

   
   )
 }