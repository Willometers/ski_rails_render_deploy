class Review < ApplicationRecord
    belongs_to :ski_area
    belongs_to :user

    validates :comments, presence: true
    validates :rating, presence: true
end

