'use client';

import React, { useEffect, useState } from 'react';
import * as Tooltip from '@radix-ui/react-tooltip';
import { isNil } from 'lodash';
import { twMerge } from 'tailwind-merge';

type Props = {
  className?: string;
  children: React.ReactElement;
  content: string | React.ReactElement;
  position?: 'top' | 'right' | 'bottom' | 'left';
};

const MyTooltip = ({ className, children, content, position }: Props) => {
  if (isNil(content)) {
    return children;
  }

  return <MyTooltipContent {...{ className, children, content, position }} />;
};

const MyTooltipContent = ({
  className,
  children,
  content,
  position,
}: Props) => {
  const [state, setState] = useState(false);

  const openTooltip = () => setState(true);
  const closeTooltip = () => setState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth > 767) {
        return;
      }
      closeTooltip();
    };

    window.addEventListener('scroll', handleScroll);
    return window.addEventListener('scroll', handleScroll);
  }, []);

  return (
    <Tooltip.Provider delayDuration={0}>
      <Tooltip.Root open={state}>
        <Tooltip.Trigger
          className="r-tooltip"
          asChild
          onMouseEnter={openTooltip}
          onMouseLeave={closeTooltip}
          onTouchStart={openTooltip}
          onTouchEnd={openTooltip}
        >
          {children}
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content
            className={twMerge('TooltipContent', className || '')}
            sideOffset={5}
            side={position}
          >
            {content}
            <Tooltip.Arrow className="TooltipArrow" />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
};

export default MyTooltip;
