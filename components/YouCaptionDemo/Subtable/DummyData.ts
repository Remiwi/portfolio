const DATA = [
  {
    author: 'John_Doe',
    video: "PxqB_lQNdto",
    language: 'English',
    rating: {
      averageRating: 4.5,
      captionID: "1",
    },
    download: "https://www.google.com",
  },
  {
    author: 'Gabe_Newell',
    video: "PxqB_lQNdto",
    language: 'English',
    rating: {
      averageRating: 4.2,
      captionID: "2",
    },
    download: "https://www.bing.com",
  },
  {
    author: 'Miguel_de_Cervantes',
    video: "PxqB_lQNdto",
    language: 'Spanish',
    rating: {
      averageRating: 4.0,
      captionID: "3",
    },
    download: "https://www.yahoo.com",
  },
  {
    author: 'Author_4',
    video: "PxqB_lQNdto",
    language: 'Language 4',
    rating: {
      averageRating: 4.7,
      captionID: "4",
    },
    download: "https://www.example1.com",
  },
  {
    author: 'Author_5',
    video: "PxqB_lQNdto",
    language: 'Language 5',
    rating: {
      averageRating: 4.2,
      captionID: "5",
    },
    download: "https://www.example2.com",
  },
  {
    author: 'Author_6',
    video: "PxqB_lQNdto",
    language: 'Language 6',
    rating: {
      averageRating: 3.9,
      captionID: "6",
    },
    download: "https://www.example3.com",
  },
  {
    author: 'Author_7',
    video: "PxqB_lQNdto",
    language: 'Language 7',
    rating: {
      averageRating: 4.3,
      captionID: "7",
    
    },
    download: "https://www.example4.com",
  },
  {
    author: 'Author_8',
    video: "PxqB_lQNdto",
    language: 'Language 8',
    rating: {
      averageRating: 3.6,
      captionID: "8",
    },
    download: "https://www.example5.com",
  },
  {
    author: 'Author_9',
    video: "PxqB_lQNdto",
    language: 'Language 9',
    rating: {
      averageRating: 4.4,
      captionID: "9",
    
    },
    download: "https://www.example6.com",
  },
  {
    author: 'Author_10',
    video: "PxqB_lQNdto",
    language: 'Language 10',
    rating: {
      averageRating: 3.8,
      captionID: "10",
    },
    download: "https://www.example7.com",
  },
  {
    author: 'Author_11',
    video: "PxqB_lQNdto",
    language: 'Language 11',
    rating: {
      averageRating: 4.5,
      captionID: "11",
    
    },
    download: "https://www.example8.com",
  },
  {
    author: 'Author_12',
    video: "PxqB_lQNdto",
    language: 'Language 12',
    rating: {
      averageRating: 3.4,
      captionID: "12",
    
    },
    download: "https://www.example9.com",
  },
  {
    author: 'Author_13',
    video: "PxqB_lQNdto",
    language: 'Language 13',
    rating: {
      averageRating: 4.6,
      captionID: "13",
    },
    download: "https://www.example10.com",
  },
  {
    author: 'Author_14',
    video: "PxqB_lQNdto",
    language: 'Language 14',
    rating: {
      averageRating: 3.7,
      captionID: "14",
    
    },
    download: "https://www.example11.com",
  },
  {
    author: 'Author_15',
    video: "PxqB_lQNdto",
    language: 'Language 15',
    rating: {
      averageRating: 4.3,
      captionID: "15",
    
    },
    download: "https://www.example12.com",
  },
  {
    author: 'Author_16',
    video: "PxqB_lQNdto",
    language: 'Language 16',
    rating: {
      averageRating: 3.9,
      captionID: "16",
    
    },
    download: "https://www.example13.com",
  },
  {
    author: 'Author_17',
    video: "PxqB_lQNdto",
    language: 'Language 17',
    rating: {
      averageRating: 4.7,
      captionID: "17"
    },
    download: "https://www.example14.com",
  },
  {
    author: 'Author_18',
    video: "PxqB_lQNdto",
    language: 'Language 18',
    rating: {
      averageRating: 3.6,
      captionID: "18",
    
    },
    download: "https://www.example15.com",
  },
  {
    author: 'Author_19',
    video: "PxqB_lQNdto",
    language: 'Language 19',
    rating: {
      averageRating: 4.4,
      captionID: "19",
    },
    download: "https://www.example16.com",
  },
  {
    author: 'Author_20',
    video: "PxqB_lQNdto",
    language: 'Language 20',
    rating: {
      averageRating: 3.8,
      captionID: "20",
    
    },
    download: "https://www.example17.com",
  },
  {
    author: 'Author_21',
    video: "PxqB_lQNdto",
    language: 'Language 21',
    rating: {
      averageRating: 4.6,
      captionID: "21",
    
    },
    download: "https://www.example18.com",
  },
  {
    author: 'Author_22',
    video: "PxqB_lQNdto",
    language: 'Language 22',
    rating: {
      averageRating: 3.7,
      captionID: "22",
    
    },
    download: "https://www.example19.com",
  },
  {
    author: 'Author_23',
    video: "PxqB_lQNdto",
    language: 'Language 23',
    rating: {
      averageRating: 4.2,
      captionID: "23"
    },
    download: "https://www.example20.com",
  },
  {
    author: 'Author_24',
    video: "PxqB_lQNdto",
    language: 'Language 24',
    rating: {
      averageRating: 3.5,
      captionID: "24"
    },
    download: "https://www.example21.com",
  },
  {
    author: 'Author_25',
    video: "PxqB_lQNdto",
    language: 'Language 25',
    rating: {
      averageRating: 4.5,
      captionID: "25",
    
    },
    download: "https://www.example22.com",
  }
];



export default DATA