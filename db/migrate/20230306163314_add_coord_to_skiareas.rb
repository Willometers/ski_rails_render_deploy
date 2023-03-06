class AddCoordToSkiareas < ActiveRecord::Migration[7.0]
  def change
    add_column :skiareas, :lat, :string
    add_column :skiareas, :lon, :string
  end
end
