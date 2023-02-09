class Review < ApplicationRecord
    belongs_to :skiarea
    belongs_to :user

    validates :comments, presence: true
end

