class CreateSatisfiedFeelings < ActiveRecord::Migration
  def change
    create_table :satisfied_feelings do |t|
      t.string  :feeling_name
    end
  end
end
