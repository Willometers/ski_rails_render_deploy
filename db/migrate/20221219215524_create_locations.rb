class CreateLocations < ActiveRecord::Migration[7.0]
  def change
    create_table :locations do |t|
      t.string :location
      t.integer :user_id
      t.string :lat
      t.string :lon

      t.timestamps
    end
  end
end
