class TagCloudGenerator

  def initialize(user_id)
    @user_id = user_id
  end

  def fetch
    journal_entry_ids = JournalEntry.where(user_id: @user_id).pluck(:id)
    need_ids = Statement.where(journal_entry_id: journal_entry_ids).pluck(:need_id)
    unsatisfied_feeling_ids = Statement.where(journal_entry_id: journal_entry_ids).pluck(:unsatisfied_feeling_id)
    satisfied_feeling_ids = Statement.where(journal_entry_id: journal_entry_ids).pluck(:satisfied_feeling_id)

    {
      needs: Need.where(id: need_ids).pluck(:need_name),
      satisfied_feelings: SatisfiedFeeling.where(id: satisfied_feeling_ids).pluck(:feeling_name),
      unsatisfied_feelings: UnsatisfiedFeeling.where(id: unsatisfied_feeling_ids).pluck(:feeling_name)
    }
  end

end
