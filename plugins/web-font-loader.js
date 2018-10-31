export default () => {
  window.WebFontConfig = {
    loading() {
      console.log('loading');
    },
    active() {
      console.log('active');
    },
    google: {
      families: ['Amatic+SC:700']
    }
 };

 (function(d) {
    var wf = d.createElement('script'), s = d.scripts[0];
    wf.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js';
    wf.async = true;
    s.parentNode.insertBefore(wf, s);
 })(document);
}
