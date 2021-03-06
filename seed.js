var seeder = require('mongoose-seed');
var mongoose = require('mongoose');

// Connect to MongoDB via Mongoose
seeder.connect(
  'mongodb+srv://aris:aris@cluster0.pfolv.mongodb.net/DB_KOSGUH?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
  },
  function () {
    // Load Mongoose models
    seeder.loadModels([
      './models/Category',
      './models/Bank',
      './models/Item',
      './models/Feature',
      './models/Activity',
      './models/Member',
      './models/Image',
      './models/Member',
      './models/Booking',
      './models/Users',
    ]);

    // Clear specified collections
    seeder.clearModels(
      [
        'Category',
        'Bank',
        'Item',
        'Member',
        'Item',
        'Feature',
        'Image',
        'Booking',
        'Users',
      ],
      function () {
        // Callback to populate DB once collections have been cleared
        seeder.populateModels(data, function () {
          seeder.disconnect();
        });
      }
    );
  }
);

var data = [
  // start category
  {
    model: 'Category',
    documents: [
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc901111'),
        name: 'Kostan Pria',
        itemId: [
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc902222') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc902223') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc902224') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc902225') },
        ],
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc901112'),
        name: 'Kostan Wanita',
        itemId: [
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc902226') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc902227') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc902228') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc902229') },
        ],
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc901113'),
        name: 'Kostan Campur',
        itemId: [
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc902230') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc902231') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc902232') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc902233') },
        ],
      },
    ],
  },
  // end category
  // start item
  {
    model: 'Item',
    documents: [
      // Kost Intan Pasar Minggu
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc902222'),
        title: 'Kost Intan Pasar Minggu',
        price: 120000,
        sumBooking: 1,
        country: 'Indonesia',
        city: 'Jakarta',
        isPopular: false,
        description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        unit: 'hari',
        imageId: [
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cdb1') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cdb2') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cdb3') },
        ],
        featureId: [
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa09') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa10') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa11') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa12') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa13') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa14') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa15') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa16') },
        ],
        activityId: [
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90bb05') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90bb06') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90bb07') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90bb08') },
        ],
        categoryId: '5e96cbe292b97300fc901111',
      },
      // Kost Ibu Siska Duren Tiga
      {
        // done
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc902223'),
        title: 'Kost Ibu Siska Duren Tiga',
        price: 180000,
        sumBooking: 2,
        country: 'Indonesia',
        city: 'Jakarta',
        isPopular: false,
        description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        unit: 'hari',
        imageId: [
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cdb4') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cdb5') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cdb6') },
        ],
        featureId: [
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa01') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa02') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa03') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa04') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa05') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa06') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa07') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa08') },
        ],
        activityId: [
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90bb01') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90bb02') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90bb03') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90bb04') },
        ],
        categoryId: '5e96cbe292b97300fc901111',
      },

      // Rumah Kost Perikanan Kalibata
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc902224'),
        title: 'Rumah Kost Perikanan Kalibata',
        price: 175000,
        sumBooking: 3,
        country: 'Indonesia',
        city: 'Jakarta',
        isPopular: false,
        description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        unit: 'hari',
        imageId: [
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cdb7') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cdb8') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cdb9') },
        ],
        featureId: [
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa01') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa02') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa03') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa04') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa05') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa06') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa07') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa08') },
        ],
        activityId: [
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90bb01') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90bb02') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90bb03') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90bb04') },
        ],
        categoryId: '5e96cbe292b97300fc901111',
      },

      // Anggana
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc902225'),
        title: 'Cahaya Inn',
        price: 200000,
        sumBooking: 4,
        country: 'Indonesia',
        city: 'Jakarta',
        isPopular: false,
        description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        unit: 'hari',
        imageId: [
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd10') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd11') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd12') },
        ],
        featureId: [
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa01') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa02') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa03') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa04') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa05') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa06') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa07') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa08') },
        ],
        activityId: [
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90bb01') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90bb02') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90bb03') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90bb04') },
        ],
        categoryId: '5e96cbe292b97300fc901111',
      },

      // Kost H. Mudji Pancoran
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc902226'),
        title: 'Kost H. Mudji Pancoran',
        price: 160000,
        sumBooking: 5,
        country: 'Indonesia',
        city: 'Jakarta',
        isPopular: false,
        description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        unit: 'hari',
        imageId: [
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd13') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd14') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd15') },
        ],
        featureId: [
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa01') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa02') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa03') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa04') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa05') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa06') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa07') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa08') },
        ],
        activityId: [
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90bb01') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90bb02') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90bb03') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90bb04') },
        ],
        categoryId: '5e96cbe292b97300fc901112',
      },

      // Kost H. Kodja Kukusan
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc902227'),
        title: 'Kost H. Kodja Kukusan',
        price: 150000,
        sumBooking: 6,
        country: 'Indonesia',
        city: 'Jakarta',
        isPopular: false,
        description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        unit: 'hari',
        imageId: [
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd16') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd17') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd18') },
        ],
        featureId: [
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa01') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa02') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa03') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa04') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa05') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa06') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa07') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa08') },
        ],
        activityId: [
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90bb01') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90bb02') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90bb03') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90bb04') },
        ],
        categoryId: '5e96cbe292b97300fc901112',
      },

      // Kost Mercu Bogor Kota
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc902228'),
        title: 'Kost Mercu Bogor Kota',
        price: 195000,
        sumBooking: 7,
        country: 'Indonesia',
        city: 'Jakarta',
        isPopular: false,
        description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        unit: 'hari',
        imageId: [
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd19') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd20') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd21') },
        ],
        featureId: [
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa01') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa02') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa03') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa04') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa05') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa06') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa07') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa08') },
        ],
        activityId: [
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90bb01') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90bb02') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90bb03') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90bb04') },
        ],
        categoryId: '5e96cbe292b97300fc901112',
      },

      // Kost Devira Rawalumbu
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc902229'),
        title: 'Kost Devira Rawalumbu',
        price: 170000,
        sumBooking: 8,
        country: 'Indonesia',
        city: 'Jakarta',
        isPopular: false,
        description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        unit: 'hari',
        imageId: [
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd22') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd23') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd24') },
        ],
        featureId: [
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa01') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa02') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa03') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa04') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa05') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa06') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa07') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa08') },
        ],
        activityId: [
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90bb01') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90bb02') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90bb03') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90bb04') },
        ],
        categoryId: '5e96cbe292b97300fc901112',
      },

      // Sigris House Rawalumbu
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc902230'),
        title: 'Sigris House Rawalumbu',
        price: 180000,
        sumBooking: 9,
        country: 'Indonesia',
        city: 'Jakarta',
        isPopular: false,
        description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        unit: 'hari',
        imageId: [
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd25') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd26') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd27') },
        ],
        featureId: [
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa01') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa02') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa03') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa04') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa05') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa06') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa07') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa08') },
        ],
        activityId: [
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90bb01') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90bb02') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90bb03') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90bb04') },
        ],
        categoryId: '5e96cbe292b97300fc901113',
      },

      // Kost Sugoy Kayuringin
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc902231'),
        title: 'Kost Sugoy Kayuringin',
        price: 180000,
        sumBooking: 11,
        country: 'Indonesia',
        city: 'Jakarta',
        isPopular: false,
        description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        unit: 'hari',
        imageId: [
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd28') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd29') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd30') },
        ],
        featureId: [
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa01') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa02') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa03') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa04') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa05') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa06') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa07') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa08') },
        ],
        activityId: [
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90bb01') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90bb02') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90bb03') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90bb04') },
        ],
        categoryId: '5e96cbe292b97300fc901113',
      },

      // Kost Natasha Bekasi Timur
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc902232'),
        title: 'Kost Natasha Bekasi Timur',
        price: 180000,
        sumBooking: 13,
        country: 'Indonesia',
        city: 'Jakarta',
        isPopular: false,
        description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        unit: 'hari',
        imageId: [
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd32') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd31') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd33') },
        ],
        featureId: [
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa01') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa02') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa03') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa04') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa05') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa06') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa07') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa08') },
        ],
        activityId: [
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90bb01') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90bb02') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90bb03') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90bb04') },
        ],
        categoryId: '5e96cbe292b97300fc901113',
      },

      // Kost Bu Uneh Bogor Timur
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc902233'),
        title: 'Kost Bu Uneh Bogor Timur',
        price: 200000,
        sumBooking: 14,
        country: 'Indonesia',
        city: 'Jakarta',
        isPopular: false,
        description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        unit: 'hari',
        imageId: [
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd36') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd34') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd35') },
          // done
        ],
        featureId: [
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa01') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa02') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa03') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa04') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa05') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa06') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa07') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa08') },
        ],
        activityId: [
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90bb01') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90bb02') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90bb03') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90bb04') },
        ],
        categoryId: '5e96cbe292b97300fc901113',
      },
    ],
  },
  // end item
  // start image
  {
    model: 'Image',
    documents: [
      {
        // done
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cdb1'),
        imageUrl: 'images/image-mostpicked-1-min.jpg',
      },
      // done
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cdb2'),
        imageUrl: 'images/image-mostpicked-2-min.jpg',
      },
      // done
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cdb3'),
        imageUrl: 'images/image-mostpicked-3-min.jpg',
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cdb4'),
        imageUrl: 'images/image-mostpicked-4-min.jpg',
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cdb5'),
        imageUrl: 'images/item-1.png',
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cdb6'),
        imageUrl: 'images/image-mostpicked-5-min.jpg',
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cdb7'),
        imageUrl: 'images/image-mostpicked-7-min.jpg',
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cdb8'),
        imageUrl: 'images/image-mostpicked-8-min.jpg',
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cdb9'),
        imageUrl: 'images/image-mostpicked-9-min.jpg',
      },
      {
        // done
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd10'),
        imageUrl: 'images/image-mostpicked-10-min.jpg',
      },
      // done
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd11'),
        imageUrl: 'images/image-mostpicked-11-min.jpg',
      },
      // done
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd12'),
        imageUrl: 'images/image-mostpicked-12-min.jpg',
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd13'),
        imageUrl: 'images/image-mostpicked-13-min.jpg',
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd14'),
        imageUrl: 'images/image-mostpicked-14-min.jpg',
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd15'),
        imageUrl: 'images/image-mostpicked-15-min.jpg',
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd16'),
        imageUrl: 'images/image-category-1-min.jpg',
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd17'),
        imageUrl: 'images/image-category-2-min.jpg',
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd18'),
        imageUrl: 'images/image-category-3-min.jpg',
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd19'),
        imageUrl: 'images/image-category-4-min.jpg',
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd20'),
        imageUrl: 'images/image-category-5-min.jpg',
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd21'),
        imageUrl: 'images/image-category-6-min.jpg',
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd22'),
        imageUrl: 'images/image-category-7-min.jpg',
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd23'),
        imageUrl: 'images/image-category-8-min.jpg',
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd24'),
        imageUrl: 'images/image-category-9-min.jpg',
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd25'),
        imageUrl: 'images/image-category-7-min.jpg',
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd26'),
        imageUrl: 'images/image-category-8-min.jpg',
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd27'),
        imageUrl: 'images/image-category-9-min.jpg',
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd28'),
        imageUrl: 'images/image-category-10-min.jpg',
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd29'),
        imageUrl: 'images/image-category-11-min.jpg',
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd30'),
        imageUrl: 'images/image-category-12-min.jpg',
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd31'),
        imageUrl: 'images/image-category-13-min.jpg',
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd32'),
        imageUrl: 'images/image-category-14-min.jpg',
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd33'),
        imageUrl: 'images/image-category-15-min.jpg',
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd34'),
        imageUrl: 'images/image-category-16-min.jpg',
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd35'),
        imageUrl: 'images/image-category-17-min.jpg',
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd36'),
        imageUrl: 'images/image-category-18-min.jpg',
      },
    ],
  },
  // end image
  // start feature
  {
    model: 'Feature',
    documents: [
      {
        // done
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa01'),
        name: 'Kasur',
        qty: 2,
        imageUrl: 'images/feature-1.png',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902222'),
      },
      {
        // done
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa02'),
        name: 'Kamar Mandi di Dalam',
        qty: 23,
        imageUrl: 'images/feature-2.png',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902222'),
      },
      {
        // done
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa03'),
        name: 'Meja',
        qty: 12,
        imageUrl: 'images/feature-3.png',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902222'),
      },
      {
        // done
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa04'),
        name: 'WIFI',
        qty: 5,
        imageUrl: 'images/feature-4.png',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902222'),
      },
      {
        // done
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa05'),
        name: 'AC',
        qty: 5,
        imageUrl: 'images/feature-5.png',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902222'),
      },
      {
        // done
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa06'),
        name: 'Lemari',
        qty: 5,
        imageUrl: 'images/feature-6.png',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902222'),
      },
      {
        // done
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa07'),
        name: 'TV',
        qty: 5,
        imageUrl: 'images/feature-7.png',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902222'),
      },
      {
        // done
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa08'),
        name: 'CCTV',
        qty: 5,
        imageUrl: 'images/feature-8.png',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902222'),
      },
      // item 2
      {
        // done
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa09'),
        name: 'Kasur',
        qty: 2,
        imageUrl: 'images/feature-1.png',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902223'),
      },
      {
        // done
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa10'),
        name: 'Kamar Mandi di Dalam',
        qty: 23,
        imageUrl: 'images/feature-2.png',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902223'),
      },
      {
        // done
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa11'),
        name: 'Meja',
        qty: 12,
        imageUrl: 'images/feature-3.png',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902223'),
      },
      {
        // done
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa12'),
        name: 'WIFI',
        qty: 5,
        imageUrl: 'images/feature-4.png',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902223'),
      },
      {
        // done
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa13'),
        name: 'AC',
        qty: 5,
        imageUrl: 'images/feature-5.png',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902223'),
      },
      {
        // done
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa14'),
        name: 'Lemari',
        qty: 5,
        imageUrl: 'images/feature-6.png',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902223'),
      },
      {
        // done
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa15'),
        name: 'TV',
        qty: 5,
        imageUrl: 'images/feature-7.png',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902223'),
      },
      {
        // done
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa16'),
        name: 'CCTV',
        qty: 5,
        imageUrl: 'images/feature-8.png',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902223'),
      },
    ],
  },
  // end feature
  // start activity
  {
    model: 'Activity',
    documents: [
      // done
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90bb01'),
        name: 'Universitas Jayabaya',
        type: 'Universitas',
        imageUrl: 'images/activity-1.png',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902222'),
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90bb02'),
        name: 'Rumah Sakit OMNI',
        type: 'Rumah Sakit',
        imageUrl: 'images/activity-2.png',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902222'),
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90bb03'),
        name: 'Taman Mini Indonesia Indah',
        type: 'Tempat Wisata',
        imageUrl: 'images/activity-3.png',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902222'),
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90bb04'),
        name: 'Vnesia Mall',
        type: 'Mall',
        imageUrl: 'images/activity-4.png',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902222'),
      },
      // done 2
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90bb05'),
        name: 'Taman Mini Indonesia Indah',
        type: 'Tempat Wisata',
        imageUrl: 'images/activity-3.png',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902223'),
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90bb06'),
        name: 'Rumah Sakit OMNI',
        type: 'Rumah Sakit',
        imageUrl: 'images/activity-2.png',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902223'),
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90bb07'),
        name: 'Universitas Jayabaya',
        type: 'Universitas',
        imageUrl: 'images/activity-1.png',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902223'),
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90bb08'),
        name: 'Vnesia Mall',
        type: 'Mall',
        imageUrl: 'images/activity-4.png',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902223'),
      },
    ],
  },
  // end activity

  // start booking
  {
    model: 'Booking',
    documents: [
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cee1'),
        bookingStartDate: '12-12-2020',
        bookingEndDate: '12-12-2020',
        invoice: 1231231,
        itemId: {
          _id: mongoose.Types.ObjectId('5e96cbe292b97300fc902222'),
          title: 'Village Angga',
          price: 6,
          duration: 2,
        },
        total: 12,
        memberId: mongoose.Types.ObjectId('5e96cbe292b97300fc903333'),
        bankId: mongoose.Types.ObjectId('5e96cbe292b97300fc903323'),
        payments: {
          proofPayment: 'images/buktibayar.jpeg',
          bankFrom: 'BCA',
          status: 'Proses',
          accountHolder: 'ang',
        },
      },
    ],
  },
  // end booking

  // member
  {
    model: 'Member',
    documents: [
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc903333'),
        firstName: 'Abdul',
        lastName: 'LM',
        email: 'abdul23lm@gmail.com',
        phoneNumber: '082130314423',
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc903334'),
        firstName: 'Fajar',
        lastName: 'Sujai',
        email: 'fajarsujai@gmail.com',
        phoneNumber: '082377954008',
      },
    ],
  },
  {
    model: 'Bank',
    documents: [
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc903322'),
        nameBank: 'Mandiri',
        nomorRekening: '089898',
        name: 'PT. Bookost Indonesia',
        imageUrl: 'images/logo bca.png',
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc903323'),
        nameBank: 'BCA',
        nomorRekening: '878678',
        name: 'PT. Bookost Indonesia',
        imageUrl: 'images/logo mandiri.png',
      },
    ],
  },
  {
    model: 'Users',
    documents: [
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc903345'),
        username: 'admin@bookost.id',
        password: 'bookost2020',
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc903346'),
        username: 'superadmin',
        password: 'rahasia',
        role: 'admin',
      },
    ],
  },
];
