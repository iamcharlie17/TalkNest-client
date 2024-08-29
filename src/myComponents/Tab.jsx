import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const Tab = () => {
    const [tabIndex, setTabIndex] = useState(0);
    return (
        <Tabs className={'w-full'} selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
              <TabList className={'flex w-full'}>
                <Tab className={`w-1/2 cursor-pointer ${tabIndex == 0 ? 'border-b-2 border-black': 'border-b'}`}>Sign In</Tab>
                <Tab className={`w-1/2 cursor-pointer ${tabIndex == 1 ? 'border-b-2 border-black': 'border-b'}`}>Sign Up</Tab>
              </TabList>

              <TabPanel>
                
              </TabPanel>
              <TabPanel>
                <h2>Any content 2</h2>
              </TabPanel>
            </Tabs>
    );
};

export default Tab;