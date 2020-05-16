import React from 'react';
import '../styles/home.css';
import {Form, FormGroup, Input} from 'reactstrap';

function Home(props){
  return(
  <div className="home-body">
  <h1>Your favorite posts <br/> on custom gear</h1>
    <Form className="search-bar">
      <FormGroup>
        <Input bsSize="lg" type="url" name="link" id="postLink" placeholder="Post or tweet link" />
      </FormGroup>
    </Form>
</div>
  );
}

export default Home;
