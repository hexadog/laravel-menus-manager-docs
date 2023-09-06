# Menu item
An item can be added at any level: the menu itself or any child item.
```php
// Create a new menu
$menu = Menus::register('main');

// Add a first-level item
$menu->route('index', 'Home');

// Create a first-level item with children
$menuItem = $menu->header('Our packages');
$menuItem->url('https://github.com/hexadog/laravel-menus-manager', 'Laravel Menus Manager')->order(1);
$menuItem->url('https://github.com/hexadog/laravel-themes-manager', 'Laravel Themes Manager')->order(3);
$menuItem->url('https://github.com/hexadog/laravel-theme-installer', 'Laravel Theme Installer')->order(2);

// Create first-level items with visibility condition
$menu->route('profile.show', fn () => __('New Profile'))->if(function () {
    return Auth()->check()
});
$menu->route('login', fn () => __('Login'))->if(function() {
    return !Auth()->check()
});
```

You can access to the generated item url with `getUrl()` method on any item.
```php
$menuItem->getUrl();
```

## Item Types
Menus Manager handle multiple item types: Route item, URL item, Header item and Divider item

### Route item
Add a menu item for a route by passing the route name and a title
```php
$menuItem = $menu->route('index', 'Home');
```

You can pass parameters to the route by passing an array instead of a string as first parameter
```php
$menuItem = $menu->route(['index', ['type' => 'anonymous']], 'Home');
```

### Url item
Add a menu item for an URL with the given title
```php
$menuItem = $menu->url('https://hexadog.com', 'hexadog');
```

### Divider item
A simple divider: no action available. No title is required for this type of item.
```php
$menuItem = $menu->divider();
```

### Header item
Add header item: no action available. Mainly used to visually group sub-menus
```php
$menuItem = $menu->header('General');
```

## Item Icon
You can add an icon to your menu item by calling `icon()` method with the icon classes as parameter.
```php
$menu->route('index', 'Home')->icon('fas fa-home');
```

## Item Order
By default, items are displayed in order they are created. You can specify item order to organize your menu entries:
```php
$menu->route('index', 'Home')->order(1);
$menu->route('contact', 'Contact')->order(2);
```

## Item Visibility
```php
$menuItem->isVisible();
```

You can condition item visibility by using the `if()` method.
You can chain conditions. This way each condition must be filled to make the item visible.
```php
$menu->route('profile.show', fn () => __('Profile'))->if(function() {
    return Auth()->check()
});
$menu->route('login', fn () => __('Login'))->if(function() {
    return !Auth()->check()
});

$menu->route('post.create', fn () => __('New Post'))->if(function() {
    return Auth()->check()
})->if(function() {
    return Auth()->user()->can('create.post')
});
```

## Active state
Check if the current item is active or has an active child.
Depending on the item type, the active state is determined using the `Request::is()` or `Route::is()` Laravel methods.
```php
$menuItem->isActive();
```
