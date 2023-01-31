import PropertySet from './property-set';
import AdjustmentContainer from './adjustment-container';
import PropertyAdjustmentChat from './property-adjustment-chat';

function SettingsChatContainer () {
  return (
    <PropertySet name='Chat'>
      <AdjustmentContainer title='Background'>
        <PropertyAdjustmentChat
          type='text'
          label='Color'
          property='background-color'
        />
      </AdjustmentContainer>

      <AdjustmentContainer title='Toggles' layout='col'>
        <PropertyAdjustmentChat
          type='checkbox'
          label='Show/Hide avatar'
          property='show-avatar'
        />
        <PropertyAdjustmentChat
          type='checkbox'
          label='Full width'
          property='full-width'
        />
      </AdjustmentContainer>

      <AdjustmentContainer title='Padding'>
        <PropertyAdjustmentChat
          type='number'
          label='Horizontal'
          property='padding-inline'
          min={0}
        />
        <PropertyAdjustmentChat
          type='number'
          label='Vertical'
          property='padding-block'
          min={0}
        />
      </AdjustmentContainer>

      <AdjustmentContainer title='Spacing'>
        <PropertyAdjustmentChat
          type='number'
          label='Margin'
          property='margin-bottom'
          min={0}
        />
      </AdjustmentContainer>
    </PropertySet>
  );
}

export default SettingsChatContainer;
