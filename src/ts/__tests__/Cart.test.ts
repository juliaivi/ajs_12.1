import Cart from '../service/Cart';
import Movie from '../domain/Movie';
import Book from '../domain/Book'; 
import MusicAlbum from '../domain/MusicAlbum';

test('new card should be empty', () => {
  const cart = new Cart();

  expect(cart.items.length).toBe(0);
});

test('adding 3 elements to an array', () => {
  const cart = new Cart();

  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
  cart.add(new Movie(3, 'Мстители', 'The Avengers', 2012,  'США', 'Avengers Assemble!', ['фантастика', 'боевик', 'фэнтези', 'приключения'], '137 мин. / 02:17', 500));

  expect(cart.items.length).toBe(3);
});
