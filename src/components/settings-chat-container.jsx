import PropertySet from './property-set';
import AdjustmentContainer from './adjustment-container';
import PropertyAdjustmentChat from './property-adjustment-chat';

function SettingsChatContainer () {
  return (
    <PropertySet name='chat'>
      <AdjustmentContainer title='background'>
        <PropertyAdjustmentChat
          type='text'
          label='color'
          property='background-color'
        />
      </AdjustmentContainer>

      <AdjustmentContainer title='padding'>
        <PropertyAdjustmentChat
          type='number'
          label='horizontal'
          property='padding-inline'
          min={0}
        />
        <PropertyAdjustmentChat
          type='number'
          label='vertical'
          property='padding-block'
          min={0}
        />
      </AdjustmentContainer>

      <AdjustmentContainer title='spacing'>
        <PropertyAdjustmentChat
          type='number'
          label='margin'
          property='margin-bottom'
          min={0}
        />
      </AdjustmentContainer>
    </PropertySet>
  );
}

export default SettingsChatContainer;
