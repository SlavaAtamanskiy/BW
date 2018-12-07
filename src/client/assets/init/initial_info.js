let hw_txt = "<p>&nbsp;&nbsp;&nbsp;The importance of hard work cannot be understated for men who seek to control" +
"their own destiny. If are content to merely let life happen to you, then you can" +
"avoid hard work. But if you want to take charge and create a life of your own" +
"desires then you will have to be ready for the challenge.</p>" +
"<p>&nbsp;&nbsp;&nbsp;Every man has two choices in life. On the one hand you can accept the hand" +
 "that you have been dealt and let things happen. On the other hand you can be the" +
 "master of your own life by setting goals and taking steps to achieve them." +
 "In reality you fluctuate between these two extremes all the time, sometimes" +
 "going with the flow and sometimes taking massive strides to achieve an outcome." +
 "The question you have to ask yourself is to which direction do you predominantly" +
 "lean? Do you meander through life most of the time and only occasionally stand up" +
 "and forcibly change direction? Or are you the kind of man who is confident being" +
 "in charge and will make things happen for himself? If you want to achieve anything" +
 "in life the latter is where you need to be. This is where the importance of hard" +
 "work comes into it. If you are not happy to merely drift along with the hand life" +
 "has dealt you then you need to identify the new direction you need to take. You" +
 "must set a goal and then you must work hard to go in that direction and achieve" +
 "the goal. Those men who drift through life are the ones who tend to work boring" +
 "jobs, are overweight, have unfulfilling relationships and stick through it all" +
 "because they lack the willpower to change anything. Those men who value hard work" +
 "are fit, healthy and energetic in life with rewarding careers. This is because" +
 "things didn't just fall into their lap, they set ambitious goals and worked hard" +
 "to achieve them. There is a division in the world between real adults and kidults." +
 "Kidults are lazy and entitled and lead unfulfilling lifes. You want to join the" +
 "ranks of the real adults who know the importance of hard work.</p>" +
 "<p>&nbsp;&nbsp;&nbsp;Hard work is not easy by definition. That is the great thing about it. Weak" +
 "people will give up, while the strong will persevere and reap the rewards." +
 "Challenging yourself with hard work builds discipline, tenacity and character," +
 "which are invaluable traits to have. </p>" +
 "<p>&nbsp;&nbsp;&nbsp;This can be hard physical work or hard mental work. Both build discipline and" +
 "character. You build upon your ability to handle hard work the more you do it" +
 "In this sense it is like a muscle, growing stronger every time it is exercised.</p>" +
 "<p>&nbsp;&nbsp;&nbsp;That is why you should never get lazy in life and should always be challenging" +
 "yourself. It is not the end result that is important. It is the fact that you set" +
 "a goal and worked hard to achieve it by swimming against the tide. When you learn" +
 "how to do that then anything in life becomes possible.</p>";

let news = "<p>&nbsp;&nbsp;&nbsp;Packed with adventure, mystery and thrills, these Halloween stories are great ways to bring the family together over some shared scary fun. For kids, a good Halloween story lets them experience these stories through the characters' eyes, filling in the details of their worlds with their own imaginations. It also introduces children to the downright fun of being scared silly.</p>"+
"<img src='https://raw.githubusercontent.com/SlavaAtamanskiy/Simple-Database/master/src/client/assets/init/images/helloween.jpg' height='350px' width='auto'/>"+
"<p>&nbsp;&nbsp;&nbsp;At one narrative per page, these stories are adapted for young listeners, making them especially great as Halloween party entertainment. Tell these stories aloud and discover the joy of storytelling -- with a scary twist.</p>"+
"<p>&nbsp;&nbsp;&nbsp;The sections below will take you to collections of Halloween stories. Browse through them to rediscover old classics, or find new scary family favorites.</p>"+
"<p>&nbsp;&nbsp;&nbsp;Ghost Stories: Tales of haunted houses, scary spirits -- these spine-tingling stories are tough to beat. In this article, you'll find classic ghost stories from famous authors -- Washington Irving's headless horseman, Mark Twain's Cardiff Giant -- as well as more modern takes on ghosts.</p>"+
"<p>&nbsp;&nbsp;&nbsp;Scary Stories: There's no doubt about it -- these stories are spooky. In this article you'll find classic scary stories from famous authors -- Robert Louis Stevenson's Dr. Jeckyll and Mr. Hyde, Mary Shelley's Frankenstein -- as well as more contemporary tales, all especially adapted for reading aloud to children.</p>"+
"<p>&nbsp;&nbsp;&nbsp;Want more great Halloween ideas? Try these:<ul><li><span><a href='https://entertainment.howstuffworks.com/%27halloween-crafts.htm;%27'>Halloween Crafts</a>: Check out ideas for spooky homemade fun in this article.</span></li><li><span><a href='https://entertainment.howstuffworks.com/%27halloween-decorations.htm%27'>Halloween Decorations</a>: Dress up your home with these great Halloween decoration ideas.</span></li><li><span><a href='https://entertainment.howstuffworks.com/%27kids-halloween-costumes.htm%27'>Kid's Halloween Costumes</a>: Pirate or princess? Cowboy or cat? Find the perfect costume for your kids in this article.</span></li><li><span><a href='https://entertainment.howstuffworks.com/%27halloween-masks.htm%27'>Halloween Masks</a>: No costume is complete without one of these masks.</span></li><li><span><a href='https://people.howstuffworks.com/culture-traditions/holidays-halloween/halloween-games.htm'>Halloween Games</a>: Get the party started with these fun Halloween party games.</span></li><li><span><a href='https://entertainment.howstuffworks.com/%27halloween-recipes.htm%27'>Halloween Recipes</a>: Adults and kids alike will love these tasty treats.</span></li><li><span><a href='https://people.howstuffworks.com/culture-traditions/holidays-halloween/pumpkin-carving-patterns.htm'>Pumpkin Carving Patterns</a>: Get inspired by these great ideas for pumpkin carving.</span></li><li><span><a href='how-to-bake-pumpkin-seeds.htm'>How to Bake Pumpkin Seeds:</a> Learn how to make the ultimate Halloween snack.</span></li><li><span><a href='https://entertainment.howstuffworks.com/%27halloween.htm%27'>How Halloween Works</a>: Our guide to all things Halloween.</span></li></ul></p>";

const initial_data = {
  application_name: "Simple database",
  pages: {
      home: {
          rubrics: [
            {title: "News: Today is Helloween:)", type: "txt", contens: news, color: "orange lighten-2", dark:true},
            {title: "Humor", type: "img", contens: "", images: ["https://raw.githubusercontent.com/SlavaAtamanskiy/Simple-Database/master/src/client/assets/init/images/1.jpg",
                                                                "https://raw.githubusercontent.com/SlavaAtamanskiy/Simple-Database/master/src/client/assets/init/images/2.jpg",
                                                                "https://raw.githubusercontent.com/SlavaAtamanskiy/Simple-Database/master/src/client/assets/init/images/3.gif"],
                                                                color: "green lighten-2", dark:true},
            {title: "Hard work", type: "txt", contens: hw_txt, color: "blue lighten-2", dark:true }
          ]
     }
  }
};

export default initial_data;
