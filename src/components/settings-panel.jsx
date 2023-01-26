import PropertySet from './property-set';
import PropertyAdjustment from './property-adjustment';

function SettingsPanel () {
  return (
    <aside className='setting-panel'>
      <PropertySet name='chat'>
        <PropertyAdjustment type='text' title='background' properties={['background-color']} />
        <PropertyAdjustment type='number' title='padding' properties={['padding-inline', 'padding-block']} min={0} />
        <PropertyAdjustment type='number' title='spacing' properties={['margin-bottom']} min={0} />
      </PropertySet>
    </aside>
  );
}

export default SettingsPanel;
