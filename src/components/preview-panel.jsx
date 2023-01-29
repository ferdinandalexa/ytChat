import { useEffect, useState } from 'react';

import { useAtom } from 'jotai';
import { stylesAtom } from '../store/stream-chat-styles';

import { generateChatStyles } from '../utils/generateChatStyles';
import PreviewChat from './preview-chat';

function PreviewPanel () {
  const [css, setCss] = useState();
  const [styles] = useAtom(stylesAtom);

  useEffect(() => {
    const chatCss = generateChatStyles(styles);

    setCss(chatCss);
  }, [styles]);

  return (
    <section className='preview-panel'>
      <PreviewChat />
      <button
        className='button large'
        onClick={() => {
          navigator.clipboard.writeText(css);
        }}
      >
        Copy styles
      </button>
    </section>
  );
}

export default PreviewPanel;
