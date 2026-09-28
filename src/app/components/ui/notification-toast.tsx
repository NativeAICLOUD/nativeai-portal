'use client';

import type { ReactNode } from 'react';
import {
  ToastContainer,
  cssTransition,
  toast as toastify,
  type Id,
  type ToastContentProps,
} from 'react-toastify';

/* NativeCloud notification toast — blue-first for every state; the icon
   carries the difference, not the colour. Built on the react-toastify
   container already mounted in the root layout (see NotificationToaster). */

type Variant = 'success' | 'error' | 'info' | 'warning';

type ToastOptions = {
  /** Optional bold first line above the message */
  title?: string;
  /** ms before auto-dismiss; false keeps it open until closed */
  duration?: number | false;
  id?: Id;
};

const ICON_PATHS: Record<Variant, ReactNode> = {
  success: <path d="m8.5 12.5 2.5 2.5 5-5.5" />,
  error: (
    <>
      <path d="M12 7.75v5" />
      <path d="M12 16.25h.01" />
    </>
  ),
  warning: (
    <>
      <path d="M12 8v4.5" />
      <path d="M12 15.75h.01" />
    </>
  ),
  info: (
    <>
      <path d="M12 11v5" />
      <path d="M12 7.75h.01" />
    </>
  ),
};

function VariantIcon({ variant }: { variant: Variant }) {
  return (
    <span className="nc-toast__icon" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        {variant === 'warning' ? (
          <path d="M10.3 4.2 2.9 17.1A2 2 0 0 0 4.6 20h14.8a2 2 0 0 0 1.7-2.9L13.7 4.2a2 2 0 0 0-3.4 0Z" opacity="0.55" />
        ) : (
          <circle cx="12" cy="12" r="9" opacity="0.55" />
        )}
        {ICON_PATHS[variant]}
      </svg>
    </span>
  );
}

function ToastCard({
  variant,
  message,
  title,
  closeToast,
}: { variant: Variant; message: ReactNode; title?: string } & Pick<ToastContentProps, 'closeToast'>) {
  return (
    <div className={`nc-toast nc-toast--${variant}`}>
      <VariantIcon variant={variant} />
      <div className="nc-toast__text">
        {title && <p className="nc-toast__title">{title}</p>}
        <p className="nc-toast__message">{message}</p>
      </div>
      <button type="button" className="nc-toast__close" onClick={closeToast} aria-label="Close notification">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" aria-hidden="true">
          <path d="M6 6l12 12M18 6 6 18" />
        </svg>
      </button>
    </div>
  );
}

function show(variant: Variant, message: ReactNode, { title, duration = 5000, id }: ToastOptions = {}) {
  return toastify(
    ({ closeToast }) => <ToastCard variant={variant} message={message} title={title} closeToast={closeToast} />,
    {
      toastId: id,
      autoClose: duration,
      // errors interrupt; everything else is announced politely
      role: variant === 'error' ? 'alert' : 'status',
    },
  );
}

export const toast = {
  success: (message: ReactNode, options?: ToastOptions) => show('success', message, options),
  error: (message: ReactNode, options?: ToastOptions) => show('error', message, options),
  info: (message: ReactNode, options?: ToastOptions) => show('info', message, options),
  warning: (message: ReactNode, options?: ToastOptions) => show('warning', message, options),
  dismiss: (id?: Id) => toastify.dismiss(id),
};

const slide = cssTransition({
  enter: 'nc-toast-enter',
  exit: 'nc-toast-exit',
  collapseDuration: 240,
});

/* Mount once, in the root layout */
export function NotificationToaster() {
  return (
    <ToastContainer
      position="top-center"
      className="nc-toast-container"
      toastClassName="nc-toast-shell"
      bodyClassName="nc-toast-shell__body"
      transition={slide}
      autoClose={5000}
      hideProgressBar
      closeButton={false}
      icon={false}
      newestOnTop
      limit={3}
      pauseOnHover
      pauseOnFocusLoss
      draggable="touch"
    />
  );
}
