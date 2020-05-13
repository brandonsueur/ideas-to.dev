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
                'title' => 'Une association caritative',
                'slug' => 'une-association-caritative',
                'content' => "Plus d'une association, recherche des profils techniques pour refaire leurs sites ou applications mobiles pour très peu de moyen. Cependant, cela permet de progresser et afficher des projets sur sont portfolio.

Des associations, il y en a beaucoup et s'en doute une qui vous tiendrais à coeur d'aider à refaire leurs site,
aider à avoir un vrai impacte grâce à internet.

Aujourd'hui c'est simple de faire savoir des choses sur internet, cependant il faut un message simple, un site et
une application moderne, peu de redirection, modals et un message clair.

Donc vous l'avez compris souvent l'association à le message mais pas les compétences ou l'équipe pour refaire sont
site web, l'application mobile ou même les flyers, bannières des réseaux sociaux...Etc

### 🔗 Quelques liens
- https://solidarites.info/liste-ong-humanitaires.php
- https://dribbble.com/search/association",
                'status' => 1,
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'),
            ]);

            $table->insert([
                'user_id' => 1,
                'category_id' => 2,
                'title' => 'Comparaisons et statistiques du gasoil',
                'slug' => 'comparaisons-et-statistiques-du-gasoil',
                'content' => "Avez-vous cherchez à prendre le gasoil autour de chez vous ? J'en suis sur que oui ! Et pourquoi pas faire votre petite interface pour récupérer le gasoil le moins chère en calculant les kilomètres à partir de chez-vous..etc ?

Nous pouvons économiser jusqu'à 500€ suivant votre utilisation par an de Gasoil. Alors, faite un
outil pour vos proches ou afin apprendre à récupérer des données d'un site avec une jolie interface.

### 🔗 Liens utiles
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
                'content' => "Qui a déjà joué à Super Mario Bross ou encore à Mario Kart ? Je pense tout le monde ! 🤪 Avez-vous déjà de le refaire entièrement en JS puis Flat Design, avec d'autres modes de jeux ? Pas besoin de faire des choses ultras compliqués mais qui vous permettrez d'apprendre énormément de chose, sur les déplacements, les performances...etc

Aujourd'hui nos navigateurs sont capable de faire d'énormes choses, les développeurs savent de mieux en mieux optimisez
les choses et donc pourquoi pas des jeux online, multijoueurs(ça existe déjà mais pourquoi pas le votre ?).

### 🔗 Liens utiles

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
                'title' => 'ChuiBourré',
                'slug' => 'chuibourre',
                'content' => "Une façon simple d'alerté que vous êtes bourré gr âce à une application mobile. Ne laissons pas nos proches aux bords de la route. Donc, cherchons une solution numérique pour éviter cela et qu'un proche vienne le récupérer.

L'idée serait que si la personne qui est bourré, appuis sur un bouton sur l'application, ça alerte ses proches.
Si, il ne fait pas cette manipulation, les personnes proches, peuvent lancer un appelle sur l'application, si
il y a aucune réponse au bout de 20 minutes, donc récupérer sa dernière position, les 5 dernières photos et pourquoi pas
les derniers appels passés.

### 🔗 Liens utiles
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
                'content' => "Un système permettant aux utilisateurs de lister les youtubers qu'ils suivent en les classant dans des catégories pour offrir un système de 'curation'. Cela crée ensuite une page partageable.

### 🔗 Liens utiles

- https://fr.wikipedia.org/wiki/Curation_de_contenu
- https://dribbble.com/search/youtube
- https://www.ideagency.fr/blog/outils-curation-contenu",
                'status' => 1,
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'),
            ]);
        }
    }
}
