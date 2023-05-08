import React, { useState, useContext, Fragment } from "react";
import { AuthContext } from "../../Context/AuthContext";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import { useForm, FormProvider } from "react-hook-form";
import FormInput from "./inputController/index";
import { ErrorMessage } from "@hookform/error-message";
import _ from "lodash/fp";
import { ThemeProvider } from "@material-ui/core";
import theme from "../../theme";
import { MuiPickersUtilsProvider, DatePicker } from "@material-ui/pickers";

import "./SCSS/Subscribe.scss";

function Subscribe(props) {
  const userAuth = useContext(AuthContext);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const [birthday, setBirthday] = useState(Date());

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const methods = useForm({
    criteriaMode: "all",
  });

  const { register, handleSubmit, errors } = methods;

  const onSubmit = (data) => {
    userAuth.register(
      data.firstName,
      data.lastName,
      data.birthday,
      data.email,
      data.username,
      data.password
    );
    setFirstName("");
    setLastName("");
    setBirthday("");
    setEmail("");
    setUsername("");
    setPassword("");
  };

  return (
    <dialog className='subscribe'>
      <form className='form-container' onSubmit={handleSubmit(onSubmit)}>
        <div className='grid-container'>
          <ThemeProvider theme={theme}>
            <FormProvider {...methods}>
              <div className='form-control first-name'>
                <h4>First Name:</h4>
                <FormInput
                  autoFocus={true}
                  name='firstName'
                  type='text'
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  inputRef={register({
                    required: "This input is required",
                    pattern: {
                      value: /^[A-Za-z]+$/,
                      message: "Thats not your name!",
                    },
                  })}
                />
                <ErrorMessage
                  errors={errors}
                  name='firstName'
                  render={({ messages }) => {
                    return messages
                      ? _.entries(messages).map(([type, message]) => (
                          <h5 key={type}>{message}</h5>
                        ))
                      : null;
                  }}
                />
              </div>

              <div className='form-control last-name'>
                <h4>Last Name:</h4>
                <FormInput
                  name='lastName'
                  type='text'
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  inputRef={register({
                    required: "This input is required",
                    pattern: {
                      value: /^[A-Za-z]+$/,
                      message: "Thats not your name!",
                    },
                  })}
                />
                <ErrorMessage
                  errors={errors}
                  name='lastName'
                  render={({ messages }) => {
                    return messages
                      ? _.entries(messages).map(([type, message]) => (
                          <h5 key={type}>{message}</h5>
                        ))
                      : null;
                  }}
                />
              </div>

              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Fragment>
                  <div className='form-control birthday'>
                    <h4>Birthday:</h4>
                    <DatePicker
                      disableFuture
                      helperText={""}
                      name='birthday'
                      variant='dialog'
                      margin='none'
                      id='date-picker-dialog'
                      openTo='year'
                      format='MM/dd/yyyy'
                      views={["year", "month", "date"]}
                      value={birthday}
                      onChange={setBirthday}
                      inputRef={register}
                    />
                  </div>
                </Fragment>
              </MuiPickersUtilsProvider>

              <div className='form-control email'>
                <h4>Email:</h4>
                <FormInput
                  name='email'
                  type='text'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  inputRef={register({
                    required: "This input is required",
                    pattern: {
                      value: /^\S+@\S+$/,
                      message: "Must enter valid email",
                    },
                  })}
                />
                <ErrorMessage
                  errors={errors}
                  name='email'
                  render={({ messages }) => {
                    return messages
                      ? _.entries(messages).map(([type, message]) => (
                          <h5 key={type}>{message}</h5>
                        ))
                      : null;
                  }}
                />
              </div>

              <div className='form-control username'>
                <h4>Username:</h4>
                <FormInput
                  name='username'
                  type='text'
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  inputRef={register({
                    required: "This input is required",
                    minLength: {
                      value: 3,
                      message: "Must be more than 3 characters",
                    },
                    maxLength: {
                      value: 20,
                      message: "Must be less that 20 characters",
                    },
                  })}
                />
                <ErrorMessage
                  errors={errors}
                  name='username'
                  render={({ messages }) => {
                    return messages
                      ? _.entries(messages).map(([type, message]) => (
                          <h5 key={type}>{message}</h5>
                        ))
                      : null;
                  }}
                />
              </div>

              <div className='form-control password'>
                <h4>Password:</h4>
                <FormInput
                  name='password'
                  type='password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  inputRef={register({
                    required: "This input is required",
                    pattern: {
                      value:
                        /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/,
                      message:
                        "Must contain 1- uppercase, lowercase, number, special character",
                    },
                    minLength: {
                      value: 6,
                      message: "Must be more than 6 characters",
                    },
                    maxLength: {
                      value: 20,
                      message: "Must be less that 20 characters",
                    },
                  })}
                />
                <ErrorMessage
                  errors={errors}
                  name='password'
                  render={({ messages }) => {
                    return messages
                      ? _.entries(messages).map(([type, message]) => (
                          <h5 key={type}>{message}</h5>
                        ))
                      : null;
                  }}
                />
              </div>
            </FormProvider>
          </ThemeProvider>
          <button type='submit' className='submit-btn'>
            Head to Checkout
          </button>
        </div>
      </form>
    </dialog>
  );
}

export default Subscribe;
