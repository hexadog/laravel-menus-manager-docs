# Installation

[[toc]]

## Installation

### Requirements
Laravel Menus Manager requires PHP 7.3 and Laravel 7 or 8.

### Installing Menus Manager
You can install Menus Manager through composer
```bash
composer require hexadog/laravel-menus-manager
```

The package will automatically register its service provider.

## Publishing resources (optional)

After installing **Menus Manager**, there are a few things we need to do to prepare our application.

### Publishing views

```bash
php artisan vendor:publish --provider="Hexadog\MenusManager\Providers\PackageServiceProvider" --tag=views
```

This will create a `vendor/menus-manager` directory in your application's `resources/views` directory with all views used by Menus manager blade components.

That's all the setup necessary. Next, let's look at how we can get working with <strong>Menus Manager</strong>.