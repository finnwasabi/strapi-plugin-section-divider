export default {
  register({ strapi }) {
    strapi.customFields.register({
      name: "section-divider",
      plugin: "section-divider",
      type: "string",
    });
  },
};
