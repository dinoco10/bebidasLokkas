import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Dino',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'Juan',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
  products: [
    {
      // _id: '1',
      name: 'Termidor',
      slug: 'Termidor',
      category: 'Drinks',
      image: '/images/p1.jpg',// 679px × 829px
      price: 270,
      countInStock: 20,
      brand: 'Nike',
      rating: 2.5,
      numReviews: 4,
      description: 'El famoso tetrapack que nunca falla',
    },
    {
      // _id: '2',
      name: 'Dom Perignon',
      slug: 'Dom-Perignon',
      category: 'Drinks',
      image: '/images/p2.jpg',
      price: 150.000,
      countInStock: 10,
      brand: 'Adidas',
      rating: 5.0,
      numReviews: 5,
      description: 'Si podes comprar esto no se que haces en Argentina',
    },
    {
      // _id: '3',
      name: 'Fernandito',
      slug: 'Fernan-dito',
      category: 'Drinks',
      image: '/images/p3.jpg',
      price: 90,
      countInStock: 30,
      brand: 'Adidas',
      rating: 1.5,
      numReviews: 14,
      description: 'Si no te liquida, tenes el higado de hierro',
    },
    {
      // _id: '4',
      name: 'Fernet Branca',
      slug: 'fernet-branca',
      category: 'Drinks',
      image: '/images/p4.jpg',
      price: 1100,
      countInStock: 10,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 10,
      description: 'Unico e inigualable',
    },
  ],
};

export default data;
