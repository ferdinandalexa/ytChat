import { useEffect, useState } from 'react';

import { useAtom } from 'jotai';
import { stylesAtom } from '../store/stream-chat-styles';

import { createHtmlPreview } from '../utils/createHtmlPreview';
import { generateChatStyles } from '../utils/generateChatStyles';

function PreviewChat () {
  const [previewUrl, setPreviewUrl] = useState();
  const [styles] = useAtom(stylesAtom);

  useEffect(() => {
    const chatCss = generateChatStyles(styles);

    const chatHtmlPreview = createHtmlPreview(chatCss);
    const srcBlob = new window.Blob([chatHtmlPreview], { type: 'text/html' });
    const objectUrl = URL.createObjectURL(srcBlob);

    setPreviewUrl(objectUrl);
  }, [styles]);

  return (
    <iframe
      src={previewUrl} title='Preview youtube streaming chat styles' frameBorder='0' scrolling='no'
    />
  );
}

export default PreviewChat;
