# Haoyu Zhao Homepage

This repository contains the source for Haoyu Zhao's personal academic homepage, built with Jekyll and deployed to GitHub Pages.

## Local preview

1. Install Ruby and the Bundler version recorded in `Gemfile.lock`.
2. Run `bundle install`.
3. Run `bundle exec jekyll serve --livereload`.

Open `http://localhost:4000` in your browser after the server starts.

Most content and style edits are rebuilt automatically. Restart the server after
changing `_config.yml`.

## Content organization

- `index.html` is the root entry point and renders the shared Markdown content.
- `_pages/about.md` provides the `/about/` route using the same content.
- `_includes/home/` contains one file for each homepage section.
- `_data/navigation.yml` defines the masthead links.
- `_config.yml` contains site metadata, author details, and integrations.
- `_sass/_custom.scss` contains project-specific styles. Theme and vendor styles
  remain in their existing files.

To add or edit a publication, update `_includes/home/publications.md`. Keep every
navigation anchor unique and update `_data/navigation.yml` when adding a section.

The browser loads `assets/js/main.min.js`. The readable JavaScript sources under
`assets/js/` are retained from the theme, but this repository does not currently
define a JavaScript bundling task. Changes intended to run immediately should be
made in the loaded file or accompanied by an explicit bundling workflow.

## Deployment

Pushing the source to the GitHub Pages repository triggers the normal Jekyll
deployment. The generated `_site/` directory is only for local preview and should
not be edited directly.
