class CreateJournalEntries < ActiveRecord::Migration
  def change
    create_table :journal_entries do |t|
      t.text  :situation
      t.integer :user_id
      t.timestamps
    end
  end
end
