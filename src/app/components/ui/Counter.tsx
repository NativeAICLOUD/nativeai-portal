import { animate } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Each } from '../helpers/Each';

type IProps = {
  from: string;
  to: string;
  cls?: string;
  delay?: number;
  decimal?: number;
};

function Counter({ from, to, cls, decimal = 2, delay = 1 }: IProps) {
  const [value, setValue] = useState<string[]>([]);

  useEffect(() => {
    const controls = animate(Number(from), Number(to), {
      duration: 2,
      delay,
      onUpdate(value: number) {
        setValue(value === 0 ? ['0'] : localeValue(value, decimal).split(''));
      },
    });

    return () => controls?.stop();
  }, [from, to, decimal, delay]);

  return (
    <>
      <Each of={value} render={(v: any) => <span className={cls}>{v}</span>} />
    </>
  );
}

const localeValue = (value: number, decimal: number) => {
  return value.toLocaleString('en-US', { maximumFractionDigits: decimal });
};

export default Counter;
