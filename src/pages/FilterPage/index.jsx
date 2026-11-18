import {Formik} from 'formik';
import {useEffect, useState} from 'react';
import filterPageSchema from '../../utils/validationSchemas/FilterPageSchema';

function FilterPage (props) {
  const [filterConfig, setFilterConfig] = useState({
    title: 'unknown',
    year: 2000,
    country: 'unknown',
    director: 'unknown',
    genres: [],
    ageRating: 'unknown',
    duration: 100,
    actors: [],
  });

  useEffect(() => {
    setFilterConfig(prevstate => {
      console.log(prevstate);
      return {prevstate, ...props};
    });
  }, []);

  const initialFormikState = {
    // Продумати фільтрацію
    title: '',
    year: '',
    country: '',
    director: '',
    genres: '',
    ageRating: '',
    duration: '',
    actors: '',
  };
  return (
    <Formik
      initialValues={initialFormikState}
      validationSchema={filterPageSchema}
    >
      <Form></Form>
    </Formik>
  );
}

export default FilterPage;
