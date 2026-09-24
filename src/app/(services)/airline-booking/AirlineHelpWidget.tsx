'use client';

import { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

const suggestions = [
  'Change my booking',
  'Check baggage',
  'Add a seat or bag',
  'Find another flight',
];

export default function AirlineHelpWidget() {
  const [open, setOpen] = useState(false);
  const [draft, setDraft] = useState('');

  return (
    <div className="fixed bottom-5 right-5 z-[100] flex flex-col items-end gap-3 sm:bottom-8 sm:right-8">

      {open && (
        <div className="flex w-[calc(100vw-40px)] max-w-[360px] flex-col overflow-hidden rounded-2xl border border-[#e6e6e6] bg-white shadow-[0_24px_70px_rgba(15,23,42,0.18)]">
          {/* Header */}
          <div className="flex items-start justify-between gap-3 bg-[#0a0e1a] px-5 py-4">
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-[0.1em] text-white/50">
                NativeCloud Airline AI
              </span>
              <p className="m-0 mt-1.5 text-[16px] font-medium leading-[1.3] text-white">
                How can I help with your journey?
              </p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="shrink-0 rounded-full p-1.5 text-white/60 transition-colors hover:bg-white/10 hover:text-white"
            >
              <X className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
            </button>
          </div>

          {/* Suggested actions */}
          <div className="flex flex-col gap-2 px-5 py-4">
            {suggestions.map((question) => (
              <button
                key={question}
                type="button"
                onClick={() => setDraft(question)}
                className="rounded-xl border border-[#e6e6e6] bg-[#FAFAF8] px-3.5 py-2.5 text-left text-[13px] font-normal text-[#111] transition-colors hover:border-[#2563EB]/30 hover:bg-[#EFF5FF]"
              >
                {question}
              </button>
            ))}
          </div>

          {/* Decorative input */}
          <div className="flex items-center gap-2 border-t border-[#eee] px-4 py-3">
            <input
              type="text"
              readOnly
              value={draft}
              placeholder="Ask about your trip…"
              className="min-w-0 flex-1 bg-transparent text-[13px] text-[#111] outline-none placeholder:text-[#9ca3af]"
            />
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#2563EB]/10 text-[#2563EB]">
              <Send className="h-3.5 w-3.5" strokeWidth={2} aria-hidden="true" />
            </span>
          </div>
        </div>
      )}

      {/* Launcher */}
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-2.5 rounded-full bg-[#0a0e1a] px-5 py-3.5 text-[14px] font-medium text-white shadow-[0_12px_32px_rgba(10,14,26,0.28)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(10,14,26,0.34)] active:translate-y-0"
      >
        {open ? (
          <X className="h-[18px] w-[18px]" strokeWidth={2} aria-hidden="true" />
        ) : (
          <MessageCircle className="h-[18px] w-[18px]" strokeWidth={2} aria-hidden="true" />
        )}
        Ask NativeCloud AI
      </button>
    </div>
  );
}
