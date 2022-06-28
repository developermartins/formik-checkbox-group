import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const TheForm = () => {

  const checkboxOptions = [
    { key: 'Lord Of The Rings', value: 'lordOfTheRings' },
    { key: 'Star Wars', value: 'starWars' },
    { key: 'LazyTown', value: 'lazyTown' },
  ]

  return (
    <div>
      <Formik
        initialValues={{
          toggle: false,
          checked: [],
        }}
        onSubmit={(values) => {
         console.log(values)
      }}
    >
      {({ values }) => (
        <Form>
          {/* 
            This first checkbox will result in a boolean value being stored. Note that the `value` prop
            on the <Field/> is omitted
          */}
          <label>
            <Field type="checkbox" name="toggle" />
            Show The Best List!
          </label>

          {/* 
            Multiple checkboxes with the same name attribute, but different
            value attributes will be considered a "checkbox group". Formik will automagically
            bind the checked values to a single array for your benefit. All the add and remove
            logic will be taken care of for you.
          */}
          {
            values.toggle 
              && 
            <>
              <div id="checkbox-group">Choose The Best</div><div role="group" aria-labelledby="checkbox-group">
                {
                  checkboxOptions.map((option) => (
                    <>
                      <label>
                        <Field type="checkbox" name="checked" value={option.value} />
                        {option.key}
                      </label>
                    </> 
                  ))
                }
              </div>
            </>
          }

          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
    </div>
  );
};

export default TheForm;
