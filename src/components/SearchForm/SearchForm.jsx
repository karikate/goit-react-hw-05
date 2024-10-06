import { Field, Formik, Form } from "formik";

const SearchForm = ({ setSearchParams }) => {
  const initialValue = {
    query: "",
  };
  const handleSubmit = (value) => {
    setSearchParams(value.query);
  };
  return (
    <div>
      <Formik initialValues={initialValue} onSubmit={handleSubmit}>
        <Form>
          <Field
            name="query"
            // className={s.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          ></Field>
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export default SearchForm;
