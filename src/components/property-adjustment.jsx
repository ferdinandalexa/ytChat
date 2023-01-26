import { useAtom } from 'jotai';
import { chatStylesAtom } from '../store/stream-chat-styles';
import debounce from 'just-debounce-it';

function PropertyAdjustment ({ title, label, properties, type, ...props }) {
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
          <label className='capitalize' key={`${title}-${property}`}>
            <span>{label[index]}</span>
            <input
              className='input'
              type={type}
              data-property={property}
              defaultValue={chatStyles[property]}
              onChange={handleChange}
              {...props}
            />
          </label>
        )}
      </div>
    </li>
  );
}

export default PropertyAdjustment;
