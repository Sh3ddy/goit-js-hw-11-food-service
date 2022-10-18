const delay=e=>new Promise((l=>{setTimeout((()=>{l(e)}),e)})),logger=e=>console.log(`Resolved after ${e}ms`);delay(2e3).then(logger),delay(1e3).then(logger),delay(1500).then(logger);
//# sourceMappingURL=index.6c6dc676.js.map
