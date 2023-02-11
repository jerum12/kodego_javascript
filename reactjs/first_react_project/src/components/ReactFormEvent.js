import React, { useState } from 'react';
//import { callApi, submitForm } from './ExportMultiple';

export default function ReactFormEvent() {
  //   const clickHere = (argu, e) => {
  //     console.log(argu);
  //     console.log(e);
  //   };
  // value, function para ma set ung value
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    conf_password: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    setFormData({
      ...formData,
      [name]: value,
    });

    console.log(name, value);
  };

  const validate = () => {
    let objError = {};
    //let regExp = '';
    if (formData.username === '') {
      objError.username = 'Username is mandatory!';
    }

    if (formData.email === '') {
      objError.email = 'Email is mandatory!';
    }
    // else if(regExp.match(formData.email)){
    //   objError.email = 'Email is invalid format!';
    // }

    if (formData.password === '') {
      objError.password = 'Password is mandatory!';
    }

    if (formData.conf_password === '') {
      objError.conf_password = 'Confirm Password is mandatory!';
    }

    setErrors(objError);

    return Object.keys(objError).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (validate()) {
      //call api
      console.log('Call API ', formData);
      //callApi();
      //submitForm();
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username</label>
          <input type="text" name="username" value={formData.username} onChange={handleChange} />
          {errors.username && <p>{errors.username}</p>}
        </div>
        <div>
          <label>Email</label>
          <input type="text" name="email" value={formData.email} onChange={handleChange} />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div>
          <label>Password</label>
          <input type="text" name="password" value={formData.password} onChange={handleChange} />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <div>
          <label>Confirm Password</label>
          <input
            type="text"
            name="conf_password"
            value={formData.conf_password}
            onChange={handleChange}
          />
          {errors.conf_password && <p>{errors.conf_password}</p>}
        </div>

        {/* <p>Ito ang input Mo: {JSON.stringify(formData)}</p> */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
