import { useState } from 'react';

import PrimaryText from '../../components/PrimaryText';

import {
  SettingItem,
  SettingLabel,
  SettingSwitch,
  Slider,
  Checkbox,
  ContainerItems,
} from './styles';
import Page from '../../components/Page';

const Settings = () => {
  const [darkMode, setDarkMode] = useState<boolean>(() =>
    JSON.parse(localStorage.getItem('darkMode') || 'false'),
  );
  const [notifyReminders, setNotifyReminders] = useState<boolean>(() =>
    JSON.parse(localStorage.getItem('notifyReminders') || 'true'),
  );
  const [otherNotifications, setOtherNotifications] = useState<boolean>(() =>
    JSON.parse(localStorage.getItem('otherNotifications') || 'true'),
  );

  const handleDarkModeToggle = () => {
    setDarkMode((prevState: boolean) => {
      const newState = !prevState;
      localStorage.setItem('darkMode', JSON.stringify(newState));
      return newState;
    });
  };

  const handleNotifyRemindersToggle = () => {
    setNotifyReminders((prevState: boolean) => {
      const newState = !prevState;
      localStorage.setItem('notifyReminders', JSON.stringify(newState));
      return newState;
    });
  };

  const handleOtherNotificationsToggle = () => {
    setOtherNotifications((prevState: boolean) => {
      const newState = !prevState;
      localStorage.setItem('otherNotifications', JSON.stringify(newState));
      return newState;
    });
  };

  return (
    <Page>
      <PrimaryText>Configurações</PrimaryText>

      <br />

      <ContainerItems>
        <SettingItem>
          <SettingSwitch>
            <Checkbox
              type="checkbox"
              checked={darkMode}
              onChange={handleDarkModeToggle}
              id="darkMode"
            />
            <Slider className="round"></Slider>
          </SettingSwitch>
          <SettingLabel htmlFor="darkMode">Modo Escuro</SettingLabel>
        </SettingItem>

        <SettingItem>
          <SettingSwitch>
            <Checkbox
              type="checkbox"
              checked={notifyReminders}
              onChange={handleNotifyRemindersToggle}
              id="notifyReminders"
            />
            <Slider className="round"></Slider>
          </SettingSwitch>
          <SettingLabel htmlFor="notifyReminders">
            Notificar Lembretes
          </SettingLabel>
        </SettingItem>

        <SettingItem>
          <SettingSwitch>
            <Checkbox
              type="checkbox"
              checked={otherNotifications}
              onChange={handleOtherNotificationsToggle}
              id="otherNotifications"
            />
            <Slider className="round"></Slider>
          </SettingSwitch>
          <SettingLabel htmlFor="otherNotifications">
            Outras Notificações
          </SettingLabel>
        </SettingItem>
      </ContainerItems>
    </Page>
  );
};

export default Settings;
