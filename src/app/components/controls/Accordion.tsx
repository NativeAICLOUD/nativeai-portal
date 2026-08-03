'use client';

import * as Accordion from '@radix-ui/react-accordion';
import React from 'react';
import { twMerge } from 'tailwind-merge';
import RenderHTML from './RenderHtml';
import { MinusIcon, PlusIcon } from '@radix-ui/react-icons';

export type TData = {
  title: string;
  desc: string;
};

type Props = {
  header?: React.ReactElement | React.ReactElement[];
  children?: React.ReactElement | React.ReactElement[];
  showCaret?: boolean;
  spanCls?: string;
  defaultValue?: string;
} & {
  data?: TData[];
  showCaret?: boolean;
};

const MyAccordion = ({ header, children, data, showCaret, defaultValue = 'item-0', spanCls }: Props) => {
  return (
    <Accordion.Root className="AccordionRoot" type="single" defaultValue={defaultValue} collapsible>
      {data
        ? data.map((item, idx) => (
            <AccordionItem
              key={idx}
              showCaret={showCaret}
              idx={idx}
              spanCls={spanCls}
              isLast={data.length}
              title={item.title}
              desc={item.desc}
            />
          ))
        : (Array.isArray(header) ? header : [header])?.map((item, idx) => (
            <AccordionItem idx={idx} header={item} key={idx} showCaret={showCaret} spanCls={spanCls}>
              {Array.isArray(children) ? children[idx] : children}
            </AccordionItem>
          ))}
    </Accordion.Root>
  );
};

type ItemProps = {
  idx: number;
  header?: React.ReactElement;
  children?: React.ReactElement;
  spanCls?: string;
  title?: string;
  desc?: string;
  isLast?: number;
  showCaret?: boolean;
};
const AccordionItem = ({ idx, isLast, header, children, title, spanCls, desc, showCaret = true }: ItemProps) => (
  <Accordion.Item
    value={`item-${idx}`}
    className={`relative AccordionItem accordion-card bg-black-5 dark:bg-white-5 focus:outline-none  ${
      idx === 0 && idx === isLast ? '' : ' my-2'
    }`}
  >
    <Accordion.Header className="relative AccordionHeader rounded-none border-b border-b-gray-300">
      <Accordion.Trigger className={`AccordionTrigger text-white px-0 h-0 ${header ? '' : 'py-6'}`}>
        <span
          className={twMerge('text-white flex items-center gap-4 pr-3 font-boston text-sm sm:text-base xl:text-lg text-left', spanCls || '')}
        >
          {title ? title : header}
        </span>
        {showCaret ? (
          <span className='accordion-caret cursor-pointer'>
            <PlusIcon
              className={`ml-3 text-native plus-icon size-5 relative`}
              aria-hidden
            />
            <MinusIcon
              className={`ml-3 text-native minus-icon size-5 relative`}
              aria-hidden
            />
          </span>
        ) : null}
      </Accordion.Trigger>
    </Accordion.Header>
    <div className="relative AccordionContent">
      <div
        className={`flex items-start px-0 ${
          header ? '' : 'py-2 pb-4 md:pb-6'
        } gap-4 rounded-b-20 dark:text-white text-left text-xs sm:text-sm xl:text-base leading-normal`}
      >
        {desc ? <RenderHTML text={desc as string} cls="opacity-80 pt-1.5 [&>a]:text-white/70" /> : children}
      </div>
    </div>
  </Accordion.Item>
);

export default MyAccordion;
