import { message as alert } from 'antd';

export default (errMessage, error) => {
  switch (errMessage) {
    case 'No token provided':
      alert.error('You need to login to perform the action');
      break;
    case 'Your account has not been verified, please verify to continue':
      alert.error('Your account has not been verified, please verify to continue');
      break;
    default:
      alert.error(error);
      break;
  }
};
