class Vue {
    constructor(options) {
      const el = document.querySelector(options.el);
      const data = options.data;
      
      Object.keys(data).forEach(key => {
        el.innerHTML = el.innerHTML.replace(
          `{{ ${key} }}`,
          data[key]
        );
      });
  }