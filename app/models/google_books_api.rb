class GoogleBooksApi

  def self.book_search(search)
    @conn = Faraday.new(url: "https://www.googleapis.com/")
    response = @conn.get do |req|
      req.url "/books/v1/volumes?q=subject:#{search}+'non-fiction'&key=#{ENV['GOOGLE_BOOKS_KEY']}"
    end

    JSON.parse(response.body, symbolize_names: true)
  end

  def book_image_url
    item[:volumeInfo][:imageLinks][:smallThumbnail]
  end

end
