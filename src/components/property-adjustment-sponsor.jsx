import { useAtom } from 'jotai';
import { sponsorStylesAtom } from '../store/stream-chat-styles';
import debounce from 'just-debounce-it';
import PropertyAdjustment from './property-adjustment';

function PropertyAdjustmentSponsor ({ label, property, type, ...props }) {
  const [sponsorStyles, setSponsorStyles] = useAtom(sponsorStylesAtom);

  const handleChange = debounce((e) => {
    const { value, dataset: { property } } = e.target;
    setSponsorStyles((prev) => ({
      ...prev,
      [property]: value
    }));
  }, 250);

  return (
    <PropertyAdjustment
      label={label}
      type={type}
      data-property={property}
      defaultValue={sponsorStyles[property]}
      onChange={handleChange}
      {...props}
    />

  );
}

export default PropertyAdjustmentSponsor;
