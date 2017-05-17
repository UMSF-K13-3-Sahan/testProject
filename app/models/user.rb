class User < ApplicationRecord
  belongs_to :student
  has_secure_password
  validates :login, length: { in: 3..20 }
  validates :role, length: { maximum: 1 }
end

