require 'csv'

desc "Import satisfied feelings from csv file"
task :import => [:environment] do

  file = "db/feelings_satisfied.csv"

  CSV.foreach(file, :headers => true) do |row|
    SatisfiedFeeling.create(feeling_name: row[0])
  end

end


desc "Import unsatisfied feelings from csv file"
task :import => [:environment] do

  file = "db/feelings_unsatisfied.csv"

  CSV.foreach(file, :headers => true) do |row|
    UnsatisfiedFeeling.create(feeling_name: row[0])
  end

end


desc "Import needs from csv file"
task :import => [:environment] do

  file = "db/needs.csv"

  CSV.foreach(file, :headers => true) do |row|
    Need.create(need_name: row[0])
  end

end
