import { useAtom } from 'jotai';
import { chatStylesAtom } from '../store/stream-chat-styles';
import debounce from 'just-debounce-it';
import PropertyAdjustment from './property-adjustment';

function PropertyAdjustmentChat ({ label, property, type, ...props }) {
  const [chatStyles, setChatStyles] = useAtom(chatStylesAtom);

  const handleChange = debounce((e) => {
    const { value, dataset: { property } } = e.target;
    setChatStyles((prev) => ({
      ...prev,
      [property]: value
    }));
  }, 250);

  return (
    <PropertyAdjustment
      label={label}
      type={type}
      data-property={property}
      defaultValue={chatStyles[property]}
      onChange={handleChange}
      {...props}
    />
  );
}

export default PropertyAdjustmentChat;
