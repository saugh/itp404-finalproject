import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.css";
import Index from './routes/index';
import Root from './routes/root';
import Outfits from './routes/outfits';
import Albums from './routes/albums';
import Favorites from './routes/favorites';
import AddOutfit from './routes/addOutfit';
import "./project.css";
import SelectedOutfit from './routes/selectedOutfit';
import SelectedAlbum from './routes/selectedAlbum';
import EditOutfit from './routes/editOutfit';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Index />
      },
      {
        path: "/outfits",
        element: <Outfits />,
        loader() {
          return fetch('/outfitsdb.json'
          ).then((response) => {
            return response.json();
          }).then((data) => {
            return data.outfits;
          })
        }
      },
      {
        path: "/addOutfit",
        element: <AddOutfit />
      },
      {
        path: "/albums",
        element: <Albums />
      },
      {
        path: "/favorites/:slug",
        element: <SelectedOutfit />,
        loader({ params }) {
          return fetch('/outfitsdb.json'
          ).then((response) => {
            return response.json();
          }).then((data) => {
            return data.outfits.find((outfit) => {
              return outfit.slug === params.slug;
            })
          })
        }
      },
      {
        path: "/favorites",
        element: <Favorites />,
        loader() {
          return fetch('/outfitsdb.json'
          ).then((response) => {
            return response.json();
          }).then((data) => {
            return data.outfits.filter((outfit) => {
              return outfit.favorited === true;
            })
          })
        }
      },
      {
        path: "/outfits/:slug",
        element: <SelectedOutfit />,
        loader({ params }) {
          return fetch(`/outfitsdb.json`
          ).then((response) => {
            return response.json();
          }).then((data) => {
            return data.outfits.find((outfit) => {
              return outfit.slug === params.slug;
            })
          })
        }
      },
      {
        path: "/albums/:title",
        element: <SelectedAlbum />,
        loader({ params }) {
          return fetch(`/outfitsdb.json`
          ).then((response) => {
            return response.json();
          }).then((data) => {
            return data.albums.find((album) => {
              return album.title === params.title;
            })
          })
        }
      },
      {
        path: "/albums/:title/:slug",
        element: <SelectedOutfit />,
        loader({ params }) {
          return fetch(`/outfitsdb.json`
          ).then((response) => {
            return response.json();
          }).then((data) => {
            return data.outfits.find((outfit) => {
              return outfit.slug === params.slug;
            })
          })
        }
      },
      {
        path: "/:slug/edit",
        element: <EditOutfit />,
        loader({ params }) {
          return fetch(`/outfitsdb.json`
          ).then((response) => {
            return response.json();
          }).then((data) => {
            return data.outfits.find((outfit) => {
              return outfit.slug === params.slug;
            })
          })
        }
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
