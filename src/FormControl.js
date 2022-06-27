import CheckboxGroup from './CheckboxGroup';

const FormControl = (props) => {
  const { control, ...rest } = props;

  switch (control) {
    case 'checkbox':
      return <CheckboxGroup {...rest} />

    default:
      return null;
  };
};

export default FormControl;
