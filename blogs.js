const retroMusicBlogs = [
    {
      title: "The Nostalgic Vibes of the 70s Disco Era",
      date: "2023-10-12",
      data: "Step back in time to the glitzy 1970s, where disco music ruled the dance floors. Iconic artists like Donna Summer and the Bee Gees made the world groove to the beat. With funky outfits and catchy tunes, this era remains a symbol of pure, unadulterated fun."
    },
    {
      title: "Rocking the 80s: A Decade of Music Revolution",
      date: "2023-10-15",
      data: "The 1980s were a musical rollercoaster, where rock music took center stage. From the electrifying guitar riffs of Van Halen to the legendary anthems of Queen, this decade brought us some of the most memorable rock hits, leaving an indelible mark on music history."
    },
    {
      title: "90s Hip-Hop: A Golden Age of Rhymes and Beats",
      date: "2023-10-18",
      data: "In the 1990s, the world of hip-hop exploded with creativity. Artists like Tupac Shakur and Notorious B.I.G. dominated the scene, delivering powerful lyrics and unforgettable beats. The '90s hip-hop era remains an era of profound influence on modern music and culture."
    },
    {
      title: "The Swingin' 60s: A Revolution of Sound",
      date: "2023-10-20",
      data: "The 1960s witnessed a musical revolution, with bands like The Beatles and The Rolling Stones defining the era. From the British Invasion to the rise of psychedelic rock, the '60s shaped the course of music history."
    },
    {
      title: "Electropop Awakens: The 2000s Music Scene",
      date: "2023-10-25",
      data: "The 2000s introduced us to a new wave of music with electropop sensations like Britney Spears and Daft Punk. Catchy beats, futuristic soundscapes, and iconic dance moves defined this electrifying era."
    }
  ];

let blogContainer = document.querySelector(".body-sec");

for (let i = 0; i < retroMusicBlogs.length; i++) {
    let blog = document.createElement("div");
    blog.classList.add("blogs");

    let blogImg = document.createElement("div");
    blogImg.classList.add("blog-img");
    blogImg.innerHTML='<img src="images/record.png" alt="">';

    let blogData= document.createElement("div");
    blogData.classList.add("blog-data");


    let blogTitle = document.createElement("h1");
    blogTitle.classList.add("blog-title");
    blogTitle.textContent = retroMusicBlogs[i].title;

    let blogDate = document.createElement("h2");
    blogDate.classList.add("blog-date");
    blogDate.textContent = retroMusicBlogs[i].date;

    let blogpara = document.createElement("p");
    blogpara.classList.add("blog-para");
    blogpara.textContent = retroMusicBlogs[i].data;
    
    blog.appendChild(blogImg);
    
    blogData.appendChild(blogTitle);
    blogData.appendChild(blogDate);
    blogData.appendChild(blogpara);
    
    blog.appendChild(blogData);

    blogContainer.appendChild(blog);
}

