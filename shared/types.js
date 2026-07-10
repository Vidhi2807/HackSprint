/**
 * @typedef {Object} User
 * @property {string} _id
 * @property {string} name
 * @property {string} email
 * @property {string} avatar
 * @property {Object} preferences
 */

/**
 * @typedef {Object} Message
 * @property {string} role - 'user' | 'assistant' | 'system'
 * @property {string} content
 * @property {Date} timestamp
 */

/**
 * @typedef {Object} Conversation
 * @property {string} _id
 * @property {string} userId
 * @property {string} title
 * @property {Message[]} messages
 */

/**
 * @typedef {Object} KnowledgeNode
 * @property {string} _id
 * @property {string} title
 * @property {string} content
 * @property {string} type
 * @property {string[]} tags
 * @property {string[]} connections
 */

/**
 * @typedef {Object} ApiResponse
 * @property {boolean} success
 * @property {string} message
 * @property {*} data
 */
