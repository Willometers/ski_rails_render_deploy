class Location < ApplicationRecord
    # validates :location, uniqueness: true
    belongs_to :user, optional: true
end

# has_many :users through: :saves