class Form < ApplicationRecord

has_many  :studtimes
has_many :students, through: :studtimes
validates :name, length: {in: 1..10},
          format: { with: /\A[a-zA-Z0-9]+\z/}
end
