import { showToast } from './controls/Toast';

export const wrongNetworkToast = (action: () => void) =>
  showToast({
    title: 'Wrong Network!',
    description: 'Please Connect to Mainnet chain to use the app',
    type: 'error',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32px"
        height="32px"
        viewBox="0 0 24 24"
        fill="#5f6368"
      >
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 11c-.55 0-1-.45-1-1V8c0-.55.45-1 1-1s1 .45 1 1v4c0 .55-.45 1-1 1zm1 4h-2v-2h2v2z" />
      </svg>
    ),
    action: (
      <svg
        className="icon-action h-6 w-10 mx-auto"
        xmlns="http://www.w3.org/2000/svg"
        onClick={() => action()}
      >
        <path
          xmlns="http://www.w3.org/2000/svg"
          d="m21.545 14.477.016.01.079.06.018.016c.024.021.048.043.07.067l-.082-.078a1.008 1.008 0 0 1 .324.52c.02.077.03.16.03.244v4.737a1 1 0 0 1-2 0v-1.971C17.62 20.772 15.441 22 11.952 22A9.945 9.945 0 0 1 2 12.047V12a1 1 0 0 1 2 0v.047A7.945 7.945 0 0 0 11.953 20c2.987 0 4.728-1.07 6.928-3.684h-2.618a1 1 0 0 1-.993-.884l-.007-.116a1 1 0 0 1 1-1H21l.07.002.031.003-.101-.005a1.006 1.006 0 0 1 .536.155l.01.006zM12.047 2C17.534 2 22 6.482 22 12a1 1 0 0 1-2 0c0-4.415-3.572-8-7.953-8-3.03 0-4.752 1.04-6.956 3.682l2.646.002a1 1 0 0 1 .993.884l.007.116a1 1 0 0 1-1 1H2.96l-.028-.002-.008-.001a.87.87 0 0 1-.137-.02l-.028-.006-.028-.007a.996.996 0 0 1-.164-.062l-.103-.058-.096-.069a1.008 1.008 0 0 1-.158-.162l-.034-.046-.035-.054a.873.873 0 0 1-.05-.097l-.024-.056a.908.908 0 0 1-.058-.223l-.005-.051A1.04 1.04 0 0 1 2 8.695V3.947a1 1 0 1 1 2 0v1.934C6.373 3.19 8.527 2 12.047 2z"
          fill="#000"
          fillRule="nonzero"
          opacity=".7"
        />
      </svg>
    ),
  });

export const depositToast = () =>
  showToast({
    title: 'Yaay',
    description: 'You have successfully deposited',
    type: 'success',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32px"
        height="32px"
        viewBox="0 0 24 24"
        fill="#00FF00"
      >
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM9.29 16.29 5.7 12.7c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0L10 14.17l6.88-6.88c.39-.39 1.02-.39 1.41 0 .39.39.39 1.02 0 1.41l-7.59 7.59c-.38.39-1.02.39-1.41 0z" />
      </svg>
    ),
  });

export const withdrawToast = (status: 'success' | 'failed' = 'success') => {
  status === 'failed'
    ? showToast({
        title: 'Error',
        description: 'Failed, the withdraw was unsuccessfully!',
        type: 'error',
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32px"
            height="32px"
            viewBox="0 0 24 24"
            fill="#5f6368"
          >
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 11c-.55 0-1-.45-1-1V8c0-.55.45-1 1-1s1 .45 1 1v4c0 .55-.45 1-1 1zm1 4h-2v-2h2v2z" />
          </svg>
        ),
      })
    : showToast({
        title: 'Yaay',
        description: 'You have successfully withdrawn',
        type: 'success',
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32px"
            height="32px"
            viewBox="0 0 24 24"
            fill="#00FF00"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM9.29 16.29 5.7 12.7c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0L10 14.17l6.88-6.88c.39-.39 1.02-.39 1.41 0 .39.39.39 1.02 0 1.41l-7.59 7.59c-.38.39-1.02.39-1.41 0z" />
          </svg>
        ),
      });
};

export const addWethToast = (status: 'success' | 'failed' = 'success') => {
  status === 'failed'
    ? showToast({
        title: 'Error',
        description: 'Failed, the action was unsuccessful!',
        type: 'error',
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32px"
            height="32px"
            viewBox="0 0 24 24"
            fill="#5f6368"
          >
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 11c-.55 0-1-.45-1-1V8c0-.55.45-1 1-1s1 .45 1 1v4c0 .55-.45 1-1 1zm1 4h-2v-2h2v2z" />
          </svg>
        ),
      })
    : showToast({
        title: 'Yaay',
        description: 'You have successfully added WETH',
        type: 'success',
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32px"
            height="32px"
            viewBox="0 0 24 24"
            fill="#00FF00"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM9.29 16.29 5.7 12.7c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0L10 14.17l6.88-6.88c.39-.39 1.02-.39 1.41 0 .39.39.39 1.02 0 1.41l-7.59 7.59c-.38.39-1.02.39-1.41 0z" />
          </svg>
        ),
      });
};

export const nftActivatedToast = () =>
  showToast({
    title: 'Yaay',
    description: 'You activated the Aficionado NFT.',
    type: 'success',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32px"
        height="32px"
        viewBox="0 0 24 24"
        fill="#00FF00"
      >
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM9.29 16.29 5.7 12.7c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0L10 14.17l6.88-6.88c.39-.39 1.02-.39 1.41 0 .39.39.39 1.02 0 1.41l-7.59 7.59c-.38.39-1.02.39-1.41 0z" />
      </svg>
    ),
  });
