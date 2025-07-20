import AppConfigration from "../pages/Settings/Components/AppConfigration";
import BackupSecurity from "../pages/Settings/Components/BackupSecurity";
import ContentManagement from "../pages/Settings/Components/ContentManagement";

const SettingsTabs = [
  { text: "App Configuration", content: <AppConfigration /> },
  { text: "Content Management", content: <ContentManagement/>},
  { text: "Backup & Security", content: <BackupSecurity /> },
];

export default SettingsTabs;
