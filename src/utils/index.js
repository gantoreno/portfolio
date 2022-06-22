export const joinClassNames = (...classNames) => {
  return classNames.filter(className => !!className).join(' ');
};
