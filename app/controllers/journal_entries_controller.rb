class JournalEntriesController < ApplicationController

  before_action :ensure_current_user

  def index
    @journal_entries = JournalEntry.where(user_id: current_user.id)
  end

  def new
    @user = current_user
    @journal_entry = JournalEntry.new
    1.times { @journal_entry.statements.build }
  end

  def create
    @user = current_user
    @journal_entry = JournalEntry.new(journal_entry_params.merge(user_id: @user.id))
    if @journal_entry.save
      flash[:notice] = "YAY IT SAVED"
      redirect_to journal_entries_path
    else
      raise
    end
  end

  private

  def journal_entry_params
    params.require(:journal_entry).permit(:situation, :user_id, statements_attributes: [:id, :journal_entry_id, :observation, :need_id, :request, :satisfied_feeling_id, :unsatisfied_feeling_id])
  end

  def ensure_current_user
    if !current_user
      flash[:notice] = "You must be signed in."
      redirect_to root_path
    end
  end
end
