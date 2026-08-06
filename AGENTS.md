<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your tr# UI SYSTEM AGENTS.md

## Purpose

This project follows a reusable UI system approach.

The goal is to create simple, flexible, production-ready UI components that can be reused across multiple Next.js projects.

Future goal:

@webpoka/ui

Components should be easy to copy, reuse, and customize.

---

# Tech Stack

- Next.js
- React
- JavaScript
- Tailwind CSS

---

# Core Rules

## Keep Components Simple

Do not over-engineer components.

Avoid:

- Complex variant systems
- Unnecessary abstractions
- Project-specific logic
- Business logic inside UI components

Components should solve UI problems only.

---

# Styling Rules

## Tailwind First

Use Tailwind CSS for:

- Layout
- Spacing
- Responsive design
- Colors
- Typography
- Borders
- Shadows
- Hover states
- Transitions

Example:

```jsx
<div className="flex items-center gap-5 p-6 rounded-xl">
```

---

# Global CSS Rules

globals.css should contain only:

- Tailwind import
- Font setup
- CSS variables
- Theme tokens
- Reset styles
- Global animations

Do NOT create global element styles:

```css
h1 {
}
h2 {
}
p {
}
button {
}
input {
}
```

Reason:

Global element styles create conflicts with reusable components.

---

# Theme System

All project-wide values should come from theme variables.

Example:

```css
@theme {
  --color-primary: #2200bd;
  --color-secondary: #007bff;
  --color-accent: #ff9600;
  --color-alternative: #ed1c24;
  ---color-highlight: #e83e8c;

  --color-dark: #222222;
  --color-light: #6c757d;
  --color-border: #dee2e6;

  --font-body: "Cabin", sans-serif;
  --font-heading: "Quicksand", sans-serif;
}
```

Usage:

```jsx
<h1 className="font-heading text-primary">Title</h1>
```

---

# Typography System

Create reusable typography components.

Components:

- Heading
- Paragraph
- Label
- Link

Example:

```jsx
<Heading>
Our Services
</Heading>


<Paragraph>
Description text
</Paragraph>
```

Requirements:

Every typography component must support:

- children
- className
- native HTML props

Example:

```jsx
<Heading className="text-center text-primary">Title</Heading>
```

---

# Component Structure

Use this structure:

```
components/
└── ui/

    Heading.jsx
    Paragraph.jsx
    Label.jsx
    Link.jsx

    Button.jsx
    IconButton.jsx

    Input.jsx
    Textarea.jsx
    Select.jsx

    Card.jsx

    Modal.jsx
    Accordion.jsx
    Tabs.jsx

    Container.jsx
    Section.jsx

    cn.js
    index.js
```

---

# Component Rules

Every component must:

## 1. Accept children

Example:

```jsx
<Card>Content</Card>
```

## 2. Accept className

Example:

```jsx
<Card className="mt-10">Content</Card>
```

## 3. Support HTML props

Example:

```jsx
<Button disabled>Save</Button>
```

## 4. Use class merging

Always use:

```jsx
cn(defaultClass, className);
```

Never:

```jsx
defaultClass + className;
```

---

# cn Utility

Create:

```
components/ui/cn.js
```

Purpose:

Merge Tailwind classes correctly.

Use:

- clsx
- tailwind-merge

Example:

```jsx
cn("bg-primary", className);
```

---

# Button System

Button should support:

1. Normal button

```jsx
<Button>Contact Us</Button>
```

2. Text + Icon

```jsx
<Button icon={<ArrowRight />}>Learn More</Button>
```

3. Circle icon button

```jsx
<Button shape="circle">
  <ArrowRight />
</Button>
```

Button requirements:

- Background color
- Hover background change
- Smooth transition
- Custom class override

Example:

```jsx
<Button className="bg-blue-600 hover:bg-blue-700">Save</Button>
```

---

# Icon Rules

Icons should always come from props.

Wrong:

```jsx
<Button>
  <Arrow />
</Button>
```

inside component.

Correct:

```jsx
<Button icon={<Arrow />}>Continue</Button>
```

---

# Form Components

Create:

- Input
- Textarea
- Select

Requirements:

Support:

- label
- placeholder
- disabled
- error state
- className

Example:

```jsx
<Input label="Email" placeholder="Enter email" />
```

---

# Card System

Card must stay generic.

Good:

```jsx
<Card>Content</Card>
```

Avoid:

```
ServiceCard
BlogCard
TeamCard
```

inside ui folder.

---

# Layout Components

Create:

## Container

Responsible for:

- max width
- horizontal spacing

## Section

Responsible for:

- vertical spacing

Example:

```jsx
<Section>
  <Container>Content</Container>
</Section>
```

---

# Modal

Modal should support:

- open state
- close action
- children
- custom styling

Example:

```jsx
<Modal>Content</Modal>
```

---

# Accordion

Accordion should support:

- title
- content
- multiple items
- custom class

---

# Tabs

Tabs should support:

- active state
- multiple tabs
- flexible content

---

# Responsive Rules

Always follow mobile-first approach.

Example:

```jsx
className="
text-xl
md:text-3xl
lg:text-5xl
"
```

---

# Animation Rules

Use Tailwind for:

- hover animation
- transition
- transform

Example:

```jsx
hover:scale-105 transition
```

Use CSS for:

- keyframes
- complex animations
- infinite animations
- advanced effects

Example:

```css
@keyframes ripple {
}
```

---

# Accessibility

Every component should support:

- semantic HTML
- keyboard accessibility
- focus state
- aria attributes
- disabled state

Example:

```jsx
<Button aria-label="Close">X</Button>
```

---

# Export System

Use index.js for clean imports.

Example:

index.js

```js
export { default as Button } from "./Button";
export { default as Card } from "./Card";
export { default as Input } from "./Input";
```

Usage:

```jsx
import { Button, Card, Input } from "@/components/ui";
```

---

# Avoid

Never:

- Add API calls
- Add business logic
- Add database logic
- Create page-specific components
- Hardcode content
- Create unnecessary variants

---

# Final Goal

Create a clean UI foundation that can later become:

@webpoka/ui

The API should stay simple:

```jsx
<Button>
Get Started
</Button>


<Card>
Content
</Card>


<Input />


<Modal />
```

Build simple.
Build reusable.
Build flexible
