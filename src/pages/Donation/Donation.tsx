import Mainlayout from '../../layout/Mainlayout'

import Cards from "../../components/Cards";
import DonationCardData from "../../constants/DonationCardData";
import Tabs from '../../components/Tabs';
import DonationTabs from '../../constants/DonationTabs';

const Donation = () => {

  return (
     <Mainlayout>
         <div className="flex gap-[16px] mb-[20px]">
        <Cards data={DonationCardData} action={false}/>
      </div>

      <Tabs data={DonationTabs}/>

      
    </Mainlayout>
  )
}

export default Donation