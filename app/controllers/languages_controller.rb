class LanguagesController < ApplicationController
  def change
    I18n.locale = params[:locale]
    cookies[:locale] = params[:locale]
  end
end
