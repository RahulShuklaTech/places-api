# Places API basic

# Running instructions
Api will respond to requests at : URL: http://localhost:3500

# Endpoints 
    -GET
       '/': will return an object with key data containing all the places stored in the database
       '/<name of the place>': will return the place with the given name
       '/?name=<name of the place>' : will return an object with key data containing all the places named <name of the place> stored in the database
       '/?city=<name of the city>' : will return an object with key data containing all the places with city <city of the place> stored in the database

    -POST
        '/': will allow you to add data in form of an object like: 
            {
                name: name of the place
                slug: unique key
                city: name of the city
                state: name of the state
            }
