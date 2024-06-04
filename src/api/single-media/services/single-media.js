'use strict';

/**
 * single-media service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::single-media.single-media');
