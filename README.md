# Strapi Plugin Section Divider

> [!IMPORTANT]
> **This plugin has moved to [Strapi Field Kit](https://github.com/finnwasabi/strapi-field-kit/tree/main/packages/section-divider).**
> Version 2.0 and later are developed there; please open issues and pull requests in that repository.
> The npm package name is unchanged, and 1.x releases stay installable. See the [upgrade notes](https://github.com/finnwasabi/strapi-field-kit/tree/main/packages/section-divider#upgrading-from-1x).

A Strapi custom field plugin that adds visual section dividers to organize your content-type forms.

[![npm version](https://img.shields.io/npm/v/@tunghtml/strapi-plugin-section-divider.svg)](https://www.npmjs.com/package/@tunghtml/strapi-plugin-section-divider)
[![npm downloads](https://img.shields.io/npm/dm/@tunghtml/strapi-plugin-section-divider.svg)](https://www.npmjs.com/package/@tunghtml/strapi-plugin-section-divider)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Features

- 🎨 Visual section dividers with customizable labels
- 🌓 Automatic theme support (light/dark mode)
- 📏 Always 100% width for clear separation
- 🚀 No data storage - purely visual
- ✨ Seamless integration with Strapi Design System

## Installation

```bash
npm install @tunghtml/strapi-plugin-section-divider
# or
yarn add @tunghtml/strapi-plugin-section-divider
```

## Configuration

### 1. Enable the plugin

Add to `config/plugins.js`:

```javascript
module.exports = {
  // ...
  "section-divider": {
    enabled: true,
  },
};
```

### 2. Rebuild admin panel

```bash
npm run build
# or
yarn build
```

### 3. Restart Strapi

```bash
npm run develop
# or
yarn develop
```

## Usage

### Adding a Section Divider

**Method 1: Via Content-Type Builder UI**

1. Go to **Settings → Content-Type Builder**
2. Select your content-type (e.g., Article, Product)
3. Click **"Add another field"**
4. Select **"Section Divider"** from the **Custom** tab
5. Configure:
   - **Name**: Field name (e.g., `experienceSection`)
   - **Label**: Display text (e.g., "Experience Details")
6. Click **Save**

**Method 2: Edit schema directly**

Add to your content-type schema:

```json
{
  "attributes": {
    "experienceSection": {
      "type": "customField",
      "customField": "plugin::section-divider.section-divider"
    }
  }
}
```

### Organizing Your Form

Use **Configure the view** to arrange fields:

1. Go to **Settings → Content-Type Builder → [Your Content-Type]**
2. Click **"Configure the view"** (eye icon)
3. Drag the section divider fields to organize your form

## Example

```json
{
  "kind": "collectionType",
  "collectionName": "products",
  "info": {
    "singularName": "product",
    "pluralName": "products",
    "displayName": "Product"
  },
  "attributes": {
    "name": {
      "type": "string"
    },
    "price": {
      "type": "decimal"
    },

    "detailsSection": {
      "type": "customField",
      "customField": "plugin::section-divider.section-divider"
    },

    "description": {
      "type": "richtext"
    },
    "features": {
      "type": "json"
    },

    "metaSection": {
      "type": "customField",
      "customField": "plugin::section-divider.section-divider"
    },

    "seo": {
      "type": "component",
      "component": "shared.seo"
    }
  }
}
```

This will create a form with clear visual sections:

```
┌─────────────────────────────┐
│ name: [input]               │
│ price: [input]              │
│                             │
│ Details                     │
│ ─────────────────────────── │
│                             │
│ description: [richtext]     │
│ features: [json]            │
│                             │
│ Meta                        │
│ ─────────────────────────── │
│                             │
│ seo: [component]            │
└─────────────────────────────┘
```

## Benefits

- **Better UX**: Organize complex forms into logical sections
- **No Data Impact**: Dividers are purely visual - no database fields created
- **Flexible**: Add as many dividers as needed
- **Theme-Aware**: Automatically adapts to light/dark mode
- **Easy to Use**: Simple drag-and-drop in Content-Type Builder

## Compatibility

- Strapi v4.x
- Strapi v5.x
- Node.js >= 18.x

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Issues

Found a bug or have a feature request? [Open an issue](https://github.com/finnwasabi/strapi-plugin-section-divider/issues)

## License

MIT © [Tung Le](https://github.com/finnwasabi)

## Links

- [GitHub Repository](https://github.com/finnwasabi/strapi-plugin-section-divider)
- [npm Package](https://www.npmjs.com/package/@tunghtml/strapi-plugin-section-divider)
- [Strapi Documentation](https://docs.strapi.io)

---

Built by **Tung Le**. More Strapi plugins and case studies at [tungln.is-a.dev](https://tungln.is-a.dev).
