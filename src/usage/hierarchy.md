# Menu hierarchy
You can create multi-level menus. Each Menu item can have as many children as you want.

_See [Menu Item](#menu-item) to find out how to create a new Menu Item._

You can easily retreive children using:
```php
// Check if item has children
if ($menuItem->hasChildren()) {
    // Get all item children as Collection
    $items = $menuItem->children();

    // Loop into items
    foreach($items as $item) {
        // Get item parent
        $parent = $item->parent();

        // ...
    }
}
```
