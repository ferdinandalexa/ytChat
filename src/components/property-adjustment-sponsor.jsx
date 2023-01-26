import { useAtom } from 'jotai';
import { sponsorStylesAtom } from '../store/stream-chat-styles';
import debounce from 'just-debounce-it';
import PropertyAdjustment from './property-adjustment';

function PropertyAdjustmentSponsor ({ title, label, properties, type, ...props }) {
  const [sponsorStyles, setSponsorStyles] = useAtom(sponsorStylesAtom);

  const handleChange = debounce((e) => {
    const { value, dataset: { property } } = e.target;
    setSponsorStyles((prev) => ({
      ...prev,
      [property]: value
    }));
  }, 250);

  return (
    <li className='adjustment'>
      <h3 className='capitalize'>{title}</h3>
      <div>
        {properties.map((property, index) =>
          <PropertyAdjustment
            key={`${title}-${property}`}
            label={label[index]}
            type={type}
            data-property={property}
            defaultValue={sponsorStyles[property]}
            onChange={handleChange}
            {...props}
          />
        )}
      </div>
    </li>
  );
}

export default PropertyAdjustmentSponsor;
