import PropertySet from './property-set';
import AdjustmentContainer from './adjustment-container';
import PropertyAdjustmentSponsor from './property-adjustment-sponsor';

function SettingsSponsorContainer () {
  return (
    <PropertySet name='sponsors'>
      <AdjustmentContainer title='text'>
        <PropertyAdjustmentSponsor
          type='text'
          label='title color'
          property='event-color'
        />
        <PropertyAdjustmentSponsor
          type='text'
          label='message color'
          property='detail-color'
        />
      </AdjustmentContainer>

      <AdjustmentContainer title='background'>
        <PropertyAdjustmentSponsor
          type='text'
          label='color'
          property='background-color'
        />
      </AdjustmentContainer>

      <AdjustmentContainer title='padding'>
        <PropertyAdjustmentSponsor
          type='number'
          label='vertical'
          property='padding-block'
          min={0}
        />
        <PropertyAdjustmentSponsor
          type='number'
          label='horizontal'
          property='padding-inline'
          min={0}
        />
      </AdjustmentContainer>

      <AdjustmentContainer title='spacing'>
        <PropertyAdjustmentSponsor
          type='number'
          label='between title and message'
          property='spacing'
          min={0}
        />
      </AdjustmentContainer>
    </PropertySet>

  );
}

export default SettingsSponsorContainer;
