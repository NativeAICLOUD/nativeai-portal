import { toast } from "@/app/components/ui/notification-toast";

/* Legacy helpers — kept so existing callers (dashboard, blog, auth) keep
   working. They all render the NativeCloud notification toast now; new code
   should import `toast` from components/ui/notification-toast directly. */

type Props = {
  title?: string;
  description?: string;
  type?: 'success' | 'error' | 'warning' | 'info';
}

/* The icon already conveys the state, so the old generic titles
   ("Error", "Success", …) are dropped whenever there is a description. */
const showToast = ({ title, description, type = 'info' }: Props) =>
  toast[type](description ?? title ?? '');

const toastSuccess = (text: string) => toast.success(text);

const toastError = (text: string) => toast.error(text);

export {
  showToast,
  toastSuccess,
  toastError
}
