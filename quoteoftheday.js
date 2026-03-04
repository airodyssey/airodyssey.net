const quotesData = `
01;01;Just watch, all of you men. I’ll show you what a woman can do… I’ll go across the country, I’ll race to the moon… I’ll never look back.;Edna Gardner Whyte (about her New Year’s Day 1931 solo flight)
01;02;Flying is the second greatest thrill known to man. Landing is the first!;cliché
01;03;The danger? But danger is one of the attractions of flight.;Jean Conneau (1911)
01;04;There shall be wings! If the accomplishment be not for me, ‘tis for some other. The spirit cannot die and man, who shall know all and shall have wings.;Leonardo da Vinci
01;05;A very friendly boom, like a pair of gleeful handclaps.;Sir James Lighthill, UK government scientific advisor about the Concorde’s supersonic noise profile (1971)
01;06;You can always depend on twin engine aircraft. When the first engine quits the second will surely fly you to the scene of an accident.;cliché
01;07;Every time I fly and am forced to remove my shoes, I’m grateful <a href=https://en.wikipedia.org/wiki/Richard_Reid target=_blank>Richard Reid</a> is not known as the Underwear Bomber.;Douglas Manuel, aerospace executive, about airport security (2003)
01;08;The strength of the turbulence is directly proportional to the temperature of your coffee.;Gunter’s Second Law of Air Travel
01;09;Joey, have you ever been in a Turkish prison?;Captain Oveur, from the 1980 movie <em><a href=/2005/08/movie-airplane.html>Airplane!</a></em>
01;10;You cannot fly like an eagle with the wings of a wren.;William Henry Hudson, 1909, <em>Afoot in England</em>
01;11;The airport runway is the most important main street in any town.; Norm Crabtree, former aviation director for the state of Ohio
01;12;Once you get hooked on the airline business, it’s worse than dope.;Ed Acker, while Chairman of Air Florida
01;13;God, look at that thing! That don’t seem right, does it? That’s not right.;First Officer Roger Pettit, <a href=https://en.wikipedia.org/wiki/Air_Florida_Flight_90 target=_blank>Air Florida flight 90</a> (crashed Jan. 13, 1982)
01;14;Be humble for you are made of earth. Be noble for you are made of stars.;Serbian proverb
01;15;Daddy, the plane turned into a boat.;Sophia Sosa, 4-year-old passenger of <a href=https://en.wikipedia.org/wiki/US_Airways_Flight_1549 target=_blank>US Airways flight 1549</a> after ditching (Jan. 15, 2009)
01;16;The greatest sin of airline management of the last 22 years is to say: ‘It’s all labor’s fault.’;Donald Carty, Chairman and CEO American Airlines (2002)
01;17;This man deserves a medal as big as a frying pan. He has done a fantastic job.;unnamed airport worker, about Capt. Burkill of <a href=https://en.wikipedia.org/wiki/British_Airways_Flight_38 target=_blank>British Airways flight 38</a> (crash landed Jan 17, 2008, no deaths)
01;18;To propel a dirigible balloon through the air is like pushing a candle through a brick wall.;Alberto Santos-Dumont, regarding Zepplin’s Airship  
01;19;That is the trouble with flying: We always have to return to airports. Thank of how much fun flying would be if we didn’t have to return to airports.;Henry Mintzberg, <em>Why I Hate Flying</em>
01;20;So I accept these awards on behalf of the cake bakers and all of those other women who can do some things quite as important, if not more important, than flying;Amelia Earhart  
01;21;The new engines are far quieter than the prototypes, People living near the airports will hardly notice the aircraft.;Henry Marking, British Airways, about the Concorde (1975)
01;22;I decided there must be room for another airline when I spent two days trying to get through to People Express.;Richard Branson, founder of Virgin Atlantic
01;23;I must place on record my regret that the human race ever learned to fly.;Winston Churchill
01;24;Running an airline is like having a baby: fun to conceive, but hell to deliver.;C. E. Woolman, principal founder Delta Air Lines
01;25;If we love to fly so much, how come we’re always in such a hurry to get there?;Louie Manyak
01;26;To be happy in this world, first you need a cell phone and then you need an airplane. Then you’re truly wireless.;Ted Turner
01;27;For my part, I travel not to go anywhere, but to go. I travel for travel’s sake. The great affair is to move.;Robert Louis Stevenson, <em>Travels with a Donkey</em> (1879)
01;28;The miracle is not to fly in the air, or to walk on the water, but to walk on the earth.;Chinese proverb
01;29;A recession is when you have to tighten your belt. Depression is when you have no belt to tighten. When you’ve lost your trousers – you’re in the airline business.;Sir Adam Thomson, founder of British Caledonian Airways
01;30;Facts are the air of scientists. Without them you can never fly.;Ivan Pavlov
01;31;I know of only one bird (the parrot) that talks, and it can’t fly very high.;Wilbur Wright, declining to make a speech (1908)
02;01;A good simulator check ride is like successful surgery on a cadaver.;cliché
02;02;Air Canada. That’s a good name for a Canadian airline.;Johnny Carson (1974)
02;03;I’m flying high and couldn’t be more confident about the future.;Freddie Laker, Laker Airways, 3 days before collapse of Laker Airways (Feb. 3, 1982)
02;04;The weird thing is that I hate to fly, and the quote that I give people is that every time I get off a plane, I view it as a failed suicide attempt.;Barry Sonnenfeld, movie director
02;05;Hell, which as every frequent traveler knows, is in Concourse D of O’Hare Airport.;Dave Barry (There was no concourse D at O’Hare back then)
02;06;About three miles ahead you’ve got traffic 12 o’clock, five miles;actual transmission heard at the O’Hare TRACON
02;07;Terminals have always been, and probably always will be the ‘bottle-necks’ of transportation, whether of ground, water, or air systems.;Harry H. Blee, US Aeronautics Branch, 1932
02;08;Fighter pilots make movies, attack pilots make history.;cliché
02;09;Freddie Laker<br>May be at peace with his Maker. <br>But he is persona non grata<br>With IATA.;Prince Philip, Duke of Edinburgh (Laker died Feb. 9, 2006)
02;10;My wife was a stewardess, flying DC-3’s. That’s how we met. She knew what was going on. So when we got married, I made her a promise – the obvious one. And I’ve kept it.;Capt. Harris, 1970 movie <em><a href=/1999/12/movie-airport.html>Airport</a></em>
02;11;It’s not impacting JetBlue in any meaningful way.; Joanna Geraghty, COO and President JetBlue, regarding COVID-19 (Feb. 11, 2020)
02;12;I did not fully understand the dread term ‘terminal illness’ until I saw Heathrow for myself.;Dennis Potter in <em>The Sunday Times</em> (June 4, 1978)
02;13;If we went into the funeral business, people would stop dying.;Martin R. Shugrue, Vice-chairman Pan Am
02;14;The average pilot, despite the sometimes-swaggering exterior, is very much capable of such feelings as love, affection, intimacy and caring. These feelings just don’t involve anyone else.;cliché (Happy Valentine’s Day!)
02;15;In airplanes you have a choice between chocolate and vanilla. […] I don’t attach any relevance to which one.;Gordon Bethune, as Continental Chairman/CEO, about buying Boeing or Airbus planes
02;16;No one has ever collided with the sky.;cliché
02;17;We’re going to make the best impression on the traveling public, and we’re going to make a pile of extra dough just from being first.;C. R. Smith, on the introduction of the Boeing 707 (1956)
02;18;Engineering is the science of doing things over again.;John E. (Jack) Steiner, chief engineer on the Boeing 727
02;19;A sick customer results in a sick airplane manufacturing industry, whatever the cause may be.;John E. (Jack) Steiner, Boeing Commercial Airplanes
02;20;Always remember you fly an airplane with your head, not your hands.;cliché
02;21;We built a jet airplane to get in and out of a 5,000-ft field. No one believed it could be done.;Joseph Sutter, Boeing Commercial Airplanes on the Boeing 727
02;22;There’s nothing like an airport for bringing you down to earth.;Richard Gordon, English author
02;23;No need to teach an eagle to fly.;Greek proverb
02;24;If you’re faced with a forced landing, fly the thing as far into the crash as possible.;Bob Hoover, American pilot
02;25;An aircraft which is used by wealthy people on their expense accounts, whose fares are subsidized by much poorer taxpayers.;Denis Healey, British Labour Party politician, about the Concorde
02;26;Just remember, if you crash because of weather, your funeral will be held on a sunny day.;Layton A. Bennett, American pilot
02;27;Without fuel, pilots become pedestrians.;cliché
02;28;If you want to travel on the airline system, you give up your privacy. If you want your privacy, don’t fly. Flying is voluntary.;Robert Crandall, former CEO American Airlines (April 2002)
02;29;Better safe than sorry.;19<sup>th</sup> Century proverb
03;01;I think we can build a better plane.;William Boeing, 1914 (phrase later became company’s motto)
03;02;<a href=/1999/12/glossary.html#i>IFR</a>: I Follow Roads.;cliché
03;03;Up in the sky, look! It’s a bird! It’s a plane! It’s Superman!;Narrator, 1941 movie <em>Superman</em>
03;04;Now I know what a dog feels like watching TV.;A DC-9 captain trainee attempting to check out on the ‘glass’ A320
03;05;Flying is not dangerous. Crashing is dangerous.;cliché
03;06;If black boxes survive air crashes – why don’t they make the whole plane out of that stuff?;George Carlin (and <a href=https://www.straightdope.com/21342059/if-aircraft-black-boxes-are-indestructible-why-can-t-the-whole-plane-be-made-from-the-same-material target=_blank>here’s the answer</a>)
03;07;To most people, the sky is the limit. To those who love aviation, the sky is home.;Anonymous
03;08;Women must pay for everything. They do get more glory than men for comparable feats, But, also, women get more notoriety when they crash.;Amelia Earhart (Happy <a href=https://en.wikipedia.org/wiki/International_Women%27s_Day target=_blank>International Women’s Day</a>)
03;09;A commercial aircraft is a vehicle capable of supporting itself aerodynamically and economically at the same time.;William B. Stout, designer of the Ford Tri-Motor
03;10;Most executives don’t have the stomach for this stuff.;Robert W. Baker, American Airlines
03;11;My wings are a thousand books;Gill Robb Wilson, American pilot
03;12;Man’s flight through life is sustained by the power of his knowledge.;Austin ‘Dusty’ Miller, quote on Eagle & Fledgling statue, USAF Academy
03;13;In thrust I trust.;cliché
03;14;Flying a plane is no different from riding a bicycle. It’s just a lot harder to put baseball cards in the spokes.;Capt. Rex Kramer in the 1980 movie <em><a href=/2005/08/movie-airplane.html>Airplane!</a></em>
03;15;Citation 123, if you quit calling me center, I’ll quit calling you twin Cessna.;actual transmission heard at the O’Hare TRACON
03;16;Twenty-five per cent of the passengers of almost any aircraft show white knuckles on take-off.;Sir Colin Marshall, CEO British Airways
03;17;Talking about airplanes is a very pleasant mental disease.;Sergei Sikorsky, <em>AOPA Pilot</em> magazine (2003)
03;18;Motor cut. Forced landing. Hit cow. Cow died. Scared me.;Dean Smith, telegraph to his chief, quoted by Amelia Earhart, <em>The Fun of It</em> (1932)
03;19;The whole history of the Canadian North can be divided into two periods – before and after the aeroplane.;Hugh L. Keenleyside, Deputy Canadian Minister of Mines and Resources (1949)
03;20;Words are heavy like rocks. They weigh you down. If birds could talk, they wouldn’t be able to fly.;Marilyn, from the TV show <em>Northern Exposure</em>
03;21;The state of our airline industry is a national embarrassment.;Tom Plaskett, Chairman Pan Am, following the airline’s collapse
03;22;Why is it turning?… Yes it is.;Eldar Kudrinsky, 15-year-old son of the captain of <a href=https://en.wikipedia.org/wiki/Aeroflot_Flight_593 target=_blank>Aeroflot flight 593</a> (crashed Mar. 22, 1994)
03;23;Simplicate and Add Lightness;design philosophy of Ed Heinemann, Douglas Aircraft
03;24;A free ride and free food are two of the three things no pilot ever turns down.;Dick Rutan
03;25;You little fool! Don’t you know it is even dangerous to look at an airplane?;Gunner Morris, advice to Ann Barton, 1938 movie <em>Test Pilot</em>
03;26;For a plane to fly well, it must be beautiful.;Marcel Dassault, founder of Dassault Aviation
03;27;Did he not clear the runway, that Pan American?;Flight engineer William Schreuder, KLM (shortly before the <a href=https://en.wikipedia.org/wiki/Tenerife_airport_disaster>Tenerife collision</a>, Mar. 27, 1977)
03;28;You can be in London at 10 o’clock and in New York at 10 o’clock. I have never found another way of being in two places at once.;Sir David Frost, British journalist and Concorde regular
03;29;I didn’t start out to chart the skies: it’s just no one had done it before.;E. B. Jeppesen, founder of namesake company of aviation charts
03;30;Aviation is for grown men, alert, strong and above all capable of endurance.;Charles Turner, holder of many early aviation records
03;31;Oh no, it wasn’t the aeroplanes. It was Beauty killed the Beast.;James Creelman, Final words of 1933 movie <em>King Kong</em>
04;01;He bores me. He ought to have stuck to his flying machine.;Pierre Auguste Renoir, about Leonardo da Vinci
04;02;The bulk of mankind is as well equipped for flying as thinking.;Jonathan Swift, Anglo-English writer
04;03;In the Alaska bush I’d rather have a two-hour bladder and three hours of gas than vice versa.;Kurt Wien, American bush pilot
04;04;Real planes use only a single stick to fly. This is why bulldozers & helicopters – in that order – need two.;Paul Slattery
04;05;Somebody said that carrier pilots were the best in the world, and they must be or there wouldn’t be any of them left alive.;Ernie Pyle
04;06;Nothing said I had to crash.;R.A. Bob Hoover, after hitting a telephone wire and losing two feet of wing in his P-51
04;07;Any damned fool can criticize, but it takes a genius to design it in the first place.;Edgar Schmued, Chief Designer, North American Aviation
04;08;Hold fast to dreams, for if dreams die life is a broken winged bird that cannot fly.;Langston Hughes, American poet
04;09;You’re gonna have to key the mike. I can’t see you when you nod your head.;actual transmission heard at the O’Hare TRACON
04;10;If back then, we knew everything we know now, we would have made different decisions.;Dennis Muilenburg, CEO of Boeing to the U.S. Congress about the 737 MAX
04;11;Do you hear the rain? Do you hear the rain?;Jessica Dubroff, 7-year-old pilot (shortly before crashing Apr. 11, 1996)
04;12;There is no flying without wings.;French proverb
04;13;If the Wright brothers were alive today, Wilbur would have to fire Orville to reduce costs.;Herb Kelleher, Southwest Airlines (1994)
04;14;There are many excellent pilots who would rather do anything than land a private airplane at Newark, Cleveland, or Chicago.;<em>Aviation</em> magazine (August 1935)
04;15;It doesn’t do any good to stand on the airplane’s brakes when you’re already on your back!;Rex Thorp
04;16;We hope you enjoy the rest of your flight. By the way, is there anyone on board who knows how to fly a plane?;Passenger announcement in the 1980 movie <em><a href=/2005/08/movie-airplane.html>Airplane!</a></em>
04;17;The Wright brothers’ design allowed them to survive long enough to learn how to fly.;Michael Potts, spokesman, Beech Aircraft, <em>New York Times</em> (1984)
04;18;We have no effective screening methods to make sure pilots are sane.;Dr. Herbert Haynes, Federal Aviation Authority
04;19;The odds against there being a bomb on a plane are a million to one, and against two bombs a million times a million to one. Next time you fly, cut the odds and take a bomb.;Benny Hill (died Apr. 19, 1992)
04;20;If it ain’t broke, don’t fix it. If it ain’t fixed, don’t fly it.;cliché
04;21;What’s the hurry? Are you afraid I won’t come back?;Manfred von Richthofen, ‘The Red Baron’ (last words, when being asked for autograph Apr. 21, 1918)
04;22;Both optimists and pessimists contribute to the society. The optimist invents the aeroplane, the pessimist the parachute.;George Bernard Shaw
04;23;If God wanted us to fly, He would have given us tickets.;Mel Brooks
04;24;Flying an aeroplane with only a single propeller to keep you in the air. Can you imagine that?;Capt. Picard, <em>Star Trek: The Next Generation</em>, ep. ‘Booby Trap’
04;25;I’ve flown every seat on this airplane. Can someone tell me why the other two are always occupied by idiots?;Don Taylor
04;26;First, listen to the question the student asked, then listen to the question he didn’t ask and then figure out the question he really meant to ask.;Tom Coutch, FAA
04;27;The scientific theory I like best is that the rings of Saturn are composed entirely of lost airline luggage.;Mark Russell, American comedian
04;28;If God had intended man to fly, He would not have invented Spanish Air Traffic Control.;Lister, BBC TV series <em>Red Dwarf</em>
04;29;I have been luckier than the law of averages should allow. I could never be so lucky again.;Jimmy Doolittle, autobiography, <em>I Could Never Be So Lucky Again</em> (1991)
04;30;The greatest advance in aviation since the Wright Brothers.;<em>New York Times</em>, 1961, about Eastern Air Shuttle between New York and Washington (inaugural flight Apr. 30, 1961)
05;01;Air Force One, I told you to expedite;actual transmission heard at the O’Hare TRACON
05;02;Not the cry, but the flight of the wild duck, leads the flock to fly and follow.;Chinese proverb
05;03;Every other start-up wants to be another United or Delta or American. We just want to get rich.;Robert Priddy, CEO ValuJet (1996)
05;04;Although powered aircraft may express the language of flight, soaring is its eloquence.;Richard Miller (1967)
05;05;If you want to &%#$ with the eagles, you have to learn to fly.;Veronica in the 1989 movie <em>Heathers</em>
05;06;There are only two emotions in a plane: boredom and terror.;Orson Welles, interview to celebrate his 70<sup>th</sup> birthday, <em>The Times</em> (1985)
05;07;And this, ladies and gentlemen, is the very first Fokker airplane built in the world. The Dutch call it the mother Fokker.;Custodian at Aviodome aviation museum, Schiphol airport
05;08;When asked by someone how much money flying takes: Why, all of it!;Gordon Baxter, Texas radio personality
05;09;I don’t like flying because I’m afraid of crashing into a large mountain. I don’t think Dramamine is going to help.;Kaffie, 1992 movie <em>A Few Good Men</em>
05;10;A terminal forecast is a horoscope with numbers.;cliché
05;11;Critter 592, we need the, uh, closest airport available.;First Officer Richard Hazen, <a href=https://en.wikipedia.org/wiki/ValuJet_Flight_592 target=_blank>ValuJet flight 592</a> (last recorded words before crashing into Everglades May 11, 1996)
05;12;No one expects Braniff to go broke. No major U.S. carrier ever has.;<em>The Wall Street Journal</em>, July 30, 1980 (Braniff International Airways ceased operations May 12, 1982)
05;13;Flight Reservation Systems decide whether or not you exist. If your information isn’t in their database, then you simply don’t get to go anywhere.;Arthur Miller, American actor and writer
05;14;Airplane travel is nature’s way of making you look like your passport photo.;Al Gore
05;15;People think it would be fun to be a bird because you could fly. But they forget the negative side, which is the preening.;Jack Handey, <em>Deep Thoughts from Saturday Night Live</em>
05;16;To me, an airplane is a great place to diet;Wolfgang Puck
05;17;If God had really intended men to fly, He’d make it easier to get to the airport.;George Winters
05;18;Flying around the world is like raising kids. When you’ve finally figured out how to do it the right way, you’ve finished.;Ron Bower, flew around the world solo in helicopter
05;19;There are only two reasons to sit in the back row of an airplane: either you have diarrhea, or you’re anxious to meet people who do.;Henry Kissinger
05;20;Be Luke Skywalker, not Darth Vader. Ultimately love is stronger than evil.;Donald Burr, founder of People Express
05;21;It takes nerves of steel to stay neurotic.;Herb Kelleher, co-founder Southwest Airlines
05;22;If you push the stick forward, the houses get bigger, if you pull the stick back, they get smaller.;cliché
05;23;It’s not a testosterone-driven industry any longer. Success is making money, not in the size of the airline.;Gordon Bethune,Chairman/CEO Continental Airlines (1996)
05;24;It’s either expensive or it’s crappy.;JetBlue spokesman about airline food, <em>New York Times</em> (2002)
05;25;Providence has given to the French the empire of the land, to the English that of the sea, and to the Germans that of the air.;Jean Paul Richter, quoted by Thomas Carlyle, <em>Edinburgh Review</em> (1827)
05;26;Reverser’s deployed!;First Officer Josef Thurner, <a href=https://en.wikipedia.org/wiki/Lauda_Air_Flight_004 target=_blank>Lauda Air flight 004</a> (last recorded words, crashed May 26, 1991)
05;27;Nothing flies without fuel, so let’s start with some coffee.;cliché
05;28;The most dangerous thing about flying is the risk of starving to death.;Dick Depew, American pilot
05;29;Its operation in a world beset by fuel and energy crises makes no sense at all.;Senator Cranston of California, about the Concorde (1974)
05;30;We are pleased we haven’t got one on order. It’s too big an aircraft.;Willie Walsh, CEO British Airways, about the A380 (2005)
05;31;Bankruptcy as a solution in kind of un-American.;Tom Horton, CFO American Airlines (2006)
06;01;It was the first airplane… that could make money just by hauling passengers.;C. R. Smith, president American Airlines, about the DC-3
06;02;It is a magic aircraft… the pleasure of flying in it is almost a carnal one.;Joelle Cornet-Templet, Air France chief flight attendant about the Concorde
06;03;Put your compass on ‘E’ and get out of my airspace.;actual transmission heard at the O’Hare TRACON
06;04;This book is dedicated to all those who fell by the airside, for nothing is wasted, and every apparent failure is but a challenge to others.;Dedication to <em>Sky Roads of the World</em>, Amy Johnson (1939)
06;05;It only takes five years to go from rumor to standard operating procedure.;Dick Markgraf
06;06;The quality of food is in inverse proportion to a dining room’s altitude, especially atop bank and hotel buildings (airplanes are an extreme example).;Bryan Miller, <em>New York Times</em> restaurant critic
06;07;Aviate, Navigate, Communicate.;cliché
06;08;It can hardly be a coincidence that no language on Earth has ever produced the phrase, ‘as pretty as an airport.’ Airports are ugly. Some are very ugly. Some attain a degree of ugliness that can only be the result of a special effort.;Douglas Adams, <em>The Long Dark Tea-Time of the Soul</em>
06;09;Americans have an abiding belief in their ability to control reality by purely material means: airline insurance replaces the fear of death with the comforting prospect of cash.;Cecil Beaton, <em>It Gives Me Great Pleasure</em> (1955)
06;10;In a sense, when we started Virgin Atlantic, I was trying to create an airline for myself. If you try to build the perfect airline for yourself, it will be appreciated by others.;Richard Branson (1996)
06;11;Those were my children being slaughtered.;Donald Burr, on the death of People Express
06;12;The Wright Amendment is a pain in the ass, but not every pain in the ass is a constitutional infringement.;Herb Kelleher, CEO Southwest Airlines
06;13;The Boeing 747 is the commuter train of the global village.;H. Tennekes, <em>The Simple Science of Flight</em> (1996)
06;14;I don’t mind flying. I always pass out before the plane leaves the ground.;Naomi Campbell, supermodel (2000)
06;15;The air is the only place free from prejudices.;Bessie Coleman (became first African-American plane pilot June 15, 1921)
06;16;Remember the first principle of wing walking. Don’t let go of something unless you have a firm grip of something else.;Dick Truly, NASA administrator (2003)
06;17;Work hard, fly hard, play hard, and stay…;cliché
06;18;We have clearance, Clarence./<br>Roger, Roger. What’s our vector, Victor?;Flight crew in the 1980 movie <em><a href=/2005/08/movie-airplane.html>Airplane!</a></em>
06;19;I have to say that flying on Air Force One sort of spoils you for coach on a regular airline.;U.S. president Ronald Reagan
06;20;I’ve said many times that I’d be thrilled to sell the airline to the employees and our guys said no, we’ll take all the money, anyway.;Robert L. Crandall, former president/chairman American Airlines (1997)
06;21;Whenever competition is feasible it is, for all its imperfections, superior to regulation as a means of serving the public interest.;Alfred Kahn, airline economist and chairman CAB
06;22;Think and act big and grow smaller, or think and act small and grow bigger.;Herb Kelleher, co-founder Southwest Airlines
06;23;Anything that is white is sweet. Anything that is brown is meat. Anything that is grey, don’t eat.;Stephen Sondheim, about airline food, <em>Do I hear a Waltz</em> (1965)
06;24;Ladies and gentleman, this is your captain speaking. We have a small problem. All 4 engines have stopped. We are doing our damnedest to get them going again. I trust you are not in too much distress.;Capt. Eric Moody, <a href=https://en.wikipedia.org/wiki/British_Airways_Flight_009>British Airways flight 009</a> (landed safely June 24, 1982)
06;25;Trust your captain …. but keep your seatbelt securely fastened.;cliché
06;26;Yes – don’t worry;Capt. Michel Asseline, <a href=https://en.wikipedia.org/wiki/Air_France_Flight_296Q target=_blank>Air France flight 296Q</a> (last words, in response to copilot’s concern, crashed June 26, 1988)
06;27;Code-sharing, alliances, and connections are all about ‘how do we screw the poor customer for more money?’;Michael O’Leary, Ryanair (2002)
06;28;I really don’t know one plane from the other. To me they are just marginal costs with wings.;Alfred Kahn, American economist (1977)
06;29;If you are in trouble anywhere in the world, an airplane can fly over and drop flowers, but a helicopter can land and save your life.;Igor Sikorsky, American aviator (1947)
06;30;I do not think that a flight across the Atlantic will be made in our time, and in our time, I include the youngest readers.;Charles Stewart Rolls, co-founder of Rolls-Royce Ltd. (circa 1908)
07;01;Experience is a hard teacher. First comes the test, then the lesson.;cliché
07;02;Thank God men cannot as yet fly and lay waste the sky as well as the earth!;Henry David Thoreau, American poet
07;03;MidEx 726, sorry about that. […] Just sit back, relax and pass out some more cookies. We’ll get you to Milwaukee.;actual transmission heard at the O’Hare TRACON (MidEx or Midwest Airlines was known for its chocolate-chip cookies)
07;04;Some fear flutter because they do not understand it. And some fear it because they do.;Theodore von Karman, aerodynamicist
07;05;Airspeed, altitude, or brains: you always need at least two.;cliché
07;06;In America there are two classes of travel: first class, and with children.;Robert Benchley, American humorist
07;07;It seems to me that the conquest of the air is the only major task for our generation.;T.E. Lawrence, British army officer
07;08;There is an art… to flying. The knack lies in learning how to throw yourself at the ground and miss.;Douglas Adams, <em>The Hitchhiker’s Guide to the Galaxy</em> (<a href=http://www.skygod.com/quotes/hitchhikers.html>full quote</a>)
07;09;People think it would be fun to be a bird because you could fly. But they forget the negative side, which is the preening.;Jack Handey, <em>Deep Thoughts from Saturday Night Live</em>
07;10;Instrument flying is an unnatural act probably punishable by God.;Gordon Baxter, Texas radio personality
07;11;If Beethoven had been killed in a plane crash at the age of 22, it would have changed the history of music… and of aviation.;Tom Stoppard, British playwright
07;12;Because I fly, I envy no man on earth.;Grover C. Norwood, USAF Pilot, poem <em>Because I Fly</em>
07;13;There are no practical alternatives to air transportation.;Daniel S. Goldin, NASA Administrator (1997)
07;14;The trouble with predators is that they don’t know who’s the prey – until he’s dead.;Sir Freddie Laker, founder Laker Airways
07;15;It’s like telling Mozart that there are too many notes in an opera. Which one do you want us to take out?;Gordon Bethune, Chairman Continental Airlines, about U.S. government saying carriers schedule too many flights (2002)
07;16;Leave five on the glide, have a nice ride, tower inside, twenty-six nine …. see ya!;actual transmission heard at the O’Hare TRACON
07;17;Where the water meets the sky, it was just fire.;Jarreau Israel, eyewitness to the crash of <a href=https://en.wikipedia.org/wiki/TWA_Flight_800 target=_blank>TWA flight 800</a> (July 17, 1996)
07;18;Just got in from New York, where am I? I intended to fly to California.;Douglas ‘Wrong Way’ Corrigan, upon arrival in Ireland (July 18, 1938)
07;19;Seagulls… slim yachts of the element.;Robinson Jeffers, American poet
07;20;If anybody ever flied to the Moon, the very next day Trippe will ask the Civil Aeronautics Board to authorize regular service.;James M. Landis (first moon landing happened July 20, 1969)
07;21;Americans love rising-from-the-ashes stories. They love the underdog coming back. We’re going to take a tarnished brand name and bring it back to a high degree of luster.;Martin R. Shugrue Jr., President-CEO Pan Am (1996)
07;22;I think the least likely thing […] is mechanical. I mean, that’s just common sense.;James Kallstrom, chief of the FBI investigation of <a href=https://en.wikipedia.org/wiki/TWA_Flight_800 target=_blank>TWA flight 800</a> (1996)
07;23;I wanted to soar through the air.;Yuji Nishizawa, after hijacking <a href=https://en.wikipedia.org/wiki/All_Nippon_Airways_Flight_61 target=_blank>ANA flight 61</a> and killing the captain to fly the plane himself (July 23, 1999)
07;24;The nicer an airplane looks, the better it flies.;cliché
07;25;Too late. No time, no.;Capt. Christian Marty, <a href=https://en.wikipedia.org/wiki/Air_France_Flight_4590 target=_blank>Air France flight 4590</a> Concorde (last recorded words after ATC warned him of fire July 25, 2000)
07;26;Without doubt, Concorde died yesterday at the age of 31. All that will remain is the myth of a beautiful white bird.;<em>Le Figaro</em> editorial, following crash of <a href=https://en.wikipedia.org/wiki/Air_France_Flight_4590 target=_blank>Air France flight 4590</a>
07;27;It is clear to us all that a tyre burst alone should never cause a loss of a public-transport aircraft.;Sir Malcolm Field, head of Britain’s Civil Aviation Authority, about Concorde (2000)
07;28;If you want more room Captain, push your seat back.;actual transmission heard at the O’Hare TRACON
07;29;The three worst things to hear in the cockpit: The second officer says, ‘Oh shit!’ The first officer says, ‘I have an idea!’ The captain say, ‘Hey, watch this!’;anonymous
07;30;Say, what’s a mountain goat doing way up here in a cloud bank?;Pilot in a <a href=http://2.bp.blogspot.com/_eimKP-f8QwA/SIfRbFHcRbI/AAAAAAAAALs/CBhlMAdrC1M/s1600-h/FarSide+1-14.jpg><em>Far Side</em> cartoon</a> by Gary Larson
07;31;Angels can fly because they take themselves lightly.;G.K. Chesteron, <em>Orthodoxy</em> (1908)
08;01;If a woman wants to fly, first of all she must, of course, abandon skirts and don a knickerbocker uniform.;Harriet Quimby (became the first woman in the U.S. to receive a pilot’s license on Aug. 1, 1911)
08;02;But flies an eagle flight, bold and forth on, Leaving no tract behind.;William Shakespeare, <em>Timon of Athens</em>, Act i. Sc. 1.
08;03;When asked ‘How was your flight?’ Well, aeronautically it was a great success. Socially it left quite a bit to be desired.;Noël Coward, English playwright
08;04;Heavier-than-air flying machines are impossible.;Lord Kelvin, President of the Royal Society (1895)
08;05;I know, but this guy doing the flying has no airline experience at all. He’s a menace to himself and everything else in the air… Yes, birds too.;Controller in the 1980 movie <em><a href=/2005/08/movie-airplane.html>Airplane!</a></em>
08;06;Aerial flight is one of that class of problems with which man will never be able to cope.;Simon Newcomb, Canadian astronomer (1903)
08;07;This is one hell of a good deal for United Airlines.;Richard Ferris, Chairman United Airlines, after buying Pan Am’s Far East route network
08;08;Listen up gentlemen, or something’s gonna happen that none of us wants to see.;actual transmission heard at the O’Hare TRACON
08;09;Kansas City Center, this is Air Force One. Would you please change our call sign to SAM 27000.;Col. R. Albertazzie, following Richard Nixon’s resignation (Aug. 9 1974)
08;10;Opfer müssen gebracht werden. (Sacrifices must be made.);Otto Lilienthal, German aviation pioneer (died Aug. 10, 1896)
08;11;An airplane may disappoint a good pilot, but it won’t surprise him.;cliché
08;12;Do you know how much faster I can fix an airplane when I want to fix it than when I don’t want to fix it?;Gordon Bethune, Chairman Continental Airlines (2002)
08;13;There is no other airport in the world which serves so many people and so many airplanes. This is an extraordinary airport. It could be classed as one of the wonders of the modern world.;President John F. Kennedy when dedicating O’Hare Airport (1963)
08;14;When thou seest an eagle, thou seest a portion of genius. Lift up thy head!;William Blake, English poet
08;15;First Europe, and then the globe, will be linked by flight, and nations so knit together that they will grow to be next-door neighbors. […] What railways have done for nations, airways will do for the world.;Claude Grahame-White, English aviation pioneer (1914)
08;16;You cannot get one nickel for commercial flying.;Inglis M. Uppercu, founder of the first American airline to last more than a couple of months, Aeromarine West Indies Airways (1923)
08;17;More than any other sphere of activity, aerospace is a test of strength between states, in which each participant deploys his technical and political forces.;French Government report (1977)
08;18;It is obvious we are fighting for the Air France Group. But in actual fact, we are also fighting for France.;Christian Blanc, Chairman Air France (1996)
08;19;If we did not have such a thing as an airplane today, we would probably create something the size of NASA to make one.;H. Ross Perot, American businessman
08;20;For those of us who live in the shadow of this noisy monster, there aren’t too many of us who are sorry to see it go.;Anthony D. Weiner, Congressman for the 9<sup>th</sup> district of New York about Concorde
08;21;I don’t believe in being the launch customer for anything.;Carl Michel, commercial director British Airways, about Airbus A380 (then known as A3XX, February 2000)
08;22;If the pilots were in charge, Columbus would still be in port. They believe the assertion that the world is flat.;Robert L. Crandall, former President/Chairman American Airlines (1993)
08;23;Every time we hit an air pocket and the plane dropped about five hundred feet (leaving my stomach in my mouth) I vowed to give up sex, bacon, and air travel if I ever made it back to terra firma in one piece.;Erica Jong, <em>Fear of Flying</em> (1973)
08;24;I mean, they get paid an awful lot of money. The only good thing about them is they can’t work after they’re 60.;Judge Prudence Carter Beatty, about Delta Air Lines pilots (2005)
08;25;The aeroplane is tragically unsuited for ocean service.;Dr. Hugo Eckener, airship advocate (1926)
08;26;If I take the wings of the morning, and dwell in the innermost parts of the sea.;gravestone of Charles Lindbergh (died Aug. 26, 1974)
08;27;The drooping grandmothers, the crying babies, the continuous, raucous, unintelligible squawk of the loudspeaker, the constant push and jostle of new arrivals make bus terminals look like luxury.;<em>Fortune</em> magazine (1946)
08;28;Speed is life, altitude is life insurance.;cliché
08;29;I can’t imagine a set of circumstances that would produce Chapter 11 for Eastern.;Frank Lorenzo, president-CEO Eastern Air Lines (it did file for bankruptcy in 1989)
08;30;As a businessman, Frank Lorenzo gives capitalism a bad name.;William F. Buckley
08;31;That’s the best way to cross the Atlantic.;Sir Arthur Whitten Brown, first nonstop across the Atlantic, upon landing (June 15, 1919)
09;01;British Airways believes that it is intrinsically deceptive for two carriers to share a designator code.;British Airways, comment on PDSR-85, Notice of Proposed Rulemaking, Docket 42199 (1984)
09;02;And we are declaring emergency now, Swissair 111;Crew of <a href=https://en.wikipedia.org/wiki/Swissair_Flight_111 target=_blank>Swissair flight 111</a> (last recorded words before crashing Sep. 2, 1998)
09;03;Air Force 45, it appears your engine has… oh, disregard… I see you’ve already ejected.;actual transmission heard at the O’Hare TRACON
09;04;Chicks dig us, and guys think we’re cool.;Tom Krizek, airline captain
09;05;He’s a nut job, but a focused nut job.;Robert Land, JetBlue government affairs director, about boss David Neeleman (2001)
09;06;Think ahead of your airplane.;cliché
09;07;Heathrow has been described as the only building site to have its own airport.;anonymous
09;08;If Richard Branson had worn a pair of steel-rimmed glasses, a double-breasted suit and shaved off his beard, I would have taken him seriously. As it was I couldn’t.;Lord King, Chairman British Airways
09;09;Yes I will succeed and I’ll make some money, unless I break my neck.;Eugène Lefebvre (shortly before fatal crash, Sep. 9 1909)
09;10;I didn’t start the business to make a pile of money. I did it to preserve myself for old age.;E. B. Jeppesen, founder of namesake company of aviation charts
09;11;Are you guys ready? Let’s roll.;Todd Beamer, passenger, <a href=https://en.wikipedia.org/wiki/United_Airlines_Flight_93 target=_blank>United flight 93</a>
09;12;I knew he wasn’t real pilot material. He had actually studied his manuals and didn’t talk about girls.;Flight Instructor Clancy Prevost, about Zacarias Moussaoui, alleged ‘20<sup>th</sup> hijacker’ on 9/11 (2002
09;13;What’s the sense of sending $2 million missiles to hit a $10 tent that’s empty?;President George W. Bush, Oval Office meeting (Sep. 13 2001)
09;14;dear captain, […] I think your plane is good. thanks for a nice flight dont &#$% up the landing [sic];purported letter of 8-year old passenger
09;15;The ships hung in the sky in much the same way that bricks don’t.;Douglas Adams, <em>The Hitchhiker’s Guide to the Galaxy</em>
09;16;If God had meant Icarus to fly, she would have given him a cloudy day.;Leon M. Wise
09;17;In the space age, man will be able to go around the world in two hours: one hour for flying and one hour to get to the airport.;Neil McElroy, <em>Look</em> (1958)
09;18;Where am I?;Charles A. Lindbergh, upon arrival in Paris
09;19;Much talking is the cause of danger. Silence is the means of avoiding misfortune. The talkative parrot is shut up in a cage. Other birds, without speech, fly freely about.;Sakya Pandita, spiritual leader 12<sup>th</sup> century
09;20;The thing I miss about Air Force One is they don’t lose my luggage.;George H.W. Bush, U.S. President
09;21;It is far better to arrive late in this world than early in the next.;cliché
09;22;Flight by machines heavier than air is unpractical and insignificant, if not utterly impossible.;Simon Newcomb (1902)
09;23;I happened to be the man on the spot, but any of the rest of the fellows would have done what I did.;Jack Knight, first night mail flight, which was part of a record-setting transcontinental airmail relay
09;24;The world is divided into two kind of people: normal, intelligent, sensitive people with some breadth of imagination, and people who aren’t the least bit afraid of flying.;Layne Ridley, <em>White Knuckles</em> (1987)
09;25;Ma, I love yah.;unidentified flight deck person, <a href=https://en.wikipedia.org/wiki/Pacific_Southwest_Airlines_Flight_182 target=_blank>PSA flight 182</a> (last recorded words, crashed Sep. 25, 1978)
09;26;After the ship has sunk, everyone knows how she might have been saved.;Italian proverb
09;27;Arriba, siempre arriba. (Higher, ever higher.);Jorge Chavez, Peruvian aviator (last words after crashing Sep. 27, 1910)
09;28;We are long-term players in the industry. We’re not just crazy and emotional. We try to be logical business managers.;Frank Lorenzo
09;29;Buttons: check. Dials: check. Switches: check. Little colored lights: check.;Calvin, of Bill Waterson comic <em>Calvin and Hobbes</em>
09;30;The present generation will not [fly], and no practical engineer would devote himself to the problem now.;Worby Beaumont, engineer, when asked if man will fly in the next century (1900)
10;01;This entire industry is in a death spiral, including this company, and I can’t get us out of it. Deregulation is an abysmal failure and we have no more furniture left to burn.;Bruce Lakefield, CEO US Airways, while between bankruptcies and before takeover by America West (2004)
10;02;If God had meant man to fly, He would never have given us the steam railway locomotive.;a Great Aviation Quotes reader’s late great aunt
10;03;This machine was a failure to the extent that it could not fly. In other respects it was a very important and necessary stepping stone.;Igor Sikorsky, about the first helicopter (built 1909)
10;04;People Express is clearly the archetypical deregulation success story and the most spectacular of my babies. It is the case that makes me the proudest.;Prof. Alfred Kahn, Cornell University (1986)
10;05;If helicopters are so safe, how come there are no vintage/classic helicopter fly-ins?;anonymous
10;06;My first wife didn’t like to fly, either.;Gordon Baxter, Texas radio personality
10;07;As of 1992, in fact—though the picture would have improved since then—the money that had been made since the dawn of aviation by all of this country’s airline companies was zero. Absolutely zero.;Warren Buffett, billionaire investor (1999)
10;08;The aeroplane will never fly.;Lord Haldane, Minister of War, Britain, 1907 (…and the Wright Brothers first flew in 1903)
10;09;If you would look up bad labor relations in the dictionary, you would have an American Airlines logo beside it.;US District Judge Joe Kendall, issuing restraining order against American Airlines APA pilot union sick out (1999)
10;10;Where did you get your eyes so blue? Out of the sky as I came through.;George MacDonald, <em>At The Back Of The North Wind</em>
10;11;Fly and you will catch the swallow.;James Howell, <em>Proverbs</em> (1659)
10;12;Hey, O’Hare, you see the 7600 code [radio failure] flashing five northwest of Gary? – Yeah, I do…you guys talkin’ to him?;actual transmission heard at the O’Hare TRACON (7600 means radio failure)
10;13;Flying is not Nintendo. You don’t push a button and start over.;cliché
10;14;If I were reincarnated, I’d want to come back a buzzard. Nothing hates him or envies him or wants him or needs him. He is never bothered or in danger, and he can eat anything.;William Faulkner (1958)
10;15;It’s better to be down here wishing you were up there, than to be up there wishing you were down here.;cliché
10;16;When the weight of the paper equals the weight of the airplane, only then you can go flying.;Donald Douglas
10;17;I never got a lot done using a broomstick. You’ve got to have something that’s lethal.;Montana Senator Conrad Burns, about U.S. Senate approving guns in cockpits (2002)
10;18;In the early days it was fun to fly. You could soar over rooftops and trees, or drop down to meet a passing train and wave at the engineer. The whole sky belonged to you. now there are so many regulations. The sky is crowded. All the fun is gone.;Katherine Stinson, American aviation pioneer
10;19;A little mountain will kill you just as dead as a big one if you fly into it.;Stephen Coonts
10;20;It [flying] is not a bad sport, but there’s no place to go.;Glenn H. Curtiss, American aviation pioneer (1907)
10;21;’Ice’ was a four-letter word to ATR pilots.;Stephen Fredrick, <em>Unheeded Warning: The Inside Story of <a href=https://en.wikipedia.org/wiki/American_Eagle_Flight_4184 target=_blank>American Eagle flight 4184</a></em>
10;22;II just whip out my blue card with a hole in it and read what it says: ‘When color of card matches color of sky, FLY!’;Gordon Baxter, Texas radio personality, in response to how he checked the weather
10;23;I was engaged in what I believe to be the most thrilling industry in the world: aviation. My heart still leaps when I see a tiny two-seater plane soaring gracefully through the sky.;William A. Patterson, CEO United Airlines
10;24;Total deregulation would allow anybody to fly any route, a situation that is unlikely ever to occur.;<em>New York Times Magazine</em>, 1976 (and the Airline Deregulation Act did it on Oct. 24, 1978)
10;25;Deregulation will be the greatest thing to happen to the airlines since the jet engine.;Richard Ferris, CEO United Airlines (1976)
10;26;Aviation records don’t fall until someone is willing to mortgage the present for the future.;Amelia Earhart
10;27;The more I fly, the more I’m convinced that the true wonder of modern aviation is the transformation of tasteless particles into something known as airplane food.;Bob Blummer, <em>The Surreal Gourmet</em>
10;28;I didn’t take this job to preside over a bankruptcy. I refuse to accept that United Airlines is collateral damage from September 11.;Jack Creighton, new chairman and CEO of UAL Corp. (Oct. 28, 2001)
10;29;It only takes two things to fly, airspeed and money.;cliché
10;30;Out of this nettle, danger, we pluck this flower, safety.;William Shakespeare, <em>King Henry the Fourth</em>, Part One
10;31;What’s happening, Gamil? What’s happening? What is this? What is this? Did you shut the engines? Pull. Pull with me. Pull with me. Pull with me.;Capt. Ahmed Mahmoud El Habashy, <a href=https://en.wikipedia.org/wiki/EgyptAir_Flight_990>EgyptAir flight 990</a> (crashed Oct. 31, 1999)
11;01;The airlines spell safety with a dollar sign and the FAA practices regulation by death.;Patricia Robertson Miller, <em>Chicago Sun-Times</em> (1979)
11;02;I put the sweat of my life into this project, and if it’s a failure, I’ll leave the country and never come back.;Howard Hughes, about the <a href=https://en.wikipedia.org/wiki/Hughes_H-4_Hercules>Spruce Goose</a> (<sup>1st<sup> flight Nov 2 1947)
11;03;The bald eagle […] is a bird of bad character […], generally poor, and often very lousy. The turkey is a much more respectable bird, and withal a true original native of America.;Benjamin Franklin, regarding the choice for the bird of the USA
11;04;Eagles may soar, but weasels never get sucked into jet air intakes;anonymous
11;05;There are a lot of different parts of this airplane in a lot of different places.;Todd Inman, NTSB after the crash of <a href=https://en.wikipedia.org/wiki/UPS_Airlines_Flight_2976 target=_blank>UPS flight 2976</a> (Nov. 5, 2025)
11;06;No flying machine will ever fly from New York to Paris [because] no known motor can run at the requisite speed for four days without stopping.;Orville Wright (circa 1908)
11;07;This is earth again, the earth where I’ve lived and now will live once more. I’ve been to eternity and back. I know how the dead would feel to live again.;Charles Lindbergh, on sighting Ireland after solo Atlantic crossing
11;08;When the art of radio communication between pilots and ATC is improved, the result will be vastly increased areas of significant misunderstandings.;Robert Livingston, <em>Flying The Aeronca</em>
11;09;Climb like you’re life depends on it… because it does.;actual transmission heard at the O’Hare TRACON
11;10;We have to make you think it’s an important seat – because you’re in it.;Donald Burr, founder of People Express
11;11;There are pilots and there are pilots: with the good ones, it is inborn. You can’t teach it. If you are a fighter pilot, you have to be willing to take risks.;General Robin Olds, USAF (Happy Remembrance Day)
11;12;Hang onto it. Hang onto it.;Capt. Edward States, <a href=https://en.wikipedia.org/wiki/American_Airlines_Flight_587 target=_blank>American flight 587</a> (last recorded words, crashed Nov. 12, 2001)
11;13;Rule one: No matter what else happens, fly the airplane.;cliché
11;14;The devil himself had probably redesigned Hell in the light of information he had gained from observing airport layouts.;Anthony Price, <em>The Memory Trap</em> (1989)
11;15;The wish to be able to fly is to be understood as nothing else than a longing to be capable of sexual performance.;Sigmund Freud
11;16;I suppose we shall soon travel by air-vessels, make air instead of sea voyages, and at length find our way to the Moon, in spite of the want of atmosphere.;Lord Byron, British poet (1882)
11;17;The hard, inescapable reality is that anyone who flies may die in an airplane.;Stephen Coonts, American novelist
11;18;Governments have supported airlines as if they were local football teams. But there are just too many of them. This is the only industry I know that has lost money consistently and makes money infrequently.;Richard Hannah, airline analyst with UBS (1996)
11;19;For some years I have been afflicted with the belief that flight is possible to man. The disease has increased in severity and I feel it will soon cost me an increased amount of money, if not my life.;Wilbur Wright
11;20;Of the major incentives to improve safety, by far the most compelling is that of economics. The moral incentive, which is most evident following an accident, is more intense but is relatively short lived.;Jerome Lederer, American engineer
11;21;The game we are playing her is closest to the old game of ‘Christians and lions.’;Robert L. Crandall, CEO-President American Airlines
11;22;That’s not flying, that’s just falling with style.;Woody, regarding Buzz Lightyear, in the movie <em>Toy Story</em> (released Nov. 22, 1995)
11;23;I believe the new machine of the Wrights to be the most promising attempt at flight that has yet been made.;Octave Chanute, aviation pioneer (Nov. 23, 1903)
11;24;There has always been a certain romanticism associated with the airline business. We must avoid its perpetuation at Eastern at all costs.;Frank Borman, president Eastern Air Lines
11;25;The owner’s guide that comes with a $500 refrigerator makes more sense than the one that comes with a $50 million airliner.;cliché
11;26;If you don’t get in that plane you’ll regret it. Maybe not today, maybe not tomorrow, but soon and for the rest of your life.;Rick Blaine, 1942 movie <em>Casablanca</em>
11;27;These days no one can make money on the goddamn airline business. The economics represent sheer hell.;C.R. Smith, President American Airlines
11;28;I don’t like this.;Flight Engineer Gordon Brooks, <a href=https://en.wikipedia.org/wiki/Mount_Erebus_disaster target=_blank>Air New Zealand flight 901</a> (last recorded words before GPWS alarm, crashed Nov. 28, 1979)
11;29;The similarity between air traffic controllers and pilots? If a pilot screws up, the pilot dies. If ATC screws up, the pilot dies.;cliché
11;30;Anybody can jump a motorcycle. The trouble begins when you try to land it.;Evel Knievel, stunt performer (passed away Nov. 30, 2007)
12;01;ATTENTION! Aircraft Designers, Operators, Airmen, Managers. Anxiety never disappears in a human being in an airplane. It merely remains dormant when there is no cause to arouse it. Our challenge is to keep it forever dormant.;Harold Harris, VP Pan Am (circa 1950)
12;02;Approach, what’s the tower? – That’s a big tall building with glass all around it, but that’s not important right now.;actual transmission heard at the O’Hare TRACON
12;03;I hope you love birds too. It is economical.It saves going to heaven.;Emily Dickinson, American poet
12;04;Ladies and gentlemen, welcome to Glasgow, we hope you enjoyed your flight and thank you for flying easyJet. If you didn’t enjoy your flight, thank you for flying Ryanair.;easyJet crew, per a Great Aviation Quotes reader (2005)
12;05;It looked like a Taco Bell after an earthquake.;<em>Newsweek</em> reporter Karen Breslau, describing Air Force One after hitting severe air turbulence while serving Mexican food (1996)
12;06;Air transport is just a glorified bus operation.;Michael O’Leary, CEO Ryanair (2002)
12;07;[…] while you’re sitting here talking, someone is &#$%ing you. Changing a fare, changing a flight, moving something. There’s no autopilot, and that’s why I’ve seen a lot of guys come and go.;Gordon Bethune, CEO Continental Airlines, about his peers at other airlines (2004)
12;08;You start with a bag full of luck and an empty bag of experience. The trick is to fill the bag of experience before you empty the bag of luck.;cliché
12;09;Not so long ago, when I was a student in college, just flying an airplane seemed a dream. But that dream turned into reality;Charles Lindbergh, autobiography intro, <em>The Spirit of St. Louis</em>
12;10;Lady, you want me to answer you if this old airplane is safe to fly? Just how in the world do you think it got to be this old?;anonymous
12;11;Ignorance is the curse of God. Knowledge is the wing wherewith we fly to heaven.;William Shakespeare
12;12;The light at the end of the tunnel is another airplane’s landing light coming down head-on to the runway you are taking off from.;Robert Livingston, <em>Flying The Aeronca</em>
12;13;Our headline ran, ‘Virgin screw British Airways.’ We’d have rather preferred ‘British Airways screws Virgin,’ but we had to run with the facts.;News Editor, <em>The Sun</em> newspaper
12;14;In the 80’s, my gut feeling was that airlines were crap. I hated spending time on planes. I thought we could create the kind of airline I’d like. So we got a secondhand 747 and gave it a go.;Richard Branson, founder Virgin Atlantic (2006)
12;15;The important thing in aeroplanes is that they shall be speedy;Manfred von Richthofen (The Red Baron)
12;16;Good judgment comes from experience and experience comes from bad judgment.;cliché
12;17;The airplane stays up because it doesn’t have the time to fall.;Orville Wright (first flight Dec. 17, 1903)
12;18;They done it! They done it! Damned if they ain’t flew.;Johnny Moore, shouted while running to the village of Kitty Hawk (Dec. 17, 1903)
12;19;The course of the flight up and down was exceedingly erratic, partly due to the irregularity of the air, and partly to lack of experience in handling this machine.;Orville Wright, about first flight
12;20;I confess that in 1901, I said to my brother Orville that man would not fly for fifty years. Ever since, I have distrusted myself and avoided all predictions.;Wilbur Wright, speech to Aero Club of France (1908)
12;21;Twenty years for 270 murders is less than a month per victim. It’s just not right.;Peter Lowenstein, father of victim of <a href=https://en.wikipedia.org/wiki/Pan_Am_Flight_103 target=_blank>Lockerbie bombing</a> (Dec. 21 1988), on the conviction of Abdel al-Megrahi
12;22;Have you ever observed a humming-bird moving about in an aerial dance among the flowers – a living prismatic gem. It is a creature of such fairy-like loveliness as to mock all description.;W.H. Hudson, Argentine author
12;23;The air around London and other large cities will be darkened by the flight of aeroplanes. They are not mere dreamers who hold that the time is at hand when air power will be an even more important thing than sea power.;<em>Daily Mail</em> (1906)
12;24;À vaincre sans péril, on triomphe sans gloire. (We triumph without glory when we conquer without danger.);Pierre Corneille, <em>Le Cid</em>
12;25;The sky over London was glorious […] as though a dozen tropic suns were simultaneously setting round the horizon. Everywhere the shells sparkled like Christmas baubles.;Evelyn Waugh, English writer
12;26;The Boeing 747 is so big that it has been said that it does not fly… the earth merely drops out from under it.;Captain Ned Wilson, Pan Am
12;27;The human bird shall take his first flight, filling the world with amazement, all writings with his fame, and bringing eternal glory to he nest whence he sprang.;Leonardo da Vinci
12;28;If it flies, floats, or f…, it’s always cheaper to rent than to buy.;cliché
12;29;Hey – what’s happening here?;Capt. Robert Loft, <a href=https://en.wikipedia.org/wiki/Eastern_Air_Lines_Flight_401 target=_blank>Eastern Air Lines flight 401</a> (last words before crashing Dec. 29, 1972)
12;30;This is the most important aviation development since Lindbergh’s flight. In one fell swoop, we have shrunken the earth.;Juan Trippe, founder of Pan Am on the introduction of jet aircraft
12;31;Any landing you can walk away from is a good one!;Gerald R. Massie, U.S. Army Air Force photographer
`;

// Convert CSV-like string to structured objects
function parseQuotes(csvText) {
  return csvText
    .trim()
    .split("\n")
    .map(line => {
      const [month, day, quote, author] = line.split(";");
      return {
        month: parseInt(month.trim(), 10),
        day: parseInt(day.trim(), 10),
        quote: quote.trim(),
        author: author.trim()
      };
    });
}

const quotes = parseQuotes(quotesData);

// Fetch Eastern Time from timeapi.io
async function getEasternDate() {
  const url = "https://timeapi.io/api/Time/current/zone?timeZone=America/Toronto";
  const response = await fetch(url);
  if (!response.ok) throw new Error("Failed to fetch time");
  const data = await response.json();
  return new Date(data.dateTime);
}

// Find quote for given month/day
function findQuote(month, day) {
  return quotes.find(q => q.month === month && q.day === day) || null;
}

// Display the quote
async function displayQuoteOfTheDay() {
  try {
    const easternDate = await getEasternDate();
    const month = easternDate.getMonth() + 1; // JS months start at 0
    const day = easternDate.getDate();

    const todaysQuote = findQuote(month, day);

    const quoteDiv = document.getElementById("quote");
    const authorDiv = document.getElementById("author");

    if (todaysQuote) {
      quoteDiv.innerHTML = `\u201C${todaysQuote.quote}\u201D`;
      authorDiv.innerHTML = `\u2014${todaysQuote.author}`;
    } else {
      quoteDiv.textContent = "No quote available for today.";
      authorDiv.textContent = "";
    }
  } catch (err) {
    document.getElementById("quote").textContent = "Error loading quote.";
    document.getElementById("author").textContent = "";
    console.error(err);
  }
}

// Run on page load
displayQuoteOfTheDay();















