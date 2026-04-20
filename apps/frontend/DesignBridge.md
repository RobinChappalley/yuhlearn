---
title: "DESIGN.md — YUH-Mobile-Style-Guide_UPDATE_2020-05-26"
generated: "2026-04-20"
generator: "DesignOps Tools: DesignBridge v2.0"
source_file: "YUH-Mobile-Style-Guide_UPDATE_2020-05-26"
purpose: "AI-ready design system specification"
---

# DESIGN.md — YUH-Mobile-Style-Guide_UPDATE_2020-05-26

> **AI AGENT INSTRUCTIONS — READ FIRST, APPLY TO ALL OUTPUT**
>
> This file is the complete visual specification for **"YUH-Mobile-Style-Guide_UPDATE_2020-05-26"**.
> Apply every rule below to every line of UI, HTML, CSS, JSX, or component code you generate.
>
> 1. **Colours** — Use only exact hex values or `var(--token)` names from this file. No substitutions.
> 2. **Typography** — Match font family, weight, size, line-height exactly.
> 3. **Spacing** — Use only values from the spacing/sizing token tables.
> 4. **Border radius** — Use only the defined radius tokens.
> 5. **Components** — Mirror defined structures. Honour variant property names exactly.
> 6. **Shadows** — Apply defined elevation styles. Do not invent shadows.
> 7. **Unknowns** — If a visual decision is not defined here, ask before inventing it.

## How to Use

| Platform | Instructions |
|----------|-------------|
| **Google Stitch** | Upload via *Design System → DESIGN.md* |
| **Claude Code** | Place in project root, reference as `@DESIGN.md` |
| **Cursor / Windsurf** | Add to context, prompt: *"Follow @DESIGN.md for all visual decisions"* |
| **Antigravity** | Import via *Design System settings* |
| **OpenAI Codex** | Paste as system context before UI tasks |
| **Any LLM** | Paste at top of session as system context |

```
You have the design system for "DesignBridge.md" in DESIGN.md. Follow it precisely for ALL visual decisions. No deviations.
```

## Design System Summary

- **Source**: YUH-Mobile-Style-Guide_UPDATE_2020-05-26 · Generated: 2026-04-20
- **Generator**: DesignOps Tools: DesignBridge — [designops.tools](https://designops.tools)
- **Color tokens**: 67
- **Text styles**: 38
- **Effect styles**: 1
- **Paint styles**: 1
- **Standalone components**: 544

## Color Tokens

> Use only these values. Reference as CSS custom properties (`var(--token-name)`).

### Colors

| Token | Value | Alias source |
|-------|-------|-------------|
| `Core colours/Swiss Black` | `#151a21` | — |
| `Core colours/Swiss Black/80%` | `#44484d` | — |
| `Core colours/Swiss Black/60%` | `#73767a` | — |
| `Core colours/Swiss Black/40%` | `#a1a3a6` | — |
| `Core colours/Swiss Black/20%` | `#d0d1d3` | — |
| `Core colours/Swiss Black/DARK` | `#000000` | — |
| `Core colours/Swiss Orange` | `#fa5b35` | — |
| `Core colours/Swiss Orange/80%` | `#fb7c5d` | — |
| `Core colours/Swiss Orange/60%` | `#fc9d86` | — |
| `Core colours/Swiss Orange/40%` | `#fdbdae` | — |
| `Core colours/Swiss Orange/20%` | `#feded7` | — |
| `Core colours/Swiss Orange/DARK 1` | `#ae3b1b` | — |
| `Core colours/Swiss Orange/DARK 2` | `#5e1400` | — |
| `Extended palette/Swiss Lilac` | `#ebddf5` | — |
| `Extended palette/Swiss Dusk Pink` | `#fab4cc` | — |
| `Extended palette/Swiss Lilac/80%` | `#efe4f7` | — |
| `Extended palette/Swiss Lilac/60%` | `#f3ebf9` | — |
| `Extended palette/Swiss Lilac/40%` | `#f7f1fb` | — |
| `Extended palette/Swiss Lilac/20%` | `#fbf8fd` | — |
| `Extended palette/Swiss Lilac/DARK 1` | `#a49aab` | — |
| `Extended palette/Swiss Lilac/DARK 2` | `#574365` | — |
| `Extended palette/Swiss Dusk Pink/80%` | `#fbc3d6` | — |
| `Extended palette/Swiss Dusk Pink/60%` | `#fcd2e0` | — |
| `Extended palette/Swiss Dusk Pink/40%` | `#fde1eb` | — |
| `Extended palette/Swiss Dusk Pink/20%` | `#fef0f5` | — |
| `Extended palette/Swiss Dusk Pink/DARK 1` | `#ae7d8e` | — |
| `Extended palette/Swiss Ice/80%` | `#93d1ec` | — |
| `Extended palette/Swiss Ice/60%` | `#aeddf1` | — |
| `Extended palette/Swiss Ice/40%` | `#c9e8f5` | — |
| `Extended palette/Swiss Ice/20%` | `#e4f4fa` | — |
| `Extended palette/Swiss Ice/DARK 1` | `#548ba3` | — |
| `Extended palette/Swiss Lavender/80%` | `#d6c1e1` | — |
| `Extended palette/Swiss Lavender/60%` | `#e0d0e9` | — |
| `Extended palette/Swiss Lavender/40%` | `#ebe0f0` | — |
| `Extended palette/Swiss Lavender/20%` | `#f5eff8` | — |
| `Extended palette/Swiss Lavender/DARK 1` | `#8e7b98` | — |
| `Extended palette/Swiss Ice` | `#78c6e7` | — |
| `Extended palette/Swiss Lavender` | `#ccb1da` | — |
| `Extended palette/Swiss Dusk Pink/DARK 2` | `#712f46` | — |
| `Extended palette/Swiss Ice/DARK 2` | `#104257` | — |
| `Extended palette/Swiss Lavender/DARK 2` | `#5b3d6b` | — |
| `UI Exclusive Colour Palette/Swiss App Blue` | `#0a84ff` | — |
| `UI Exclusive Colour Palette/Swiss App Red` | `#e02020` | — |
| `UI Exclusive Colour Palette/Swiss App Green` | `#02b089` | — |
| `UI Exclusive Colour Palette/Swiss App Dark Grey` | `#8b8e92` | — |
| `UI Exclusive Colour Palette/Swiss App Blue/80%` | `#3b9dff` | — |
| `UI Exclusive Colour Palette/Swiss App Blue/60%` | `#6cb5ff` | — |
| `UI Exclusive Colour Palette/Swiss App Blue/40%` | `#9dceff` | — |
| `UI Exclusive Colour Palette/Swiss App Blue/20%` | `#cee6ff` | — |
| `UI Exclusive Colour Palette/Swiss App Blue/DARK 1` | `#065cb2` | — |
| `UI Exclusive Colour Palette/Swiss App Blue/DARK 2` | `#002262` | — |
| `UI Exclusive Colour Palette/Swiss App Red/80%` | `#e64d4d` | — |
| `UI Exclusive Colour Palette/Swiss App Red/60%` | `#ec7979` | — |
| `UI Exclusive Colour Palette/Swiss App Red/40%` | `#f3a6a6` | — |
| `UI Exclusive Colour Palette/Swiss App Red/20%` | `#f9d2d2` | — |
| `UI Exclusive Colour Palette/Swiss App Red/DARK 1` | `#9b1616` | — |
| `UI Exclusive Colour Palette/Swiss App Red/DARK 2` | `#540000` | — |
| `UI Exclusive Colour Palette/Swiss App Green/80%` | `#35c0a1` | — |
| `UI Exclusive Colour Palette/Swiss App Green/60%` | `#67d0b8` | — |
| `UI Exclusive Colour Palette/Swiss App Green/40%` | `#9adfd0` | — |
| `UI Exclusive Colour Palette/Swiss App Green/20%` | `#ccefe7` | — |
| `UI Exclusive Colour Palette/Swiss App Green/DARK 1` | `#017a5f` | — |
| `UI Exclusive Colour Palette/Swiss App Green/DARK 2` | `#00382c` | — |
| `UI Exclusive Colour Palette/Swiss Medium Grey` | `#e9e7eb` | — |
| `UI Exclusive Colour Palette/Swiss Light Grey` | `#f5f2f8` | — |
| `UI Exclusive Colour Palette/Swiss Extra Light Grey` | `#f9f7fb` | — |
| `Core colours/Swiss White` | `#ffffff` | — |

## String Tokens

### Colors

- `String`: `Back`

## Paint Styles

| Style | Value |
|-------|-------|
| `iOS System Tints/System Orange Light` | `#ff9500` |

## Typography

> Match font family, weight, size, and line-height exactly. Do not substitute fonts.

| Style | Family | Weight | Size | Line height | Letter spacing |
|-------|--------|--------|------|-------------|----------------|
| `Heading styles/TitleImpact/Bold` | Proxima Soft | 700 | 45px | 50px | 0 |
| `Heading styles/TitleImpact/Semi` | Proxima Soft | 600 | 45px | 50px | 0 |
| `Heading styles/TitleImpact/Thin` | Proxima Soft | 300 | 45px | 50px | 0 |
| `Heading styles/TitleLarge/Bold` | Proxima Soft | 600 | 35px | 40px | 0 |
| `Heading styles/TitleLarge/Semi` | Proxima Soft | 400 | 35px | 40px | 0 |
| `Heading styles/TitleLarge/Thin` | Proxima Soft | 300 | 35px | 40px | 0 |
| `Heading styles/TitleMedium/Bold` | Proxima Soft | 700 | 26px | 32px | 0 |
| `Heading styles/TitleMedium/Semi` | Proxima Soft | 600 | 26px | 32px | 0 |
| `Heading styles/TitleMedium/Thin` | Proxima Soft | 300 | 26px | 32px | 0 |
| `Heading styles/TitleSmall/Bold` | Proxima Soft | 700 | 20px | 24px | 0 |
| `Heading styles/TitleSmall/Semi` | Proxima Soft | 600 | 20px | 24px | 0 |
| `Heading styles/TitleSmall/Thin` | Proxima Soft | 300 | 20px | 24px | 0 |
| `Heading styles/TitleLittle/Bold` | Proxima Soft | 700 | 17px | 20px | 0 |
| `Heading styles/TitleLittle/Semi` | Proxima Soft | 600 | 17px | 20px | 0 |
| `Heading styles/TitleLittle/Thin` | Proxima Soft | 300 | 17px | 20px | 0 |
| `Heading styles/TitleTiny/Bold` | Proxima Soft | 700 | 14px | 16px | 0 |
| `Heading styles/TitleTiny/Semi` | Proxima Soft | 600 | 14px | 16px | 0 |
| `Heading styles/TitleTiny/Thin` | Proxima Soft | 300 | 14px | 16px | 0 |
| `Body & detail styles/Subtitle/Subtitle 1` | Proxima Soft | 400 | 20px | 24px | 0 |
| `Body & detail styles/Subtitle/Subtitle 2` | Proxima Soft | 600 | 17px | 20px | 0 |
| `Body & detail styles/BodyBig/BodyBig 1` | Proxima Soft | 600 | 16px | 20px | 0 |
| `Body & detail styles/BodyBig/BodyBig 2` | Proxima Soft | 400 | 16px | 20px | 0 |
| `Body & detail styles/BodyRegular/BodyRegular 1` | Proxima Soft | 600 | 14px | 16px | 0 |
| `Body & detail styles/BodyRegular/BodyRegular 1` | Proxima Soft | 400 | 14px | 16px | 0 |
| `Body & detail styles/BodySmall/BodySmall 1` | Proxima Soft | 600 | 12px | 14px | 0 |
| `Body & detail styles/BodySmall/BodySmall 1` | Proxima Soft | 400 | 12px | 14px | 0 |
| `Body & detail styles/Overline/CaptionBig 1` | Proxima Soft | 600 | 11px | 13px | 0 |
| `Body & detail styles/Overline/CaptionBig 1` | Proxima Soft | 400 | 11px | 13px | 0 |
| `Body & detail styles/Overline/CaptionSmall 1` | Proxima Soft | 600 | 10px | 12px | 0 |
| `Body & detail styles/Overline/CaptionSmall 2` | Proxima Soft | 400 | 10px | 12px | 0 |
| `Link styles/ButtonBig/ButtonBig 1` | Proxima Soft | 600 | 20px | 24px | 0 |
| `Link styles/ButtonBig/ButtonBig 1` | Proxima Soft | 400 | 20px | 24px | 0 |
| `Link styles/ButtonMedium/ButtonMedium 1` | Proxima Soft | 600 | 17px | 20px | 0 |
| `Link styles/ButtonMedium/ButtonMedium 1` | Proxima Soft | 400 | 17px | 20px | 0 |
| `Link styles/ButtonSmall/ButtonSmall 1` | Proxima Soft | 600 | 14px | 16px | 0 |
| `Link styles/ButtonSmall/ButtonSmall 1` | Proxima Soft | 400 | 14px | 16px | 0 |
| `Link styles/ButtonTiny/ButtonTiny 1` | Proxima Soft | 600 | 12px | 14px | 0 |
| `Link styles/ButtonTiny/ButtonTiny 2` | Proxima Soft | 400 | 12px | 14px | 0 |

**Font families used:** Proxima Soft

## Shadows & Effects

> Apply these exact values. Do not invent new shadows.

### purple shadow

- `box-shadow: 0px 4px 60px 6px #5743651a;`

## Components

> Replicate structures exactly. Honour variant property names for interactive states.

### Standalone Components

#### icons/payment-categories/home and maintainance
- **Size**: 34 × 34px

#### icons/avatars/default
- **Size**: 34 × 34px

#### icons/avatars/human 1
- **Size**: 34 × 34px

#### icons/avatars/rocket
- **Size**: 34 × 34px

#### icons/avatars/rock sign
- **Size**: 34 × 34px

#### icons/avatars/peace sign
- **Size**: 34 × 34px

#### icons/avatars/human 2
- **Size**: 34 × 34px

#### icons/avatars/diamond
- **Size**: 34 × 34px

#### icons/avatars/gold bar
- **Size**: 34 × 34px

#### icons/avatars/bull
- **Size**: 34 × 34px

#### icons/avatars/bear
- **Size**: 34 × 34px

#### icons/navigational/scan to pay
- **Size**: 32 × 32px

#### Controls/Table View/Row/x/Disclosure/Light
- **Size**: 8 × 44px

#### icons/contextual-nav/add payment/Black
- **Size**: 32 × 32px

#### icons/system/back-black
- **Size**: 24 × 24px

#### icons/contextual-nav/currencies/Black
- **Size**: 32 × 32px

#### icons/investment-categories/producer manufactoring
- **Size**: 34 × 34px

#### icons/navigational/spending limits
- **Size**: 32 × 32px

#### icons/info/customer support open
- **Size**: 32 × 32px

#### icons/info/unlocked
- **Size**: 32 × 32px

#### icons/investment-categories/electronic technology
- **Size**: 34 × 34px

#### icons/payment-categories/restaurant and food services
- **Size**: 34 × 34px

#### icons/navigational/documents
- **Size**: 32 × 32px

#### icons/payment-categories/groceries
- **Size**: 34 × 34px

#### icons/investment-categories/consumer non-durables
- **Size**: 34 × 34px

#### icons/pillars/invest/Black
- **Size**: 32 × 32px

#### icons/pillars/invest/Orange
- **Size**: 32 × 32px

#### icons/pillars/dashboard/black
- **Size**: 32 × 32px

#### icons/investment-categories/utilities
- **Size**: 34 × 34px

#### icons/payment-categories/services
- **Size**: 34 × 34px

#### icons/investment-categories/technology services
- **Size**: 34 × 34px

#### icons/investment-categories/health
- **Size**: 34 × 34px

#### icons/investment-categories/theme-trading
- **Size**: 34 × 34px

#### icons/investment-categories/shares
- **Size**: 34 × 34px

#### icons/investment-categories/ETF
- **Size**: 34 × 34px

#### icons/navigational/pin code
- **Size**: 32 × 32px

#### icons/payment-categories/education
- **Size**: 34 × 34px

#### icons/navigational/add new device
- **Size**: 32 × 32px

#### icons/navigational/help and support
- **Size**: 32 × 32px

#### icons/navigational/payment controls
- **Size**: 32 × 32px

#### icons/contextual-nav/pause/Black
- **Size**: 32 × 32px

#### currency-dot/DKK
- **Size**: 34 × 34px

#### currency-dot/crypto/ETH
- **Size**: 90 × 90px

#### currency-dot/crypto/EOS
- **Size**: 90 × 90px

#### currency-dot/crypto/XRP
- **Size**: 90 × 90px

#### currency-dot/crypto/XTZ
- **Size**: 90 × 90px

#### currency-dot/crypto/SWQ
- **Size**: 90 × 90px

#### currency-dot/crypto/ZRX
- **Size**: 90 × 90px

#### currency-dot/crypto/XBT
- **Size**: 90 × 90px

#### currency-dot/crypto/BCH
- **Size**: 90 × 90px

#### currency-dot/crypto/LTC
- **Size**: 90 × 90px

#### currency-dot/crypto/LINK
- **Size**: 90 × 90px

#### currency-dot/crypto/XLM
- **Size**: 90 × 90px

#### currency-dot/crypto/REP
- **Size**: 90 × 90px

#### currency-dot/crypto/ETC
- **Size**: 90 × 90px

#### icons/system/search-black
- **Size**: 24 × 24px

#### icons/navigational/international payment
- **Size**: 32 × 32px

#### icons/payment-categories/misc
- **Size**: 34 × 34px

#### icons/investment-categories/consumer services
- **Size**: 34 × 34px

#### icons/investment-categories/crypto currencies
- **Size**: 34 × 34px

#### icons/system/plus
- **Size**: 24 × 24px

#### icons/contextual-nav/new/Black
- **Size**: 32 × 32px

#### icons/navigational/graph view
- **Size**: 32 × 32px

#### icons/payment-categories/travel
- **Size**: 34 × 34px

#### icons/navigational/card notifications
- **Size**: 32 × 32px

#### icons/navigational/tile view
- **Size**: 32 × 32px

#### icons/payment-categories/association and organisation
- **Size**: 34 × 34px

#### icons/info/attached
- **Size**: 32 × 32px

#### icons/navigational/exchange
- **Size**: 32 × 32px

#### icons/investment-categories/communications
- **Size**: 34 × 34px

#### icons/info/show
- **Size**: 32 × 32px

#### icons/navigational/pay new contact
- **Size**: 32 × 32px

#### icons/info/hide
- **Size**: 32 × 32px

#### icons/pillars/save/black
- **Size**: 32 × 32px

#### icons/pillars/save/orange
- **Size**: 32 × 32px

#### icons/navigational/donut
- **Size**: 32 × 32px

#### icons/system/minus
- **Size**: 12 × 3px

#### icons/info/customer support
- **Size**: 32 × 32px

#### icons/system/down
- **Size**: 24 × 24px

#### icons/payment-categories/healthcare
- **Size**: 34 × 34px

#### currency-dot/USD
- **Size**: 34 × 34px

#### icons/investment-categories/consumer durables
- **Size**: 34 × 34px

#### icons/navigational/FYI
- **Size**: 32 × 32px

#### currency-dot/NOK
- **Size**: 34 × 34px

#### icons/pillars/bank/black
- **Size**: 32 × 32px

#### icons/payment-categories/payment charges and fees
- **Size**: 34 × 34px

#### icons/contextual-nav/withdraw/Black
- **Size**: 32 × 32px

#### icons/payment-categories/services
- **Size**: 34 × 34px

#### icons/system/up
- **Size**: 24 × 24px

#### icons/system/close-black
- **Size**: 24 × 24px

#### icons/contextual-nav/all projects/Black
- **Size**: 32 × 32px

#### icons/investment-categories/retail trade
- **Size**: 34 × 34px

#### icons/info/warning/Black
- **Size**: 32 × 32px

#### icons/info/ID-card
- **Size**: 32 × 32px

#### icons/info/email
- **Size**: 32 × 32px

#### icons/info/copy-and-paste
- **Size**: 32 × 32px

#### icons/payment-categories/transportation
- **Size**: 34 × 34px

#### icons/navigational/close account
- **Size**: 32 × 32px

#### icons/navigational/yuh learn
- **Size**: 32 × 32px

#### currency-dot/SEK
- **Size**: 34 × 34px

#### currency-dot/HKD
- **Size**: 34 × 34px

#### icons/navigational/create new
- **Size**: 32 × 32px

#### icons/pillars/more-with-notification/black
- **Size**: 32 × 32px

#### currency-dot/AUD
- **Size**: 34 × 34px

#### icons/contextual-nav/card controls/Black
- **Size**: 32 × 32px

#### currency-dot/EUR
- **Size**: 34 × 34px

#### icons/contextual-nav/whats hot/Black
- **Size**: 32 × 32px

#### icons/investment-categories/energy minerals
- **Size**: 34 × 34px

#### Controls/Table View/Row/x/Accessory - Right/Light/Disclosure
- **Size**: 190 × 44px

#### icons/system/clear-black
- **Size**: 24 × 24px

#### icons/navigational/refer a friend
- **Size**: 32 × 32px

#### currency-dot/CAD
- **Size**: 34 × 34px

#### icons/navigational/invest notifications
- **Size**: 32 × 32px

#### icons/info/locked/Black
- **Size**: 32 × 32px

#### icons/system/checkmark-black
- **Size**: 24 × 24px

#### icons/investment-categories/non energy minerals
- **Size**: 34 × 34px

#### icons/navigational/local payment
- **Size**: 32 × 32px

#### icons/pillars/more/black
- **Size**: 32 × 32px

#### icons/investment-categories/transportation
- **Size**: 34 × 34px

#### icons/payment-categories/shopping
- **Size**: 34 × 34px

#### icons/info/image
- **Size**: 32 × 32px

#### icons/info/device
- **Size**: 32 × 32px

#### currency-dot/exchange/CHF-EUR
- **Size**: 34 × 34px

#### icons/system/dictation-black
- **Size**: 24 × 24px

#### currency-dot/GBP
- **Size**: 34 × 34px

#### icons/navigational/pay existing contact
- **Size**: 32 × 32px

#### onboarding-BG
- **Size**: 375 × 812px

#### currency-dot/JPY
- **Size**: 34 × 34px

#### icons/info/IBAN
- **Size**: 32 × 32px

#### icons/info/gif
- **Size**: 32 × 32px

#### currency-dot/AED
- **Size**: 34 × 34px

#### icons/info/PDF
- **Size**: 32 × 32px

#### icons/payment-categories/entertainment
- **Size**: 34 × 34px

#### icons/payment-categories/income
- **Size**: 34 × 34px

#### icons/system/minus
- **Size**: 24 × 24px

#### currency-dot/CHF
- **Size**: 34 × 34px

#### icons/investment-categories/finance
- **Size**: 34 × 34px

#### icons/info/swap
- **Size**: 32 × 32px

#### icons/contextual-nav/all/Black
- **Size**: 32 × 32px

#### icons/navigational/account settings
- **Size**: 32 × 32px

#### icons/system/forward
- **Size**: 24 × 24px

#### icons/navigational/close card
- **Size**: 32 × 32px

#### icons/contextual-nav/pay/Black
- **Size**: 32 × 32px

#### Buttons/Large Text/Button Text Large Dark-1
- **Size**: 49 × 24px

#### Cards/Investments/Investment-Card-Add
- **Size**: 312 × 188px

#### Forms/Global/General/text-field-active
- **Size**: 375 × 81px

#### Labels/Text Labels/Label-Small-Grey
- **Size**: 47 × 23px

#### Lists/Enhanced/List card-Negative
- **Size**: 337 × 86px

#### Headers/Header-Bold-Wrap
- **Size**: 375 × 63px

#### segmented control/iOS/2-buttons-1-active
- **Size**: 345 × 34px

#### Forms/Checkbox/Android/Checkbox-Left
- **Size**: 375 × 132px

#### Card Status/Detailed/Pending Authorisation
- **Size**: 240 × 175px

#### Headers/Header-Normal
- **Size**: 375 × 44px

#### Forms/Global/General/text-field-Icon-Right
- **Size**: 375 × 81px

#### Labels/Icon & Image Labels/Label-Large-Icon-Red
- **Size**: 151 × 60px

#### Labels/Text Labels/Label-Small-Dark
- **Size**: 47 × 23px

#### icons/contextual-nav/all/White
- **Size**: 32 × 32px

#### Controls/Pagination Pips/4
- **Size**: 92 × 8px

#### Lists/Enhanced/Stocks/Stock Market-Open
- **Size**: 337 × 86px

#### Buttons/Small Text/Button Text Small Dark-1 - Disabled
- **Size**: 35 × 16px

#### Lists/Default/List-default-caption-top
- **Size**: 375 × 60px

#### Lists/Button/list-regular-default
- **Size**: 343 × 65px

#### Lists/Enhanced/List-default-caption-top
- **Size**: 343 × 65px

#### Buttons/Small Text/Button Text Small Dark-2 - Disabled
- **Size**: 35 × 16px

#### Bars/iOS/title-bar/scrolled
- **Size**: 375 × 44px

#### Lists/Transactional/Progress-Selected
- **Size**: 375 × 80px

#### Labels/Text Labels/Label-Small-Orange
- **Size**: 47 × 23px

#### Buttons/Small Solid/Button Solid Small - White
- **Size**: 84 × 33px

#### Buttons/Large Outline/Button Outline Large - White Disabled
- **Size**: 148 × 50px

#### Card Status/Privacy/Card Blocked
- **Size**: 240 × 175px

#### Labels/Text Labels/Label-Large-Pink
- **Size**: 109 × 60px

#### Cards/Investments/Investment-Card-Winner-Dark
- **Size**: 312 × 188px

#### Lists/Tick/Tick list active
- **Size**: 375 × 53px

#### Controls/Pagination Pips/5
- **Size**: 120 × 8px

#### Cards/Confirmation Cards/Confirmation-Projects
- **Size**: 307 × 433px

#### Android/Icon / Toggle / Checkbox Outlined / Filled
- **Size**: 24 × 24px

#### Lists/Default/List-default-delete
- **Size**: 375 × 60px

#### Containers/Enhanced/Container enhanced
- **Size**: 343 × 142px

#### Buttons/Large Solid/Button Solid Large - Disabled
- **Size**: 148 × 50px

#### ✱ / Color / Icons / Selected / On Surface / Inactive
- **Size**: 101 × 101px

#### Android/Progress Indicators / Circular
- **Size**: 44 × 44px

#### Cards/Projects/Card-Saving-Create-New
- **Size**: 312 × 188px

#### Labels/Icon & Image Labels/Label-Large-Cricle-Grey
- **Size**: 151 × 60px

#### segmented control/iOS/3-buttons-1-active
- **Size**: 345 × 34px

#### Labels/Text Labels/Label-Small-Light
- **Size**: 47 × 23px

#### Android/Selection Control / Checkbox / Off / Disabled
- **Size**: 24 × 24px

#### Tab Bars/Notification
- **Size**: 375 × 109px

#### Forms/Checkbox/Android/Checkbox-Right
- **Size**: 375 × 132px

#### Contextual Menu/Group/Contextual Menu x1
- **Size**: 375 × 110px

#### Cards/Projects/Saving Card-Favourite
- **Size**: 312 × 188px

#### Contextual Menu/Group/Contextual Menu x3
- **Size**: 375 × 110px

#### Lists/Default/LIst-default-total
- **Size**: 375 × 60px

#### Android/Selection Control / Switch / Elements / Track
- **Size**: 34 × 24px

#### Cards/Scroll Cards/Investment/Card-Scroll-Invest-Reload-Android
- **Size**: 137 × 160px

#### Cards/Scroll Cards/Projects/Card-Scroll-Project-Frozen
- **Size**: 137 × 160px

#### Buttons/Large Solid/Button Solid Large-Lav - Normal
- **Size**: 148 × 50px

#### Cards/Bespoke/Card My Investment
- **Size**: 337 × 202px

#### Tab Bars/Selected
- **Size**: 375 × 109px

#### Cards/Scroll Cards/Investment/Card-Scroll-Invest-Loss
- **Size**: 137 × 160px

#### Lists/Button/icon-list-regular-default
- **Size**: 343 × 65px

#### Forms/Dropdown/iOS/currency-field-complete
- **Size**: 375 × 81px

#### Contextual Menu/Solid/Contextual-Solid-Button-DL-Dark
- **Size**: 70 × 90px

#### Lists/Enhanced/icon-list-regular-default
- **Size**: 343 × 65px

#### ✱ / Color / Surface / Main
- **Size**: 100 × 100px

#### Forms/Global/General/text-field-Date
- **Size**: 375 × 81px

#### icons/info/warning/Orange
- **Size**: 32 × 32px

#### Android/Selection Control / Switch / On / Enabled
- **Size**: 40 × 24px

#### Android/Selection Control / Switch / Off / Disabled
- **Size**: 40 × 24px

#### Cards/Expandable/Icon - Heading - Open
- **Size**: 337 × 276px

#### Buttons/Medium Text/Button Text Medium Light-2 - Disabled
- **Size**: 41 × 20px

#### Android/Selection Control / Switch / On / Disabled
- **Size**: 40 × 24px

#### Containers/Enhanced/Container enhanced - Border
- **Size**: 343 × 142px

#### Cards/Projects/Category/Big Holiday
- **Size**: 162 × 160px

#### Labels/Text Labels/Label-Medium-Red
- **Size**: 115 × 33px

#### Labels/Text Labels/Label-Small-Green
- **Size**: 47 × 23px

#### Cards/Expandable/Icon - Heading + Body - Open
- **Size**: 338 × 409px

#### Buttons/Large Solid/Button Solid Large-Freeze - Normal
- **Size**: 148 × 50px

#### Buttons/Medium Text/Button Text Medium Dark-1
- **Size**: 42 × 20px

#### Cards/Bespoke/Call Centre Open
- **Size**: 337 × 86px

#### Cards/Scroll Cards/Beneficiary/Card-Scroll-beneficiary-img-YUH
- **Size**: 137 × 160px

#### Buttons/Large Outline/Button Outline Large - Blue
- **Size**: 148 × 50px

#### Android/Selection Control / Checkbox / On / Disabled
- **Size**: 24 × 24px

#### Lists/Transactional/Progress Expanded-Default
- **Size**: 375 × 153px

#### Buttons/Small Text/Button Text Small Dark-1
- **Size**: 35 × 16px

#### Cards/Projects/Category/Kitchen
- **Size**: 162 × 160px

#### Bars/iOS/modal-card-stack
- **Size**: 375 × 36px

#### Containers/Flat/Container Flat Outline
- **Size**: 343 × 65px

#### Card Status/Detailed/Card Closed
- **Size**: 240 × 175px

#### Cards/Scroll Cards/Beneficiary/Card-Scroll-beneficiary-Letter-YUH
- **Size**: 137 × 160px

#### Lists/Button/list-semi-default
- **Size**: 343 × 65px

#### Cards/Scroll Cards/Beneficiary/Card-Scroll-beneficiary-img
- **Size**: 137 × 160px

#### Buttons/Medium Text/Button Text Medium White-1
- **Size**: 42 × 20px

#### Card Status/Detailed/Card Locked
- **Size**: 240 × 175px

#### Forms/Checkllist/Android/Checklist-Selected
- **Size**: 375 × 61px

#### Containers/Flat/Container Header - Single
- **Size**: 343 × 29px

#### Forms/Global/General/text-field-default
- **Size**: 375 × 81px

#### Cards/Projects/Category/New Car
- **Size**: 162 × 160px

#### Buttons/Large Text/Button Text Large Dark-1 - Disabled
- **Size**: 49 × 24px

#### Cards/Expandable/Icon - Heading + Body
- **Size**: 337 × 138px

#### Labels/Text Labels/Label-Medium-Green
- **Size**: 115 × 33px

#### Containers/Enhanced/Container enhanced large curve
- **Size**: 343 × 142px

#### Forms/Global/General/text-field-Label
- **Size**: 375 × 81px

#### Forms/Global/General/text-field-Icon Left
- **Size**: 375 × 81px

#### Bars/iOS/status-bar/light
- **Size**: 375 × 44px

#### Cards/Projects/Card-Saving-Frozen
- **Size**: 312 × 188px

#### icons/system/checkmark/Blue
- **Size**: 16 × 15px

#### Cards/Scroll Cards/Projects/Card-Scroll-Project-Complete DL
- **Size**: 137 × 160px

#### icons/system/search
- **Size**: 24 × 24px

#### Buttons/Tiny Text/Button Text Tiny Dark-2
- **Size**: 29 × 14px

#### Buttons/Small Solid/Button Solid Small-Black - Normal
- **Size**: 84 × 33px

#### Forms/Checkllist/iOS/Checklist-normal
- **Size**: 375 × 61px

#### Cards/Projects/Category/Rainy Day Copy
- **Size**: 162 × 160px

#### Forms/Global/Security/security-populated
- **Size**: 375 × 68px

#### Bars/iOS/navigation-bar-header-action-left
- **Size**: 375 × 44px

#### Cards/Confirmation Cards/Confirmation-Transfer
- **Size**: 307 × 429px

#### Forms/Dropdown/iOS/Dropdown-complete
- **Size**: 375 × 81px

#### Forms/Checkllist/Android/Checklist-normal-DL
- **Size**: 375 × 61px

#### Labels/Icon & Image Labels/Label-Large-Cricle-Red
- **Size**: 151 × 60px

#### Cards/Scroll Cards/investment categories/Investment-card-single-number
- **Size**: 137 × 160px

#### Bars/Android/Back Title Search Action
- **Size**: 375 × 44px

#### Cards/Expandable/Icon - Heading
- **Size**: 337 × 86px

#### Buttons/Small Outline/Button Outline Small - White
- **Size**: 84 × 33px

#### Lists/Exchange/List-Exchange-Never-Seen
- **Size**: 375 × 80px

#### Headers/Heading style normal with link
- **Size**: 375 × 44px

#### Labels/Text Labels/Label-Medium-Orange
- **Size**: 115 × 33px

#### ✱ / Color / Surface / Light
- **Size**: 100 × 100px

#### Forms/Checkllist/Android/Checklist-normal
- **Size**: 375 × 61px

#### Buttons/Large Outline/Button Outline Large - Normal
- **Size**: 148 × 50px

#### Controls/Pagination Pips/2
- **Size**: 36 × 8px

#### Cards/Confirmation Cards/Confirmation-Payment
- **Size**: 307 × 431px

#### Controls/Switch/Android/Switch-Off-Disabled
- **Size**: 375 × 61px

#### Labels/Icon & Image Labels/Label-Large-Icon-Pink
- **Size**: 151 × 60px

#### Android/Icon / Toggle / Checkbox / Filled
- **Size**: 24 × 24px

#### Labels/Text Labels/Label-Medium-Lavender
- **Size**: 115 × 33px

#### Cards/Confirmation Cards/Confirmation-savings
- **Size**: 307 × 429px

#### ✱ / Color / Secondary / Main
- **Size**: 100 × 100px

#### Labels/Text Labels/Label-Large-Light
- **Size**: 109 × 60px

#### Buttons/Large Solid/Button Solid Large-Black - Normal
- **Size**: 148 × 50px

#### Buttons/Small Solid/Button Solid Small - Disabled
- **Size**: 84 × 33px

#### ✱ / Color / Secondary / Light Grey
- **Size**: 100 × 100px

#### segmented control/Android/2-buttons-1-active
- **Size**: 360 × 48px

#### Forms/Dropdown/Android/currency-field-complete
- **Size**: 375 × 81px

#### Lists/Enhanced/List card-Positive
- **Size**: 337 × 86px

#### Card Status/Privacy/Card Locked
- **Size**: 240 × 175px

#### Cards/Scroll Cards/Beneficiary/Card-Scroll-beneficiary-double-name
- **Size**: 137 × 160px

#### Buttons/Tiny Text/Button Text Tiny Dark-1
- **Size**: 30 × 14px

#### Labels/Text Labels/Label-Large-Grey
- **Size**: 109 × 60px

#### icons/contextual-nav/add payment/White
- **Size**: 32 × 32px

#### Bars/iOS/status-bar/dark
- **Size**: 375 × 44px

#### Cards/Projects/Category/Wedding
- **Size**: 162 × 160px

#### Containers/Flat/Light Orange
- **Size**: 343 × 65px

#### Containers/Flat/Light Grey
- **Size**: 343 × 65px

#### Labels/Icon & Image Labels/Label-Large-Cricle-Lavender
- **Size**: 151 × 60px

#### Buttons/Large Outline/Button Outline Large - Disabled
- **Size**: 148 × 50px

#### Android/Selection Control / Switch / Elements / Thumb
- **Size**: 20 × 20px

#### Labels/Icon & Image Labels/Label-Large-Cricle-Blue
- **Size**: 151 × 60px

#### Lists/Enhanced/Stocks/Stock Market-Closed
- **Size**: 338 × 86px

#### Buttons/Large Text/Button Text Large Light-2
- **Size**: 48 × 24px

#### Card Status/Privacy/Active Card
- **Size**: 240 × 175px

#### Cards/Notifications/Contextual nudge notification card
- **Size**: 338 × 69px

#### Forms/Checkbox/iOS/Checkbox-Left
- **Size**: 375 × 132px

#### icons/pillars/bank/Orange
- **Size**: 32 × 32px

#### Forms/Dropdown/Android/dropdown-default
- **Size**: 375 × 81px

#### ✱ / Color / Secondary / 500
- **Size**: 100 × 100px

#### Lists/Button/list-bold-default-notification
- **Size**: 343 × 65px

#### ✱ / Color / Icons / Black / Inactive
- **Size**: 101 × 101px

#### Tab Bars/Normal
- **Size**: 375 × 109px

#### Buttons/Medium Text/Button Text Medium Dark-2
- **Size**: 41 × 20px

#### Buttons/Small Solid/Button Solid Small-Freeze - Normal
- **Size**: 84 × 33px

#### Lists/Exchange/Exchange rate 
- **Size**: 375 × 53px

#### Lists/Transactional/List-transaction-spending
- **Size**: 375 × 80px

#### Buttons/Tiny Text/Button Text Tiny Dark-2 - Disabled
- **Size**: 29 × 14px

#### Android/Dialogs / Confirmation / with Header
- **Size**: 280 × 248px

#### Cards/investments/Investment-company-negative
- **Size**: 196 × 160px

#### Controls/Switch/Android/Switch-Off
- **Size**: 375 × 61px

#### Card Status/Detailed/Card Blocked
- **Size**: 240 × 175px

#### Controls/Switch/iOS/Switch-On
- **Size**: 375 × 61px

#### Labels/Text Labels/Label-Medium-Pink
- **Size**: 115 × 33px

#### Buttons/Large Outline/Button Outline Large - White
- **Size**: 148 × 50px

#### Card Status/Detailed/Active
- **Size**: 240 × 175px

#### Bars/iOS/search/text/active with text
- **Size**: 284 × 36px

#### Buttons/Large Text/Button Text Large Dark-2 - Disabled
- **Size**: 48 × 24px

#### Contextual Menu/Outline/Contextual-Outline-Button-DL-Dark
- **Size**: 70 × 90px

#### Lists/Default/List-default-img-caption-bottom
- **Size**: 375 × 60px

#### Cards/investments/Investment-company-positive
- **Size**: 196 × 160px

#### Lists/Button/icon-list-bold-default
- **Size**: 343 × 65px

#### Labels/Text Labels/Label-Medium-Light
- **Size**: 115 × 33px

#### Controls/Sliders/Slider Start
- **Size**: 343 × 62px

#### Buttons/Tiny Text/Button Text Tiny Dark-1 - Disabled
- **Size**: 30 × 15px

#### Lists/Enhanced/List card-Positive-Caption
- **Size**: 337 × 86px

#### Cards/Scroll Cards/Projects/Card-Scroll-Project-Progress
- **Size**: 137 × 160px

#### Bars/Android/Modal Search
- **Size**: 375 × 44px

#### Bars/iOS/navigation/left-accessory/Action
- **Size**: 180 × 44px

#### Android/Selection Control / Checkbox / On / Enabled
- **Size**: 24 × 24px

#### Labels/Icon & Image Labels/Label-Large-Icon-Dark
- **Size**: 151 × 60px

#### icons/contextual-nav/all projects/White
- **Size**: 32 × 32px

#### Lists/Default/List-default-img
- **Size**: 375 × 60px

#### Bars/iOS/search/default
- **Size**: 375 × 44px

#### Cards/Scroll Cards/Projects/Card-Scroll-Project-Frozen DL
- **Size**: 137 × 160px

#### Lists/Exchange/Nested Expandable List - Closed
- **Size**: 343 × 184px

#### Lists/Tick/Tick list default
- **Size**: 375 × 53px

#### Cards/Projects/Card-Saving-Holiday
- **Size**: 312 × 188px

#### currency-dot/exchange/CHF-GBP
- **Size**: 34 × 34px

#### Controls/Switch/iOS/Switch-Off-Disabled
- **Size**: 375 × 61px

#### Cards/Scroll Cards/investment categories/Investment-card
- **Size**: 137 × 160px

#### ✱ / Color / Primary / Main
- **Size**: 100 × 100px

#### Buttons/Medium Text/Button Text Medium Dark-2 - Disabled
- **Size**: 41 × 20px

#### Android/Buttons / Text / Enabled
- **Size**: 80 × 36px

#### Controls/Switch/Android/Switch-On-Disabled
- **Size**: 375 × 61px

#### ✱ / Colors / Primary / SwissOrange
- **Size**: 100 × 100px

#### Buttons/Medium Text/Button Text Medium Blue-2
- **Size**: 42 × 20px

#### Buttons/Large Text/Button Text Large Light-2 - Disabled
- **Size**: 48 × 24px

#### Buttons/Small Solid/Button Solid Small-Lav - Normal
- **Size**: 84 × 33px

#### Labels/Icon & Image Labels/Label-Large-Cricle-Light
- **Size**: 151 × 60px

#### Android/Selection Control / Switch / Off / Enabled
- **Size**: 40 × 24px

#### Buttons/Medium Text/Button Text Medium White-1 - Disabled
- **Size**: 42 × 20px

#### ✱ / Color / Icons / Primary or Secondary
- **Size**: 101 × 101px

#### Lists/Exchange/Exchange List Icon & Image
- **Size**: 375 × 80px

#### Lists/Enhanced/List-default-caption-bottom
- **Size**: 343 × 65px

#### Cards/Scroll Cards/Projects/Card-Scroll-Project-Complete
- **Size**: 137 × 160px

#### Contextual Menu/Solid/Contextual-Solid-Button-Light
- **Size**: 70 × 90px

#### Buttons/Large Text/Button Text Large White-1
- **Size**: 49 × 24px

#### Contextual Menu/Outline/Contextual-Outline-Button-Disabled-Light
- **Size**: 70 × 90px

#### FYI & Tips/Tips/Tip no link
- **Size**: 344 × 112px

#### Buttons/Small Outline/Button Outline Small - Blue
- **Size**: 84 × 33px

#### Bars/iOS/navigation/left-accessory/Back
- **Size**: 180 × 44px

#### Lists/Default/List-default-disabled
- **Size**: 375 × 60px

#### Lists/Button/icon-list-bold-default-notification
- **Size**: 343 × 65px

#### Forms/Checkllist/Android/Checklist-Selected-disabled
- **Size**: 375 × 61px

#### Containers/Flat/Container Header - Double
- **Size**: 343 × 46px

#### Contextual Menu/Solid/Contextual-Solid-Button-Disabled-Light
- **Size**: 70 × 90px

#### Buttons/Small Solid/Button Solid Small Dark - Disabled
- **Size**: 84 × 33px

#### Cards/Scroll Cards/Beneficiary/Card-Scroll-beneficiary-single-name
- **Size**: 137 × 160px

#### icons/contextual-nav/currencies/White
- **Size**: 32 × 32px

#### Labels/Icon & Image Labels/Label-Large-Cricle-Pink
- **Size**: 151 × 60px

#### Headers/Header-Small-Regular-Grey
- **Size**: 375 × 38px

#### Android/Dialogs / Surface
- **Size**: 280 × 248px

#### ✱ / Color / Surface / Base
- **Size**: 100 × 100px

#### Labels/Text Labels/Label-Medium-Blue
- **Size**: 115 × 33px

#### Headers/Heading style bold with link
- **Size**: 375 × 44px

#### Cards/Notifications/Stacked
- **Size**: 343 × 93px

#### Containers/Flat/Light Lilac
- **Size**: 343 × 65px

#### Cards/Projects/Category/Big Stock
- **Size**: 162 × 160px

#### Buttons/Medium Text/Button Text Medium Light-2
- **Size**: 41 × 20px

#### ✱ / Color / Secondary / 700
- **Size**: 100 × 100px

#### Forms/Checkllist/Android/Checklist-Disabled
- **Size**: 375 × 61px

#### icons/system/clear
- **Size**: 24 × 24px

#### Cards/Notifications/Default
- **Size**: 343 × 83px

#### Labels/Text Labels/Label-Small-Blue
- **Size**: 47 × 23px

#### FYI & Tips/Tips/Tip no close
- **Size**: 344 × 112px

#### icons/contextual-nav/card controls/White
- **Size**: 32 × 32px

#### Controls/Pagination Pips/7
- **Size**: 176 × 8px

#### Forms/Checkllist/iOS/Checklist-Selected-disabled
- **Size**: 375 × 61px

#### Lists/Transactional/List-transaction-credit
- **Size**: 375 × 80px

#### icons/payment-categories/association and organisation/orange
- **Size**: 34 × 34px

#### Forms/Dropdown/iOS/input field-combo
- **Size**: 375 × 82px

#### Card Status/Privacy/Card Closed
- **Size**: 240 × 175px

#### Bars/iOS/navigation-bar
- **Size**: 375 × 44px

#### Card Status/Privacy/Pending Authorisation
- **Size**: 240 × 175px

#### Labels/Text Labels/Label-Large-Green
- **Size**: 109 × 60px

#### Labels/Text Labels/Label-Large-Lavender
- **Size**: 109 × 60px

#### FYI & Tips/FYI/FYI with close
- **Size**: 343 × 112px

#### Labels/Text Labels/Label-Large-Orange
- **Size**: 109 × 60px

#### Lists/Default/List-default
- **Size**: 375 × 60px

#### Lists/Button/list-bold-default
- **Size**: 343 × 65px

#### Forms/Checkllist/iOS/Checklist-Selected
- **Size**: 375 × 61px

#### Controls/Pagination Pips/6
- **Size**: 148 × 8px

#### ✱ / Color / Icons / Black / Disabled
- **Size**: 101 × 101px

#### Buttons/Small Text/Button Text Small White-1 - Disabled
- **Size**: 35 × 16px

#### Forms/Checkbox/iOS/Checkbox-Right
- **Size**: 375 × 132px

#### Labels/Text Labels/Label-Small-Lavender
- **Size**: 47 × 23px

#### Labels/Icon & Image Labels/Label-Large-Icon-Orange
- **Size**: 151 × 60px

#### Cards/Bespoke/Card Poject Overview
- **Size**: 343 × 231px

#### Forms/Dropdown/iOS/input field-combo-complete-1
- **Size**: 375 × 82px

#### Controls/Switch/iOS/Switch-On-Disabled
- **Size**: 375 × 61px

#### Labels/Text Labels/Label-Large-Red
- **Size**: 109 × 60px

#### icons/system/dictation
- **Size**: 24 × 24px

#### Android/Dialogs / Simple / Body
- **Size**: 280 × 300px

#### Contextual Menu/Outline/Contextual-Outline-Button-Dark
- **Size**: 70 × 90px

#### Buttons/Small Text/Button Text Small White-1
- **Size**: 35 × 16px

#### Buttons/Small Text/Button Text Small Dark-2
- **Size**: 35 × 16px

#### Contextual Menu/Group/Contextual Menu x2
- **Size**: 375 × 110px

#### Buttons/Medium Text/Button Text Medium Dark-1 - Disabled
- **Size**: 42 × 20px

#### Buttons/Medium Text/Button Text Medium Blue-1
- **Size**: 42 × 20px

#### Android/Dialogs / Elements / Buttons
- **Size**: 280 × 48px

#### Android/Selection Control / Checkbox / Off / Enabled
- **Size**: 24 × 24px

#### Contextual Menu/Outline/Contextual-Outline-Button-DL-Light
- **Size**: 70 × 90px

#### Contextual Menu/Outline/Contextual-Outline-Button-Light
- **Size**: 70 × 90px

#### Lists/Enhanced/List card-Positive-Long-name
- **Size**: 337 × 87px

#### Lists/Exchange/Exchange rate active
- **Size**: 375 × 53px

#### Labels/Text Labels/Label-Large-Blue
- **Size**: 109 × 60px

#### Forms/Global/Security/security-hidden-active
- **Size**: 375 × 68px

#### Buttons/Small Outline/Button Outline Small - White
- **Size**: 84 × 33px

#### Bars/iOS/search/text/active
- **Size**: 284 × 36px

#### Lists/Transactional/Progress Expanded-Active
- **Size**: 375 × 153px

#### Forms/Global/General/text-field-Label-block
- **Size**: 375 × 81px

#### Controls/Pagination Pips/3
- **Size**: 64 × 8px

#### Lists/Default/List-default-img-caption-top-Delete
- **Size**: 375 × 60px

#### Labels/Text Labels/Label-Small-Red
- **Size**: 47 × 23px

#### Bars/Android/Progress Bar
- **Size**: 375 × 44px

#### Bars/iOS/navigation/right-accessory/Action
- **Size**: 180 × 44px

#### Bars/iOS/search/text/default
- **Size**: 284 × 36px

#### Labels/Icon & Image Labels/Label-Large-Icon-Lavender
- **Size**: 151 × 60px

#### Cards/Confirmation Cards/Confirmation-Investment-2
- **Size**: 307 × 432px

#### Labels/Icon & Image Labels/Label-Large-Icon-Green
- **Size**: 151 × 60px

#### Labels/Text Labels/Label-Medium-Dark
- **Size**: 115 × 33px

#### Cards/Projects/Card-Saving-Add-Image
- **Size**: 312 × 188px

#### Cards/Investments/Investment-Card-Winner-Light
- **Size**: 312 × 188px

#### Forms/Dropdown/Android/input field-combo
- **Size**: 375 × 82px

#### Lists/Default/List-default-img-caption-top
- **Size**: 375 × 60px

#### Bars/iOS/ititle-bar/default
- **Size**: 375 × 44px

#### Contextual Menu/Solid/Contextual-Solid-Button-Disabled-Dark
- **Size**: 70 × 90px

#### Forms/Checkllist/iOS/Checklist-normal-DL
- **Size**: 375 × 61px

#### Containers/Flat/Container Header Colour - Double
- **Size**: 343 × 46px

#### Labels/Text Labels/Label-Large-Dark
- **Size**: 109 × 60px

#### segmented control/Android/3-buttons-1-active
- **Size**: 360 × 48px

#### Forms/Dropdown/iOS/dropdown-default
- **Size**: 375 × 81px

#### Bars/Android/Back Title Search
- **Size**: 375 × 44px

#### Cards/Projects/Card-Saving-Change-Image
- **Size**: 312 × 188px

#### Labels/Icon & Image Labels/Label-Large-Cricle-Dark
- **Size**: 151 × 60px

#### Containers/Enhanced/Container Stacked
- **Size**: 343 × 93px

#### Labels/Icon & Image Labels/Label-Large-Cricle-Orange
- **Size**: 151 × 60px

#### Cards/Bespoke/Card Split Amount
- **Size**: 360 × 151px

#### Containers/Flat/Container Flat
- **Size**: 343 × 65px

#### ✱ / Color / Primary / 200
- **Size**: 100 × 100px

#### Controls/Switch/iOS/Switch-Off
- **Size**: 375 × 61px

#### Android/System Bar / Primary
- **Size**: 360 × 24px

#### Lists/Button/list-regular-default-disabled
- **Size**: 343 × 65px

#### Buttons/Small Text/Button Text Small White-2
- **Size**: 35 × 16px

#### Contextual Menu/Outline/Contextual-Outline-Button-Disabled-Dark
- **Size**: 70 × 90px

#### FYI & Tips/Tips/Tip with link
- **Size**: 344 × 112px

#### Lists/Default/List-default-caption-bottom
- **Size**: 375 × 60px

#### Cards/Scroll Cards/Projects/Card-Scroll-Project-Empty
- **Size**: 137 × 160px

#### Cards/Scroll Cards/Investment/Card-Scroll-Invest-Profit
- **Size**: 137 × 160px

#### Buttons/Large Solid/Button Solid Large Dark - Disabled
- **Size**: 148 × 50px

#### Labels/Text Labels/Label-Small-Pink
- **Size**: 47 × 23px

#### Buttons/Small Text/Button Text Small White-2 - Disabled
- **Size**: 35 × 16px

#### Android/Dialogs / Alert
- **Size**: 280 × 120px

#### Bars/iOS/search/active
- **Size**: 375 × 44px

#### Lists/Transactional/Progress-Default
- **Size**: 375 × 80px

#### Bars/iOS/navigation/right-accessory/Action-preferred
- **Size**: 180 × 44px

#### Lists/Button/icon-list-semi-default
- **Size**: 343 × 65px

#### Lists/Enhanced/list-regular-default
- **Size**: 343 × 65px

#### Controls/Sliders/Slider Active
- **Size**: 343 × 62px

#### FYI & Tips/FYI/FYI No Link
- **Size**: 343 × 112px

#### Cards/Confirmation Cards/Confirmation-Investment-1
- **Size**: 307 × 501px

#### Buttons/Large Text/Button Text Large Dark-2
- **Size**: 48 × 24px

#### Lists/Exchange/Nested Expandable List - Open
- **Size**: 343 × 312px

#### ✱ / Color / Primary / 800
- **Size**: 100 × 100px

#### Buttons/Small Text/Button Text Small Blue-2
- **Size**: 34 × 16px

#### Buttons/Large Solid/Button Solid Large - White
- **Size**: 148 × 50px

#### Contextual Menu/Solid/Contextual-Solid-Button-DL-Light
- **Size**: 70 × 90px

#### Containers/Flat/Lilac
- **Size**: 343 × 65px

#### Headers/Header-Small-Bold-Grey
- **Size**: 375 × 38px

#### Labels/Icon & Image Labels/Label-Large-Icon-Blue
- **Size**: 151 × 60px

#### Forms/Checkllist/iOS/Checklist-Disabled
- **Size**: 375 × 61px

#### Bars/Android/Back Title
- **Size**: 375 × 44px

#### Forms/Global/General/text-field-complete
- **Size**: 375 × 81px

#### Containers/Flat/Container Header Colour - Single
- **Size**: 343 × 29px

#### Cards/Scroll Cards/investment categories/Investment-card-double-number
- **Size**: 137 × 160px

#### Lists/Transactional/List-transaction-pending
- **Size**: 375 × 80px

#### Forms/Dropdown/Android/Dropdown-complete
- **Size**: 375 × 81px

#### Forms/Dropdown/Android/input field-combo-complete-1
- **Size**: 375 × 82px

#### Headers/Header-Normal-Wrap
- **Size**: 375 × 63px

#### Labels/Icon & Image Labels/Label-Large-Icon-Grey
- **Size**: 151 × 60px

#### Contextual Menu/Solid/Contextual-Solid-Button-Dark
- **Size**: 70 × 90px

#### Headers/Header-Bold
- **Size**: 375 × 44px

#### Cards/Scroll Cards/investment categories/Investment-card-Selected
- **Size**: 157 × 179px

#### Labels/Icon & Image Labels/Label-Large-Cricle-Green
- **Size**: 151 × 60px

#### Cards/Scroll Cards/Investment/Card-Scroll-Invest-Reload-iOS
- **Size**: 137 × 160px

#### Labels/Text Labels/Label-Medium-Grey
- **Size**: 115 × 33px

#### Controls/Switch/Android/Switch-On
- **Size**: 375 × 61px

#### Buttons/Small Solid/Button Outline Small - Normal
- **Size**: 84 × 33px

#### Forms/Global/Security/security-default
- **Size**: 375 × 55px

#### Labels/Icon & Image Labels/Label-Large-Icon-Light
- **Size**: 151 × 60px

#### Cards/Bespoke/Call Centre Closed
- **Size**: 337 × 86px

#### FYI & Tips/FYI/FYI with Link
- **Size**: 343 × 112px

#### Lists/Exchange/List-Exchange-Last-Seen
- **Size**: 375 × 80px

#### Lists/Tick/Tick list active - disabled
- **Size**: 375 × 53px

#### Buttons/Small Outline/Button Outline Small - Disabled
- **Size**: 84 × 33px

#### icons/info/locked/Orange
- **Size**: 32 × 32px

#### Bespoke Secure Keyboard
- **Size**: 375 × 352px

#### x / App Icons / Icon Grid
- **Size**: 60 × 60px

#### NavigationBar/Left action and Right action
- **Size**: 375 × 44px

#### Bars/Navigation Bar/x/Right/Label 1 Item - Preferred
- **Size**: 181 × 44px

#### Controls / Table View / Row / x / Accessory - Right / Light / Switch ON
- **Size**: 190 × 44px

#### Tab Bars/iOS/Tab-Bar
- **Size**: 375 × 100px

#### icon/save/black
- **Size**: 32 × 32px

#### icon/invest/black
- **Size**: 32 × 32px

#### icon/overview/black
- **Size**: 32 × 32px

#### icon/bank/orange
- **Size**: 32 × 32px

#### NavigationBar/Left action and Right action
- **Size**: 375 × 44px

#### Status bar/with display shape
- **Size**: 375 × 44px

#### Display Shape/top
- **Size**: 375 × 44px

#### button/active-full width
- **Size**: 343 × 50px

#### button/active-half width
- **Size**: 163 × 50px

#### Cards/Projects/Card-Saving-Change-Image
- **Size**: 312 × 188px

#### Cards/Projects/Card-Saving-Add-Image
- **Size**: 312 × 188px

#### Cards/Scroll Cards/Projects/Card-Scroll-Project-Frozen
- **Size**: 137 × 160px

#### Cards/Scroll Cards/Projects/Card-Scroll-Project-Frozen DL
- **Size**: 137 × 160px

#### icons/info/device-tablet
- **Size**: 32 × 32px

#### icons/info/device-laptop
- **Size**: 32 × 32px

#### icons/info/device-smartphone
- **Size**: 32 × 32px

#### Background/static
- **Size**: 375 × 842px

## Design Rules — Mandatory for AI Agents

| Category | Rule |
|----------|------|
| Colours | Use only tokens defined above. Always output as `var(--token)`. Never hard-code. |
| Typography | Match family, weight, size, line-height exactly from the table above. |
| Spacing | Use only spacing token values. No arbitrary numbers. |
| Radius | Use only border-radius tokens. No arbitrary values. |
| Shadows | Use only defined elevation/effect styles. |
| Components | Replicate structures. Honour variant property names. |
| HTML | Output semantic HTML5 with ARIA roles. All components responsive by default. |
| Unknowns | If a decision is not defined here: ask the user, do not invent. |

## CSS Custom Properties

```css
:root {
  /* ── Colour tokens ──────────────────── */
  --core-colours-swiss-black: #151a21;
  --core-colours-swiss-black-80: #44484d;
  --core-colours-swiss-black-60: #73767a;
  --core-colours-swiss-black-40: #a1a3a6;
  --core-colours-swiss-black-20: #d0d1d3;
  --core-colours-swiss-black-dark: #000000;
  --core-colours-swiss-orange: #fa5b35;
  --core-colours-swiss-orange-80: #fb7c5d;
  --core-colours-swiss-orange-60: #fc9d86;
  --core-colours-swiss-orange-40: #fdbdae;
  --core-colours-swiss-orange-20: #feded7;
  --core-colours-swiss-orange-dark-1: #ae3b1b;
  --core-colours-swiss-orange-dark-2: #5e1400;
  --extended-palette-swiss-lilac: #ebddf5;
  --extended-palette-swiss-dusk-pink: #fab4cc;
  --extended-palette-swiss-lilac-80: #efe4f7;
  --extended-palette-swiss-lilac-60: #f3ebf9;
  --extended-palette-swiss-lilac-40: #f7f1fb;
  --extended-palette-swiss-lilac-20: #fbf8fd;
  --extended-palette-swiss-lilac-dark-1: #a49aab;
  --extended-palette-swiss-lilac-dark-2: #574365;
  --extended-palette-swiss-dusk-pink-80: #fbc3d6;
  --extended-palette-swiss-dusk-pink-60: #fcd2e0;
  --extended-palette-swiss-dusk-pink-40: #fde1eb;
  --extended-palette-swiss-dusk-pink-20: #fef0f5;
  --extended-palette-swiss-dusk-pink-dark-1: #ae7d8e;
  --extended-palette-swiss-ice-80: #93d1ec;
  --extended-palette-swiss-ice-60: #aeddf1;
  --extended-palette-swiss-ice-40: #c9e8f5;
  --extended-palette-swiss-ice-20: #e4f4fa;
  --extended-palette-swiss-ice-dark-1: #548ba3;
  --extended-palette-swiss-lavender-80: #d6c1e1;
  --extended-palette-swiss-lavender-60: #e0d0e9;
  --extended-palette-swiss-lavender-40: #ebe0f0;
  --extended-palette-swiss-lavender-20: #f5eff8;
  --extended-palette-swiss-lavender-dark-1: #8e7b98;
  --extended-palette-swiss-ice: #78c6e7;
  --extended-palette-swiss-lavender: #ccb1da;
  --extended-palette-swiss-dusk-pink-dark-2: #712f46;
  --extended-palette-swiss-ice-dark-2: #104257;
  --extended-palette-swiss-lavender-dark-2: #5b3d6b;
  --ui-exclusive-colour-palette-swiss-app-blue: #0a84ff;
  --ui-exclusive-colour-palette-swiss-app-red: #e02020;
  --ui-exclusive-colour-palette-swiss-app-green: #02b089;
  --ui-exclusive-colour-palette-swiss-app-dark-grey: #8b8e92;
  --ui-exclusive-colour-palette-swiss-app-blue-80: #3b9dff;
  --ui-exclusive-colour-palette-swiss-app-blue-60: #6cb5ff;
  --ui-exclusive-colour-palette-swiss-app-blue-40: #9dceff;
  --ui-exclusive-colour-palette-swiss-app-blue-20: #cee6ff;
  --ui-exclusive-colour-palette-swiss-app-blue-dark-1: #065cb2;
  --ui-exclusive-colour-palette-swiss-app-blue-dark-2: #002262;
  --ui-exclusive-colour-palette-swiss-app-red-80: #e64d4d;
  --ui-exclusive-colour-palette-swiss-app-red-60: #ec7979;
  --ui-exclusive-colour-palette-swiss-app-red-40: #f3a6a6;
  --ui-exclusive-colour-palette-swiss-app-red-20: #f9d2d2;
  --ui-exclusive-colour-palette-swiss-app-red-dark-1: #9b1616;
  --ui-exclusive-colour-palette-swiss-app-red-dark-2: #540000;
  --ui-exclusive-colour-palette-swiss-app-green-80: #35c0a1;
  --ui-exclusive-colour-palette-swiss-app-green-60: #67d0b8;
  --ui-exclusive-colour-palette-swiss-app-green-40: #9adfd0;
  --ui-exclusive-colour-palette-swiss-app-green-20: #ccefe7;
  --ui-exclusive-colour-palette-swiss-app-green-dark-1: #017a5f;
  --ui-exclusive-colour-palette-swiss-app-green-dark-2: #00382c;
  --ui-exclusive-colour-palette-swiss-medium-grey: #e9e7eb;
  --ui-exclusive-colour-palette-swiss-light-grey: #f5f2f8;
  --ui-exclusive-colour-palette-swiss-extra-light-grey: #f9f7fb;
  --core-colours-swiss-white: #ffffff;

  /* ── Typography ─────────────────────── */
  --font-heading-styles-titleimpact-bold-family: "Proxima Soft";
  --font-heading-styles-titleimpact-bold-size: 45px;
  --font-heading-styles-titleimpact-bold-weight: 700;
  --font-heading-styles-titleimpact-bold-line-height: 50px;
  --font-heading-styles-titleimpact-semi-family: "Proxima Soft";
  --font-heading-styles-titleimpact-semi-size: 45px;
  --font-heading-styles-titleimpact-semi-weight: 600;
  --font-heading-styles-titleimpact-semi-line-height: 50px;
  --font-heading-styles-titleimpact-thin-family: "Proxima Soft";
  --font-heading-styles-titleimpact-thin-size: 45px;
  --font-heading-styles-titleimpact-thin-weight: 300;
  --font-heading-styles-titleimpact-thin-line-height: 50px;
  --font-heading-styles-titlelarge-bold-family: "Proxima Soft";
  --font-heading-styles-titlelarge-bold-size: 35px;
  --font-heading-styles-titlelarge-bold-weight: 600;
  --font-heading-styles-titlelarge-bold-line-height: 40px;
  --font-heading-styles-titlelarge-semi-family: "Proxima Soft";
  --font-heading-styles-titlelarge-semi-size: 35px;
  --font-heading-styles-titlelarge-semi-weight: 400;
  --font-heading-styles-titlelarge-semi-line-height: 40px;
  --font-heading-styles-titlelarge-thin-family: "Proxima Soft";
  --font-heading-styles-titlelarge-thin-size: 35px;
  --font-heading-styles-titlelarge-thin-weight: 300;
  --font-heading-styles-titlelarge-thin-line-height: 40px;
  --font-heading-styles-titlemedium-bold-family: "Proxima Soft";
  --font-heading-styles-titlemedium-bold-size: 26px;
  --font-heading-styles-titlemedium-bold-weight: 700;
  --font-heading-styles-titlemedium-bold-line-height: 32px;
  --font-heading-styles-titlemedium-semi-family: "Proxima Soft";
  --font-heading-styles-titlemedium-semi-size: 26px;
  --font-heading-styles-titlemedium-semi-weight: 600;
  --font-heading-styles-titlemedium-semi-line-height: 32px;
  --font-heading-styles-titlemedium-thin-family: "Proxima Soft";
  --font-heading-styles-titlemedium-thin-size: 26px;
  --font-heading-styles-titlemedium-thin-weight: 300;
  --font-heading-styles-titlemedium-thin-line-height: 32px;
  --font-heading-styles-titlesmall-bold-family: "Proxima Soft";
  --font-heading-styles-titlesmall-bold-size: 20px;
  --font-heading-styles-titlesmall-bold-weight: 700;
  --font-heading-styles-titlesmall-bold-line-height: 24px;
  --font-heading-styles-titlesmall-semi-family: "Proxima Soft";
  --font-heading-styles-titlesmall-semi-size: 20px;
  --font-heading-styles-titlesmall-semi-weight: 600;
  --font-heading-styles-titlesmall-semi-line-height: 24px;
  --font-heading-styles-titlesmall-thin-family: "Proxima Soft";
  --font-heading-styles-titlesmall-thin-size: 20px;
  --font-heading-styles-titlesmall-thin-weight: 300;
  --font-heading-styles-titlesmall-thin-line-height: 24px;
  --font-heading-styles-titlelittle-bold-family: "Proxima Soft";
  --font-heading-styles-titlelittle-bold-size: 17px;
  --font-heading-styles-titlelittle-bold-weight: 700;
  --font-heading-styles-titlelittle-bold-line-height: 20px;
  --font-heading-styles-titlelittle-semi-family: "Proxima Soft";
  --font-heading-styles-titlelittle-semi-size: 17px;
  --font-heading-styles-titlelittle-semi-weight: 600;
  --font-heading-styles-titlelittle-semi-line-height: 20px;
  --font-heading-styles-titlelittle-thin-family: "Proxima Soft";
  --font-heading-styles-titlelittle-thin-size: 17px;
  --font-heading-styles-titlelittle-thin-weight: 300;
  --font-heading-styles-titlelittle-thin-line-height: 20px;
  --font-heading-styles-titletiny-bold-family: "Proxima Soft";
  --font-heading-styles-titletiny-bold-size: 14px;
  --font-heading-styles-titletiny-bold-weight: 700;
  --font-heading-styles-titletiny-bold-line-height: 16px;
  --font-heading-styles-titletiny-semi-family: "Proxima Soft";
  --font-heading-styles-titletiny-semi-size: 14px;
  --font-heading-styles-titletiny-semi-weight: 600;
  --font-heading-styles-titletiny-semi-line-height: 16px;
  --font-heading-styles-titletiny-thin-family: "Proxima Soft";
  --font-heading-styles-titletiny-thin-size: 14px;
  --font-heading-styles-titletiny-thin-weight: 300;
  --font-heading-styles-titletiny-thin-line-height: 16px;
  --font-body--detail-styles-subtitle-subtitle-1-family: "Proxima Soft";
  --font-body--detail-styles-subtitle-subtitle-1-size: 20px;
  --font-body--detail-styles-subtitle-subtitle-1-weight: 400;
  --font-body--detail-styles-subtitle-subtitle-1-line-height: 24px;
  --font-body--detail-styles-subtitle-subtitle-2-family: "Proxima Soft";
  --font-body--detail-styles-subtitle-subtitle-2-size: 17px;
  --font-body--detail-styles-subtitle-subtitle-2-weight: 600;
  --font-body--detail-styles-subtitle-subtitle-2-line-height: 20px;
  --font-body--detail-styles-bodybig-bodybig-1-family: "Proxima Soft";
  --font-body--detail-styles-bodybig-bodybig-1-size: 16px;
  --font-body--detail-styles-bodybig-bodybig-1-weight: 600;
  --font-body--detail-styles-bodybig-bodybig-1-line-height: 20px;
  --font-body--detail-styles-bodybig-bodybig-2-family: "Proxima Soft";
  --font-body--detail-styles-bodybig-bodybig-2-size: 16px;
  --font-body--detail-styles-bodybig-bodybig-2-weight: 400;
  --font-body--detail-styles-bodybig-bodybig-2-line-height: 20px;
  --font-body--detail-styles-bodyregular-bodyregular-1-family: "Proxima Soft";
  --font-body--detail-styles-bodyregular-bodyregular-1-size: 14px;
  --font-body--detail-styles-bodyregular-bodyregular-1-weight: 600;
  --font-body--detail-styles-bodyregular-bodyregular-1-line-height: 16px;
  --font-body--detail-styles-bodyregular-bodyregular-1-family: "Proxima Soft";
  --font-body--detail-styles-bodyregular-bodyregular-1-size: 14px;
  --font-body--detail-styles-bodyregular-bodyregular-1-weight: 400;
  --font-body--detail-styles-bodyregular-bodyregular-1-line-height: 16px;
  --font-body--detail-styles-bodysmall-bodysmall-1-family: "Proxima Soft";
  --font-body--detail-styles-bodysmall-bodysmall-1-size: 12px;
  --font-body--detail-styles-bodysmall-bodysmall-1-weight: 600;
  --font-body--detail-styles-bodysmall-bodysmall-1-line-height: 14px;
  --font-body--detail-styles-bodysmall-bodysmall-1-family: "Proxima Soft";
  --font-body--detail-styles-bodysmall-bodysmall-1-size: 12px;
  --font-body--detail-styles-bodysmall-bodysmall-1-weight: 400;
  --font-body--detail-styles-bodysmall-bodysmall-1-line-height: 14px;
  --font-body--detail-styles-overline-captionbig-1-family: "Proxima Soft";
  --font-body--detail-styles-overline-captionbig-1-size: 11px;
  --font-body--detail-styles-overline-captionbig-1-weight: 600;
  --font-body--detail-styles-overline-captionbig-1-line-height: 13px;
  --font-body--detail-styles-overline-captionbig-1-family: "Proxima Soft";
  --font-body--detail-styles-overline-captionbig-1-size: 11px;
  --font-body--detail-styles-overline-captionbig-1-weight: 400;
  --font-body--detail-styles-overline-captionbig-1-line-height: 13px;
  --font-body--detail-styles-overline-captionsmall-1-family: "Proxima Soft";
  --font-body--detail-styles-overline-captionsmall-1-size: 10px;
  --font-body--detail-styles-overline-captionsmall-1-weight: 600;
  --font-body--detail-styles-overline-captionsmall-1-line-height: 12px;
  --font-body--detail-styles-overline-captionsmall-2-family: "Proxima Soft";
  --font-body--detail-styles-overline-captionsmall-2-size: 10px;
  --font-body--detail-styles-overline-captionsmall-2-weight: 400;
  --font-body--detail-styles-overline-captionsmall-2-line-height: 12px;
  --font-link-styles-buttonbig-buttonbig-1-family: "Proxima Soft";
  --font-link-styles-buttonbig-buttonbig-1-size: 20px;
  --font-link-styles-buttonbig-buttonbig-1-weight: 600;
  --font-link-styles-buttonbig-buttonbig-1-line-height: 24px;
  --font-link-styles-buttonbig-buttonbig-1-family: "Proxima Soft";
  --font-link-styles-buttonbig-buttonbig-1-size: 20px;
  --font-link-styles-buttonbig-buttonbig-1-weight: 400;
  --font-link-styles-buttonbig-buttonbig-1-line-height: 24px;
  --font-link-styles-buttonmedium-buttonmedium-1-family: "Proxima Soft";
  --font-link-styles-buttonmedium-buttonmedium-1-size: 17px;
  --font-link-styles-buttonmedium-buttonmedium-1-weight: 600;
  --font-link-styles-buttonmedium-buttonmedium-1-line-height: 20px;
  --font-link-styles-buttonmedium-buttonmedium-1-family: "Proxima Soft";
  --font-link-styles-buttonmedium-buttonmedium-1-size: 17px;
  --font-link-styles-buttonmedium-buttonmedium-1-weight: 400;
  --font-link-styles-buttonmedium-buttonmedium-1-line-height: 20px;
  --font-link-styles-buttonsmall-buttonsmall-1-family: "Proxima Soft";
  --font-link-styles-buttonsmall-buttonsmall-1-size: 14px;
  --font-link-styles-buttonsmall-buttonsmall-1-weight: 600;
  --font-link-styles-buttonsmall-buttonsmall-1-line-height: 16px;
  --font-link-styles-buttonsmall-buttonsmall-1-family: "Proxima Soft";
  --font-link-styles-buttonsmall-buttonsmall-1-size: 14px;
  --font-link-styles-buttonsmall-buttonsmall-1-weight: 400;
  --font-link-styles-buttonsmall-buttonsmall-1-line-height: 16px;
  --font-link-styles-buttontiny-buttontiny-1-family: "Proxima Soft";
  --font-link-styles-buttontiny-buttontiny-1-size: 12px;
  --font-link-styles-buttontiny-buttontiny-1-weight: 600;
  --font-link-styles-buttontiny-buttontiny-1-line-height: 14px;
  --font-link-styles-buttontiny-buttontiny-2-family: "Proxima Soft";
  --font-link-styles-buttontiny-buttontiny-2-size: 12px;
  --font-link-styles-buttontiny-buttontiny-2-weight: 400;
  --font-link-styles-buttontiny-buttontiny-2-line-height: 14px;
}
```

## Tailwind Configuration

```javascript
// tailwind.config.js
module.exports = { theme: { extend: {

  colors: {
    'core-colours-swiss-black': '#151a21',
    'core-colours-swiss-black-80': '#44484d',
    'core-colours-swiss-black-60': '#73767a',
    'core-colours-swiss-black-40': '#a1a3a6',
    'core-colours-swiss-black-20': '#d0d1d3',
    'core-colours-swiss-black-dark': '#000000',
    'core-colours-swiss-orange': '#fa5b35',
    'core-colours-swiss-orange-80': '#fb7c5d',
    'core-colours-swiss-orange-60': '#fc9d86',
    'core-colours-swiss-orange-40': '#fdbdae',
    'core-colours-swiss-orange-20': '#feded7',
    'core-colours-swiss-orange-dark-1': '#ae3b1b',
    'core-colours-swiss-orange-dark-2': '#5e1400',
    'extended-palette-swiss-lilac': '#ebddf5',
    'extended-palette-swiss-dusk-pink': '#fab4cc',
    'extended-palette-swiss-lilac-80': '#efe4f7',
    'extended-palette-swiss-lilac-60': '#f3ebf9',
    'extended-palette-swiss-lilac-40': '#f7f1fb',
    'extended-palette-swiss-lilac-20': '#fbf8fd',
    'extended-palette-swiss-lilac-dark-1': '#a49aab',
    'extended-palette-swiss-lilac-dark-2': '#574365',
    'extended-palette-swiss-dusk-pink-80': '#fbc3d6',
    'extended-palette-swiss-dusk-pink-60': '#fcd2e0',
    'extended-palette-swiss-dusk-pink-40': '#fde1eb',
    'extended-palette-swiss-dusk-pink-20': '#fef0f5',
    'extended-palette-swiss-dusk-pink-dark-1': '#ae7d8e',
    'extended-palette-swiss-ice-80': '#93d1ec',
    'extended-palette-swiss-ice-60': '#aeddf1',
    'extended-palette-swiss-ice-40': '#c9e8f5',
    'extended-palette-swiss-ice-20': '#e4f4fa',
    'extended-palette-swiss-ice-dark-1': '#548ba3',
    'extended-palette-swiss-lavender-80': '#d6c1e1',
    'extended-palette-swiss-lavender-60': '#e0d0e9',
    'extended-palette-swiss-lavender-40': '#ebe0f0',
    'extended-palette-swiss-lavender-20': '#f5eff8',
    'extended-palette-swiss-lavender-dark-1': '#8e7b98',
    'extended-palette-swiss-ice': '#78c6e7',
    'extended-palette-swiss-lavender': '#ccb1da',
    'extended-palette-swiss-dusk-pink-dark-2': '#712f46',
    'extended-palette-swiss-ice-dark-2': '#104257',
    'extended-palette-swiss-lavender-dark-2': '#5b3d6b',
    'ui-exclusive-colour-palette-swiss-app-blue': '#0a84ff',
    'ui-exclusive-colour-palette-swiss-app-red': '#e02020',
    'ui-exclusive-colour-palette-swiss-app-green': '#02b089',
    'ui-exclusive-colour-palette-swiss-app-dark-grey': '#8b8e92',
    'ui-exclusive-colour-palette-swiss-app-blue-80': '#3b9dff',
    'ui-exclusive-colour-palette-swiss-app-blue-60': '#6cb5ff',
    'ui-exclusive-colour-palette-swiss-app-blue-40': '#9dceff',
    'ui-exclusive-colour-palette-swiss-app-blue-20': '#cee6ff',
    'ui-exclusive-colour-palette-swiss-app-blue-dark-1': '#065cb2',
    'ui-exclusive-colour-palette-swiss-app-blue-dark-2': '#002262',
    'ui-exclusive-colour-palette-swiss-app-red-80': '#e64d4d',
    'ui-exclusive-colour-palette-swiss-app-red-60': '#ec7979',
    'ui-exclusive-colour-palette-swiss-app-red-40': '#f3a6a6',
    'ui-exclusive-colour-palette-swiss-app-red-20': '#f9d2d2',
    'ui-exclusive-colour-palette-swiss-app-red-dark-1': '#9b1616',
    'ui-exclusive-colour-palette-swiss-app-red-dark-2': '#540000',
    'ui-exclusive-colour-palette-swiss-app-green-80': '#35c0a1',
    'ui-exclusive-colour-palette-swiss-app-green-60': '#67d0b8',
    'ui-exclusive-colour-palette-swiss-app-green-40': '#9adfd0',
    'ui-exclusive-colour-palette-swiss-app-green-20': '#ccefe7',
    'ui-exclusive-colour-palette-swiss-app-green-dark-1': '#017a5f',
    'ui-exclusive-colour-palette-swiss-app-green-dark-2': '#00382c',
    'ui-exclusive-colour-palette-swiss-medium-grey': '#e9e7eb',
    'ui-exclusive-colour-palette-swiss-light-grey': '#f5f2f8',
    'ui-exclusive-colour-palette-swiss-extra-light-grey': '#f9f7fb',
    'core-colours-swiss-white': '#ffffff',
  },
  fontFamily: {
    'proxima-soft': ['Proxima Soft', 'sans-serif'],
  },
}}};
```

---

*Generated on 2026-04-20 by **DesignOps Tools: DesignBridge v2.0** from "YUH-Mobile-Style-Guide_UPDATE_2020-05-26".*
*[designops.tools](https://designops.tools) — Bridge your Figma design system to any AI tool.*