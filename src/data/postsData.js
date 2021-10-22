const postsData = [
  {
    title: 'Jak zacząć odchudzanie?',
    image: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/what-is-the-5-2-diet-main-image-700-350-1875ca8.jpg?quality=90&resize=768,574',
    category: 'zdrowie',
    date: '3.10.2021',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime doloribus sunt nisi minima quo pariatur dolorum perspiciatis voluptatem cupiditate dolor animi numquam, facere dolore blanditiis ad aut voluptas dicta dolores eveniet illum a ipsum qui? Iste temporibus sint rem, dolore, numquam modi recusandae voluptas accusantium libero earum totam. Iusto sint delectus, quam, eos totam cupiditate perspiciatis in corrupti dicta tenetur quisquam nam. Perferendis natus incidunt ea ipsum ut vitae minus aspernatur facere aliquid dolorem, culpa deserunt ex est numquam sit molestias qui asperiores. Obcaecati, mollitia voluptatum rerum enim non itaque cupiditate blanditiis illum iste quo ducimus tempore dolore quas nam error porro labore tenetur magni ratione sapiente eos, aliquam vero? Recusandae tempore provident corrupti, sapiente dolores quia aut asperiores quisquam reiciendis illum. Consectetur sint rem ducimus tempora quo pariatur officiis nesciunt incidunt sit quos.' ,
    id: 6,
  },
  {
    title: 'Suplementy dla młodych sportowców',
    image: 'https://www.bps.org.uk/sites/www.bps.org.uk/files/News/News%20-%20Images/Supporting-youth-athletes%20image%20for%20parents%20of%20athletes.jpg',
    category: 'suplementacja',
    date: '18.9.2021',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime doloribus sunt nisi minima quo pariatur dolorum perspiciatis voluptatem cupiditate dolor animi numquam, facere dolore blanditiis ad aut voluptas dicta dolores eveniet illum a temporibus? Animi adipisci dicta aut repudiandae, enim, praesentium magni fuga pariatur eum fugiat unde, nostrum iure ipsum qui? Iste temporibus sint rem, dolore, numquam modi recusandae voluptas accusantium libero earum totam. Iusto sint delectus, quam, eos totam cupiditate perspiciatis in corrupti dicta tenetur quisquam nam. Perferendis natus incidunt ea ipsum ut vitae minus aspernatur facere aliquid dolorem, culpa deserunt ex est numquam sit molestias qui asperiores. Obcaecati, mollitia voluptatum rerum enim non itaque cupiditate blanditiis illum iste quo ducimus tempore dolore quas nam error porro labore tenetur magni ratione sapiente eos, aliquam vero? Recusandae tempore provident corrupti, sapiente dolores quia aut asperiores quisquam reiciendis illum. Consectetur sint rem ducimus tempora quo pariatur officiis nesciunt incidunt sit quos.' ,
    id: 5,
  },
  {
    title: 'Woda - jaką wybrać?',
    image: 'https://coffeelab.pl/wp-content/uploads/2020/09/peakwater-foto-05.jpg',
    category: 'zdrowie',
    date: '6.9.2021',
    text: 'Animi adipisci dicta aut repudiandae, enim, praesentium magni fuga pariatur eum fugiat unde, nostrum iure ipsum qui? Iste temporibus sint rem, dolore, numquam modi recusandae voluptas accusantium libero earum totam. Iusto sint delectus, quam, eos totam cupiditate perspiciatis in corrupti dicta tenetur quisquam nam. Perferendis natus incidunt ea ipsum ut vitae minus aspernatur facere aliquid dolorem, culpa deserunt ex est numquam sit molestias qui asperiores. Obcaecati, mollitia voluptatum rerum enim non itaque cupiditate blanditiis illum iste quo ducimus tempore dolore quas nam error porro labore tenetur magni ratione sapiente eos, aliquam vero? Recusandae tempore provident corrupti, sapiente dolores quia aut asperiores quisquam reiciendis illum. Consectetur sint rem ducimus tempora quo pariatur officiis nesciunt incidunt sit quos.' ,
    id: 4,
  },
  {
    title: 'Wpływ postu przerywanego na kondycję fizyczną',
    image: 'https://www.elleman.pl/media/cache/default_view/uploads/media/default/0005/36/intermittent-fasting-czyli-post-przerywany.jpeg',
    category: 'sport',
    date: '21.8.2021',
    text: 'Iste temporibus sint rem, dolore, numquam modi recusandae voluptas accusantium libero earum totam. Iusto sint delectus, quam, eos totam cupiditate perspiciatis in corrupti dicta tenetur quisquam nam. Perferendis natus incidunt ea ipsum ut vitae minus aspernatur facere aliquid dolorem, culpa deserunt ex est numquam sit molestias qui asperiores. Obcaecati, mollitia voluptatum rerum enim non itaque cupiditate blanditiis illum iste quo ducimus tempore dolore quas nam error porro labore tenetur magni ratione sapiente eos, aliquam vero? Recusandae tempore provident corrupti, sapiente dolores quia aut asperiores quisquam reiciendis illum. Consectetur sint rem ducimus tempora quo pariatur officiis nesciunt incidunt sit quos.' ,
    id: 3,
  },
  {
    title: 'Tosty francuskie na słodko',
    image: 'https://thebakermama.com/wp-content/uploads/2020/08/fullsizeoutput_26fb3-scaled.jpeg',
    category: 'przepisy',
    date: '15.8.2021',
    text: 'Culpa deserunt ex est numquam sit molestias qui asperiores. Obcaecati, mollitia voluptatum rerum enim non itaque cupiditate blanditiis illum iste quo ducimus tempore dolore quas nam error porro labore tenetur magni ratione sapiente eos, aliquam vero? Recusandae tempore provident corrupti, sapiente dolores quia aut asperiores quisquam reiciendis illum. Consectetur sint rem ducimus tempora quo pariatur officiis nesciunt incidunt sit quos.' ,
    id: 2,
  },
  {
    title: 'Czy warto współpracować z dietetykiem przez internet?',
    image: 'https://www.foodbusinessnews.net/ext/resources/2021/1/WFH_Lead.png?1609877877',
    category: 'inne',
    date: '6.8.2021',
    text: 'Recusandae tempore provident corrupti, sapiente dolores quia aut asperiores quisquam reiciendis illum. Consectetur sint rem ducimus tempora quo pariatur officiis nesciunt incidunt sit quos. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam voluptates, modi assumenda explicabo omnis odit temporibus nulla repudiandae obcaecati soluta voluptate maxime quos, quae eveniet error nam rem magnam ab at corrupti accusantium perferendis! Iure ut quasi eligendi architecto minus nemo nisi maxime, tempore explicabo iste ullam ipsum ratione, corrupti aperiam officiis. Nemo fugit sint quaerat quam cupiditate dolorum corporis nam praesentium cumque! Tenetur, quae? Aperiam aspernatur eaque recusandae repellat, ea nobis. Ea sapiente aliquam nobis voluptatibus reprehenderit ipsa hic?',
    id: 1,
  },
];

export default postsData;