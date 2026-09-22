# IMS Tool — Operations (2026 redesign)

Operations tool for the Candycon department in Lindon, rebuilt from the original monolithic file into a maintainable structure, with the interface in English.

## Structure

```
FullTool/
├── index.html          # HTML structure (no inline CSS/JS except where strictly necessary)
├── css/
│   └── styles.css      # All CSS: normalized original + 2026 design layer
├── js/
│   ├── app.js          # Full logic (4 original scripts concatenated in order)
│   └── ui.js           # UI enhancements: shift summary cards
└── favicon.svg         # IMS icon (crimson hexagon)
```

## What was improved

- **Grouped navigation** in the fixed header: Summary, Inventory, Production, Staff, and System (previously a flat row of buttons).
- **Summary cards** under the header with each module's counters; tapping one navigates to that module.
- The **Dashboard** button now lives in the Summary group (it used to be injected at the end of the row).
- **Day Word** moved from the dashboard to the Production group, next to the other production actions.
- **English interface**: navigation, panels, forms, guide, messages, and Word reports. Internal identifiers, `localStorage` keys, imported-file column names, and logic values were not translated.
- **Visual system**: crimson `#9B1C2E` + amber palette, 8-step type scale, uniform components (buttons, cards, tables, alerts, badges, inputs), and responsive layout.
- **Accessibility**: every button has an explicit `type`, every field has an associated label, no inline styles (converted to classes).

## Invariants (verified)

- Supabase configuration (`IMS_CONFIG`) byte-identical to the original.
- CDNs unchanged: `xlsx@0.18.5`, `jszip@3.10.1`, `@supabase/supabase-js@2` (jsDelivr).
- `localStorage` key: `shifthub_pro_v1`.
- 266 element IDs in the HTML (256 carried over from the original markup, 10 added by the redesign); all 12 panels are navigable.
- Works over `file://` (no `fetch` calls).

## Usage

Open `index.html` in a browser. No server or installation required.
