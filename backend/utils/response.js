/**
 * Standardized API response helpers
 */
export const success = (res, data, message = 'Success', statusCode = 200) => {
  return res.status(statusCode).json({ success: true, message, data });
};

export const error = (res, message = 'Error', statusCode = 500) => {
  return res.status(statusCode).json({ success: false, message });
};

export const paginated = (res, data, total, page, limit) => {
  return res.status(200).json({
    success: true,
    data,
    pagination: { total, page, limit, pages: Math.ceil(total / limit) },
  });
};
