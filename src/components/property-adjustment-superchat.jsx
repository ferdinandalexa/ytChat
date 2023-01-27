import { useAtom } from 'jotai';
import { superchatStylesAtom } from '../store/stream-chat-styles';
import debounce from 'just-debounce-it';
import PropertyAdjustment from './property-adjustment';

function PropertyAdjustmentSuperchat ({ title, label, properties, type, ...props }) {
  const [superchatStyles, setSuperchatStyles] = useAtom(superchatStylesAtom);

  const handleChange = debounce((e) => {
    const { value, dataset: { property } } = e.target;
    setSuperchatStyles((prev) => ({
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
            defaultValue={superchatStyles[property]}
            onChange={handleChange}
            {...props}
          />
        )}
      </div>
    </li>
  );
}

export default PropertyAdjustmentSuperchat;
