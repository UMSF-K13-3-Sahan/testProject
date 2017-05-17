class SessionsController < ApplicationController

  def new
    if logged_in?
      render 'form/index'
    end
  end

  def create
    @user = User.find_by(login: params[:session][:login])
    if @user && @user.authenticate(params[:session][:password])
      log_in @user
      render 'form/index'
    else
      flash.now[:danger] = 'Invalid email/password combination'
      render 'new'
    end
  end

  def destroy
    log_out
    redirect_to root_url
  end
end
