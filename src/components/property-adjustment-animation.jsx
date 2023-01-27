import { useAtom } from 'jotai';
import { animationStylesAtom } from '../store/stream-chat-styles';
import debounce from 'just-debounce-it';
import PropertyAdjustment from './property-adjustment';

function PropertyAdjustmentAnimation ({ label, property, type, animate, ...props }) {
  const [animationStyles, setAnimationStyles] = useAtom(animationStylesAtom);

  const handleChange = debounce((e) => {
    const { value, dataset: { property } } = e.target;
    setAnimationStyles((prev) => ({
      ...prev,
      [animate]: {
        ...prev[animate],
        [property]: value
      }
    }));
  }, 250);

  return (
    <PropertyAdjustment
      label={label}
      type={type}
      data-property={property}
      defaultValue={animationStyles[animate][property]}
      onChange={handleChange}
      {...props}
    />
  );
}

export default PropertyAdjustmentAnimation;
