# Pagination

This project implements different types of pagination for datasets, including simple pagination, hypermedia pagination, and deletion-resilient pagination.

## Files

- `0-simple_helper_function.py` - Contains the `index_range` function for calculating pagination indices
- `1-simple_pagination.py` - Implements a `Server` class with basic pagination functionality
- `2-hypermedia_pagination.py` - Extends the Server class with hypermedia metadata for pagination
- `3-hypermedia_del_pagination.py` - Implements deletion-resilient pagination using index-based approach
- `Popular_Baby_Names.csv` - Sample dataset for testing pagination

## Learning Objectives

After completing this project, you will understand:

1. **Simple Pagination**: How to paginate a dataset with simple page and page_size parameters
2. **Hypermedia Pagination**: How to paginate a dataset with hypermedia metadata (next_page, prev_page, total_pages)
3. **Deletion-Resilient Pagination**: How to paginate in a deletion-resilient manner using index-based pagination

## Usage

Each file can be run independently to test the pagination functionality:

```bash
python3 0-main.py  # Test simple helper function
python3 1-main.py  # Test simple pagination
python3 2-main.py  # Test hypermedia pagination
python3 3-main.py  # Test deletion-resilient pagination
```

## Requirements

- Python 3.9+
- All files end with a new line
- All files start with `#!/usr/bin/env python3`
- Code follows pycodestyle (version 2.5.*)
- All functions and coroutines are type-annotated
- All modules and functions have proper documentation
