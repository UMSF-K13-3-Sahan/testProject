class CreateStudtimes < ActiveRecord::Migration[5.0]
  def change
    create_table :studtimes do |t|
      t.integer :student_id
      t.integer :form_id
      t.integer :month
      t.timestamps
    end
  end
end
