import PropertySet from './property-set';
import AdjustmentContainer from './adjustment-container';
import PropertyAdjustmentChat from './property-adjustment-chat';

function SettingsChatContainer () {
  return (
    <PropertySet name='Chat'>
      {/* <AdjustmentContainer title='Heading Font'>
        <PropertyAdjustmentChat
          type='text'
          label='Select a font'
          property='font-title'
        />
      </AdjustmentContainer>

      <AdjustmentContainer title='Body Font'>
        <PropertyAdjustmentChat
          type='text'
          label='Select a font'
          property='font-body'
        />
      </AdjustmentContainer> */}

      <AdjustmentContainer title='Background'>
        <PropertyAdjustmentChat
          type='text'
          label='Color'
          property='background-color'
        />
      </AdjustmentContainer>

      <AdjustmentContainer title='Toggles'>
        <PropertyAdjustmentChat
          type='text'
          label='Show/Hide avatar'
          property='show-avatar'
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
