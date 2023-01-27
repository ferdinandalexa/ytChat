import PropertySet from './property-set';
import AdjustmentContainer from './adjustment-container';
import PropertyAdjustmentMessage from './property-adjustment-message';

function SettingsMessageContainer () {
  return (
    <PropertySet name='Regular message'>
      <AdjustmentContainer title='Text'>
        <PropertyAdjustmentMessage
          type='text'
          label='Message color'
          property='message-color'
        />
        <PropertyAdjustmentMessage
          type='text'
          label='Name color'
          property='name-color'
        />
      </AdjustmentContainer>

      <AdjustmentContainer title='Background'>
        <PropertyAdjustmentMessage
          type='text'
          label='Color'
          property='background-color'
        />
      </AdjustmentContainer>

      <AdjustmentContainer title='Padding'>
        <PropertyAdjustmentMessage
          type='number'
          label='Horizontal'
          property='padding-inline'
          min={0}
        />
        <PropertyAdjustmentMessage
          type='number'
          label='Vertical'
          property='padding-block'
          min={0}
        />
      </AdjustmentContainer>

      <AdjustmentContainer title='Spacing'>
        <PropertyAdjustmentMessage
          type='number'
          label='Between name and message'
          property='spacing'
          min={0}
        />
      </AdjustmentContainer>
    </PropertySet>
  );
}

export default SettingsMessageContainer;
