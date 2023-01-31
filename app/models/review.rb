class Review < ApplicationRecord
    belongs_to :skiarea
    belongs_to :user

    validates :comments, presence: true
    validates :rating, presence: true
end

