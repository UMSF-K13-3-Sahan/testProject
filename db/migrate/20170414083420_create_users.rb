class CreateUsers < ActiveRecord::Migration[5.0]
  def change
    create_table :users do |t|
      t.integer :student_id
      t.string :login
      t.string :password_digest
      t.string :role
      t.timestamps
    end
  end
end
