import { v4 } from 'uuid';

const deepReplaceProperty = (content, target, identifier) => {
  for (let key of Object.keys(content)) {
    if (key === target && content[key] === identifier) {
      content[key] = v4();
    }

    if (typeof content[key] === 'object' && !Array.isArray(content[key])) {
      content[key] = deepReplaceProperty(content[key], target, identifier);
    } else if (Array.isArray(content[key])) {
      content[key] = content[key].map(children =>
        deepReplaceProperty(children, target, identifier)
      );
    }
  }

  return content;
};

export const useIndexedContent = (
  content,
  target = 'id',
  identifier = '{}'
) => {
  return deepReplaceProperty(content, target, identifier);
};
