# ==============================================================================
# COMPASS PROJECT CONFIGURATION
# ==============================================================================

# Can be `:stand_alone` or `:rails`. Defaults to `:stand_alone`.
project_type          = :stand_alone

# Can be `:scss` or `:sass`. Defaults to `:scss`.
preferred_syntax      = :scss

# To enable relative paths to assets via compass helper functions.  Please note
# that this will *only* allow you to use relative URLs for the image_url SASS
# function, and not compute relative URLs for you.
relative_assets       = true

# Indicates whether line comments should be added to compiled css that says
# where the selectors were defined.
line_comments         = false

# The output style for the compiled css.  One of: `:nested`, `:expanded`,
# `:compact`, or`:compressed`.
output_style          = :compressed

# The root of all operations, must be set for Compass to work.
http_path             = "/"

# ==============================================================================
# COMPASS SOURCE DIRECTORY CONFIGURATION
# ==============================================================================

# Directory containing the SASS source files
sass_dir              = "css"

# Directory where Compass dumps the generated CSS files
css_dir               = "css"

# Directory where font files use in font-face declarations are stored
fonts_dir             = "fonts"

# Directory where Compass stores the Grid image, and the sites images are stored
images_dir            = "img"

# Directory where the sites' JavaScript file are stored
javascripts_dir       = "js"

# ==============================================================================
# THE END
# ==============================================================================
