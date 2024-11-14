const product1 = [
    {
        "id": 0,
        "title": "",
        "price": "",
        "description": "",
        "brand": "",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png",
        "buy1": "", // Amazon link (empty for placeholder)
        "buy2": ""  // Flipkart link (empty for placeholder)
    },
    {
        "id": 1,
        "title": "Samsung Galaxy S22",
        "price": 37789,
        "description": "Samsung Galaxy S22 5G (Green, 8GB, 128GB Storage) with No Cost EMI/Additional Exchange Offers",
        "brand": "Samsung",
        "image": "https://www.whatmobile.com.pk/admin/images/Samsung/SamsungGalaxyS22-b.jpg",
        "buy1": "https://www.amazon.in/Samsung-Galaxy-Storage-Additional-Exchange/dp/B09SH9D45B" // Amazon link
        
    },
    {
        "id": 2,
        "title": "Apple iPhone 15",
        "price": 65900,
        "description": "Apple iPhone 15 (128 GB) - Blue. WITH NEW FEATURE DYNAMIC ISLAND COMES TO IPHONE 15 — Dynamic Island bubbles up alerts and Live Activities — so you don’t miss them while you’re doing something else. You can see who’s calling, track your next ride, check your flight status, and so much more. ",
        "brand": "Apple",
        "image": "https://m.media-amazon.com/images/I/71d7rfSl0wL._SX679_.jpg",
        "buy1": "https://www.amazon.in/Apple-iPhone-15-128-GB/dp/B0CHX2F5QT/ref=sr_1_1_sspa?crid=1ARHI2UZ9ZZB6&dib=eyJ2IjoiMSJ9.4Amcm6ymShwYf2cUNy6g85S9v2igxHAVZIUT04qpVS-4nrBHk0q7-6xivRGXMniw5kx_vdtsXnWgDpbdvcMp9cEJxFNluIQneY__A6MK-7M1nz2N2K05yaOtdB8nvWdprbvGpePNuH2CS-0lyaEQvTvh1MZXztdOsNfOwpuz_MgJV3VSZJuhwHBYf0C_kVwWzwZN3XdLXK9GLQ-8HS86Yjee3RTgP3whHsrTJ_3FsHE.ZrcdO__bMhqu87-V9p0jTvMpDK9gp-8J402n7_Khlr8&dib_tag=se&keywords=iphone%2B15&qid=1731517515&sprefix=iphone%2B15%2Caps%2C200&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1" // Amazon link
         // Flipkart link
    },
    {
        "id": 3,
        "title": "Samsung Galaxy M35 5G",
        "price": 18999,
        "description": "Samsung Galaxy M35 5G (Daybreak Blue,6GB RAM,128GB Storage)| Corning Gorilla Glass Victus+| AnTuTu Score 595K+ | Vapour Cooling Chamber | 6000mAh Battery | 120Hz Super AMOLED Display| Without Charger",
        "brand": "Samsung",
        "image": "https://m.media-amazon.com/images/I/81nJiu51M+L._SX679_.jpg",
        "buy1": "https://www.amazon.in/Samsung-Daybreak-Storage-Corning-Gorilla/dp/B0D8123CLN/ref=sr_1_1?crid=3HTUKXBGENO1N&dib=eyJ2IjoiMSJ9.mZ-TzsUHD4JgHmJlAzdeUgUJFBdlTPF6bKnfGGRx1DKd4ouFZTTsel0rNmQvCfsw5JRra9_iDlGVxYYxqifAw8YBNr0EKWXKtPAfCl8_G51BQ3Ib-Xejg7nTjW9amxg8OgF3C-5E2aTCbfSQ0cJWfsVWwz8hyWh1zvUOEPHditLHyhYmVjcUw1JlypvDc5rXlHZCFnNoloy2Yo3g9FUiptYm1dHKT4YmOCHHAaaITa0.08zTAtMITNBOVC0E1zPebjCbQzuH9wcSf4lWADM7nZc&dib_tag=se&keywords=Samsung+Galaxy+M34+5G&nsdOptOutParam=true&qid=1731515511&sprefix=samsung+galaxy+m34+5g%2Caps%2C5909&sr=8-1" // Amazon link
         // Flipkart link
    },
    {
        "id": 4,
        "title": "Realme NARZO 70 Pro 5G",
        "price": 16998,
        "description": "realme NARZO 70 Pro 5G (Glass Gold, 8GB RAM,256GB Storage) Dimensity 7050 5G Chipset | Horizon Glass Design | Segment 1st Flagship Sony IMX890 OIS Camera",
        "brand": "Realme",
        "image": "https://m.media-amazon.com/images/I/71ZOEseX-nL._SX425_.jpg",
        "buy1": "https://www.amazon.in/realme-Storage-Dimensity-Chipset-Flagship/dp/B0CW5F732B/ref=sr_1_2?crid=2WGCP667BFV3L&dib=eyJ2IjoiMSJ9.j7s-1UwZsTEGTA81T3f4g3BGFRWqpJbLnbvqbnGz0EiAhjf88WxTtonX7H1fTXqYpEGWNovJRvKZpPAJKAwJu0m7qTJ5yDSj4hNpWV1xShPwSQZQHP6WoXI7CU22KxbS0-RDwl8_4EA_gmzfyz7KDepTsyacC7ixKC6njajsHi7a2N4aiI1ACNnpo5bFDBpxYKrX77PIyEeNZAjwf602pQbRJgteKFIUL4uxyiA38B0.NkYAcDEi2Yt0YG7BueGj2slkIYPmiDrl3vl_lfqfx7c&dib_tag=se&keywords=realme%2Bnarzo%2B70%2Bpro%2B5g%2Bmobile&nsdOptOutParam=true&qid=1731515920&sprefix=realme%2B%2Caps%2C274&sr=8-2&th=1" // Amazon link
    },
    {
        "id": 5,
        "title": "OnePlus Nord CE4 Lite 5G",
        "price": 17999,
        "description": "OnePlus Nord CE4 Lite 5G (Super Silver, 8GB RAM, 128GB Storage)",
        "brand": "OnePlus",
        "image": "https://m.media-amazon.com/images/I/61Io5-ojWUL._SX569_.jpg",
        "buy1": "" // Amazon link
    },
    {
        "id": 6,
        "title": "Redmi Note 13 Pro",
        "price": 25999,
        "description": "Redmi Note 13 Pro (Coral Purple, 12GB RAM, 256GB Storage) | 1.5K AMOLED | 200MP Hi-Res Camera | Flagship 4nm SD 7s Gen 2 | 67W TurboCharge",
        "brand": "Redmi",
        "image": "https://m.media-amazon.com/images/I/71aiqeP-APL._SL1500_.jpg",
        "buy1": "https://www.amazon.in/Redmi-Purple-Storage-Flagship-TurboCharge/dp/B0CRQFC3MN/ref=sr_1_1?crid=2W1756YK5VSC3&dib=eyJ2IjoiMSJ9.l9o_GyntaGcnR5FlDpcd5T1-yG769eg2Bx4mCi8i9Bw4e4-n5wFWY6zBdwKubX7cZorMorgpAEKjX5omKs-ORLI2CAjfBYx3cz45uFCPnm9VmmsXr_aAnzMNp-_gJlXRl_C391oEhXwPeJGwEMo2wNWc370RnU60ao2snrqbS50ATtXdjSAjdmcSNX0m7miQIpb3Zm7j6OWktuALKbCsKFGQhQsPDieh_kvP5EO_VNU.esBg0mqpg-pd4VWpuRGUPFryy8XFDcwTjb3dOh8P2Lc&dib_tag=se&keywords=Xiaomi+Redmi+Note+14+Pro+Plus+5G&nsdOptOutParam=true&qid=1731516443&sprefix=xiaomi+redmi+note+14+pro+plus+5g%2Caps%2C233&sr=8-1" // Amazon link
    },
    {
        "id": 7,
        "title": "Vivo V29 Pro 5G",
        "price": 31600,
        "description": "Vivo V29 Pro 5G - 8GB RAM, 256GB Storage, 4600mAh Battery - Amoled Display, Dual Camera - 1-Year Warranty - No Charger/Data Cable (Blue)",
        "brand": "Vivo",
        "image": "https://m.media-amazon.com/images/I/71Ybh7jdwLL._SX569_.jpg",
        "buy1": "https://www.amazon.in/Vivo-V29-Pro-5G-Warranty/dp/B0D92VBZ1L/ref=sr_1_1?crid=38XR46ZDKDCR7&dib=eyJ2IjoiMSJ9.H8z7QsLYnHbxVRzFd33Hs4EJ22XmrO9uQ1C6nb-J4DmOfRV-2gteGx3xReGYzyMk4fHlld8X5EfNYfAz2TZqY4FIMwV4EdDEb6D26N-tt2v23fSR21aUQ7exjxDz2TI_32Qokf9cPX2lOch5L6SS0EkhYynzBGFh7kn_E6U8nMXHtpSSjinT81f4xZrS_Y3GZBg6d6rI3TLTYliFXuouhgEfK_8j9h2-kFjlUTJRSko.4WywWFCC7jw2A7wT8C2GgbeH_qD85pIf74FMNhD6VW4&dib_tag=se&keywords=Vivo%2BV27%2BPro%2B5%2Bg&nsdOptOutParam=true&qid=1731516615&sprefix=vivo%2Bv27%2Bpro%2B5%2Bg%2Caps%2C206&sr=8-1&th=1" // Amazon link
        
    },
    {
        "id": 8,
        "title": "Motorola Edge 50 Fusion 5G ",
        "price": 26580,
        "description": "Motorola Edge 50 Fusion 5G (Marshmallow Blue, 12GB RAM, 256GB Storage)",
        "brand": "Motorola",
        "image": "https://m.media-amazon.com/images/I/71XZP2Hm+5L._SX466_.jpg",
        "buy1": "https://www.amazon.in/Motorola-Fusion-Marshmallow-256GB-Storage/dp/B0D4JLSGBB/ref=sr_1_1?crid=COQSFUH5572J&dib=eyJ2IjoiMSJ9.lg-yguHsOEHJkobnAFift4lafsiZkmor9FTpuvup_XIk7TRk0-xZ_bGXsffy88HBrMXhdm9ftGkQrfrV62Wr6PP0pnp25_tiJps5ErnwFAwO5bLs4MOx9iojDMZY1FCyWU6TZuKkqHRDu66P_2SQS2wgG5nx1EB3fnneSZ0vQ5VWRwKCfUmca6a-i-XWSLMqv7p2v3ChQ5bCOGmLZKjE7L5z2HFMEFbxiPmqAcivTkY.aK6ncWM-_V_ut-6XA6NUX1hN7Yhrdu8wdqLVflorzes&dib_tag=se&keywords=motorola+edge+50+fusion&nsdOptOutParam=true&qid=1731516756&sprefix=Motrola%2Caps%2C224&sr=8-1" // Amazon link
    },
    {
        "id": 9,
        "title": "Vivo V40e 5G",
        "price": 28080,
        "description": "Vivo V40e 5G AI Smartphone (Royal Bronze, 8GB RAM + 256GB Storage)",
        "brand": "Vivo",
        "image": "https://m.media-amazon.com/images/I/51dpdIhv8wL._SY606_.jpg",
        "buy1": "" // Amazon link
    },
    {
        "id": 10,
        "title": "Apple iPhone 16 Pro Max ",
        "price": 184900,
        "description": "Apple iPhone 16 Pro Max (1 TB) - Black Titanium. Not Need More description",
        "brand": "Apple",
        "image": "https://m.media-amazon.com/images/I/619oqSJVY5L._SX466_.jpg",
        "buy1": "https://www.amazon.in/Apple-iPhone-16-Pro-Max/dp/B0DGJD75G2/ref=sr_1_1?crid=2UBAU1XI1883C&dib=eyJ2IjoiMSJ9.6xik1BSvT0cB0QNlNLAc0sZiNcZAvFo_8J34ZYcX8k-AwzKO6s3OmnbGTrMJTfbRjgbPIJQcWeIvT_BEtUoNYuwaugSOh42LuswYE0f6Hoz8TQ6TeQB_jicXkvrKUbkFzKKvNtdVo3X6-xID8sqt0rjtkd_Q-ntQxvKGkUuEMmfrQDQKUkSr5J59RZTa9frPPzdjuCWf_NfEgKV7ep8MijL9q4H2A_clSeyj4EKpo_M.27jy8LJ_vcG7jTkZmQptzD0b6GQ1k-1CQC7c_smMtQY&dib_tag=se&keywords=i+phone16+pro+max+1tb&qid=1731517250&sprefix=i+phone16+pro+max+%2Caps%2C200&sr=8-1" // Amazon link
        // Flipkart link
    }
];
