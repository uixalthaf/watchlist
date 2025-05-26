const movies=[
    {
      id: 1,
      title: "Titanic",
      release_date: "2024",
      url: "https://i.pinimg.com/736x/59/f5/74/59f574f70b18295d06c6fd5ffef825bc.jpg",
      description: "A timeless romance set aboard the ill-fated Titanic. Jack and Rose's love story unfolds against the backdrop of tragedy. James Cameron's masterpiece is a heart-wrenching epic. It captures love, loss, and the fragility of life."
    },
    {
      id: 2,
      title: "John Wick",
      release_date: "2999",
      url: "https://i.pinimg.com/736x/bf/66/d7/bf66d78d297a764cbfa933f452011153.jpg",
      description: "An ex-hitman seeks revenge after losing everything. John Wick dives into a world of underground assassins. Brutal action, sleek style, and fierce loyalty define his journey. A modern action classic driven by grief and vengeance."
    },
    {
      id: 3,
      title: "The Fault in Our Stars",
      release_date: "2024",
      url: "https://i.pinimg.com/736x/6a/9b/56/6a9b567f2c4bc1c9677315738a6f8599.jpg",
      description: "Two teens with cancer fall in love and find meaning. Hazel and Gus’s bond grows in spite of their fate. It’s a story of love, loss, and living fully. Poignant, raw, and emotionally unforgettable."
    },
    {
      id: 1,
      title: "Dead Poets Society",
      release_date: "2024",
      url: "https://i.pinimg.com/736x/5a/fb/d1/5afbd1962d1360b2114227d918335439.jpg",
      description: "An English teacher inspires students to seize the day. Robin Williams delivers a performance filled with heart. The film explores conformity, courage, and dreams. A powerful ode to poetry and passion."
    },
    {
      id: 2,
      title: "Fantastic Beasts",
      release_date: "2999",
      url: "https://i.pinimg.com/736x/1e/93/e9/1e93e95026c5454e1c3084c29b570926.jpg",
      description: "Step into the wizarding world before Harry Potter. Newt Scamander explores magical creatures and dark forces. The film blends fantasy with wonder and danger. A magical journey full of secrets and spells."
    },
    {
      id: 3,
      title: "Beauty and the Beast",
      release_date: "2024",
      url: "https://i.pinimg.com/736x/dd/32/02/dd3202ed1c73907605e4fdfdba6b4800.jpg",
      description: "A tale as old as time about love and transformation. Belle teaches the Beast the meaning of kindness. Enchanted objects and music bring magic to life. It’s a romantic fantasy filled with heart."
    },
    {
      id: 1,
      title: "Pirates of the Caribbean",
      release_date: "2024",
      url: "https://i.pinimg.com/736x/0a/0e/84/0a0e8470302f3179b1ab527d5479e5dc.jpg",
      description: "Join Captain Jack Sparrow on wild sea adventures. Curses, treasure, and sword fights define the chaos. The film blends humor, danger, and legend. A swashbuckling saga of pirates and myths."
    },
    {
      id: 2,
      title: "Five Feet Apart",
      release_date: "2999",
      url: "https://i.pinimg.com/736x/43/03/7f/43037fe6660479c1b7095a12650456cb.jpg",
      description: "Two teens with cystic fibrosis fall in love—but can’t touch. Their love blossoms within heartbreaking limits. It’s a tale of longing, restraint, and resilience. A modern love story full of emotion."
    },
    {
      id: 3,
      title: "La La Land",
      release_date: "2024",
      url: "https://i.pinimg.com/736x/d2/8b/5f/d28b5f88a260a093e293c1277174e0b3.jpg",
      description: "A jazz musician and aspiring actress chase dreams. Love collides with ambition in a dazzling LA musical. Vivid colors, soulful music, and heartbreak shine. A tribute to dreams and bittersweet endings."
    },
    {
      id: 3,
      title: "Before Sunrise",
      release_date: "2024",
      url: "https://i.pinimg.com/736x/78/3f/92/783f92b84fbd06aa39355a9b35981b8e.jpg",
      description: "Two strangers meet on a train and spend one night in Vienna. Deep conversations and connection unfold hour by hour. It's about time, fleeting moments, and possibility. A soulful romance without guarantees."
    },
    {
      id: 1,
      title: "One Day",
      release_date: "2024",
      url: "https://i.pinimg.com/736x/2d/16/2c/2d162cb4b52c329be775a91cc1e959ea.jpg",
      description: "Emma and Dexter reconnect every July 15 for years. Their lives change, but their bond lingers through time. It’s a story of friendship, timing, and love lost. Deeply moving with an unforgettable twist."
    },
    {
      id: 2,
      title: "Perks of Being a Wallflower",
      release_date: "2999",
      url: "https://i.pinimg.com/736x/0e/91/3e/0e913ebe4327f23be55e5d974804ada1.jpg",
      description: "A shy teen navigates high school with new friends. Painful pasts, first love, and self-discovery unfold. Emotional, poetic, and beautifully raw. A coming-of-age gem with deep soul."
    },
    {
      id: 3,
      title: "The Truman Show",
      release_date: "2024",
      url: "https://i.pinimg.com/736x/28/45/c2/2845c294927432577e3a6ee902fba395.jpg",
      description: "Truman lives in a fake world—broadcast 24/7 without his knowledge. Slowly, he begins to question reality itself. A powerful satire on media, control, and freedom. Jim Carrey’s most thought-provoking performance."
    },
    {
      id: 4,
      title: "The Notebook",
      release_date: "2024",
      url: "https://i.pinimg.com/736x/4c/35/b8/4c35b8b3b352a424bed17393d3ce91f0.jpg",
      description: "A summer romance torn apart by class and fate. Noah and Allie’s love endures despite all odds. Passionate, emotional, and deeply nostalgic. A tearjerking classic about true love."
    },
    {
      id: 5,
      title: "A Walk to Remember",
      release_date: "2024",
      url: "https://i.pinimg.com/736x/c7/ef/bc/c7efbc8c900dce91a5d458dbb68725b0.jpg",
      description: "A rebellious teen falls for a quiet girl with a secret. Their romance transforms him—and shatters hearts. Faith, love, and tragedy collide. A beautiful story of unexpected redemption."
    },
    {
      id: 6,
      title: "Little Women",
      release_date: "2024",
      url: "https://i.pinimg.com/736x/45/ac/dc/45acdc682f34510f66f24601fb04e9e7.jpg",
      description: "Four sisters grow, love, and dream during the Civil War era. Jo, Meg, Amy, and Beth face life’s trials. A timeless tale of family, identity, and womanhood. Richly emotional and empowering."
    },
    {
      id: 7,
      title: "The Secret Life of Walter Mitty",
      release_date: "2024",
      url: "https://i.pinimg.com/736x/48/3a/4f/483a4f9158c4b7d04f61b76ad522eaa8.jpg",
      description: "Walter escapes his dull life through vivid daydreams. Until he sets out on a real adventure across the globe. It’s a film about courage, discovery, and awakening. Visually stunning and deeply uplifting."
    },
    {
      id: 9,
      title: "Pride & Prejudice",
      release_date: "2024",
      url: "https://i.pinimg.com/736x/22/57/f6/2257f60e84967cfa6fa9427fdc0cef46.jpg",
      description: "Elizabeth Bennet challenges love and social class. Mr. Darcy hides a heart behind pride. A timeless romance with sharp wit and elegance. Jane Austen’s world comes alive in sweeping beauty."
    },
    {
      id: 10,
      title: "Interstellar",
      release_date: "2999",
      url: "https://i.pinimg.com/736x/0b/34/ce/0b34ce2145b475247577a5d438a199b0.jpg",
      description: "Earth is dying, and humanity’s hope lies in space. A father travels through galaxies to save the future. Love, time, and science collide in Nolan’s epic. Emotionally vast and visually breathtaking."
    },
    {
      id: 11,
      title: "500 Days of Summer",
      release_date: "2024",
      url: "https://i.pinimg.com/736x/00/2a/f4/002af4980397f5fcf21f5b5e7b7842ea.jpg",
      description: "This is not a love story. It’s a story about love. Tom falls hard for Summer—but reality hits different. A nonlinear journey through hope and heartbreak. Honest, stylish, and emotionally sharp."
    }
  ]
  
  export default movies;