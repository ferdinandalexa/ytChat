import { useAtom } from 'jotai';
import { chatStylesAtom } from '../store/stream-chat-styles';
import debounce from 'just-debounce-it';

function SettingsPanel () {
  const [chatStyles, setChatStyles] = useAtom(chatStylesAtom);

  const handleChange = debounce((e) => {
    const { value, dataset: { property } } = e.target;
    setChatStyles((prev) => ({
      ...prev,
      [property]: value
    }));
  }, 250);

  return (
    <aside className='setting-panel'>
      <details className='set'>
        <summary>
          <h2>Chat</h2>
        </summary>
        <ul>
          <li className='adjustment'>
            <h3>Background</h3>
            <input
              type='text'
              id='chat-background-color'
              data-property='background-color'
              defaultValue={chatStyles['background-color']}
              onChange={handleChange}
            />
          </li>

          <li className='adjustment'>
            <h3>Padding</h3>
            <input
              type='number'
              id='chat-padding-inline'
              min='0'
              data-property='padding-inline'
              defaultValue={chatStyles['padding-inline']}
              onChange={handleChange}
            />
            <input
              type='number'
              id='chat-padding-block'
              min='0'
              data-property='padding-block'
              defaultValue={chatStyles['padding-block']}
              onChange={handleChange}
            />
          </li>

          <li className='adjustment'>
            <h3>Spacing</h3>
            <input
              type='number'
              id='chat-spacing'
              min='0'
              data-property='margin-bottom'
              defaultValue={chatStyles['margin-bottom']}
              onChange={handleChange}
            />
          </li>
        </ul>
      </details>

    </aside>
  );
}

export default SettingsPanel;
