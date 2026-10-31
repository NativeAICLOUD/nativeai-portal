'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { AudioLines, Bot, Cloud, Mic, Square, type LucideIcon } from 'lucide-react';
import { Link } from 'react-transition-progress/next';
import { Constants } from '@/Constants';
import { CONTAINER, Eyebrow, SECTION_Y } from './HomeUI';
import { EditorialGlow, SerifAccent } from '@/app/components/ui/EditorialGlow';

/* The three building blocks of the Realtime AI story */
const pillars: { label: string; desc?: string; icon: LucideIcon }[] = [
  { label: 'Realtime Voice AI', icon: AudioLines },
  { label: 'Intelligent Agents', icon: Bot },
  { label: 'Enterprise Cloud', icon: Cloud },
];

/* Waveform bar heights (%) — animated as a "listening" voice */
const BARS = [30, 55, 80, 45, 95, 60, 35, 75, 50, 85, 40, 65, 28, 70, 48];

type VoiceStatus = 'idle' | 'listening' | 'processing' | 'speaking' | 'error';

type SpeechRecognitionResultLike = {
  isFinal: boolean;
  [index: number]: { transcript: string };
};

type SpeechRecognitionEventLike = Event & {
  resultIndex: number;
  results: {
    length: number;
    [index: number]: SpeechRecognitionResultLike;
  };
};

type SpeechRecognitionErrorEventLike = Event & {
  error: string;
};

type BrowserSpeechRecognition = {
  continuous: boolean;
  interimResults: boolean;
  lang: string;
  onstart: ((event: Event) => void) | null;
  onresult: ((event: SpeechRecognitionEventLike) => void) | null;
  onerror: ((event: SpeechRecognitionErrorEventLike) => void) | null;
  onend: ((event: Event) => void) | null;
  start: () => void;
  stop: () => void;
  abort: () => void;
};

type SpeechRecognitionConstructor = new () => BrowserSpeechRecognition;

type VoiceWindow = Window & {
  SpeechRecognition?: SpeechRecognitionConstructor;
  webkitSpeechRecognition?: SpeechRecognitionConstructor;
};

const STATUS_LABELS: Record<VoiceStatus, string> = {
  idle: 'Ready',
  listening: 'Listening',
  processing: 'Processing',
  speaking: 'Speaking',
  error: 'Voice unavailable',
};

const ERROR_MESSAGES: Record<string, string> = {
  'not-allowed': 'Microphone access was denied. Allow it in your browser settings and try again.',
  'service-not-allowed': 'Speech recognition is blocked by your browser settings.',
  'audio-capture': 'No working microphone was found.',
  'no-speech': 'I did not hear anything. Please try again.',
  network: 'Speech recognition could not reach its service. Check your connection and try again.',
};

function getVoiceResponse(spokenText: string) {
  const command = spokenText.toLocaleLowerCase();

  if (command.includes('invoice') && ['open', 'outstanding', 'unpaid'].some((word) => command.includes(word))) {
    return 'Three sample invoices are open for Alpine Logistics, totalling 12,400 Swiss francs. Shall I send a reminder?';
  }

  if (command.includes('reminder') || command.includes('send')) {
    return 'This public demo is read-only, so it will not send a reminder. In a connected system, I would ask for confirmation before taking that action.';
  }

  if (command.includes('what can you do') || command.includes('help')) {
    return 'Try asking which invoices are open for Alpine Logistics. A production assistant can connect the same voice flow to approved business tools.';
  }

  return `I heard: ${spokenText}. Try asking which invoices are open for Alpine Logistics.`;
}

export function VoiceVisual() {
  const reduce = useReducedMotion();
  const recognitionRef = useRef<BrowserSpeechRecognition | null>(null);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
  const [status, setStatus] = useState<VoiceStatus>('idle');
  const [transcript, setTranscript] = useState('Try: “Which invoices are still open for Alpine Logistics?”');
  const [response, setResponse] = useState('Tap the microphone to try the browser voice demo.');
  const [errorMessage, setErrorMessage] = useState('');

  const stopVoice = () => {
    const recognition = recognitionRef.current;
    if (recognition) {
      recognition.onstart = null;
      recognition.onresult = null;
      recognition.onerror = null;
      recognition.onend = null;
      recognition.stop();
      recognitionRef.current = null;
    }

    const utterance = utteranceRef.current;
    if (utterance) {
      utterance.onstart = null;
      utterance.onend = null;
      utterance.onerror = null;
      utteranceRef.current = null;
    }

    window.speechSynthesis?.cancel();
    setStatus('idle');
  };

  const speakResponse = (message: string) => {
    if (!('speechSynthesis' in window) || typeof SpeechSynthesisUtterance === 'undefined') {
      setStatus('idle');
      return;
    }

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(message);
    utterance.rate = 0.98;
    utterance.pitch = 1;
    utterance.onstart = () => setStatus('speaking');
    utterance.onend = () => {
      utteranceRef.current = null;
      setStatus('idle');
    };
    utterance.onerror = () => {
      utteranceRef.current = null;
      setStatus('idle');
    };
    utteranceRef.current = utterance;
    window.speechSynthesis.speak(utterance);
  };

  const startListening = () => {
    const voiceWindow = window as VoiceWindow;
    const Recognition = voiceWindow.SpeechRecognition ?? voiceWindow.webkitSpeechRecognition;

    if (!Recognition) {
      setErrorMessage('Voice commands are not supported in this browser. Use a browser with speech recognition enabled.');
      setStatus('error');
      return;
    }

    window.speechSynthesis?.cancel();
    setErrorMessage('');
    setResponse('Listening for your command…');

    const recognition = new Recognition();
    let receivedResult = false;
    let recognitionFailed = false;
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = navigator.language || 'en-US';
    recognition.onstart = () => setStatus('listening');
    recognition.onresult = (event) => {
      const spokenText = Array.from(
        { length: event.results.length - event.resultIndex },
        (_, index) => event.results[event.resultIndex + index],
      )
        .filter((result) => result.isFinal)
        .map((result) => result[0]?.transcript ?? '')
        .join(' ')
        .trim();

      if (!spokenText) return;

      receivedResult = true;
      const nextResponse = getVoiceResponse(spokenText);
      setTranscript(spokenText);
      setResponse(nextResponse);
      setStatus('processing');
      speakResponse(nextResponse);
    };
    recognition.onerror = (event) => {
      recognitionFailed = true;
      recognitionRef.current = null;
      setErrorMessage(ERROR_MESSAGES[event.error] ?? 'The voice command could not be completed. Please try again.');
      setStatus('error');
    };
    recognition.onend = () => {
      recognitionRef.current = null;
      if (!receivedResult && !recognitionFailed) {
        setStatus('idle');
        setResponse('Tap the microphone and try again.');
      }
    };

    recognitionRef.current = recognition;
    setStatus('listening');
    try {
      recognition.start();
    } catch {
      recognitionRef.current = null;
      setErrorMessage('The microphone could not be started. Please try again.');
      setStatus('error');
    }
  };

  const handleVoiceButton = () => {
    if (status === 'listening' || status === 'processing' || status === 'speaking') {
      stopVoice();
      return;
    }

    startListening();
  };

  useEffect(() => () => {
    const recognition = recognitionRef.current;
    if (recognition) {
      recognition.onstart = null;
      recognition.onresult = null;
      recognition.onerror = null;
      recognition.onend = null;
      recognition.abort();
    }

    const utterance = utteranceRef.current;
    if (utterance) {
      utterance.onstart = null;
      utterance.onend = null;
      utterance.onerror = null;
    }
    window.speechSynthesis?.cancel();
  }, []);

  const voiceActive = status === 'listening' || status === 'processing' || status === 'speaking';
  return (
    <div>
      <div className="flex items-center justify-between gap-4">
        <div className="flex flex-col">
          <span className="text-[14px] font-medium text-[#111827]">NativeCloud Voice</span>
          <span role="status" aria-live="polite" className="text-[11px] font-medium uppercase tracking-[0.14em] text-[#6B7280]">
            {STATUS_LABELS[status]}
          </span>
        </div>
        <span className="rounded-full bg-[#EFF6FF] px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.12em] text-[#1D4ED8]">
          Interactive demo
        </span>
      </div>

      {/* waveform */}
      <div className="mt-5 flex h-16 items-center gap-[5px]" aria-hidden="true">
        {BARS.map((h, i) => (
          <motion.span
            key={i}
            className="w-full rounded-full bg-gradient-to-t from-[#1E4FD6] via-[#3B82F6] to-[#93C5FD]"
            style={{ height: `${h}%` }}
            animate={!reduce && voiceActive ? { scaleY: [1, 0.35, 1] } : { scaleY: 0.35 }}
            transition={{ duration: 1.1 + (i % 4) * 0.18, repeat: voiceActive ? Infinity : 0, ease: 'easeInOut', delay: i * 0.06 }}
          />
        ))}
      </div>

      {/* a spoken request and the agent's action */}
      <div className="mt-6 flex flex-col gap-2.5">
        <p className="m-0 w-fit max-w-[92%] rounded-2xl rounded-bl-md bg-[#F3F4F6] px-4 py-2.5 text-[14px] leading-[1.45] text-[#111827]">
          {transcript}
        </p>
        <p className="m-0 ml-auto w-fit max-w-[92%] rounded-2xl rounded-br-md bg-[#E1F0FF] px-4 py-2.5 text-[14px] leading-[1.45] text-[#0B3B66]">
          {response}
        </p>
      </div>

      {errorMessage && (
        <p className="mt-4 text-[12px] leading-[1.5] text-[#B91C1C]" role="alert">
          {errorMessage}
        </p>
      )}

      <button
        type="button"
        onClick={handleVoiceButton}
        aria-pressed={voiceActive}
        className="mt-5 inline-flex h-10 w-full items-center justify-center gap-2 rounded-full bg-[#1E4FD6] px-5 text-[14px] font-semibold text-white transition-colors hover:bg-[#173FAB] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2 active:bg-[#12358F]"
      >
        {voiceActive ? <Square className="h-4 w-4" aria-hidden="true" /> : <Mic className="h-4 w-4" aria-hidden="true" />}
        {voiceActive ? 'Stop voice' : status === 'error' ? 'Try again' : 'Try voice command'}
      </button>
    </div>
  );
}

/* Homepage "featured innovation" — the Realtime AI story.
   Editorial intro + glow background, same treatment as the Industries intro. */
export default function AIInnovationSection() {
  return (
    <section aria-labelledby="ai-innovation-heading" className="font-switzer relative isolate overflow-hidden bg-white">
      <EditorialGlow />
      <div>
        <div className={`${CONTAINER} ${SECTION_Y} lg:px-20`}>
          {/* Section intro */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            viewport={{ once: true, margin: '-60px' }}
          >
            <div className="mb-8"><Eyebrow>NativeCloud · AI Innovation</Eyebrow></div>
            <h2
              id="ai-innovation-heading"
              className="m-0 max-w-[1100px] text-[44px] font-light leading-[1.02] tracking-[-0.035em] text-[#141414] sm:text-[64px] md:text-[80px] lg:text-[96px] xl:text-[108px]"
            >
              Less complexity.
              <br />
              More <SerifAccent>intelligence.</SerifAccent>
            </h2>
          </motion.div>

          {/* Featured innovation — open layout on the page itself: story left, live demo right */}
          <motion.div
            className="mt-16 grid grid-cols-1 gap-12 lg:mt-24 lg:grid-cols-2 lg:gap-20"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            viewport={{ once: true, margin: '-60px' }}
          >
            <div className="flex flex-col">
              <span className="w-fit rounded-full bg-[#E1F0FF] px-3 py-1 text-[11px] font-medium uppercase tracking-[0.14em] text-[#0066B3]">
                Featured innovation · Realtime AI
              </span>
              <h3 className="m-0 mt-6 text-[32px] font-medium leading-[1.08] tracking-[-0.03em] text-[#111827] sm:text-[40px] lg:text-[44px]">
                Beyond chat.
                <br />
                AI that works with you.
              </h3>
              <p className="m-0 mt-5 text-[18px] leading-[1.5] text-[#4B5563]">
                Speak naturally. Get answers. Automate workflows.
              </p>

              {/* The three building blocks — quiet hairline list */}
              <ul role="list" className="m-0 mt-10 list-none border-t border-[#111827]/[0.08] p-0">
                {pillars.map(({ label, desc, icon: Icon }) => (
                  <li key={label} className="flex items-center gap-4 border-b border-[#111827]/[0.08] py-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[rgba(37,99,235,0.07)]">
                      <Icon className="h-[19px] w-[19px] text-[#2563EB]" strokeWidth={1.7} aria-hidden="true" />
                    </span>
                    <div className="min-w-0">
                      <p className="m-0 text-[15px] font-medium text-[#111827]">{label}</p>
                      {desc && <p className="m-0 mt-0.5 text-[13.5px] leading-[1.45] text-[#6B7280]">{desc}</p>}
                    </div>
                  </li>
                ))}
              </ul>

              {/* Same CTA pair as the hero: black pill + text link */}
              <div className="mt-10 flex flex-col items-start gap-3 sm:flex-row sm:items-center lg:mt-auto lg:pt-10">
                <Link
                  href={Constants.PAGES.GET_IN_TOUCH}
                  className="inline-flex h-10 min-w-[160px] cursor-pointer items-center justify-center whitespace-nowrap rounded-full bg-[#2E2B2B] px-5 text-[14px] font-semibold text-white transition-colors duration-200 hover:bg-[#242121] active:bg-[#1A1818]"
                >
                  Let&apos;s Talk
                </Link>
                <Link
                  href="/services/ai-agents-rag"
                  className="group inline-flex h-10 cursor-pointer items-center gap-1.5 whitespace-nowrap px-2 text-[14px] font-semibold text-[#2E2B2B] transition-colors duration-200 hover:text-[#0066B3]"
                >
                  Explore Our AI Solutions
                  <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-0.5">&rarr;</span>
                </Link>
              </div>
            </div>

            {/* Live voice demo — sits directly on the page */}
            <div className="flex items-center justify-center">
              <div className="w-full max-w-[460px]">
                <VoiceVisual />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
