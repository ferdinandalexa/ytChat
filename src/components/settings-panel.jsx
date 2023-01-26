function SettingsPanel () {
  return (
    <aside className='setting-panel'>

      <details className='set'>
        <summary>
          <h2>Chat</h2>
        </summary>
        <ul>
          <li className='adjustment'>
            <h3>Background</h3>
            <input type='text' id='chat-background-color' data-property='background-color' />
          </li>

          <li className='adjustment'>
            <h3>Padding</h3>
            <input type='number' id='chat-padding-inline' min='0' data-property='padding-inline' />
            <input type='number' id='chat-padding-block' min='0' data-property='padding-block' />
          </li>

          <li className='adjustment'>
            <h3>Spacing</h3>
            <input type='number' id='chat-spacing' min='0' data-property='margin-bottom' />
          </li>
        </ul>
      </details>

    </aside>
  );
}

export default SettingsPanel;
