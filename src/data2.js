const product2 = [
    {
        "id": 0,
        "title": "",
        "price": "",
        "description": "",
        "brand": "",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png",
         // Amazon link (empty for placeholder)
        "buy2": ""  // Flipkart link (empty for placeholder)
    },
    {
        "id": 1,
        "title": "Samsung Galaxy S22",
        "price": 72999,
        "description": "SAMSUNG Galaxy S22 5G (Phantom Black, 128 GB)  (8 GB RAM).Explore a new range of night photography features on this Samsung Galaxy S22 5G smartphone. ",
        "brand": "Samsung",
        "image": "https://m.media-amazon.com/images/I/71wGLBDEsvL._SX569_.jpg",
         // Amazon link
        "buy2": "https://www.flipkart.com/samsung-galaxy-s22-5g-green-128-gb/p/itm9038f7539214b" // Flipkart link
    },
    {
        "id": 2,
        "title": "Apple iPhone 15",
        "price": 58999,
        "description": "Apple iPhone 15 (Pink, 128 GB.Experience the iPhone 15 – your dynamic companion. Dynamic Island ensures you stay connected, bubbling up alerts seamlessly while you're busy.  ",
        "brand": "Apple",
        "image": "https://m.media-amazon.com/images/I/71v2jVh6nIL._SX466_.jpg", // Amazon link
        "buy2": "https://www.flipkart.com/apple-iphone-15-pink-128-gb/p/itm7579ed94ca647?pid=MOBGTAGPNMZA5PU5&lid=LSTMOBGTAGPNMZA5PU5AVZNIR&marketplace=FLIPKART&q=apple+iphone+15&store=tyy%2F4io&spotlightTagId=BestsellerId_tyy%2F4io&srno=s_1_4&otracker=AS_QueryStore_OrganicAutoSuggest_1_5_na_na_ps&otracker1=AS_QueryStore_OrganicAutoSuggest_1_5_na_na_ps&fm=search-autosuggest&iid=7cb53ad3-b2b7-4ead-9d47-094cac73e102.MOBGTAGPNMZA5PU5.SEARCH&ppt=sp&ppn=sp&ssid=jgld0wlqe80000001731518611329&qH=9c74fa1d876d3040" // Flipkart link
    },
    {
        "id": 3,
        "title": "Samsung Galaxy M35 5G",
        "price": 16087,
        "description": "SAMSUNG Galaxy M35 5G (Thunder Grey, 128 GB)  (6 GB RAM)",
        "brand": "Samsung",
        "image": "https://m.media-amazon.com/images/I/71Q3HLa8kfL._SX569_.jpg", // Amazon link
        "buy2": "https://www.flipkart.com/samsung-galaxy-m35-5g-thunder-grey-128-gb/p/itm94360d23ec184?pid=MOBH2Z9HJYYQBFGD&lid=LSTMOBH2Z9HJYYQBFGDCVV1BP&marketplace=FLIPKART&q=samsung%20m35&sattr[]=color&sattr[]=storage&sattr[]=ram&st=color&otracker=search" // Flipkart link
    },
    {
        "id": 4,
        "title": "Realme NARZO 70 Pro 5G",
        "price": 22849,
        "description": "realme Narzo 70 Pro 5G (Glass Green, 256 GB)  (8 GB RAM)",
        "brand": "Realme",
        "image": "https://m.media-amazon.com/images/I/71ceFVAwe4L._SX425_.jpg", // Amazon link
        "buy2": "https://www.flipkart.com/realme-narzo-70-pro-5g-glass-green-256-gb/p/itm2742a62e69f5a?pid=MOBGZ5MGZY6HXZWC&lid=LSTMOBGZ5MGZY6HXZWCPOAHD2&marketplace=FLIPKART&q=realme%20narzo%2070%20pro&sattr[]=color&sattr[]=storage&st=color&otracker=AS_Query_OrganicAutoSuggest_3_10_na_na_ps" // Flipkart link
    },
    {
        "id": 5,
        "title": "OnePlus Nord CE4 Lite 5G",
        "price": 18399,
        "description": "OnePlus Nord CE4 lite 5G (ULTRA ORANGE, 128 GB)  (8 GB RAM).Camera: 108 MP Main Camera with EIS; 2MP Depth-Assist Lens and 2MP Macro Lens; Front (Selfie) Camera: 16MP ",
        "brand": "OnePlus",
        "image": "https://m.media-amazon.com/images/I/51KJE22BKrL._SX569_.jpg", // Amazon link
        "buy2": "https://www.flipkart.com/oneplus-nord-ce4-lite-5g-ultra-orange-128-gb/p/itm8fd5fdf300955?pid=MOBH25ZEZBY3ZGBF&lid=LSTMOBH25ZEZBY3ZGBF106XXA&marketplace=FLIPKART&q=oneplus%20nord%20ce4%20lite%205g&sattr[]=color&sattr[]=storage&st=storage" // Flipkart link
    },
    {
        "id": 6,
        "title": "Redmi Note 13 Pro",
        "price": 21197,
        "description": "REDMI Note 13 Pro 5G (Midnight Black, 256 GB)  (12 GB RAM)",
        "brand": "Redmi",
        "image": "https://m.media-amazon.com/images/I/51SmqxaCmaL._SX569_.jpg", // Amazon link
        "buy2": "https://www.flipkart.com/redmi-note-13-pro-5g-midnight-black-256-gb/p/itm0199353dd80f3?pid=MOBGZF9PNQSVHHYZ&lid=LSTMOBGZF9PNQSVHHYZB96STY&marketplace=FLIPKART&q=redmi+note+13+pro&store=tyy%2F4io&srno=s_1_2&otracker=AS_QueryStore_OrganicAutoSuggest_1_10_na_na_ps&otracker1=AS_QueryStore_OrganicAutoSuggest_1_10_na_na_ps&fm=search-autosuggest&iid=32455606-2f33-438b-9f8e-5d05995a0903.MOBGZF9PNQSVHHYZ.SEARCH&ssid=vy82ap7lao0000001731519511032&qH=0c4a12b67deee0c7" // Flipkart link
    },
    {
        "id": 7,
        "title": "Vivo V29 Pro 5G",
        "price": 39999,
        "description": "vivo V29 Pro 5G (Black, 256 GB)  (8 GB RAM).This ultra-slim smartphone featuring a 3D curved display offers an impressive design and is comfortable to hold.",
        "brand": "Vivo",
        "image": "https://m.media-amazon.com/images/I/51vxzCngtXL._SX522_.jpg", // Amazon link
        "buy2": "https://www.flipkart.com/vivo-v29-pro-5g-black-256-gb/p/itm9eb62843149e4?pid=MOBGTR8X3FSCZXWG&lid=LSTMOBGTR8X3FSCZXWGL7X4TC&marketplace=FLIPKART&q=vivo+v29+pro+5g&store=tyy%2F4io&srno=s_1_1&otracker=AS_QueryStore_OrganicAutoSuggest_2_9_na_na_ps&otracker1=AS_QueryStore_OrganicAutoSuggest_2_9_na_na_ps&fm=search-autosuggest&iid=82a2e56e-6624-4f98-9a25-1b7c71036336.MOBGTR8X3FSCZXWG.SEARCH&ppt=pp&ppn=pp&ssid=lz9zhxtt4w0000001731519728461&qH=16081d8bacd56385" // Flipkart link
    },
    {
        "id": 8,
        "title": "Motorola Edge 50 Fusion 5G ",
        "price": 24999,
        "description": "Motorola Edge 50 Fusion (Hot Pink, 256 GB)  (12 GB RAM)",
        "brand": "Motorola",
        "image": "https://m.media-amazon.com/images/I/71m+dNHzoGL._SX466_.jpg", // Amazon link
        "buy2": "https://www.flipkart.com/motorola-edge-50-fusion-hot-pink-256-gb/p/itm93d002e8a2eb1?pid=MOBGXTYZZBUPYFEC&lid=LSTMOBGXTYZZBUPYFECU3Q95H&marketplace=FLIPKART&q=motorola+edge+50+fusion&store=tyy%2F4io&spotlightTagId=BestsellerId_tyy%2F4io&srno=s_1_1&otracker=AS_QueryStore_OrganicAutoSuggest_2_16_na_na_ps&otracker1=AS_QueryStore_OrganicAutoSuggest_2_16_na_na_ps&fm=search-autosuggest&iid=ca046dea-54f1-471f-ae0d-605a5df86cdb.MOBGXTYZZBUPYFEC.SEARCH&ppt=sp&ppn=sp&ssid=cmma4mheps0000001731519905986&qH=f59b9da0ed35ed95" // Flipkart link
    },
    {
        "id": 9,
        "title": "Vivo V40e 5G",
        "price": 30999,
        "description": "vivo V40e 5G (Mint Green, 256 GB)  (8 GB RAM).",
        "brand": "Vivo",
        "image": "https://m.media-amazon.com/images/I/610NuPCbc5L._SY606_.jpg", // Amazon link
        "buy2": "https://www.flipkart.com/vivo-v40e-5g-mint-green-256-gb/p/itm710974d0d3986?pid=MOBH4K7QPDGTADDZ&lid=LSTMOBH4K7QPDGTADDZKZDEBW&marketplace=FLIPKART&q=vivo+v40e+5g&store=tyy%2F4io&srno=s_1_2&otracker=AS_QueryStore_OrganicAutoSuggest_1_9_na_na_ps&otracker1=AS_QueryStore_OrganicAutoSuggest_1_9_na_na_ps&fm=search-autosuggest&iid=434984d5-b69c-4e15-8c07-c28f22e5aef6.MOBH4K7QPDGTADDZ.SEARCH&ppt=pp&ppn=pp&ssid=lo599h5mc00000001731520018649&qH=c2223f5baa9ab039" // Flipkart link
    },
    {
        "id": 10,
        "title": "Apple iPhone 16 Pro Max ",
        "price": 184900,
        "description": "(Sold Out)  Apple iPhone 16 Pro Max (Desert Titanium, 1 TB). iPhone 16 Pro Max. Built for Apple Intelligence. Featuring a stunning titanium design. Camera Control. 4K 120 fps Dolby Vision. And A18 Pro chip.",
        "brand": "Apple",
        "image": "https://m.media-amazon.com/images/I/61giwQtR1qL._SX466_.jpg", // Amazon link
        "buy2": "https://www.flipkart.com/apple-iphone-16-pro-max-desert-titanium-1-tb/p/itmcb843106c5346?pid=MOBH4DQFAGHQGCVG&lid=LSTMOBH4DQFAGHQGCVGUBDAFH&marketplace=FLIPKART&q=iphone+16+pro+max+1tb&store=tyy%2F4io&srno=s_1_4&otracker=AS_QueryStore_OrganicAutoSuggest_1_19_na_na_na&otracker1=AS_QueryStore_OrganicAutoSuggest_1_19_na_na_na&fm=search-autosuggest&iid=971aff9e-0d6f-4547-892a-859146afa3df.MOBH4DQFAGHQGCVG.SEARCH&ppt=sp&ppn=sp&ssid=iw57s60qio0000001731520297582&qH=8788250cba49e433" // Flipkart link
    }
];
