import PluginIcon from "./admin/src/components/SectionDividerIcon";

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
      icon: PluginIcon,
      components: {
        Input: async () => import("./admin/src/components/Input"),
      },
      options: {
        base: [],
        advanced: [],
      },
    });
  },
};
