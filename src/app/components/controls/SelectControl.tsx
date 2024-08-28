import { Dispatch, ForwardedRef, SetStateAction, forwardRef } from 'react';
import Image from 'next/image';
import { twMerge } from 'tailwind-merge';
import * as Select from '@radix-ui/react-select';

type SelectItem = {
  id: number | string;
  value: string;
  img?: string;
  icon?: string;
  disabled?: boolean;
};

type TClasses = {
  btn?: string;
  title?: string;
  dropdown?: string;
};

type IProps = {
  label?: string;
  data: SelectItem[];
  selected?: any | null;
  onChange?: Dispatch<SetStateAction<any>>;
  cls?: TClasses;
  children?: React.ReactElement;
  hideArrow?: boolean;
};

const SelectControl = ({
  label = '',
  data,
  selected,
  onChange,
  cls = {},
  children,
  hideArrow,
}: IProps) => {
  const value = children ? children : selected?.value || label;
  const icon = selected?.icon;
  return (
    <Select.Root value={value} onValueChange={onChange}>
      <Select.Trigger
        className={twMerge(
          'SelectTrigger min-h-10 inline-flex items-center gap-2 pr-10 rounded-20 bg-white border border-social-border shadow-md shadow-slate-100 cursor-pointer hover:bg-black/5 relative w-full max-w-200 leading-none text-left focus:outline-none focus:ring-1 focus:ring-card-border [&>span:first-child]:whitespace-nowrap [&>span:first-child]:overflow-hidden [&>span:first-child]:text-ellipsis [&>span:first-child]:inline-flex [&>span:first-child]:gap-2 [&>span:first-child]:items-center',
          cls.btn || ''
        )}
        aria-label={label}
      >
        <Select.Value>
          <BadgeIcon icon={icon} />
          {value}
        </Select.Value>
        {!hideArrow && (
          <Select.Icon className="SelectIcon absolute right-2 top-0 bottom-0 grid place-items-center">
            <svg className="icon-select-bottom" width={14} height={14}>
              <use href={`/icons/all-icons.svg#icon-select-bottom`}></use>
            </svg>
          </Select.Icon>
        )}
      </Select.Trigger>
      <Select.Portal>
        <Select.Content
          position="popper"
          sideOffset={1}
          className={twMerge(
            `SelectContent mt-1 py-1 pr-10 max-h-56 w-full overflow-auto rounded-20 bg-select border border-card-border shadow-md right-0 text-base focus:outline-none sm:text-sm`,
            cls.dropdown || ''
          )}
        >
          <Select.ScrollUpButton className="SelectScrollButton flex justify-center">
            <svg className="icon-select-up" width={24} height={24}>
              <use href={`/icons/all-icons.svg#icon-select-up`}></use>
            </svg>
          </Select.ScrollUpButton>

          <Select.Viewport className="SelectViewport">
            <Select.Group className="">
              {data.map((item: SelectItem, idx) => (
                <SelectItem
                  value={item}
                  key={item.id ?? idx}
                  disabled={item?.disabled}
                  className={`${
                    selected?.value === item?.value
                      ? 'text-primary'
                      : 'font-normal opacity-80 hover:opacity-100'
                  } ${
                    item?.disabled ? '' : 'cursor-pointer hover:bg-black-5'
                  } min-h-10 flex items-center transition-all ${
                    item?.icon ? '' : 'pl-3'
                  } outline-none ring-0 truncate font-ag-medium [&>span:first-child]:flex [&>span:first-child]:items-center [&>span:first-child]:gap-2`}
                >
                  {item?.icon && <BadgeIcon icon={item?.icon} />}
                  {item?.img && <Img src={item?.img} />}
                  {item?.value || ''}
                </SelectItem>
              ))}
            </Select.Group>
          </Select.Viewport>

          <Select.ScrollDownButton className="SelectScrollButton flex justify-center">
            <svg className="icon-select-bottom" width={24} height={24}>
              <use href={`/icons/all-icons.svg#icon-select-bottom`}></use>
            </svg>
          </Select.ScrollDownButton>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
};

const BadgeIcon = ({ icon }: { icon: string }) => (
  <Select.Icon className="SelectIcon relative min-w-8 h-8 m-0.5 grid place-content-center">
    <Image src={icon} alt="Logo" width={24} height={24} />
    {/* <svg className="icon-select-arrow" width={24} height={24}>
      <use href={`/icons/all-icons.svg#icon-select-arrow`}></use>
    </svg> */}
  </Select.Icon>
);

const SelectItem = forwardRef<any, any>(
  (
    { children, className, ...props },
    forwardedRef: ForwardedRef<HTMLSelectElement>
  ) => {
    return (
      <Select.Item
        className={twMerge('SelectItem', className)}
        {...props}
        ref={forwardedRef}
      >
        <Select.ItemText>{children}</Select.ItemText>
        {/* <Select.ItemIndicator className="SelectItemIndicator">
        YES
      </Select.ItemIndicator> */}
      </Select.Item>
    );
  }
);
SelectItem.displayName = 'SelectItem';

const Img = ({ src }: { src: string }) => (
  <Image src={src} alt="" width={18} height={18} priority />
);

export default SelectControl;
