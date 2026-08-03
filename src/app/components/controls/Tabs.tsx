'use client';

import { Tab, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { twMerge } from 'tailwind-merge';

const MyTabs = ({
  labels = [],
  children = [],
  config,
  cls = {
    root: '',
    tab: '',
    tabHeader: '',
    panel: '',
    body: '',
  }
}: {
  labels: string[];
  children: React.ReactElement[];
  config?: boolean;
  cls?: {
    root?: string;
    tab?: string;
    tabHeader?: string;
    panel?: string;
    body?: string;
  };
}) => {

  const [tabIndex, setTabIndex] = useState(0);

  const _labels = config ? [...labels, 'config'] : labels;

  return (
    <div className={`w-full ${cls.root || ''}`}>
      <Tab.Group selectedIndex={tabIndex} onChange={setTabIndex}>
        <Tab.List className={`flex gap-2 ${cls.tabHeader}`}>
          {_labels.map((label, idx) =>
            <Tab as={Fragment} key={idx}>
              {({ selected }) =>
                <div
                  className={`w-full cursor-pointer text-base min-h-10 px-4 flex rounded-20 items-center justify-center outline-none ${
                    selected ? `text-black bg-white border ${label === 'Withdraw' ? 'border-red' : 'border-primary'}`
                          : 'opacity-50 bg-black/5 text-black border border-transparent'
                    } ${cls.tab || ''}`}
                >
                  {label}
                </div>}
            </Tab>
          )}
        </Tab.List>
        <Tab.Panels className={twMerge("p-1", cls.panel)}>
          {children.map((item, idx) =>
            <Tab.Panel static={true} key={idx}>
              <Transition appear show={tabIndex === idx}
                className="transition-all duration-500 overflow-hidden"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0">
                <div className={`${cls.body || ''} ${tabIndex === idx ? '' : 'absolute'}`}>
                  {item}
                </div>
              </Transition>
            </Tab.Panel>
          )}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}

export default MyTabs;
