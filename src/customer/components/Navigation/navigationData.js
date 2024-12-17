export const navigation = {
    categories: [
      {
        id: 'men',
        name: 'Men',
        featured: [
          {
            name: 'New Arrivals',
            id: '#',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg',
            imageAlt: 'Drawstring top with elastic loop closure and textured interior padding.',
          },
          {
            name: 'Artwork Tees',
            id: '#',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg',
            imageAlt:
              'Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.',
          },
        ],
        sections: [
          {
            id: 'clothing',
            name: 'Clothing',
            items: [
              { name: 'Mens Kurtas', id: 'mens_kurta' },
              { name: 'Shirt', id: 'mens_kurta' },
                { name: 'Pants', id: 'pants' },
                { name: 'Jeans', id: 'jeans' },
                { name: 'Oversized t shits', id: 't-shirt'},
                { name: 'Denim jackets', id: 'jackets' },
                { name: 'Leather jackets', id: 'leather-jackets' },
                { name: 'Hoodies / sweatshirt', id: 'sweatshirt' },            
            ],
          },
          // {
          //   id: 'accessories',
          //   name: 'Accessories',
          //   items: [
          //     { name: 'Watches', id: '#' },
          //     { name: 'Wallets', id: '#' },
          //     { name: 'Bags', id: '#' },
          //     { name: 'Sunglasses', id: '#' },
          //     { name: 'Hats', id: '#' },
          //     { name: 'Belts', id: '#' },
          //   ],
          // },
          // {
          //   id: 'brands',
          //   name: 'Brands',
          //   items: [
          //     { name: 'Re-Arranged', id: '#' },
          //     { name: 'Counterfeit', id: '#' },
          //     { name: 'Full Nelson', id: '#' },
          //     { name: 'My Way', id: '#' },
          //   ],
          // },
        ],
      },
    ],
    pages: [
      { name: 'Company', id: '/' },
      { name: 'Stores', id: '/' },
    ],
  }
