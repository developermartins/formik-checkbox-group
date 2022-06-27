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
    
  }

  return (
    <div>Form</div>
  );
};

export default TheForm;
