class CreateSkiareas < ActiveRecord::Migration[7.0]
  def change
    create_table :skiareas do |t|

      t.timestamps
    end
  end
end
