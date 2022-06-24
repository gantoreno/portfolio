import { EmojiProvider as AppleEmojiProvider } from 'react-apple-emojis';
import emojiData from 'react-apple-emojis/lib/data.json';

export const EmojiProvider = ({ children }) => {
  return <AppleEmojiProvider data={emojiData}>{children}</AppleEmojiProvider>;
};
