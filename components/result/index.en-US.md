---
category: Components
type: Combination
title: Result
---

Result page contains feedback like illustrations, icons and text.

### Rules

- Use for significant feedback like payment success or network failure.
- Improve brand value with beautiful illustrations.
- Provide obvious operation point for error type result page, eg: reload page.

## API

Support: Web, React-Native

Properties | Descrition | Type | Default
-----------|------------|------|--------
imgUrl | image url | string / Image Source(rn)  | -
img | image node (could be `<img src="" />` or `<Icon type="" />`), which will override `imgUrl` | React.ReactNode | -
title | title of result page | React.ReactNode | -
message | message text of result page | React.ReactNode | -
buttonText | text of built-in button | string | -
buttonType | type of built-in button | string | -
onButtonClick | callback of clicking built-in button | (e: Object): void | -
