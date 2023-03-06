# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Skiarea.create(name: "Beartown Ski Area", location: "12901", lat: "44.7479", lon: "73.4417")
Skiarea.create(name: "Bristol Mountain", location: "14424", lat: "42.8344", lon: "77.3095")
Skiarea.create(name: "Belleayre Mountain", location: "12441", lat: "42.1422", lon: "74.5103")
Skiarea.create(name: "Brantling Ski and Snowboard Center", location: "14551", lat: "44.7479", lon: "73.4417")
Skiarea.create(name: "Buffalo Ski Club", location: "14033", lat: "43.2237", lon: "77.0334")
Skiarea.create(name: "Catamount Ski Area", location: "12529", lat: "42.2301", lon: "73.5359")
Skiarea.create(name: "Cazenovia Ski Club", location: "13035", lat: "42.9263", lon: "75.8302")
Skiarea.create(name: "Cockaigne Ski Area", location: "14723", lat: "42.2887", lon: "79.1323")
Skiarea.create(name: "Dry Hill Ski Area", location: "13601", lat: "43.9960", lon: "75.9231")
Skiarea.create(name: "Four Seasons Golf and Ski Center", location: "13066", lat: "43.0380", lon: "75.9986")
Skiarea.create(name: "Gore Mountain", location: "12853", lat: "43.6707", lon: "74.0535")
Skiarea.create(name: "Greek Peak", location: "13045", lat: "42.5891", lon: "76.2016")
Skiarea.create(name: "Hickory Ski Center", location: "12885", lat: "43.5245", lon: "73.8184")
Skiarea.create(name: "Holiday Mountain", location: "12701", lat: "41.6608", lon: "74.7103")
Skiarea.create(location: "14731", name: "Holiday Valley", lat: "42.2626", lon: "78.6674")
Skiarea.create(location: "14731", name: "HoliMont", lat: "42.2898", lon: "78.6455")
Skiarea.create(location: "14512", name: "Hunt Hollow Ski Club", lat: "42.6741", lon: "77.4243")
Skiarea.create(location: "12442", name: "Hunter Mountain", lat: "42.2207", lon: "74.2062")
Skiarea.create(location: "14069", name: "Kissing Bridge", lat: "42.6046", lon: "78.6399")
Skiarea.create(location: "13158", name: "Labrador Mountain", lat: "42.7141", lon: "75.9695")
Skiarea.create(location: "12306", name: "Maple Ski Ridge", lat: "42.7956", lon: "74.0065")
Skiarea.create(location: "13420", name: "McCauley Mountain", lat: "43.7192", lon: "74.9443")
Skiarea.create(location: "12983", name: "Mount Pisgah", lat: "44.2239", lon: "74.2638")
Skiarea.create(location: "10990", name: "Mt. Peter Ski Area", lat: "41.2564", lon: "74.3598")
Skiarea.create(location: "12164", name: "Oak Mountain Ski Center", lat: "43.6047", lon: "74.3822")
Skiarea.create(location: "14724", name: "Peek'n Peak Resort", lat: "42.0655", lon: "79.6727")
Skiarea.create(location: "12474", name: "Plattekill", lat: "42.3002", lon: "74.5698")
Skiarea.create(location: "12095", name: "Royal Mountain Ski Area", lat: "43.0151", lon: "74.4174")
Skiarea.create(location: "13473", name: "Snow Ridge Ski Area", lat: "43.6367", lon: "75.4578")
Skiarea.create(location: "13159", name: "Song Mountain", lat: "42.8080", lon: "76.1088")
Skiarea.create(location: "14884", name: "Swain Resort", lat: "42.5032", lon: "77.8939")
Skiarea.create(location: "12563", name: "Thunder Ridge Ski Area", lat: "41.5098", lon: "73.5712")
Skiarea.create(location: "12953", name: "Titus Mountain", lat: "44.7751", lon: "74.2879")
Skiarea.create(location: "13063", name: "Toggenburg Mountain", lat: "42.8290", lon: "75.9695")
Skiarea.create(location: "12804", name: "West Mountain Ski Center", lat: "43.2994", lon: "73.7046")
Skiarea.create(location: "12997", name: "Whiteface Mountain", lat: "44.3503", lon: "73.8317")
Skiarea.create(location: "12834", name: "Willard Mountain", lat: "43.0843", lon: "73.5123")
Skiarea.create(location: "12496", name: "Windham Mountain", lat: "42.3315", lon: "74.2414")
Skiarea.create(location: "13486", name: "Woods Valley Ski Area", lat: "43.3496", lon: "75.3529")

User.create(email: "abc@aaa.com", password: "abc")

puts "done seeding"



