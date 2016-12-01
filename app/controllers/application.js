import Ember from 'ember';
const {inject: {service}} = Ember;

export default Ember.Controller.extend({
  store: service(),
  options: undefined,

  _loadFixtures() {
    const store = this.get('store');
    for (let i = 0; i < 200; ++i) {
      store.pushPayload({
        data: [{
          id: i,
          type: 'user',
          attributes: {
            name: 'name' + i,
          },
        }],
      });
    }
  },

  init() {
    this._super(...arguments);

    this._loadFixtures();

    this.set('options', this.get('store').peekAll('user'));
  },

  actions: {
    dummy() {
    },
  },
});
