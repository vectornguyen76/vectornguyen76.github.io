# vectornguyen.com

Personal site of Vector Nguyen, built with Jekyll and served by GitHub Pages from `master`.

## Editing content

Almost everything lives in `_data/` and renders through small includes, so routine updates
never touch HTML:

| What                           | Where                                                |
| ------------------------------ | ---------------------------------------------------- |
| Name, role, email, social      | `_config.yml` (`author`, `social.links`)             |
| Nav links                      | `_data/navigation.yml`                               |
| Updates timeline               | `_data/updates.yml` (newest first; home shows top 5) |
| Current product, side projects | `_data/projects.yml` (`building`, `side`)            |
| Experience, education, skills  | `_data/experience.yml`                               |
| Page copy                      | `index.html`, `about.md`, `updates.html`, `404.html` |

Project media go in `assets/img/projects/`. Convert screen recordings to MP4 instead of GIF,
and give each one a WebP poster:

```bash
ffmpeg -i demo.mov -an -vf "fps=15,scale=640:-2" -c:v libx264 -pix_fmt yuv420p -crf 28 -movflags +faststart demo.mp4
ffmpeg -i demo.mp4 -frames:v 1 poster.png && cwebp -q 80 poster.png -o demo.webp
```

## Running locally

Production uses the classic GitHub Pages build, so the Gemfile pins the `github-pages` gem to
get the same Jekyll version and plugins.

```bash
bundle config set --local path vendor/bundle
bundle install
LANG=en_US.UTF-8 bundle exec jekyll serve
```

Open http://localhost:4000.

## Structure

```
_config.yml        site settings, SEO, profile links
_data/             all page content
_includes/         head, header, footer, profile, cards, timeline, icons
_layouts/          default (shell) and page (single column)
_sass/             tokens, base, layout, home, timeline, card, page
assets/css/        main.scss entry point
assets/js/main.js  autoplays project videos while on screen
assets/img/        optimized images and videos
```

The stylesheet is compiled by the Sass bundled with GitHub Pages (`jekyll-sass-converter` 1.x).
Use `@import`, not `@use`, and wrap arithmetic inside `clamp()` in `calc()`.

## Credits

The original layout was based on [Huyen Nguyen's theme](https://github.com/huyen-nguyen/huyen-nguyen.github.io).
Icons come from [Simple Icons](https://simpleicons.org) (CC0) and [Lucide](https://lucide.dev) (ISC).

## License

[MIT](LICENSE)
