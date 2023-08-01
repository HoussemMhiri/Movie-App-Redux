import * as actions from "./actionTypes";

const initState = {
  moviesList: [
    {
      id: Math.random(),
      movie: "Interstellar",
      starRate: 5,
      img: "https://www.movieposters.com/cdn/shop/products/interstellar1_8367fa45-5f0b-4b08-8e9b-8eaa4863f89d_480x.progressive.jpg?v=1673036776",
      about: "ABOUT THE MOVIE",
      desc: "When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.",
      trailer: "https://www.youtube.com/embed/zSWdZVtXT7E",
      movieType: "Sci-fi",
    },
    {
      id: Math.random(),
      movie: "Inception",
      starRate: 5,
      img: "https://www.movieposters.com/cdn/shop/products/20664117398ad7301d9a9af6d2e5aa5c_1e3ea98b-b962-4982-9f74-2e44381fc6ff_480x.progressive.jpg?v=1573618694",
      about: "ABOUT THE MOVIE",
      desc: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.",
      trailer: "https://www.youtube.com/embed/YoHD9XEInc0",
      movieType: "Sci-fi",
    },
    {
      id: Math.random(),
      movie: "Prestige",
      starRate: 4,
      img: "https://www.movieposters.com/cdn/shop/products/99763af666ee931302e21c9cad3243ed_48a46774-8baf-4a98-b2bc-9ecf85dbff8b_480x.progressive.jpg?v=1573655133",
      about: "ABOUT THE MOVIE",
      desc: "After a tragic accident, two stage magicians in 1890s London engage in a battle to create the ultimate illusion while sacrificing everything they have to outwit each other.",
      trailer: "https://www.youtube.com/embed/RLtaA9fFNXU",
      movieType: "Drama",
    },
    {
      id: Math.random(),
      movie: "Wolf of Wall Street",
      starRate: 4,
      img: "https://www.movieposters.com/cdn/shop/products/wolfofwallstreet_480x.progressive.jpg?v=1620229322",
      about: "ABOUT THE MOVIE",
      desc: "Based on the true story of Jordan Belfort, from his rise to a wealthy stock-broker living the high life to his fall involving crime, corruption and the federal government.",
      trailer: "https://www.youtube.com/embed/iszwuX1AK6A",
      movieType: "Drama",
    },
    {
      id: Math.random(),
      movie: "Illusionist",
      starRate: 3,
      img: "https://www.movieposters.com/cdn/shop/products/ece9c7d78e07e1d0040e9d57ec731a9d_c883c5d7-f211-4a57-bf8f-028c03ec50cd_480x.progressive.jpg?v=1573588899",
      about: "ABOUT THE MOVIE",
      desc: "In turn-of-the-century Vienna, a magician uses his abilities to secure the love of a woman far above his social standing.",
      trailer: "https://www.youtube.com/embed/i0xO64icGSY",
      movieType: "Adventure",
    },
    {
      id: Math.random(),
      movie: "Suicide Squad",
      starRate: 2,
      img: "https://www.movieposters.com/cdn/shop/products/4cb9f8f2f13966bcc6d4ef0bd2e82a6c_480x.progressive.jpg?v=1573615934",
      about: "ABOUT THE MOVIE",
      desc: "A secret government agency recruits some of the most dangerous incarcerated super-villains to form a defensive task force. Their first mission: save the world from the apocalypse.",
      trailer: "https://www.youtube.com/embed/CmRih_VtVAs",
      movieType: "Adventure",
    },
  ],

  filtredMovies: [],
};

export const reducer = (state = initState, action) => {
  switch (action.type) {
    case actions.DELETE_MOVIE:
      return {
        ...state,
        moviesList: state.moviesList.filter((el) => el.id !== action.payload),
      };
    case actions.ADD_MOVIE:
      return {
        ...state,
        moviesList: [...state.moviesList, action.payload],
      };
    case actions.EDIT_MOVIE:
      return {
        ...state,
        moviesList: state.moviesList.map((el) =>
          el.id === action.payload.id ? action.payload : el
        ),
      };
    case actions.SCIFI_MOVIE:
      return {
        ...state,
        filtredMovies: state.moviesList.filter(
          (el) => el.movieType === "Sci-fi"
        ),
      };
    case actions.ADVENTURE_MOVIE:
      return {
        ...state,
        filtredMovies: state.moviesList.filter(
          (el) => el.movieType === "Adventure"
        ),
      };
    case actions.DRAMA_MOVIE:
      return {
        ...state,
        filtredMovies: state.moviesList.filter(
          (el) => el.movieType === "Drama"
        ),
      };
    case actions.ALL_MOVIE:
      return {
        ...state,
        filtredMovies: state.moviesList,
      };

    default:
      return state;
  }
};
