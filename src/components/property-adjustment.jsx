import Checkbox from './inputs/checkbox';
import TextField from './inputs/textfield';

const components = {
  checkbox: Checkbox,
  text: TextField,
  number: TextField
};

function PropertyAdjustment ({ title, label, property, type, ...props }) {
  const Component = components[type];

  return (

    <Component
      type={type}
      label={label}
      data-property={property}
      {...props}
    />

  );
}

export default PropertyAdjustment;
