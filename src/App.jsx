import FormInput from "./components/FormInput";
import"./app.scss"
import { useState } from "react";
function App() {
  const [values, setvalues] = useState(
    { username:"",
      email:"",
      birthday:"",
      password: "",
      comfirmPassword:"",
    }
  );

  const inputs = [
    {
      id: 1,
      name:"username",
      type:"text",
      placeholder:"Username",
      errorMessage:"Username should be 3-16 character and shouldn't include any special character",
      label:"Username",
      pattern:"^[A-Za-z0-9]{3,16}$",
      required:"true"
    },
    {
      id: 2,
      name:"email",
      type:"email",
      placeholder:"Email",
      errorMessage:"It should be a valid email",
      label:"Email",
      required:"true"
    },
    {
      id: 3,
      name:"birthday",
      type:"date",
      placeholder:"Birthday",
      errorMessage:"",
      label:"Birthday"
    },
    {
      id: 4,
      name:"password",
      type:"password",
      placeholder:"Password",
      errorMessage:"Password should be 8-20 characters and include at less 1 letter, 1 number and 1 special character ",
      label:"Password",
      pattern:"^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,20}",
      required:"true"
    },
    {
      id: 5,
      name:"comfirmPassword",
      type:"password",
      placeholder:"Comfirm Password",
      errorMessage:"password dont match",
      label:"Comfirm Password",
      pattern: values.password,
      required:"true"
    },

  ]

  console.log(values)
 
  const onChange = (e) => {
    setvalues({ ...values, [e.target.name]: e.target.value})

  }

  return (
    <div className="app" >
        <form action="" >
          <h1>Validate Form</h1>
          {inputs.map((input) => (
            <FormInput  key = {input.id} {...input} 
                        value={values[input.name]}
                        onChange = {onChange}/>
          ))}
          <button>Submit</button>
          
        </form>
   </div>
  );
}

export default App;
