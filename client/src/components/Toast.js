import { NotificationManager } from 'react-notifications';

// eslint-disable-next-line
const createNotification = (type) => {
  if (type) {
    return () => {
      switch (type.type) {
        case 'info':
          NotificationManager.info(type.message);
          break;
        case 'success':
          NotificationManager.success('', type.message, 1000);
          break;
        case 'warning':
          NotificationManager.warning('', type.message, 1000);
          break;
        case 'error':
          NotificationManager.error('', type.message, 1000);
          break;
        default: break;
      }
    };
  }
};

export default createNotification;
