const Service = require('egg').Service;

class MomentService extends Service {
  async list() {
    return await this.app.mysql.select('moment');
  }
}

module.exports = MomentService;
