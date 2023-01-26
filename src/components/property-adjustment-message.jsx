import { useAtom } from 'jotai';
import { messageStylesAtom } from '../store/stream-chat-styles';
import debounce from 'just-debounce-it';
import PropertyAdjustment from './property-adjustment';

function PropertyAdjustmentMessage ({ title, label, properties, type, authorType = 'default', ...props }) {
  const [messageStyles, setMessageStyles] = useAtom(messageStylesAtom);

  const handleChange = debounce((e) => {
    const { value, dataset: { property } } = e.target;
    setMessageStyles((prev) => ({
      ...prev,
      [authorType]: {
        ...prev[authorType],
        [property]: value
      }
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
            defaultValue={messageStyles[authorType][property]}
            onChange={handleChange}
            {...props}
          />
        )}
      </div>
    </li>
  );
}

export default PropertyAdjustmentMessage;
