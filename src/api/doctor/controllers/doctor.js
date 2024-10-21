'use strict';

/**
 * doctor controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::doctor.doctor',({ strapi }) =>  ({
async findOne(ctx){
    const {id}=ctx.params;

    const entity=await strapi.db.query('api::doctor.doctor').findOne({
        where:{id:id},
        populate:["image"]
    });
    const sanitizedEntity=await this.sanitizeOutput(entity, ctx);

    return this.transformResponse(sanitizedEntity);
}
}));
