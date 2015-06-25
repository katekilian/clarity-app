class JournalEntry < ActiveRecord::Base
  belongs_to :user
  has_many :statements, dependent: :destroy
  accepts_nested_attributes_for :statements, allow_destroy: true
end
