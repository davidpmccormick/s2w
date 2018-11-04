import cookie from 'cookie-cutter';

export default((_, inject) => {
  const experiments = cookie.get('s2w_experiments') || [];

  inject('s2w', {
    _experiments: experiments,
    get experiments() {
      return this._experiments;
    },
    set experiments(value) {
      this._experiments = value;
    }
  });
});
