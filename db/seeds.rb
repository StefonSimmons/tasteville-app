# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

flamingo = User.create(username: "flamingo", email: "flamingo@ga.edu", password_digest: "123456")
jessa = User.create(username: "Jessa", email: "jess@ga.edu", password_digest: "123456")

Food.create(name: "oatmeal", user: flamingo)
Food.create(name: "captain crunch", user: jessa)
Food.create(name: "raisin bran", user: jessa)


spicy = Flavor.create(name: "spicy")
sweet = Flavor.create(name: "sweet")
bitter = Flavor.create(name: "bitter")
sour = Flavor.create(name: "sour")
salty = Flavor.create(name: "salty")
umami = Flavor.create(name: "umami")

