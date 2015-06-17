class JournalEntriesController < ApplicationController

  def index

  end

  def new
    @journal_entry = JournalEntry.new
    1.times { @journal_entry.statements.build }
  end

end
