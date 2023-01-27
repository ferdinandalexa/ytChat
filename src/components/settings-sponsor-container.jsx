import PropertySet from './property-set';
import AdjustmentContainer from './adjustment-container';
import PropertyAdjustmentSponsor from './property-adjustment-sponsor';

function SettingsSponsorContainer () {
  return (
    <PropertySet name='Sponsors'>
      <AdjustmentContainer title='Text'>
        <PropertyAdjustmentSponsor
          type='text'
          label='Title color'
          property='event-color'
        />
        <PropertyAdjustmentSponsor
          type='text'
          label='Message color'
          property='detail-color'
        />
      </AdjustmentContainer>

      <AdjustmentContainer title='Background'>
        <PropertyAdjustmentSponsor
          type='text'
          label='Color'
          property='background-color'
        />
      </AdjustmentContainer>

      <AdjustmentContainer title='Padding'>
        <PropertyAdjustmentSponsor
          type='number'
          label='Vertical'
          property='padding-block'
          min={0}
        />
        <PropertyAdjustmentSponsor
          type='number'
          label='Horizontal'
          property='padding-inline'
          min={0}
        />
      </AdjustmentContainer>

      <AdjustmentContainer title='Spacing'>
        <PropertyAdjustmentSponsor
          type='number'
          label='Between title and message'
          property='spacing'
          min={0}
        />
      </AdjustmentContainer>
    </PropertySet>

  );
}

export default SettingsSponsorContainer;
