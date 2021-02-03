import React, { FC } from 'react';

interface AlertProps {
  message: string;
  onClose: () => void
}

const Alert: FC<AlertProps> = ({ message, onClose }) => {
  return(
    <div>
      <div onClick={onClose}></div>
      <div>
        <header>
          <p>{message}</p>
        </header>
        <footer style={{ justifyContent: 'center' }}>
          <button onClick={onClose}>Close</button>
        </footer>
      </div>
    </div>
  )
}

export default Alert