class LogController {
  constructor($log) {
    'ngInject';
    this.$log = $log;
    this.log = this.extract(this.model);
    this.color = this.getColor();
  }

  getColor() {
    switch (this.log.level.toUpperCase()) {
      case 'INFO':
        return 'text-info';
      case 'WARNING':
        return 'text-warning';
      case 'SEVERE':
      case 'ERROR':
        return 'text-danger';
      case 'DEBUG':
        return 'text-muted';
      default:
        return '';
    }
  }

  //some log messages contains as a message object
  extract(log) {
    try {
      let obj = angular.fromJson(log.message);
      let newLog = obj.message;
      if (newLog) {
        newLog.message = newLog.text;
        return newLog;
      }
    } catch (ex) {
      // this.$log.debug(ex);
      return log;
    }
  }

  exclude(){
    this.filtering.excludeList.push(this.log);
  }
}


export let LogComponent = {
  bindings: {
    model: '<',
    filtering: '=?',
    noToolbar: '@?'
  },
  templateUrl: 'app/components/log/log.html',
  controller: LogController
};
