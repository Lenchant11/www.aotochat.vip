// index-telegram.js

(function() {
  var GA_ID = 'AW-18222439736';
  var CONVERSION_ID = 'AW-18222439736/U351CNuWib0cELi6kfFD';
  
  var script = document.createElement('script');
  script.async = true;
  script.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
  document.head.appendChild(script);
  
  window.dataLayer = window.dataLayer || [];
  window.gtag = function(){ dataLayer.push(arguments); };
  gtag('js', new Date());
  gtag('config', GA_ID);
  
  window.gtag_report_conversion = function(url) {
    var callback = function() { if (url) window.open(url, '_blank'); };
    gtag('event', 'conversion', {
      'send_to': CONVERSION_ID,
      'value': 5.0,
      'currency': 'USD',
      'event_callback': callback
    });
    return false;
  };
  
  window.handleTelegramClick = function(event, url) {
    event.preventDefault();
    window.gtag_report_conversion(url);
    return false;
  };
  
  function bindLinks() {
    document.querySelectorAll('a[href*="t.me"]').forEach(function(link) {
      if (link.hasAttribute('data-tracked')) return;
      link.setAttribute('data-tracked', 'true');
      link.addEventListener('click', function(e) {
        e.preventDefault();
        window.gtag_report_conversion(this.href);
      });
    });
  }
  
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bindLinks);
  } else {
    bindLinks();
  }
  
  console.log('Telegram 转化跟踪已启用');
})();
