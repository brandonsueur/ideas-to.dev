<?php

use Illuminate\Database\Seeder;

class IdeasTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $table = DB::table('ideas');

        if ($table->get()->count() === 0) {
            $table->insert([
                'user_id' => 1,
                'category_id' => 4,
                'title' => 'Charitable organisation',
                'slug' => 'charitable-organisation',
                'content' => "More than one association, looking for technical profiles to redo their sites or mobile applications for very little means. However, this allows you to progress and display projects on your portfolio.

Associations, there are many and you can imagine one that would keep you in the heart receiving to redo their site, help make a real impact through the Internet.

Today it's simple to make things known on the internet, however you need a simple message, a website and
a modern app, few redirects, modals and a clear message.

So you often understood the association with the message but not the skills or the team to redo are
website, mobile application or even flyers, social media banners ... etc.

### 🔗 Some links
- https://solidarites.info/liste-ong-humanitaires.php
- https://dribbble.com/search/association",
                'status' => 1,
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'),
            ]);

            $table->insert([
                'user_id' => 1,
                'category_id' => 2,
                'title' => 'Gasoil comparisons and statistics',
                'slug' => 'gasoil-comparisons-and-statistics',
                'content' => "Are you looking to take diesel around your home? I'm sure it does! And why not make your little interface to recover the cheapest diesel fuel by calculating the kilometers from your home ... etc?

We can save up to € 500 depending on your use of Diesel fuel per year. So make a
tool for your loved ones or to learn how to recover data from a site with a nice interface.

### 🔗 Some links
- https://dribbble.com/search/comparator
- https://www.prix-carburants.gouv.fr/
- https://mon-essence.fr/",
                'status' => 1,
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'),
            ]);

            $table->insert([
                'user_id' => 1,
                'category_id' => 4,
                'title' => 'Mario Bros',
                'slug' => 'mario-bros',
                'content' => "Who has ever played Super Mario Bross or Mario Kart? I think everyone! 🤪 Do you already have to redo it entirely in JS then Flat Design, with other game modes? No need to do very complicated things but which will allow you to learn a lot of things, on travel, performance ... etc
                
Today our browsers are capable of doing enormous things, the developers know better and better optimize
things and therefore why not online games, multiplayer (it already exists but why not yours?).

### 🔗 Some links

- https://codepen.io/search/pens?q=mario+bross
- https://dribbble.com/search/game
- https://dribbble.com/search/mario",
                'status' => 1,
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'),
            ]);

            $table->insert([
                'user_id' => 0,
                'category_id' => 1,
                'title' => 'am bourré',
                'slug' => 'am-drunk',
                'content' => "A simple way to be alerted that you're drunk thanks to a mobile app. Do not leave our loved ones at the side of the road. So let's look for a digital solution to avoid this and have someone close to you pick it up.

The idea would be that if the person who is drunk, press a button on the application, it alerts his loved ones.
If, he does not do this manipulation, the close people, can launch a call on the application, if
there is no response after 20 minutes, so retrieve its last position, the last 5 photos and why not
the last calls made.

### 🔗 Some links
- https://dribbble.com/search/alert%20mobile
- https://dribbble.com/search/mobile",
                'status' => 1,
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'),
            ]);

            $table->insert([
                'user_id' => 0,
                'category_id' => 5,
                'title' => 'My Youtube Like',
                'slug' => 'my-youtube-like',
                'content' => "A system allowing users to list the youtubers they follow by classifying them in categories to offer a 'curation' system. This then creates a shareable page.

### 🔗 Some links

- https://fr.wikipedia.org/wiki/Curation_de_contenu
- https://dribbble.com/search/youtube
- https://www.ideagency.fr/blog/outils-curation-contenu",
                'status' => 1,
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'),
            ]);

            $table->insert([
                'user_id' => 0,
                'category_id' => 5,
                'title' => 'Streaming service for amateur football',
                'slug' => 'streaming-service-for-amateur-football',
                'content' => "Platform allowing all amateur clubs to stream their Sunday football matches (amateur level). This platform would therefore allow everyone to be able to follow the matches of their small childhood club every weekend.

Advertising could be added during half-time and a banner at certain times of the match to finance the platform AND the club.

The main features:

- Rate a player(s)
- Comment on the match
- Support your team (clap-clap, sound effects, etc ...)
- Sale of a kit for the club including:
    - The tripod for mobile or more professional camera
    - The possibility of streaming the matches during a whole season

### 🔗 Some links

- https://dribbble.com/search/streaming
- https://dribbble.com/search/football",
                'status' => 1,
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'),
            ]);

            $table->insert([
                'user_id' => 0,
                'category_id' => 1,
                'title' => 'Mobile reservation terminal for Kebabs',
                'slug' => 'mobile-reservation-terminal-for-kebabs',
                'content' => "McDo terminal white label application for Kebab type restaurants that receive orders by phone.

Instead of people calling, they can download the “<RESTAURANT NAME> by kebab.app” app to order their kebab (s). The application could even be used by someone who is there, instead of someone coming to take the order, he sits down and places his order quietly.

**What would the application look like?**

A very refined application, a bit like the limits of McDonald's: you compose your Kebab: you add the type of meat, raw vegetables, sauces, drink, etc.

**Cost(s) for the restaurateur**
Fees for setting up and digitizing the menu: 100.00 + commission of € 0.10 / order

### 🔗 Some links

- https://dribbble.com/search/mcdo
- https://dribbble.com/search/youtube
- https://www.ideagency.fr/blog/outils-curation-contenu",
                'status' => 1,
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'),
            ]);

            $table->insert([
                'user_id' => 0,
                'category_id' => 5,
                'title' => 'Known Application Clone',
                'slug' => 'known-application-clone',
                'content' => "The best way to progress is above all to “copy” before innovating.

What I mean by that is that recreating, \"cloning\" and personalizing an application that already exists is very educational. No need to redo all the features, but the most important and most importantly, it's time to add your own features that you always \"dreamed\" of adding to the original platform.

Whatever the application, it can be: Discord, Twitter, Youtube, Google Drive etc.

I am sure that you use an application on a daily basis and that redoing it by yourself will be an additional project to put on the portfolio.",
                'status' => 1,
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'),
            ]);

            $table->insert([
                'user_id' => 0,
                'category_id' => 5,
                'title' => '3D modeling of your house',
                'slug' => '3D-modeling-of-your-house',
                'content' => "Apart from your old photos, you can also remember your old house or your current house in 3D thanks to digital.
Using modern web technologies or languages, you can do great things!

### Some links
- https://threejs.org/
- https://codepen.io/search/pens?q=threejs",
                'status' => 1,
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'),
            ]);
        }
    }
}
