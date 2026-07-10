/**
 * Auth middleware stub
 * TODO: Implement JWT verification
 */
export const auth = (req, res, next) => {
  // Placeholder — skip auth in development
  req.userId = 'dev-user';
  next();
};
