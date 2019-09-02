import React from "react";
import { Link } from "react-router-dom";

export const LIST_CONTACTS = [
  {
    photo: "img/Photo.png",
    name: "Jeffery Fox",
    zipcode: "123456",
    city: "San Francisco, CA",
    price: "$450,000-$500,000",
    date: "July 1, 2019"
  },
  {
    photo: "img/Photo.png",
    name: "Jeffery Fox",
    zipcode: "123456",
    city: "San Francisco, CA",
    price: "$450,000-$500,000",
    date: "July 1, 2019"
  },
  {
    photo: "img/Photo.png",
    name: "Jeffery Fox",
    zipcode: "123456",
    city: "San Francisco, CA",
    price: "$450,000-$500,000",
    date: "July 1, 2019"
  },
  {
    photo: "img/Photo.png",
    name: "Jeffery Fox",
    zipcode: "123456",
    city: "San Francisco, CA",
    price: "$450,000-$500,000",
    date: "July 1, 2019"
  },
  {
    photo: "img/Photo.png",
    name: "Jeffery Fox",
    zipcode: "123456",
    city: "San Francisco, CA",
    price: "$450,000-$500,000",
    date: "July 1, 2019"
  },
  {
    photo: "img/Photo.png",
    name: "Jeffery Fox",
    zipcode: "123456",
    city: "San Francisco, CA",
    price: "$450,000-$500,000",
    date: "July 1, 2019"
  }
];

export const COLUMNS = [
  {
    key: "photo",
    render: val => <img width="140" height="80" src={val} alt="house" />
  },
  {
    key: "name",
    render: val => (
      <Link to="/details" className="text-dark text-underline">
        {val}
      </Link>
    )
  },
  {
    key: "zipcode"
  },
  {
    key: "city"
  },
  {
    key: "price"
  },
  {
    key: "date"
  }
];
