import { EmojiProvider } from './emoji';
import { LanguageProvider } from './language';
import { SnackbarProvider } from './snackbar';

const Providers = ({ children }) => (
  <EmojiProvider>
    <SnackbarProvider>
      <LanguageProvider>{children}</LanguageProvider>
    </SnackbarProvider>
  </EmojiProvider>
);

export default Providers;
