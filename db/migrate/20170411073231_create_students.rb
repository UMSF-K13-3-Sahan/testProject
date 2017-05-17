class CreateStudents < ActiveRecord::Migration[5.0]
  def change
    create_table :students do |t|
      t.string :fname
      t.string :lname
      t.string :age
      t.timestamps
    end
  end
end
