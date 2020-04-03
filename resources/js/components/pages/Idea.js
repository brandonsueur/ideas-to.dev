import React, { Component } from 'react'

import axios from "../../utils/api";
import Content from "../components/Content";

export class PageIdea extends Component {

  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      idea: null,
      repositories: null,
    }
  }

  componentDidMount() {
    this.getIdea();
  }

  async getIdea(){
    let res = await axios.get(`ideas/${this.props.params.id}`);
    let { data } = await res.data;

    this.setState({
      idea: data,
      loading: false
    })
  };

  render(){
    const { loading, idea } = this.state;

    // @todo is loading
    if(loading) return null
    return(
      <div>
       <Content idea={idea} />

        {/* cta */}
        {/* <div className="bg-bluedark rounded-lg py-6 px-4 mb-10">
          <h1 className="font-semibold text-2xl text-center text-white">Alors !?</h1>

          <div className="flex m-4 flex justify-center">
            <a href="#" className="m-2 font-semibold rounded-lg px-6 py-4 no-underline bg-yellow-200 hover:shadow">👌 J'adore l'idée</a>
            <a href="#" className="m-2 font-semibold rounded-lg px-6 py-4 no-underline bg-pink-200 hover:shadow">🕹 J'ai commencé l'idée</a>
            <a href="#" className="m-2 font-semibold rounded-lg px-6 py-4 no-underline bg-green-200 hover:shadow">🎊 J'ai terminé l'idée</a>
          </div>
        </div> */}

        {/*<h1 className="font-semibold text-2xl">Les projets déjà réalisés : </h1>*/}

        {/* repositories */}
        {/*<Repositories />*/}
      </div>
    )
  }
}
