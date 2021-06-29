# multi-control
A jQuery library providing handlers to add, reorder and delete content based on a template item.

## Example

An example can be found [here](https://raktivan.gr/multi-control/).

```html
<div class="multi-control-home">
  <div class="multi-control-list"></div>
  <button class="multi-control-add">Add</button>
  <div class="multi-control-new">
    <div class="multi-control-item">
      <input class="multi-control-focus">
      <input>
      <button class="multi-control-up">Up</button>
      <button class="multi-control-down">Down</button>
      <button class="multi-control-delete">Delete</button>
    </div>
  </div>
</div>
```

## Usage

Script should be included after [jQuery](https://jquery.com/).

```html
<script src="path-to-jquery.js"></script>
<script src="multi-control/script.js"></script>
```

A container is an element with class `multi-control-home` and the following descendants:
- An element with class `multi-control-list` which holds the collection of every visible item.
- A button with class `multi-control-add` which adds a new item in the collection.
- An element with class `multi-control-new` and only one child; an empty template of an item.
  This element must be the last direct child of the container.
  It is automatically hidden and it should contain only an empty template of an item.

An item is an element with class `multi-control-list` and the following descendants:
- Optinally, one or more input and select fields.
  The first element with class `multi-control-focus` will get focus after it is added.
- A button with class `multi-control-delete` which removes the current item.
- Optionally, two buttons with classes `multi-control-up` and `multi-control-down` respectively,
  which allows reordering of the items within a collection.

## Note
Nesting home containers in items is supported.
