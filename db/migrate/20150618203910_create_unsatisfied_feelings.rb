class CreateUnsatisfiedFeelings < ActiveRecord::Migration
  def change
    create_table :unsatisfied_feelings do |t|
      t.string  :feeling_name
    end
  end
end
