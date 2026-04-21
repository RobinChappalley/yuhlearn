## 🏗️ PROJECT OVERVIEW

This is a Vue 3 front-end only application (no backend). Data comes from static JSON files.
Tech stack: Vue 3, Vite, Vue Router, Tailwind CSS, Lucide icons (via lucide-vue-next), Vitest.
No TypeScript. No component library. No i18n. No SSR.

---

## 📁 ARCHITECTURE — Feature-Sliced Design (FSD)

Follow the 7-layer Feature-Sliced Design architecture strictly.
src/
├── app/ # App-level setup: router, global styles, providers
│ ├── router/
│ │ └── index.js
│ ├── styles/
│ │ └── main.css # Tailwind directives + global styles
│ └── App.vue
├── processes/ # Multi-page flows (wizards, onboarding, etc.) — use only if needed
├── pages/ # One folder per route/page
│ └── home/
│ ├── ui/
│ │ └── HomePage.vue
│ └── index.js # Public API of the page (re-export)
├── widgets/ # Composite UI blocks combining features/entities
│ └── header/
│ ├── ui/
│ │ └── AppHeader.vue
│ └── index.js
├── features/ # User interactions (search, filter, toggle, form submit…)
│ └── search-products/
│ ├── ui/
│ │ └── SearchBar.vue
│ ├── model/
│ │ └── use-search.js
│ └── index.js
├── entities/ # Business objects (user, product, order…)
│ └── product/
│ ├── ui/
│ │ └── ProductCard.vue
│ ├── model/
│ │ └── use-products.js
│ ├── api/
│ │ └── products.json
│ └── index.js
├── shared/ # Reusable utilities, UI kit, constants, composables
│ ├── ui/
│ │ ├── BaseButton.vue
│ │ └── BaseInput.vue
│ ├── lib/
│ │ └── format-date.js
│ ├── composables/
│ │ └── use-local-storage.js
│ ├── assets/
│ │ ├── icons/ # SVG icon components extracted from Figma
│ │ └── illustrations/ # → these go to /public/illustrations at build
│ └── constants/
│ └── app-config.js
└── public/
└── illustrations/ # Static illustrations (served as-is)

### FSD Rules

- **Import direction**: layers can only import from layers BELOW them.
  `app → processes → pages → widgets → features → entities → shared`
  NEVER import upward. A feature CANNOT import from a widget or page.
- **Public API**: every slice (folder) MUST have an `index.js` that re-exports its public interface. Always import from the index, never from internal files.
  ```js
  // ✅ Good
  import { ProductCard } from "@/entities/product";
  // ❌ Bad
  import ProductCard from "@/entities/product/ui/ProductCard.vue";
  ```

Slice isolation: slices within the same layer CANNOT import from each other.
Example: entities/product cannot import from entities/user.
If two entities need to collaborate, do it in features/ or widgets/.
Naming slices: use kebab-case for folder names. One concept per slice.
When unsure where something belongs, ask yourself:
Is it reusable with zero business logic? → shared/
Does it represent a business object? → entities/
Does it represent a user action? → features/
Does it compose multiple features/entities into a UI block? → widgets/
Is it a routable page? → pages/

🧩 VUE CONVENTIONS
General

Composition API only with <script setup>. Never use Options API.
SFC order: <script setup> → <template> → <style>.
One component per file. No exceptions.
No TypeScript, no JSDoc typing. Plain JavaScript.

Script setup

<script setup>
// 1. Imports (vue first, then external libs, then internal by FSD layer)
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { ProductCard } from '@/entities/product'
import { BaseButton } from '@/shared/ui'

// 2. Props & Emits
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  items: {
    type: Array,
    default: () => [],
  },
})

const emit = defineEmits(['select', 'close'])

// 3. Composables
const router = useRouter()

// 4. Reactive state
const isOpen = ref(false)

// 5. Computed
const itemCount = computed(() => props.items.length)

// 6. Methods
function handleSelect(item) {
  emit('select', item)
}

// 7. Lifecycle
onMounted(() => {
  // ...
})
</script>

### Template

Use PascalCase for component names in templates: <ProductCard />, not <product-card />.
Use self-closing tags when there are no children: <BaseButton />.
Use :prop shorthand and @event shorthand.
Keep templates readable: if a v-for block exceeds 15 lines, extract a child component.
Always add :key on v-for.
Prefer v-if / v-else over v-show unless toggling frequently.

### Props

Always define props with object syntax (type + required/default).
Props are read-only. Never mutate a prop. Emit an event instead.

### Composables

Name composables use-_.js (kebab-case file, camelCase function).
A composable returns a plain object (not a ref): return { items, isLoading, fetchItems }.
Composables live in:
shared/composables/ if generic (e.g., useLocalStorage)
entities/_/model/ if tied to an entity
features/\*/model/ if tied to a feature

🎨 TAILWIND CSS
Setup
Tailwind is used for ALL styling. Do not write custom CSS unless absolutely necessary (e.g., a complex animation or a Tailwind limitation).
Style rules

No <style> blocks in SFC unless strictly necessary. Use Tailwind utility classes in templates.
Mobile-first: always write base styles for mobile, then use sm:, md:, lg:, xl: for larger screens.<!-- ✅ Mobile-first -->

<div class="flex flex-col gap-2 md:flex-row md:gap-4">

<!-- ❌ Desktop-first -->
<div class="flex flex-row gap-4 max-md:flex-col max-md:gap-2">

Extract repeated class patterns into components, NOT into @apply directives.
When a list of classes exceeds ~8 utilities, consider splitting into multiple elements or extracting a component.
Use the Tailwind theme (tailwind.config.js) for design tokens from Figma: colors, font sizes, spacing, border radius, shadows.

### Tailwind config

When extracting design tokens from Figma, put them in tailwind.config.js under theme.extend:
// tailwind.config.js
export default {
content: ['./index.html', './src/**/*.{vue,js}'],
theme: {
extend: {
colors: {
primary: {
50: '#...',
100: '#...',
// ... extracted from Figma design system
DEFAULT: '#...',
},
},
fontFamily: {
sans: ['Inter', 'sans-serif'], // match Figma font
},
borderRadius: {
card: '12px', // match Figma token
},
},
},
}

🖼️ FIGMA → CODE WORKFLOW
Reading Figma via MCP
When I ask you to implement a page or component from Figma:

Use the Figma MCP to inspect the node/frame I reference (by URL or node name).
Extract design tokens you see (colors, fonts, spacing, border-radius, shadows) and add them to tailwind.config.js if not already there.
Map Figma layers to FSD structure:
Full frame/page → pages/ layer
Repeated section (header, footer, sidebar) → widgets/
Interactive element (search, filter, modal trigger) → features/
Data-displaying card/list item → entities/
Primitive UI (button, input, badge) → shared/ui/

Ignore imprecise layer names in Figma. Name components based on their purpose, not the Figma layer name.
Translate Figma visuals into Tailwind classes faithfully. Match spacing, sizing, colors, and typography as closely as possible.

Icons

The project uses Lucide icons via lucide-vue-next.
When you see an icon in a Figma frame, identify the closest Lucide icon match and use it:<script setup>
import { Search, ChevronDown } from 'lucide-vue-next'
</script>
<template>
<Search class="h-5 w-5 text-gray-500" />
</template>

If an icon does NOT exist in Lucide, create a custom SVG component in shared/assets/icons/ as a Vue SFC:<!-- shared/assets/icons/IconCustomLogo.vue -->
<template>
<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">

<!-- SVG paths extracted from Figma -->
</svg>
</template>

Illustrations & images

Decorative illustrations and images go in /public/illustrations/.
Reference them in templates as /illustrations/filename.svg (absolute path from public root).
If the Figma frame contains an illustration, extract the SVG content and save it as a file in /public/illustrations/.

📦 STATIC DATA (JSON)

Each entity has its own JSON file in entities/<entity-name>/api/<entity-name>.json.
JSON files contain an array of objects.
Create a composable in entities/<entity-name>/model/use-<entity-name>.js that imports and exposes the data:// entities/product/model/use-products.js
import { ref } from 'vue'
import productsData from '../api/products.json'

export function useProducts() {
const products = ref(productsData)

function getProductById(id) {
return products.value.find((p) => p.id === id)
}

return { products, getProductById }
}

The JSON should contain realistic sample data (not "Lorem ipsum"). Generate plausible English content that matches what the Figma design shows.

🛣️ ROUTING

Route definitions live in app/router/index.js.
Use lazy loading for all page components:const routes = [
{
path: '/',
name: 'home',
component: () => import('@/pages/home/ui/HomePage.vue'),
},
]

Route names use kebab-case: 'product-detail', 'user-settings'.
Use route params for dynamic segments: /products/:id.
Use <RouterView /> and <RouterLink /> (PascalCase) in templates.

✅ TESTING (Vitest)

Write tests only for composables (business logic in model/ folders and shared/composables/).
Test files live next to the file they test: use-products.js → use-products.test.js.
Use this structure:// entities/product/model/use-products.test.js
import { describe, it, expect } from 'vitest'
import { useProducts } from './use-products'

describe('useProducts', () => {
it('returns all products', () => {
const { products } = useProducts()
expect(products.value).toHaveLength(5) // match your JSON
})

it('finds a product by id', () => {
const { getProductById } = useProducts()
const product = getProductById('1')
expect(product).toBeDefined()
expect(product.id).toBe('1')
})
})

Do NOT write tests for Vue components, templates, or visual elements.
Run tests with npx vitest or npx vitest run.

✍️ NAMING CONVENTIONS

What
Convention
Example

Folders
kebab-case
search-products/

Vue SFC files
PascalCase
ProductCard.vue

JS files
kebab-case
use-products.js

JSON data files
kebab-case
products.json

Component name in template
PascalCase
<ProductCard />

Composable function
camelCase
useProducts()

Props
camelCase
:isActive="true"

Events emitted
camelCase
emit('updateValue')

CSS classes (Tailwind)
utility classes
class="flex items-center"

Route names
kebab-case
'product-detail'

Constants
UPPER_SNAKE
MAX_ITEMS_PER_PAGE

🔧 PRETTIER
Prettier is configured. Do not override. Follow this config:
{
"semi": false,
"singleQuote": true,
"printWidth": 100
}

No semicolons.
Single quotes everywhere.
Lines wrap at 100 characters.
Always format code as if Prettier will run on save.

📐 CODE QUALITY RULES

DRY: if you write the same markup/logic in 2+ places, extract a component or composable.
Small components: a component should ideally be under 100 lines. If it grows beyond 150, split it.
No magic values: use Tailwind theme tokens or constants. No hardcoded colors like #3B82F6 in templates.
No any patterns: even without TypeScript, keep data structures predictable. Document object shapes with a comment when creating JSON data.
Defensive access: use optional chaining (?.) when accessing nested data that might be undefined.
No console.log in committed code unless inside a if (import.meta.env.DEV) guard.
Prefer const over let. Never use var.
Prefer template literals over string concatenation.
Early returns over nested if/else blocks.
Semantic HTML: use <nav>, <main>, <section>, <article>, <button> (not <div> with click handlers).

🚀 WHEN GENERATING CODE

Always generate complete, working files. No placeholders like // TODO or // add logic here.
When creating a new slice, always create the index.js public API file.
When creating a new page, also add the route in app/router/index.js.
When referencing Figma, always translate the visual design faithfully — spacing, sizes, colors, fonts — don't approximate.
Group related file creations together. If a page needs a widget and an entity, generate all files in one response.
If you need to install a package (e.g., lucide-vue-next, tailwindcss), state the install command explicitly before the code.
