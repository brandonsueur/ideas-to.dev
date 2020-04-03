import React from 'react'
import { Link } from "wouter";

export const PageError = () => (
  <div className="text-center my-32">
    <h1 className="font-black text-4xl">Oops ! 🥺</h1>
    <p className="py-3">Tu es actuellement sur une page qui n'hésite pas ou plus.</p>

    <Link to='/' className="text-green-400">Retourner à l'accueil</Link>
  </div>
)
