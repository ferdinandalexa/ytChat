import SettingsAnimationContainer from './settings-animation-container';
import SettingsChatContainer from './settings-chat-container';
import SettingsMessageContainer from './settings-message-container';
import SettingsSponsorContainer from './settings-sponsor-container';
import SettingsSuperchatContainer from './settings-superchat-container';

function SettingsPanel () {
  return (
    <aside className='setting-panel'>
      <SettingsChatContainer />
      <SettingsMessageContainer />
      <SettingsSponsorContainer />
      <SettingsSuperchatContainer />
      <SettingsAnimationContainer />
    </aside>
  );
}

export default SettingsPanel;
