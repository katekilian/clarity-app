class CreateStatements < ActiveRecord::Migration
  def change
    create_table :statements do |t|
      t.integer :journal_entry_id
      t.string  :observation
      t.integer :feeling_id
      t.integer :need_id
      t.string  :request
      t.timestamps
    end
  end
end
