class CreateReviews < ActiveRecord::Migration[7.0]
  def change
    create_table :reviews do |t|
      t.integer :user_id
      t.integer :skiarea_id
      t.integer :rating
      t.text :comments
      t.string :email
      
      t.timestamps
    end
  end
end
