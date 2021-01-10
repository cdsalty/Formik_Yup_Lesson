import * as Yup from "yup";
import { Formik } from "formik";
import "./formikForm.css";

const FormikYup_Schema = Yup.object().shape({
  email: Yup.string()
    .email()
    .required(),
  password: Yup.string().required()
});

const FormikForm = () => {
  return (
    <div>
      {/* 1. Start off Formik by passing it initial values and onSubmit */}
      <Formik
        initialValues={{
          email: "",
          password: ""
        }}
        validationSchema={FormikYup_Schema}
        onSubmit={data => {
          console.log(data);
        }}
      >
        {/* 2. Pass a function to access props or destructure out the props you want */}
        {({ handleSubmit, handleChange, handleBlur, values, errors }) => {
          // return "test";
          console.log(errors); // to see everything change as I type
          return (
            <div className="input_container">
              <form onSubmit={handleSubmit}>
                <div className="input_wrapper">
                  <label htmlFor="email">Email: </label>
                  <input
                    type="text"
                    name={"email"} // if I passed "email2", the value woould create and assign the value to a new property value of email2
                    value={values.email} // e.target.value or the value of the particular input field
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder={"Email..."}
                  />
                </div>
                <div className="input_wrapper">
                  <label password="password">Password: </label>
                  <input
                    type="password"
                    name={"password"} // if I passed "email2", the value woould create and assign the value to a new property value of email2
                    autoComplete="on" // to remove the alert in the console about this suggestion
                    value={values.password} // e.target.value or the value of the particular input field
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder={"Password"}
                  />
                </div>
                <button type={"submit"}>Submit</button>
              </form>
            </div>
          );
        }}
      </Formik>
    </div>
  );
};

export default FormikForm;
