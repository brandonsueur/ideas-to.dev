import React, { Component } from 'react'

export class PageRoadmap extends Component {
  render(){
    return(
      <div className="container mt-24">
        <h1 className="font-semibold text-2xl mb-5">🎢 Feuille de route</h1>
        <p className="w-2/3">Un aperçu des fonctionnalités à venir de <b className="font-semibold">idea-to.dev</b>, et celles que nous avons terminées jusqu'à présent!</p>

        <div className="shadow-lg mt-12 rounded">
          <header className="border-b-2 p-4">
            <h3 className="text-lg font-semibold">💡 Version initiale</h3>
          </header>

          <div className="p-4 border-b text-gray-700 opacity-50">
            <h3>✅ <span className="line-through">Affichage des idées.</span></h3>
          </div>

          <div className="p-4 border-b text-gray-700 opacity-50">
            <h3>✅ <span className="line-through">Catégoriser les idées.</span></h3>
          </div>

          <div className="p-4 border-b text-gray-700 opacity-50">
            <h3>✅ <span className="line-through">Une page pour soutenir le projet.</span></h3>
          </div>

          <div className="p-4 border-b text-gray-700 opacity-50">
            <h3>✅ <span className="line-through">Possibilité d'aimer une idée.</span></h3>
          </div>
        </div>

        <div className="shadow-lg mt-12 rounded">
          <header className="border-b-2 p-4">
            <h3 className="text-lg font-semibold">👨🏻‍🔬 Les fonctionnalités à venir</h3>
          </header>

          <div className="p-4 border-b text-gray-700">
            <h3>🔄 Présenter ses projets GitHub en dessous d'une idée.</h3>
          </div>

          <div className="p-4 border-b text-gray-700">
            <h3>🔄 Un chat / Discord pour s'entraider sur des idées.</h3>
          </div>

          <div className="p-4 border-b text-gray-700 opacity-50">
            <h3>✅ <span className="line-through">Possibilité d'ajouter une idée.</span></h3>
          </div>
        </div>

        <div className="shadow-lg mt-12 rounded">
          <header className="border-b-2 p-4">
            <h3 className="text-lg font-semibold">👔 Fonctionnalités premium</h3>
          </header>

          <div className="p-4 border-b text-gray-700">
            <h3>🧪 Recevez chaque Vendredi matin sur votre profil des nouvelles idées.</h3>
          </div>

          <div className="p-4 border-b text-gray-700">
            <h3>🧪 Des idées pour faire passer des entretiens techniques.</h3>
          </div>

          <div className="p-4 border-b text-gray-700">
            <h3>🧪 Clôner des boilerplate d'une idée faite sur GitHub / Trello. </h3>
          </div>
        </div>

        <div className="shadow-lg mt-12 rounded">
          <header className="border-b-2 p-4">
            <h3 className="text-lg font-semibold">🤔 En réfléxion</h3>
          </header>

          <div className="p-4 border-b text-gray-700">
            <h3>🧪 Espace de commentaire.</h3>
          </div>

          <div className="p-4 border-b text-gray-700">
            <h3>🧪 Statistiques sur courbe d'apprentissage d'une idée.</h3>
          </div>

          <div className="p-4 border-b text-gray-700">
            <h3>🧪 Créer un profil avec des scores.</h3>
          </div>

          <div className="p-4 border-b text-gray-700">
            <h3>🧪 Défier des personnes à créer des idées.</h3>
          </div>

          <div className="p-4 border-b text-gray-700">
            <h3>🧪 Créer un profil avec des scores.</h3>
          </div>
        </div>
      </div>
    )
  }
}
