import { useAtom } from 'jotai';
import { chatStylesAtom } from '../store/stream-chat-styles';
import debounce from 'just-debounce-it';
import PropertyAdjustment from './property-adjustment';

function PropertyAdjustmentChat ({ title, label, properties, type, ...props }) {
  const [chatStyles, setChatStyles] = useAtom(chatStylesAtom);

  const handleChange = debounce((e) => {
    const { value, dataset: { property } } = e.target;
    setChatStyles((prev) => ({
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
            defaultValue={chatStyles[property]}
            onChange={handleChange}
            {...props}
          />
        )}
      </div>
    </li>
  );
}

export default PropertyAdjustmentChat;
