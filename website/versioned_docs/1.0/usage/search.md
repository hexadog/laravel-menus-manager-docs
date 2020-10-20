# Search for item
Search an item recursively (in all hierarchy).
```php
$menu->search('title', 'Home'); // Return the found item or null
```

or search in first level item children
```php
$menu->findBy('title', 'Home');
```

You can search an item by title and add it if not found in one line with `findByTitleOrAdd()` helper method.
```php
$menu->findByTitleOrAdd('title');
```
