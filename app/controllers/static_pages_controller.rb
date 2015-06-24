class StaticPagesController < ApplicationController

  def index
    @user = User.new
  end

  def keyword_search
    @search_results = GoogleBooksApi.book_search(params[:keyword])
  end

end
