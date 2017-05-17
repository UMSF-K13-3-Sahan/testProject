class Student < ApplicationRecord
  has_many :studtimes
  has_many :forms, through: :studtimes
  has_one :user 
  validates :age,
            numericality: { only_integer: true, greater_than_or_equal_to: 16, less_than_or_equal_to: 99 }
  validates :fname,
            length:  { in: 2..20},
            presence: true,
            format: { with: /\A[а-яА-Яa-zA-Z]+\z/}
  validates :lname,
            length:  { in: 2..20},
            presence: true,
            format: { with: /\A[а-яА-Яa-zA-Z]+\z/}
end
