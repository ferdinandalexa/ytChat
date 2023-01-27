import PropertySet from './property-set';
import AdjustmentContainer from './adjustment-container';
import PropertyAdjustmentAnimation from './property-adjustment-animation';

function SettingsAnimationContainer () {
  return (
    <PropertySet name='animation'>
      {/* <AdjustmentContainer title='Type' /> */}
      <AdjustmentContainer title='Duration'>
        <PropertyAdjustmentAnimation
          type='number'
          label='seconds'
          property='animation-duration'
          animate='in'
        />
      </AdjustmentContainer>
    </PropertySet>
  );
}

export default SettingsAnimationContainer;
