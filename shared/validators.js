// Shared validators
export const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
export const isValidUrl = (url) => { try { new URL(url); return true; } catch { return false; } };
export const isEmpty = (value) => value === null || value === undefined || value === '' || (Array.isArray(value) && value.length === 0);
export const truncate = (str, maxLength = 100) => str.length > maxLength ? str.substring(0, maxLength) + '...' : str;
