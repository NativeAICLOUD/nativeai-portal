'use client';

import DOMPurify from 'dompurify';
import dynamic from 'next/dynamic';

const RenderHTML = ({ text, cls = '' }: { text: string; cls?: string }) => {
  return (
    <div className={cls} suppressHydrationWarning dangerouslySetInnerHTML={
      { __html: DOMPurify.sanitize(text || '')?.replace(/href/g, "target='_blank' href") }
    }></div>
  );
}

export default dynamic(() => Promise.resolve(RenderHTML), {
  ssr: false
})
