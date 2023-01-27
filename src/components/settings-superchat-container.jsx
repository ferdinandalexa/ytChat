import PropertySet from './property-set';
import AdjustmentContainer from './adjustment-container';
import PropertyAdjustmentSuperchat from './property-adjustment-superchat';

function SettingsSuperchatContainer () {
  return (
    <PropertySet name='Superchats'>
      <AdjustmentContainer title='Header padding'>
        <PropertyAdjustmentSuperchat
          type='number'
          label='Horizontal'
          property='header-padding-inline'
          min={0}
        />
        <PropertyAdjustmentSuperchat
          type='number'
          label='Vertical'
          property='header-padding-block'
          min={0}
        />
      </AdjustmentContainer>

      <AdjustmentContainer title='Spacing'>
        <PropertyAdjustmentSuperchat
          type='number'
          label='Between name and purchase amount'
          property='spacing'
          min={0}
        />
      </AdjustmentContainer>

      <AdjustmentContainer title='Content Padding'>
        <PropertyAdjustmentSuperchat
          type='number'
          label='Horizontal'
          property='content-padding-inline'
          min={0}
        />
        <PropertyAdjustmentSuperchat
          type='number'
          label='Vertical'
          property='content-padding-block'
          min={0}
        />
      </AdjustmentContainer>
    </PropertySet>
  );
}

export default SettingsSuperchatContainer;
