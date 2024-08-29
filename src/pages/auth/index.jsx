import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import SignIn from "../../myComponents/SignIn";
import Register from "../../myComponents/Register";

const Auth = () => {
  const [tabIndex, setTabIndex] = useState(0);
  return (
    <div className="min-h-screen w-full flex justify-center items-center">
      <div className="h-[70vh] md:h-[90vh] bg-white border-2 border-white text-opacity-90 shadow-2xl w-[80vw] ">
        <div className="flex flex-col w-full  justify-center h-full items-center">
          <div className="">
            <h1 className="font-bold text-2xl md:text-4xl lg:text-5xl">
              TalkNest
            </h1>
          </div>
          <div className="text-center mt-4 md:mt-8  md:w-1/3 w-3/5">
            <Tabs
              className={"w-full"}
              selectedIndex={tabIndex}
              onSelect={(index) => setTabIndex(index)}
            >
              <TabList className={"flex w-full"}>
                <Tab
                  className={`w-1/2 cursor-pointer focus-within:no-underline ${
                    tabIndex == 0 ? "border-b-2 border-black" : "border-b"
                  }`}
                >
                  Sign In
                </Tab>
                <Tab
                  className={`w-1/2 cursor-pointer focus-within:no-underline ${
                    tabIndex == 1 ? "border-b-2 border-black" : "border-b"
                  }`}
                >
                  Sign Up
                </Tab>
              </TabList>

              <TabPanel>
                <SignIn />
              </TabPanel>
              <TabPanel>
                <Register />
              </TabPanel>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
