'use client'

import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

import Flag from 'react-flagpack'
import { Each } from '../helpers/Each';
import { useState } from 'react';

const LanguageList = [
  { name: 'EN', icon: <Flag code="GB-UKM" size="m" /> },
  { name: 'ES', icon: <Flag code="ES" size="m" /> },
  { name: 'FR', icon: <Flag code="FR" size="m" /> }
]

type Language = typeof LanguageList[0];

function LanguageSwitch() {

  const [lng, setLanguage] = useState(LanguageList[0]);

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button
          className="flex items-center gap-2"
          aria-label="Language value"
        >
          {lng.icon} {lng.name}
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className="min-w-[120px] flex flex-col gap-1 bg-white rounded-md px-4 py-2 shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade"
          sideOffset={5}
        >

          <Each
            of={LanguageList}
            render={(lng: Language) => (
              <DropdownMenu.Item
                onClick={() => setLanguage(lng)}
                className="group flex items-center gap-2 cursor-pointer">
                {lng.icon} {lng.name}
              </DropdownMenu.Item>
            )}
          />

          <DropdownMenu.Arrow className="fill-white" />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}

export default LanguageSwitch;