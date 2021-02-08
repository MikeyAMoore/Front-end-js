class Vue {
    constructor(options) {
      this.el = document.querySelector(options.el);
      this.data = options.data;
  
      this.replaceTemplateStrings();
    }
  
    replaceTemplateStrings() {
      const stack = [this.el];
      while (stack.length) {
        const n = stack.pop();
        if (n.childNodes.length) {
          stack.push(...n.childNodes);
        }
  
        if (n.nodeType === Node.TEXT_NODE) {
          Object.keys(this.data).forEach(key => {
            n.textContent = n.textContent.replace(
              new RegExp(`{{ ${key} }}`, "g"),
              this.data[key]
            );
          });
        }
      }
    }
  }