const ClevertapReact = {

  initialize: function (accountId) {
    window.clevertap = { event: [], profile: [], account: [], onUserLogin: [], notifications: [] };
    window.clevertap.account.push({ 'id': accountId });
    (function () {
      const wzrk = document.createElement('script');
      wzrk.type = 'text/javascript';
      wzrk.async = true;
      wzrk.src = ('https:' === document.location.protocol ? 'https://d2r1yp2w7bby2u.cloudfront.net' : 'http://static.clevertap.com') + '/js/a.js';
      const s = document.getElementsByTagName('script')[0];
      s.parentNode.insertBefore(wzrk, s);
    })();
  },

  event: function (name, payload) {
    if(!window.clevertap) return;
    if (payload) {
      window.clevertap.event.push(name, payload);
    } else {
      window.clevertap.event.push(name);
    }

  },

  profile: function (payload) {
    if(!window.clevertap) return;
    window.clevertap.profile.push(payload);
  },

  logout: function () {
    if(!window.clevertap) return;
    window.clevertap.logout();
  }
};

module.exports = ClevertapReact;