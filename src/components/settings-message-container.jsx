import PropertySet from './property-set';
import AdjustmentContainer from './adjustment-container';
import PropertyAdjustmentMessage from './property-adjustment-message';

function SettingsMessageContainer () {
  return (
    <PropertySet name='Regular message'>
      <AdjustmentContainer title='Author Name'>
        <PropertyAdjustmentMessage
          type='text'
          label='Default'
          property='name-color'
        />
        <PropertyAdjustmentMessage
          type='text'
          authorType='owner'
          label='Owner'
          property='name-color'
        />
        <PropertyAdjustmentMessage
          type='text'
          authorType='moderator'
          label='Moderator'
          property='name-color'
        />
        <PropertyAdjustmentMessage
          type='text'
          authorType='member'
          label='Member color'
          property='name-color'
        />
      </AdjustmentContainer>

      <AdjustmentContainer title='Avatar'>
        <PropertyAdjustmentMessage
          type='number'
          label='Avatar size'
          property='avatar-size'
          min='16'
          max='32'
        />
        <PropertyAdjustmentMessage
          type='number'
          label='Rounded'
          property='rounded'
          min='16'
          max='32'
        />
      </AdjustmentContainer>

      <AdjustmentContainer title='Message'>
        <PropertyAdjustmentMessage
          type='text'
          label='Message color'
          property='message-color'
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
