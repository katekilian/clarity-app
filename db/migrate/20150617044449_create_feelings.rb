class CreateFeelings < ActiveRecord::Migration
  def change
    create_table :feelings do |t|
      t.string  :feeling_name
    end
  end
end
