# Blade components
Menus Manager provides blade components to ease integration in your designs.

You just have to pass your Menu name to get full render.
```php
<x-menus-menu name="main" />
```
It uses `x-menus-children`, `x-menus-divider`, `x-menus-header`, `x-menus-icon` and `x-menus-item` dedicated components. By default Menus Manager will scaffold your application's integration with the [Tailwind CSS](https://tailwindcss.com/) and [Alpine.js](https://github.com/alpinejs/alpine).

You can customize component's views to fit to your need by publishing them into your application resources:
```shell
php artisan vendor:publish --provider="Hexadog\MenusManager\Providers\PackageServiceProvider"
```