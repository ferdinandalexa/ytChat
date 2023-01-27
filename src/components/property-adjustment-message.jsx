import { useAtom } from 'jotai';
import { messageStylesAtom } from '../store/stream-chat-styles';
import debounce from 'just-debounce-it';
import PropertyAdjustment from './property-adjustment';

function PropertyAdjustmentMessage ({ label, property, type, authorType = 'default', ...props }) {
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
    <PropertyAdjustment
      label={label}
      type={type}
      data-property={property}
      defaultValue={messageStyles[authorType][property]}
      onChange={handleChange}
      {...props}
    />
  );
}

export default PropertyAdjustmentMessage;
