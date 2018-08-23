exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('userdata').del()
    .then(function () {
      // Inserts seed entries
      return knex('userdata').insert([{
          userdata_id: 1,
          user_id: 1,
          emotion: "Amused",
          url: "https://www.cnn.com/2018/08/22/politics/donald-trump-paul-manafort-michael-cohen/index.html",
          title: "12 not-dumb questions about what's next for Cohen, Manafort, Mueller and Trump",
          author: "Chris Cillizza",
          publication: "CNN",
          time: "18:00",
          snippet: "The truth is that between one-time Trump campaign chairman Paul Manafort's conviction on eight charges of financial crimes, former Trump personal lawyer Michael Cohen's plea deal, President Donald Trump's tweets and the ongoing probe into Russian interference being run by Robert Mueller, there are a ton of complex moving parts here.",
          notes: "It's going to be great to see this ship go down in flames"
        },
        {
          userdata_id: 2,
          user_id: 1,
          emotion: "",
          url: "",
          title: "",
          author: "",
          publication: "",
          time: "13:00",
          snippet: "",
          notes: ""
        },
        {
          userdata_id: 3,
          user_id: 1,
          emotion: "",
          url: "",
          title: "",
          author: "",
          publication: "",
          time: "21:55",
          snippet: "",
          notes: ""
        },
      ])
    })
    .then(() => {
      return knex.raw("ALTER SEQUENCE userdata_userdata_id_seq RESTART WITH 3;")
    })
};

//var emotemoods = ["Upset", "Annoyed", "Doubtful", "Nervous/Concerned", "Intrigued", "Motivated", "Amused", "Happy", "Content", "Agreed", "Relaxed", "Chill", "Burnt Out", "Over It", "Disapointed", "Sad"];