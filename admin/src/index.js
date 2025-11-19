import { prefixPluginTranslations } from "@strapi/helper-plugin";
import pluginId from "./pluginId";
import SectionDividerIcon from "./components/SectionDividerIcon";

export default {
  register(app) {
    app.customFields.register({
      name: "section-divider",
      pluginId: "section-divider",
      type: "string",
      intlLabel: {
        id: "section-divider.label",
        defaultMessage: "Section Divider",
      },
      intlDescription: {
        id: "section-divider.description",
        defaultMessage: "Add a visual divider to separate sections",
      },
      icon: SectionDividerIcon,
      components: {
        Input: async () => import("./components/Input"),
      },
      options: {
        base: [],
        advanced: [],
        validator: () => ({}),
      },
    });
  },

  bootstrap(app) {
    // Bootstrap logic if needed
  },

  async registerTrads({ locales }) {
    const importedTrads = await Promise.all(
      locales.map((locale) => {
        return import(`./translations/${locale}.json`)
          .then(({ default: data }) => {
            return {
              data: prefixPluginTranslations(data, pluginId),
              locale,
            };
          })
          .catch(() => {
            return {
              data: {},
              locale,
            };
          });
      }),
    );

    return Promise.resolve(importedTrads);
  },
};
