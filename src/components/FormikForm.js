import { Formik } from "formik";
import "./formikForm.css";

const FormikForm = () => {
  return (
    <div>
      {/* 1. Start off Formik by passing it initial values and onSubmit */}
      <Formik
        initialValues={{
          email: "",
          password: ""
        }}
        onSubmit={data => {
          console.log(data);
        }}
      >
        {/* 2. Pass a function to access props or destructure out the props you want */}
        {({ handleSubmit, handleChange, handleBlur, values }) => {
          // return "test";
          // console.log(values); // to see everything change as I type
          return (
            <form onSubmit={handleSubmit}>
              <div className="input_wrapper">
                <label htmlFor="">Email:</label>
                <input
                  type="text"
                  name={"email"} // if I passed "email2", the value woould create and assign the value to a new property value of email2
                  value={values.email} // e.target.value or the value of the particular input field
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder={"Email..."}
                />
              </div>
              <button type={"submit"}>Submit</button>
            </form>
          );
        }}
      </Formik>
    </div>
  );
};

export default FormikForm;
