# ARIA

### Accessible Rich Internet Applications

It's a way to make websites more accessible to people with disabilities.

### ARIA attributes

1. `aria-current`
   - Indicates that an item is currently selected.
   - `"page"` indicates that the item is a page.
   - `"true"` that the item is currently selected.
   - Other valid values: `"step" "location" "date" "time"`
   - Use on elements that can be selected.
2. `aria-disabled`
   - Indicates the status of an item.
   - `"true"` indicates that the item is disabled.
   - Switch it to `"false"` when the item is enabled.
   - Use on elements that can be disabled and enabled.
3. `aria-label`
   - Describes an item without a label.
   - `"Close"` is describing a button that has a meaning, but no label.
   - Use on icons or images that have a meaning but no label.

### Enable the accessibility tree in developer tools

1. Open developer tools
2. Elements tab
3. Accessibility tab
4. Enable full-page accessibility tree
5. Refresh the page

### Accessibility tree

The accessibility tree:

- Represents the structure of a web page.
- Only includes accessibility elements.
- How assistive technologies interpret and describe a web page to a user.

### Semantic elements

1. header
2. main
3. footer
4. section
5. headings
6. `<p>`
7. `<label>`
8. `<article>`
   - Use for blog posts, news articles, and other independent self-contained content.
   - Example: recipe cards
9. `<section>`
   - Use to enclose themes, categories, and content with headings.
   - Example: recipe ingredients, recipe instructions
10. `<dialog>`

- Use this for a box or window that can be opened or closed.
- Example: Bootstrap alert
- Note: Use the open attribute to show the `<dialog>` content.

11. `<output>`
    - Use this for the result of a calculation or showing feedback.
    - Example: The form has been successfully submitted.

### Semantic attributes

1. Attributes that begin with `aria`
   - aria-current
   - aria-disabled
   - area-label
2. `type`
   - type="password"
   - type="tel"
3. `role`
   - role="alert"
4. `for` and `id`
   - for="phone"
   - id="phone"
   - `for` should match the `id`
