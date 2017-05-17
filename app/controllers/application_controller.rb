class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  include SessionsHelper
  before_action :set_locale

  def set_locale
    if cookies[:locale].nil?
      I18n.locale = extract_locale_from_accept_language_header
    else
      I18n.locale= cookies[:locale];
    end
  end

  private
  def extract_locale_from_accept_language_header
    begin
      request.env['HTTP_ACCEPT_LANGUAGE'].scan(/^[a-z]{2}/).first
    rescue
      'en'
    end
  end
end
