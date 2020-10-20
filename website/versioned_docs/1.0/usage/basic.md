# Basic usage
Use the provided `Menus` facade with `register` method to create a new menu.

```php
// Create new "main" Menu
$menu = Menus::register('main');
```

::: tip
if menu with given name already exists it will be returned - this way you can access to any existing menu anywhere in your application
:::

You can now access to the menu any time using:
```php
// Retreive "main" Menu
$menu = Menus::get('main');
```

And get all items for the Menu
```php
// Get all items from Menu
$items = $menu->items();
```
You can get a specific item by using search methods. See [Search for item](/usage/search).
