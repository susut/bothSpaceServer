'use strict';

const Controller = require('egg').Controller;

class MomentController extends Controller {
  async list() {
    const { ctx } = this;
    ctx.body = await ctx.service.moment.list();
  }
}

module.exports = MomentController;
