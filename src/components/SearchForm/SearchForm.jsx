import { Field, Formik, Form } from "formik";
import s from "./SearchForm.module.css";
import { FaSearch } from "react-icons/fa";

const SearchForm = ({ setSearchParams }) => {
  const initialValue = {
    query: "",
  };
  const handleSubmit = (value) => {
    setSearchParams(value.query);
  };
  return (
    <div className={s.wrapperSearchForm}>
      <Formik initialValues={initialValue} onSubmit={handleSubmit}>
        <Form>
          <Field
            name="query"
            className={s.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          ></Field>
          <button type="submit" className={s.button}>
            <FaSearch size="20" className={s.icon} />
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default SearchForm;
