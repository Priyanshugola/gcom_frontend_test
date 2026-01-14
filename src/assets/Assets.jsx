import React from 'react';
import logo from './logo.png';
import search from './sreach.png';
import profile from './profile.png';
import  cart from './cart.png';
import menu from './menu.png';
import banner from './banner.jpg';
import prod1 from './prod1.jfif';
import prod2 from './prod2.jfif';
import prod3 from './prod3.jfif';  
import return_policy from './exchange.jfif';
import quality from './quality.jfif';
import support from './support.png';
import dropdwon from './dropdown.png'
import cross_icon from './cross.png'
import bin from './bin.png'
import stripe from './stripe.png'
import rezorpay from './rezorpay.png'
import about_us from './about_us.jfif'
export const Assets =  {
  logo,
  search,
  profile,
  cart,
  menu,
  banner,
  return_policy,
  quality,
  support,
  dropdwon,
  cross_icon,
  bin,
  stripe,
  rezorpay,
  about_us
}
export const product = [
{
  _id: '1',
  name: 'Product 1 mens shirt test',
  price: 100, 
  description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae consectetur velit quibusdam, nesciunt molestiae accusantium doloribus, culpa earum suscipit aliquid maxime cumque? Provident incidunt atque nulla? Aperiam voluptate voluptatem voluptatum.',
  image: [prod1,prod2,prod3],
  categroy: 'Kids',
  subCategroy: 'Topwear',
  size: ['S', 'M', 'L'],
  color: ['Red', 'Blue', 'Green'],
  date : '2024-01-01',
  bestseller: true
},{
  _id: '2',
  name: 'Product 2',
  price: 150,
  description: 'This is product 2', 
  image:[prod2],
  categroy: 'Women',
  subCategroy: 'Bottomwear',
  size: ['M', 'L', 'XL'],
  color: ['Black', 'White'],
  date : '2024-02-15',
  bestseller: false
},{
  _id: '3',
  name: 'Product 3',
  price: 200, 
  description: 'This is product 3',
  image: [prod3],
  categroy: 'Men',
  subCategroy: 'Winterwear',
  size: ['S', 'M'],
  color: ['Yellow', 'Pink'],
  date : '2024-03-10',
  bestseller: true
},
{
  _id: '4',
  name: 'Product 4',
  price: 100, 
  description: 'This is product 4',
  image: [prod1],
  categroy: 'Men',
  subCategroy: 'Topwear',
  size: ['S', 'M', 'L'],
  color: ['Red', 'Blue', 'Green'],
  date : '2024-01-01',
  bestseller: true
},{
  _id: '5',
  name: 'Product 5',
  price: 150,
  description: 'This is product 5', 
  image:[prod2],
  categroy: 'Women',
  subCategroy: 'Bottomwear',
  size: ['M', 'L', 'XL'],
  color: ['Black', 'White'],
  date : '2024-02-15',
  bestseller: false
},{
  _id: '6',
  name: 'Product 6',
  price: 200, 
  description: 'This is product 6',
  image: [prod3],
  categroy: 'Kids',
  subCategroy: 'Sub Category 6',
  size: ['S', 'M'],
  color: ['Yellow', 'Pink'],
  date : '2024-03-10',
  bestseller: true
},
{
  _id: '7',
  name: 'Product 7',
  price: 100, 
  description: 'This is product 7',
  image: [prod1],
  categroy: 'Men',
  subCategroy: 'Topwear',
  size: ['S', 'M', 'L'],
  color: ['Red', 'Blue', 'Green'],
  date : '2024-01-01',
  bestseller: true
},{
  _id: '8',
  name: 'Product 8',
  price: 150,
  description: 'This is product 8', 
  image:[prod2],
  categroy: 'Men',
  subCategroy: 'Bottomwear',
  size: ['M', 'L', 'XL'],
  color: ['Black', 'White'],
  date : '2024-02-15',
  bestseller: false
},{
  _id: '9',
  name: 'Product 9',
  price: 200, 
  description: 'This is product 9',
  image: [prod3],
  categroy: 'Women',
  subCategroy: 'Winterwear',
  size: ['S', 'M'],
  color: ['Yellow', 'Pink'],
  date : '2024-03-10',
  bestseller: true
},
{
  _id: '10',
  name: 'Product 10',
  price: 100, 
  description: 'This is product 10',
  image: [prod1],
  categroy: 'Kids',
  subCategroy: 'Topwear',
  size: ['S', 'M', 'L'],
  color: ['Red', 'Blue', 'Green'],
  date : '2024-01-01',
  bestseller: true
},{
  _id: '11',
  name: 'Product 11',
  price: 150,
  description: 'This is product 11', 
  image:[prod2],
  categroy: 'Women',
  subCategroy: 'Bottomwear',
  size: ['M', 'L', 'XL'],
  color: ['Black', 'White'],
  date : '2024-02-15',
  bestseller: false
},{
  _id: '12',
  name: 'Product 12',
  price: 200, 
  description: 'This is product 12',
  image: [prod3],
  categroy: 'Men',
  subCategroy: 'Winterwear',
  size: ['S', 'M'],
  color: ['Yellow', 'Pink'],
  date : '2024-03-10',
  bestseller: true
},{
  _id: '13',
  name: 'Product 13',
  price: 100, 
  description: 'This is product 13',
  image: [prod1],
  categroy: 'Men',
  subCategroy: 'Topwear',
  size: ['S', 'M', 'L'],
  color: ['Red', 'Blue', 'Green'],
  date : '2024-01-01',
  bestseller: true
},{
  _id: '14',
  name: 'Product 14',
  price: 150,
  description: 'This is product 14', 
  image:[prod2],
  categroy: 'Women',
  subCategroy: 'Bottomwear',
  size: ['M', 'L', 'XL'],
  color: ['Black', 'White'],
  date : '2024-02-15',
  bestseller: false
},{
  _id: '15',
  name: 'Product 14',
  price: 200, 
  description: 'This is product 15',
  image: [prod3],
  categroy: 'Men',
  subCategroy: 'Winterwear',
  size: ['S', 'M'],
  color: ['Yellow', 'Pink'],
  date : '2024-03-10',
  bestseller: true
}


]