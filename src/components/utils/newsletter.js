import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Form, Button } from "react-bootstrap";
import { addNewsletter } from "../../store/actions";
const Newsletter = () => {
  const userData = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const textInput = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(textInput.current.value);
    const value = textInput.current.value;
    dispatch(addNewsletter({ email: value }));
  };

  return (
    <>
      <div className="container">
        <h1>Join our Newsletter</h1>
        <div className="form">
          <Form onSubmit={(e) => handleSubmit(e)} className="mt-4">
            <Form.Group>
              <Form.Control
                type="text"
                placeholder="Example: youremail@gmail.com"
                ref={textInput}
              />
              <Button varaint="primary" type="submit">
                Add me to the list
              </Button>
            </Form.Group>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Newsletter;
