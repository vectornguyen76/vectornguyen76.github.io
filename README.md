# Personal Portfolio

Welcome to my personal portfolio! This website showcases my projects, skills, and experiences as a software developer. It's built using Jekyll and hosted on GitHub Pages.

## Quick Start

1. **Install Prerequisites**

   - Ruby >= 2.7.0 (with DevKit on Windows)
   - RubyGems
   - Git

2. **Install Jekyll and Dependencies**

   ```bash
   gem install jekyll bundler
   bundle install
   ```

3. **Run Development Server**
   ```bash
   bundle exec jekyll serve
   ```
   Visit `http://localhost:4000` in your browser

## Features

- Clean and responsive design
- Project showcase
- Blog section
- Easy navigation

## Development Guide

### macOS Setup

1. Install Ruby using Homebrew:

   ```bash
   brew install ruby
   ```

2. Add Ruby to your path (add to ~/.zshrc or ~/.bash_profile):

   ```bash
   export PATH="/usr/local/opt/ruby/bin:$PATH"
   ```

3. Restart your terminal and verify installation:
   ```bash
   ruby -v
   gem -v
   ```

### Windows Setup

1. Download Ruby+Devkit from [RubyInstaller](https://rubyinstaller.org/downloads/)
2. During installation, check "Add Ruby executables to your PATH"
3. Verify installation:
   ```bash
   ruby -v
   gem -v
   ```

### Common Issues

1. **SSL Certificate Errors**

   ```bash
   gem install webrick
   ```

2. **Encoding Issues**

   ```bash
   set LANG=en_US.UTF-8
   ```

3. **Bundle Install Fails**
   ```bash
   del Gemfile.lock
   bundle install
   ```

## Project Structure

- **\_config.yml**: Site configuration
- **\_posts/**: Blog posts
- **\_layouts/**: Layout templates
- **assets/**: Static files (images, CSS, etc.)

## Contributing

Feel free to open issues or submit pull requests for improvements.

## Credits

- [Huyen Nguyen's Theme](https://github.com/huyen-nguyen/huyen-nguyen.github.io)

## License

This project is available under the [MIT License](LICENSE).
