import SnackbarProvider from 'react-simple-snackbar';
import { LanguageProvider } from './language';

const Providers = ({ children }) => (
  <SnackbarProvider>
    <LanguageProvider>{children}</LanguageProvider>
  </SnackbarProvider>
);

export default Providers;
