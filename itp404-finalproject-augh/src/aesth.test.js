import { render, fireEvent } from '@testing-library/react';
import FavoriteAction from './routes/FavoriteAction';
import Index from './routes/index';
import { BrowserRouter } from 'react-router-dom';
import Albums from './routes/albums';
import Root from './routes/root';
import Footer from './routes/footer';
import AddOutfit from './routes/addOutfit';

test('render bookmark', () => {
  const {getAllByTestId} = render(
    <FavoriteAction
      id={10}
      favorited={1}
      onBookmarkClick={(id) => {
      }}/>
  )  

  expect(getAllByTestId("bookmark-button").length).toBe(1);
});

test('click on bookmark', () => {
  const onBookmarkClick = jest.fn();

  const {getByTestId} = render(
    <FavoriteAction
      id={7}
      favorited={0}
      favoriteBookmarkColor={"green"}
      favoriteHeartColor={"red"}
      onBookmarkClick={onBookmarkClick}/>
  )

    const bookmarkButton = getByTestId("bookmark-button");
    fireEvent.click(bookmarkButton);
    expect(onBookmarkClick).toHaveBeenCalledWith(7);

});

test('render favorite', () => {
  const onBookmarkClick = jest.fn();

  const {getByTestId} = render(
    <FavoriteAction
      id={5}
      favorited={1}
      favoriteBookmarkColor={"green"}
      favoriteHeartColor={"red"}
      onBookmarkClick={onBookmarkClick}/>
  )

    const bookmarkButton = getByTestId("bookmark-button");
    fireEvent.click(bookmarkButton);
    expect(onBookmarkClick).toHaveBeenCalledWith(5);
    expect(getByTestId("bookmark-icon")).toHaveStyle("color : green");
    expect(getByTestId("heart-icon")).toHaveStyle("color : red")
});

test('render not favorite', () => {
  const onBookmarkClick = jest.fn();

  const {getByTestId} = render(
    <FavoriteAction
      id={5}
      favorited={0}
      favoriteBookmarkColor={"green"}
      favoriteHeartColor={"red"}
      onBookmarkClick={onBookmarkClick}/>
  )

    const bookmarkButton = getByTestId("bookmark-button");
    fireEvent.click(bookmarkButton);
    expect(onBookmarkClick).toHaveBeenCalledWith(5);
    expect(getByTestId("bookmark-icon")).toHaveStyle("color : rgb(110, 104, 97)");
    expect(getByTestId("heart-icon")).toHaveStyle("color : rgb(110, 104, 97)")
});

test('bookmark color not set', () => {
  const {getByTestId} = render(
  <FavoriteAction
    id={8}
    favorited={1}
    onBookmarkClick={() => {}}
  />
    )

    expect(getByTestId("bookmark-icon")).toHaveStyle("color : white");
    expect(getByTestId("heart-icon")).toHaveStyle("color : pink");
})

test('homepage content', () => {
  const homepage = render(
  <BrowserRouter>
    <Index />
  </BrowserRouter>
)

  expect(homepage.getByText("aesth")).toBeInTheDocument();
  expect(homepage.getByText("FASHION LOG")).toBeInTheDocument();
  expect(homepage.getByText("Your fashion")).toBeInTheDocument();
  expect(homepage.getByText("safe space.")).toBeInTheDocument();
  expect(homepage.getByText("Compile and organize your outfits here.")).toBeInTheDocument();

});

test('albums page content', () => {
  const albums = render(
  <BrowserRouter>
    <Albums />
  </BrowserRouter>
  )
  
  expect(albums.getByText("ALBUMS")).toBeInTheDocument();
  expect(albums.getByText("Seasons")).toBeInTheDocument();
  expect(albums.getByText("Spring")).toBeInTheDocument();
  expect(albums.getByText("Summer")).toBeInTheDocument();
  expect(albums.getByText("Fall")).toBeInTheDocument();
  expect(albums.getByText("Winter")).toBeInTheDocument();


})

test ('navigation', () => {
  const navigation = render(
    <BrowserRouter>
      <Root />
    </BrowserRouter>
  )
  
  expect(navigation.getByText("aesth")).toBeInTheDocument();
  expect(navigation.getByText("Home")).toBeInTheDocument();
  expect(navigation.getByText("Outfits")).toBeInTheDocument();
  expect(navigation.getByText("Albums")).toBeInTheDocument();
  expect(navigation.getByText("Favorites")).toBeInTheDocument();
})

test('footer', () => {
  const footer = render(
    <Footer text="Testing Footer"/>
  ) 

  expect(footer.getByText("Testing Footer")).toBeInTheDocument();
})

test('add outfit page', () => {
  const addOutfit = render(
    <BrowserRouter>
      <AddOutfit />
    </BrowserRouter>
  )

  expect(addOutfit.getByText("Title:")).toBeInTheDocument();
  expect(addOutfit.getByText("Image:")).toBeInTheDocument();
  expect(addOutfit.getByText("Description:")).toBeInTheDocument();
  expect(addOutfit.getByText("Albums:")).toBeInTheDocument();
})