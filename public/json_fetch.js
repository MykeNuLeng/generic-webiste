const fetch = require("node-fetch");
const jsonFetch = {
  getEvents: async function () {
    const response = await fetch("http://localhost:9090/micro/good");
    const events = await response.json();

    return events;
  },

  snowboardCount: async function () {
    const events = await this.getEvents();
    let total = 0;
    events.forEach((element) => {
      if (element.event.name_tracker === "SnowboardTracker") total += 1;
    });
    return total;
  },

  skiCount: async function () {
    const events = await this.getEvents();
    let total = 0;
    for (i = 0; i < events.length; i++) {
      if (events[i].event.name_tracker === "SkiTracker") {
        total += 1;
      }
    }
    return total;
  },

  getScore: async function () {
    snowboarding = await this.snowboardCount();
    skiing = await this.skiCount();
    return {
      snowboarding,
      skiing
    };
  }
};

module.exports = jsonFetch;
