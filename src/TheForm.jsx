import React from 'react';
import { Formik, Form } from 'formik';
import FormControl from './FormControl';
import * as Yup from 'yup';

const TheForm = () => {

  const checkboxOptions = [
    { key: 'Select an option', value: '' },
    { key: 'Lord Of The Rings', value: 'lordOfTheRings' },
    { key: 'Star Wars', value: 'starWars' },
    { key: 'LazyTown', value: 'lazyTown' },
  ]

  const initialValues = {
    checkboxOptions: [],
  }

  const validationSchema = Yup.object({
    checkboxOptions: Yup.array().required('Required')
  });

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {formik => (
          <Form>
            <FormControl 
              control='checkbox'
              label='Checkbox topics'
              name='checkboxOption'
              options={checkboxOptions}
            />
            <button type='submit'>Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default TheForm;
