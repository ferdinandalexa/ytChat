import PropertySet from './property-set';
import PropertyAdjustmentChat from './property-adjustment-chat';
import PropertyAdjustmentMessage from './property-adjustment-message';

function SettingsPanel () {
  return (
    <aside className='setting-panel'>
      <PropertySet name='chat'>
        <PropertyAdjustmentChat
          type='text'
          title='background'
          label={['color']}
          properties={['background-color']}
        />
        <PropertyAdjustmentChat
          type='number'
          title='padding'
          label={['horizontal', 'vertical']}
          properties={['padding-inline', 'padding-block']}
          min={0}
        />
        <PropertyAdjustmentChat
          type='number'
          title='spacing'
          label={['margin']}
          properties={['margin-bottom']}
          min={0}
        />
      </PropertySet>

      <PropertySet name='regular message'>
        <PropertyAdjustmentMessage
          type='text'
          title='text color'
          label={['name color', 'message color']}
          properties={['name-color', 'message-color']}
        />
        <PropertyAdjustmentMessage
          type='text'
          title='background'
          label={['color']}
          properties={['background-color']}
        />
        <PropertyAdjustmentMessage
          type='number'
          title='padding'
          label={['horizontal', 'vertical']}
          properties={['padding-inline', 'padding-block']}
          min={0}
        />
        <PropertyAdjustmentMessage
          type='number'
          title='spacing'
          label={['between name and message']}
          properties={['spacing']}
          min={0}
        />
      </PropertySet>
    </aside>
  );
}

export default SettingsPanel;
