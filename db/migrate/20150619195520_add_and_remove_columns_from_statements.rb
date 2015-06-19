class AddAndRemoveColumnsFromStatements < ActiveRecord::Migration
  def change
    add_column  :statements, :satisfied_feeling_id, :integer
    add_column  :statements, :unsatisfied_feeling_id, :integer
    remove_column  :statements, :feeling_id, :integer
  end
end
