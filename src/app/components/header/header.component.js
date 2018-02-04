class HeaderController {
  constructor() {
    'ngInject';
  }

  title() {
    if (this.model && this.model.commit) {
      return this.model.commit.split('\n', 1)[0];
    }
  }
}


export let HeaderComponent = {
  bindings: {
    model: '<'
  },
  templateUrl: 'app/components/header/header.html',
  controller: HeaderController
};
