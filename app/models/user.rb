class User < ApplicationRecord
    has_many :locations, dependent: :destroy
    has_many :reviews

    has_secure_password
    validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }
    validates_uniqueness_of :email
end

# has_many :locations through: :saves