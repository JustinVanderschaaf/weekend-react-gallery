CREATE TABLE gallery (
	id SERIAL,
	path varchar(200),
	description varchar(256),
	likes integer
);

INSERT INTO "gallery" 
	("path", "description", "likes") 
	Values('../images/happy_kitty.jpg', 'what a happy kitty.', 0),
	('../images/grumpy_cat.jpg', 'the grumpiest of cats.', 0 ),
	('../images/kitty_cup.jpg', 'just what i needed in the morning.', 0),
	('../images/sus_dog.jpg', 'Why are you looking at me like that.', 0),
	('../images/happy_dog.jpg', 'What a good day hes having.', 0),
	('../images/pup.jpg', 'Looking a little confident are we?', 0)
	

		test pic
		https://www.msah.com/sites/default/files/very-fat-cat.jpg	  BIG KITTY	