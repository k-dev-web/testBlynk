import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Main } from './modules/main/Main';
import reportWebVitals from './reportWebVitals';
import toast, { ToastBar, Toaster } from 'react-hot-toast';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Main />
    <Toaster>
      {t => (
        <ToastBar toast={t}>
          {({ icon, message }) => (
            <>
              {icon}
              {message}
              {t.type !== 'loading' && <button onClick={() => toast.dismiss(t.id)}>X</button>}
            </>
          )}
        </ToastBar>
      )}
    </Toaster>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
