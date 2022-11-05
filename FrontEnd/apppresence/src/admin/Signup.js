import React from "react"
import { Input, FormGroup, Button, Label, Form } from "reactstrap";

export default function SignUp () {
    return ( 
<Form className="form">
  
      <FormGroup>
        <Label for="exampleEmail">
          Email
        </Label>
        <Input
          id="exampleEmail"
          name="email"
          placeholder="put your email"
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
          placeholder=" put your password "
          type="password"
        />
      </FormGroup>
    
 
      <FormGroup>
        <Label for="cin">
          CIN
        </Label>
        <Input
          id="cin"
          name="cin"
          placeholder=" put your Cin "
          type="text"
        />
      </FormGroup>
      <FormGroup>
        <Label for="prenom">
          lastname
        </Label>
        <Input
          id="prenom"
          name="prenom"
          placeholder=" put your prenom"
          type="text"
        />
      </FormGroup>
      <FormGroup>
        <Label for="nom">
          firstname
        </Label>
        <Input
          id="nom"
          name="nom"
          placeholder=" put your firstname "
          type="text"
        />
      </FormGroup>

   
  
  
  <Button>
    Sign in
  </Button>
</Form>
  
  )
}