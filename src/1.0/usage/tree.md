# Menu tree
Menu and Item implement `Illuminate\Contracts\Support\Arrayable` interface.

For example: calling `toArray()` method on the following menu:
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
$menu->route('profile.show', __('Profile'))->if(function() {
    return Auth()->check()
});
$menu->route('login', __('Login'))->if(function() {
    return !Auth()->check()
});

// Get Menu Tree
$menu->toArray();
```

returns an array of menu content
```php
[
    "name" => "main",
    "items" => [
        0 => [
            "attributes" => [
            "id" => "id-5f8c4a3d803dd817648152"
            ],
            "active" => true,
            "children" => [],
            "icon" => null,
            "order" => 0,
            "title" => "Home",
            "type" => "link",
            "url" => "http://127.0.0.1:8000",
        ],
        1 => [
            "attributes" => [
                "id" => "id-5f8c4a3d8045f366812051"
            ],
            "active" => false,
            "children" => [
                0 => [
                    "attributes" => [
                    "id" => "id-5f8c4a3d80476901878768"
                    ],
                    "active" => false,
                    "children" => [],
                    "icon" => null,
                    "order" => 1,
                    "title" => "Laravel Menus Manager",
                    "type" => "link",
                    "url" => "https://github.com/hexadog/laravel-menus-manager",
                ],
                2 => [
                    "attributes" => [
                    "id" => "id-5f8c4a3d80496954609369"
                    ],
                    "active" => false,
                    "children" => [],
                    "icon" => null,
                    "order" => 2,
                    "title" => "Laravel Theme Installer",
                    "type" => "link",
                    "url" => "https://github.com/hexadog/laravel-theme-installer",
                ],
                1 => [
                    "attributes" => [
                    "id" => "id-5f8c4a3d8048e808061014"
                    ],
                    "active" => false,
                    "children" => [],
                    "icon" => null,
                    "order" => 3,
                    "title" => "Laravel Themes Manager",
                    "type" => "link",
                    "url" => "https://github.com/hexadog/laravel-themes-manager",
                ]
            ],
            "icon" => null,
            "order" => 0,
            "title" => "Our packages",
            "type" => "header",
            "url" => "",
        ]
    ]
]
```