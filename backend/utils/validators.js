/**
 * Validation utility stubs
 */
export const isValidObjectId = (id) => /^[a-fA-F0-9]{24}$/.test(id);

export const isValidUrl = (url) => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

export const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
