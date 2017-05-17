# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Student.create!([{
                     fname: "Dimon",
                     lname: "Horiainov",
                     age: "22"

                 },
                 {
                     fname: "Nikita",
                     lname: "Sahan",
                     age: "20"

                 },
                 {
                     fname: "Ilya",
                     lname: "Dontsov",
                     age: "23"

                 },
                 {
                     fname: "Admin",
                     lname: "Admin",
                     age: "45"
                 }

                ])

Form.create!([
                 {
                     name: "108"
                 },
                 {
                     name: "228"
                 },
                 {
                     name: "324"
                 }


             ])
User.create!([
                 {
                     student_id: 1,
                     login: "Dimon",
                     password: "12345",
                     role: 1
                 },
                 {
                     student_id: 2,
                     login: "Nikita",
                     password: "12345",
                     role: 1
                 },
                 {
                     student_id: 3,
                     login: "Ilya",
                     password: "12345",
                     role: 1
                 },
                 {
                     student_id: 4,
                     login: "admin",
                     password: "12345",
                     role: 2
                 }
             ])