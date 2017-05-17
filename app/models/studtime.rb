class Studtime < ApplicationRecord
  belongs_to :student
  belongs_to :form
  validates :month,
            numericality: { only_integer: true, greater_than_or_equal_to: 1, less_than_or_equal_to: 12 }
end
