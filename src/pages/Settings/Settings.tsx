
import Tabs from "../../components/Tabs"
import Mainlayout from "../../layout/Mainlayout"
import SettingsTabs from "../../constants/SettingsTabs"


const Settings = () => {
  return (
   <Mainlayout>
    <div>
      <Tabs data={SettingsTabs} action={true}/>
    </div>
   </Mainlayout>
  )
}

export default Settings