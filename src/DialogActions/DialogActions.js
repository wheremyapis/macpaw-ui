import React from 'react';
import cx from 'clsx';

const DialogActions = (props) => {
  const { className, children, ...other } = props;

  return (
    <div className={cx('dialogActions', className)} {...other}>
      {children}
    </div>
  );
};

export default DialogActions;
