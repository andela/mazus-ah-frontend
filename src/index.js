import React from 'react';
import ReactDOM from 'react-dom';
import Toastr from 'toastr';
import App from './app';
import '../node_modules/toastr/build/toastr.css';

Toastr.options = {
  closeButton: true,
  debug: false,
  newestOnTop: false,
  progressBar: false,
  positionClass: 'toast-top-center',
  preventDuplicates: false,
  onclick: null,
  showDuration: '5000',
  hideDuration: '3000',
  timeOut: '5000',
  extendedTimeOut: '5000',
  showEasing: 'swing',
  hideEasing: 'linear',
  showMethod: 'fadeIn',
  hideMethod: 'fadeOut',
};

ReactDOM.render(<App />,
  document.getElementById('root'));
