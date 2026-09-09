import { ToastOptions, toast } from "react-toastify";

type Props = {
  title?: string;
  description?: string;
  type?: 'success' | 'error' | 'warning' | 'info';
  icon?: React.ReactElement<any>;
  action?: React.ReactElement<any>;
  options?: ToastOptions<{}>
}

const showToast = ({ title, description, type, icon, action, options }: Props) => {
  switch (type) {
    case 'success':
      toast.success(
        <CustomToastContent title={title} description={description} action={action} />
      , {...options, icon});
      break;
    case 'error':
      toast.error(
        <CustomToastContent title={title} description={description} action={action} />
      , {...options, icon});
      break;
    case 'warning':
      toast.warning(
        <CustomToastContent title={title} description={description} action={action} />
      , {...options, icon});
      break;
    case 'info':
      toast.info(
        <CustomToastContent title={title} description={description} action={action} />
      , {...options, icon});
      break;
  
    default:
      toast(
        <CustomToastContent title={title} description={description} action={action} />
      , {...options, icon});
      break;
  }
}

const CustomToastContent = ({icon, title, description, action}: Pick<Props, 'icon' | 'title' | 'description' | 'action'>) => {
  return (
    <div className={`flex items-center ${icon ? '' : 'pl-4'}`}>
      <div className="content">
        {title ? <h2 className="toast-title">{title}</h2> : null}
        {description ? <p className="toast-description">{description}</p> : null}
      </div>
      {action ? action : null}
    </div>
  );
}

/* Example: Usage
showToast({
  title: 'KYC Pending',
  description: 'Profile is under KYC (know your customer) investigation',
  type: 'error',
  icon: (
    <svg className="icon-arrow-up-curve h-10 dark:fill-white" xmlns="http://www.w3.org/2000/svg">
      <use xlinkHref="/icons/all-icons.svg#icon-arrow-up-curve" />
    </svg>
  ),
  action: (
    <svg className="icon-rocket h-10 w-10 ml-auto mr-10 dark:fill-white" xmlns="http://www.w3.org/2000/svg"
    onClick={
      () => console.log('Action click')
    }>
      <use xlinkHref="/icons/all-icons.svg#icon-rocket" />
    </svg>
  )
});
*/

const toastSuccess = (text: string) => {
  showToast({
    title: 'Success',
    description: text,
    type: 'success',
  });
}

const toastError = (text: string) => {
  showToast({
    title: 'Error',
    description: text,
    type: 'error',
  });
}

export {
  showToast,
  toastSuccess,
  toastError
}