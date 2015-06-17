class JournalEntry < ActiveRecord::Base
  belongs_to :user
  has_many :statements
  accepts_nested_attributes_for :statements
end
