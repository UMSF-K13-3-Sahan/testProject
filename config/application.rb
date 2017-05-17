require_relative 'boot'

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module SecondProj
  class Application < Rails::Application
    config.middleware.use I18n::JS::Middleware
    config.i18n.default_locale = :en
    config.i18n.load_path += Dir[Rails.root.join('config', 'locales', '**', '*.{rb,yml}')]
  end
end
module ReactTesting
  class Application < Rails::Application
    config.react.addons = true
  end
end

