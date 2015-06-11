class AuthenticationController < ApplicationController

  def new

  end

  def create
    user = User.find_by(email: params[:email])
    if user && user.authenticate(params[:password])
      session[:user_id] = user.id
      flash[:notice] = "You're signed in"
      redirect_to journal_entries_path
    else
      render :new
    end
  end


  def destroy
    session.clear
    flash[:notice] = "You've successfully signed out. See ya next time!"
    redirect_to root_path
  end

end
