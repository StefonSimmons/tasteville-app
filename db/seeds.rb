# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Flavor.destroy_all
Food.destroy_all
User.destroy_all

flamingo = User.create(username: "flamingo", email: "flamingo@ga.edu", password_digest: "123456")
jessa = User.create(username: "Jessa", email: "jess@ga.edu", password_digest: "123456")

pp "#{User.count} users created"

oatmeal = Food.create(name: "oatmeal", user: flamingo)
bagel = Food.create(name: "bagel", user: flamingo)
captain_crunch = Food.create(name: "captain crunch", user: jessa)
raisin_bran = Food.create(name: "raisin bran", user: jessa)
bonito_flakes = Food.create(name: "bonito flakes", user: flamingo)
kimchi = Food.create(name: "kimchi", user: flamingo)

pp "#{Food.count} foods created"

spicy = Flavor.create(name: "spicy")
sweet = Flavor.create(name: "sweet
bitter = Flavor.create(name: "bitt")er")
sour = Flavor.create(name: "sour")
salty = Flavor.create(name: "salty")
umami = Flavor.create(name: "umami")

pp "#{Flavor.count} flavors created"


kimchi.flavors.push(umami, spicy, sweet, sour)
bonito_flakes.flavors.push(umami)

captain_crunch.flavors << sweet
bagel.flavors << salty
oatmeal.flavors << sweet
oatmeal.flavors << spicy
# oatmeal.flavors.push(sweet, spicy)

