import { useAtom } from 'jotai';
import { superchatStylesAtom } from '../store/stream-chat-styles';
import debounce from 'just-debounce-it';
import PropertyAdjustment from './property-adjustment';

function PropertyAdjustmentSuperchat ({ label, property, type, ...props }) {
  const [superchatStyles, setSuperchatStyles] = useAtom(superchatStylesAtom);

  const handleChange = debounce((e) => {
    const { value, dataset: { property } } = e.target;
    setSuperchatStyles((prev) => ({
      ...prev,
      [property]: value
    }));
  }, 250);

  return (
    <PropertyAdjustment
      label={label}
      type={type}
      data-property={property}
      defaultValue={superchatStyles[property]}
      onChange={handleChange}
      {...props}
    />
  );
}

export default PropertyAdjustmentSuperchat;
