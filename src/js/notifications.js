import { error } from '@pnotify/core/';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';

const inputError = () => {
   error({
      text: "Too many matches found. Please enter a more specific query!",
      width: "380px",
      delay: 2000,
   });
};
    
export default inputError;