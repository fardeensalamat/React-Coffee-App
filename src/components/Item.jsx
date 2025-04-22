import Menu from './Menu';


import hot1 from '../assets/food/hot1.jpg';
import hot2 from '../assets/food/hot2.jpg';
import hot3 from '../assets/food/hot3.jpg';
import hot4 from '../assets/food/hot4.jpg';


import iced1 from '../assets/food/iced1.jpg';
import iced2 from '../assets/food/iced2.jpg';
import iced3 from '../assets/food/iced3.jpg';
import iced4 from '../assets/food/iced4.jpg';

import tea1 from '../assets/food/tea1.jpg';
import tea2 from '../assets/food/tea2.jpg';
import tea3 from '../assets/food/tea3.jpg';
import tea4 from '../assets/food/tea4.jpg';


import snacks1 from '../assets/food/snacks1.jpg';
import snacks2 from '../assets/food/snacks2.jpg';
import snacks3 from '../assets/food/snacks3.jpg';
import snacks4 from '../assets/food/snacks4.jpg';

import dessert1 from '../assets/food/dessert1.jpg';
import dessert2 from '../assets/food/dessert2.jpg';
import dessert3 from '../assets/food/dessert3.jpg';

function Item() {
  const food = [
    {
      id: 1,
      name: 'Americano',
      type: 'hot',
      price: 300,
      star: 4.5,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dapibus dignissim bibendum. Sed sit amet metus id risus placerat malesuada. Morbi nec nunc leo.',
      discountAvailable: true,
      image: hot1
    },

    {
        id: 2,
        name: 'Cappuccino',
        type: 'hot',
        price: 300,
        star: 4.5,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dapibus dignissim bibendum. Sed sit amet metus id risus placerat malesuada. Morbi nec nunc leo.',
        discountAvailable: false,
        image: hot2
      },

      {
        id: 3,
        name: 'Flat White',
        type: 'hot',
        price: 350,
        star: 5,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dapibus dignissim bibendum. Sed sit amet metus id risus placerat malesuada. Morbi nec nunc leo.',
        discountAvailable: false,
        image: hot3
      },

      {
        id: 4,
        name: 'Caffe Latte',
        type: 'hot',
        price: 350,
        star: 4.2,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dapibus dignissim bibendum. Sed sit amet metus id risus placerat malesuada. Morbi nec nunc leo.',
        discountAvailable: false,
        image: hot4
      },

    //   ****************************************************************

      {
        id: 5,
        name: 'Frappe',
        type: 'iced',
        price: 300,
        star: 4.9,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dapibus dignissim bibendum. Sed sit amet metus id risus placerat malesuada. Morbi nec nunc leo.',
        discountAvailable: false,
        image: iced1
      },

      {
        id: 6,
        name: 'Iced Latte',
        type: 'iced',
        price: 300,
        star: 4.5,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dapibus dignissim bibendum. Sed sit amet metus id risus placerat malesuada. Morbi nec nunc leo.',
        discountAvailable: false,
        image: iced2
      },

      {
        id: 7,
        name: 'Iced Mocha',
        type: 'iced',
        price: 400,
        star: 4.9,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dapibus dignissim bibendum. Sed sit amet metus id risus placerat malesuada. Morbi nec nunc leo.',
        discountAvailable: false,
        image: iced3
      },

      {
        id: 8,
        name: 'Iced Coffee',
        type: 'iced',
        price: 450,
        star: 5,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dapibus dignissim bibendum. Sed sit amet metus id risus placerat malesuada. Morbi nec nunc leo.',
        discountAvailable: false,
        image: iced4
      },

    //   ****************************************************************

      {
        id: 9,
        name: 'Iced Tea',
        type: 'Tea',
        price: 300,
        star: 4.1,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dapibus dignissim bibendum. Sed sit amet metus id risus placerat malesuada. Morbi nec nunc leo.',
        discountAvailable: true,
        image: tea1
      },

      {
        id: 10,
        name: 'Milk Tea',
        type: 'Tea',
        price: 400,
        star: 4.9,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dapibus dignissim bibendum. Sed sit amet metus id risus placerat malesuada. Morbi nec nunc leo.',
        discountAvailable: true,
        image: tea2
      },

      {
        id: 11,
        name: 'Lemon Tea',
        type: 'Tea',
        price: 100,
        star: 4.5,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dapibus dignissim bibendum. Sed sit amet metus id risus placerat malesuada. Morbi nec nunc leo.',
        discountAvailable: true,
        image: tea3
      },

      {
        id: 12,
        name: 'Black Tea',
        type: 'Tea',
        price: 200,
        star: 4.8,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dapibus dignissim bibendum. Sed sit amet metus id risus placerat malesuada. Morbi nec nunc leo.',
        discountAvailable: true,
        image: tea4
      },

   

    //   ****************************************************************

      {
        id: 13,
        name: 'Sandwich',
        type: 'snacks',
        price: 300,
        star: 5,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dapibus dignissim bibendum. Sed sit amet metus id risus placerat malesuada. Morbi nec nunc leo.',
        discountAvailable: true,
        image: snacks1
      },

      {
        id: 14,
        name: 'Tuna Sandwich',
        type: 'snacks',
        price: 400,
        star: 5,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dapibus dignissim bibendum. Sed sit amet metus id risus placerat malesuada. Morbi nec nunc leo.',
        discountAvailable: false,
        image: snacks2
      },

      {
        id: 15,
        name: 'Garlic Bread',
        type: 'snacks',
        price: 100,
        star: 4.5,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dapibus dignissim bibendum. Sed sit amet metus id risus placerat malesuada. Morbi nec nunc leo.',
        discountAvailable: false,
        image: snacks3
      },

      {
        id: 16,
        name: 'Croissant',
        type: 'snacks',
        price: 280,
        star: 4.9,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dapibus dignissim bibendum. Sed sit amet metus id risus placerat malesuada. Morbi nec nunc leo.',
        discountAvailable: false,
        image: snacks4
      },

    //   ****************************************************************  

    
      {
        id: 17,
        name: 'Cheesecake',
        type: 'dessert',
        price: 300,
        star: 5,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dapibus dignissim bibendum. Sed sit amet metus id risus placerat malesuada. Morbi nec nunc leo.',
        discountAvailable: true,
        image: dessert1
      },

      {
        id: 18,
        name: 'Brownie',
        type: 'dessert',
        price: 100,
        star: 4.8,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dapibus dignissim bibendum. Sed sit amet metus id risus placerat malesuada. Morbi nec nunc leo.',
        discountAvailable: false,
        image: dessert2
      },

      {
        id: 19,
        name: 'Cookie',
        type: 'dessert',
        price: 80,
        star: 4.5,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dapibus dignissim bibendum. Sed sit amet metus id risus placerat malesuada. Morbi nec nunc leo.',
        discountAvailable: false,
        image: dessert3
      },
    
      
  ];


  return (
    <>        
      <Menu food={food} />     
    </>
  );
}

export default Item;
