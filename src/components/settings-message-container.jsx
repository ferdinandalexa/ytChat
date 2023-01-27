import PropertySet from './property-set';
import AdjustmentContainer from './adjustment-container';
import PropertyAdjustmentMessage from './property-adjustment-message';

function SettingsMessageContainer () {
  return (
    <PropertySet name='regular message'>
      <AdjustmentContainer title='text'>
        <PropertyAdjustmentMessage
          type='text'
          label='message color'
          property='message-color'
        />
        <PropertyAdjustmentMessage
          type='text'
          label='name color'
          property='name-color'
        />
      </AdjustmentContainer>

      <AdjustmentContainer title='background'>
        <PropertyAdjustmentMessage
          type='text'
          label='color'
          property='background-color'
        />
      </AdjustmentContainer>

      <AdjustmentContainer title='padding'>
        <PropertyAdjustmentMessage
          type='number'
          label='horizontal'
          property='padding-inline'
          min={0}
        />
        <PropertyAdjustmentMessage
          type='number'
          label='vertical'
          property='padding-block'
          min={0}
        />
      </AdjustmentContainer>

      <AdjustmentContainer title='spacing'>
        <PropertyAdjustmentMessage
          type='number'
          label='between name and message'
          property='spacing'
          min={0}
        />
      </AdjustmentContainer>
    </PropertySet>
  );
}

export default SettingsMessageContainer;
