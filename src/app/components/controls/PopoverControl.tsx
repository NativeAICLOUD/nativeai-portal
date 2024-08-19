import React from 'react';
import * as Popover from '@radix-ui/react-popover';
import { twMerge } from 'tailwind-merge';

const MyPopover = ({
  children,
  content,
  className = '',
}: {
  className?: string;
  children: React.ReactElement;
  content: React.ReactElement;
}) => (
  <Popover.Root>
    <Popover.Trigger asChild>{children}</Popover.Trigger>
    <Popover.Portal>
      <Popover.Content
        className={twMerge(
          'rounded-20 w-[260px] bg-white shadow-[0_10px_38px_-10px_hsla(206,22%,7%,.35),0_10px_20px_-15px_hsla(206,22%,7%,.2)] will-change-[transform,opacity] data-[state=open]:data-[side=top]:animate-slideDownAndFade data-[state=open]:data-[side=right]:animate-slideLeftAndFade data-[state=open]:data-[side=bottom]:animate-slideUpAndFade data-[state=open]:data-[side=left]:animate-slideRightAndFade',
          className
        )}
        sideOffset={5}
      >
        {content}
        <Popover.Close
          className="rounded-full hidden h-[25px] w-[25px] items-center justify-center absolute top-[5px] right-[5px] hover:bg-black/10 focus:shadow-[0_0_0_2px] outline-none cursor-default"
          aria-label="Close"
          id="popover-close"
        >
          X
        </Popover.Close>
        <Popover.Arrow className="fill-white" />
      </Popover.Content>
    </Popover.Portal>
  </Popover.Root>
);

export default MyPopover;
