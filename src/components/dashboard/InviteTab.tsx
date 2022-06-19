import { Fragment } from "react";
import { Tab } from "@headlessui/react";
import { QuestionMarkCircleIcon } from "@heroicons/react/solid";
import MemberPanel from "./MemberPanel";

const InviteTab = () => {
  const membersCount = 1;
  const GuestMembersCount = 0;

  return (
    <div>
      <Tab.Group>
        <Tab.List className="mt-5 text-md p-3 flex flex-row">
          <Tab as={Fragment}>
            {({selected}) => (
              <span
                className={
                  selected
                    ? "bg-white text-txtcolor mr-4 focus:outline-none"
                    : "bg-white text-gray-400 mr-4 cursor-pointer"
                }
              >
                Full Members ({membersCount})
              </span>
            )}
          </Tab>

          <Tab as={Fragment}>
            {({selected}) => (
              <span
                className={
                  selected
                    ? "bg-white text-txtcolor focus:outline-none"
                    : "bg-white text-gray-400 cursor-pointer"
                }
              >
                <span className="flex flex-row">
                  <p>Guest Members ({GuestMembersCount})</p>
                  <QuestionMarkCircleIcon className="h-5 w-5"/>
                </span>
              </span>
            )}
          </Tab>
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel>
            <MemberPanel />
          </Tab.Panel>
          <Tab.Panel>
            <div className="text-center my-auto h-screen mt-[100px] text-txtcolor">
              <p className="text-2xl">
                Add Guests to give them a limited view of ClickUp{" "}
              </p>

              <div>
                <p className="mt-1">Guests don't have access to Spaces</p>
                <p className="mt-1">
                  {" "}
                  Guests can't create Spaces, Folders, or Lists
                </p>

                <a href="#" className="mt-1">
                  Learn how to add Guests
                </a>
              </div>
            </div>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default InviteTab;
