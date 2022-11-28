//
//Find and filter rooms with 2 beds 2 bedrooms
//Address country brazil

db.listingsAndReviews.find(
  {
    beds: 2,
    bedrooms: 2,
    "address.country": "Brazil",
  },
  {
    name: 1,
    beds: 1,
    bedrooms: 1,
    "address.country": 1,
  }
);

db.listingsAndReviews.find(
  {
    beds: 2,
    bedrooms: {
      $gte: 3,
      $lte: 6,
    },
    "address.country": "Brazil",
  },
  {
    name: 1,
    beds: 1,
    bedrooms: 1,
    "address.country": 1,
  }
);

//find listings brazil and canada
//more than 3 bedrooms
db.listingsAndReviews.find(
  {
    $or: [
      {
        "address.country": "Brazil",
      },
      {
        "address.country": "Canada",
      },
    ],
    bedrooms: {
      $gt: 3,
    },
  },
  {
    name: 1,
    "address.country": 1,
    bedrooms: 1,
  }
);

//find all listings that all of the following is inside
//in the amenties array
db.listingsAndReviews.find(
  {
    amenities: {
      $all: ["Oven", "Microwave", "Stove"],
    },
  },
  {
    name: 1,
    amenities: 1,
  }
);

//find all the listings and reviews before 2019
db.listingsAndReviews.find(
  {
    first_review: {
      $gt: ISODate("2018-12-31"),
    },
  },
  {
    "name": 1,
    "first_review": 1
  }
);

//find all listings with a regex 
//find as longs as the keyword spacious is used
db.listingsAndReviews.find({
    "name": {
        "$regex": "spacious", "$options": "i"
    }
},{
    "name": 1
})