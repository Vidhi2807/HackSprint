// Extension hooks stub
export const useExtension = () => {
  return { isExtension: typeof chrome !== 'undefined' && chrome.runtime };
};
