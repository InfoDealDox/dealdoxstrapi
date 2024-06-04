'use strict';

/**
 * single-media router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::single-media.single-media');
