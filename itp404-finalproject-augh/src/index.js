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
import { fetchOutfits, fetchOutfitById } from './api';
import Admin from './routes/admin';

const baseUrl = process.env.REACT_APP_API_BASE_URL;

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
          return fetchOutfits();
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
        path: "/favorites",
        element: <Favorites />,
        loader() {
          return fetch(`${baseUrl}/favorited-outfits`
          ).then((response) => {
            return response.json();
          })
        }
      },
      {
        path: "/outfits/:id",
        element: <SelectedOutfit />,
        loader({params}) {
          return fetchOutfitById(params.id);
        }
      },
      {
        path: "/albums/:albumId",
        element: <SelectedAlbum />,
        loader(loaderData) {
          return fetch(`${baseUrl}/albums/${loaderData.params.albumId}`
          ).then((response) => {
            return response.json();
          })
        }
      },
      // {
      //   path: "/albums/:albumId/:outfitId",
      //   element: <SelectedOutfit />,
      //   loader(loaderData) {
      //     return fetch(`${baseUrl}/albums/${loaderData.params.albumId}/${loaderData.params.outfits.id}`
      //     ).then((response) => {
      //       return response.json();
      //     })
      //   }
      // },
      {
        path: "/outfits/:id/edit",
        element: <EditOutfit />,
        loader(loaderData) {
          return fetch(`${baseUrl}/outfits/${loaderData.params.id}`
          ).then((response) => {
            return response.json();
          })
        }
      },
      {
        path: "/admin",
        element: <Admin />,
        loader(){
          return fetch(`${baseUrl}/outfits`
          ).then((response) => {
            return response.json();
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
