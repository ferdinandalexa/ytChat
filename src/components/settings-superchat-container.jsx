import PropertySet from './property-set';
import AdjustmentContainer from './adjustment-container';
import PropertyAdjustmentSuperchat from './property-adjustment-superchat';

function SettingsSuperchatContainer () {
  return (
    <PropertySet name='superchats'>
      <AdjustmentContainer title='header padding'>
        <PropertyAdjustmentSuperchat
          type='number'
          label='horizontal'
          property='header-padding-inline'
          min={0}
        />
        <PropertyAdjustmentSuperchat
          type='number'
          label='vertical'
          property='header-padding-block'
          min={0}
        />
      </AdjustmentContainer>

      <AdjustmentContainer title='spacing'>
        <PropertyAdjustmentSuperchat
          type='number'
          label='between name and purchase amount'
          property='spacing'
          min={0}
        />
      </AdjustmentContainer>

      <AdjustmentContainer title='content padding'>
        <PropertyAdjustmentSuperchat
          type='number'
          label='horizontal'
          property='content-padding-inline'
          min={0}
        />
        <PropertyAdjustmentSuperchat
          type='number'
          label='vertical'
          property='content-padding-block'
          min={0}
        />
      </AdjustmentContainer>
    </PropertySet>
  );
}

export default SettingsSuperchatContainer;
