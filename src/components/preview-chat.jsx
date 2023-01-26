import { createHtmlPreview } from '../utils/createHtmlPreview';
import { generateChatStyles } from '../utils/generateChatStyles';

const chatStyles = generateChatStyles();

const chatHtmlPreview = createHtmlPreview(chatStyles);
const srcBlob = new window.Blob([chatHtmlPreview], { type: 'text/html' });
const previewUrl = URL.createObjectURL(srcBlob);

function PreviewChat () {
  return (
    <iframe
      src={previewUrl}
      title='Preview youtube streaming chat styles'
      frameBorder='0'
      scrolling='no'
    />
  );
}

export default PreviewChat;
