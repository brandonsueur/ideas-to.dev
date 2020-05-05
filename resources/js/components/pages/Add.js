import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "../../utils/api";

export const PageAdd = () => {
  const { handleSubmit, register, errors } = useForm();
  const [alert, setAlert] = useState(false);

  const onSubmit = values => {
    const { title, content, category_id } = values;
    const data = { title, content, category_id: Number(category_id) };

    axios
      .post(`ideas`, data)
      .then(response => {
        console.log({ response });

        setAlert(true);

        setTimeout(() => {
          window.location.href = "/";
        }, 4000);
      })
      .catch(error => console.log({ error }));
  };

  return (
    <div>
      {alert && (
        <div
          class="bg-teal-100 border-teal-500 rounded-b text-teal-900 px-4 py-3 mb-6"
          role="alert"
        >
          <div class="flex">
            <div class="py-1">
              <svg
                class="fill-current h-6 w-6 text-teal-500 mr-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
              </svg>
            </div>
            <div>
              <p class="font-bold">Génial ! Votre idée à bien été envoyé.</p>
              <p class="text-sm">
                La vérification sera faite dans les plus brefs délais. Merci
                d'avoir participé ! ❤️
              </p>
            </div>
          </div>
        </div>
      )}

      <form action="#" onSubmit={handleSubmit(onSubmit)}>
        <div className="block mb-6">
          <label htmlFor="title">Titre de l'idée</label>
          <input
            type="text"
            id="title"
            name="title"
            className="w-full px-4 py-3 pr-8 font-medium bg-gray-100 rounded-lg outline-none"
            ref={register({
              required: "Le champs est obligatoire."
            })}
          />
          <span className="text-red-500">
            {errors.title && errors.title.message}
          </span>
        </div>

        <div className="block mb-6">
          <label htmlFor="categories">Contenu de l'idée</label>
          <select
            name="category_id"
            id="categories"
            className="font-medium cursor-pointer bg-gray-100 rounded-lg block outline-none appearance-none w-full px-4 py-3 pr-8 hover:border-2 hover:border-gray-200"
            ref={register({
              required: "Le champs est obligatoire."
            })}
          >
            <option value="1">Mobile</option>
            <option value="2">Back-end</option>
            <option value="3">Package</option>
            <option value="4">Front-End</option>
          </select>
        </div>

        <div className="block mb-6">
          <label htmlFor="content">Contenu de l'idée</label>
          <textarea
            name="content"
            id="content"
            cols="30"
            rows="10"
            ref={register({
              required: "Le champs est obligatoire.",
              minLength: 10
            })}
            className="w-full px-4 py-2 font-medium bg-gray-100 rounded-lg outline-none"
          />

          <span className="text-red-500">
            {errors.content && errors.content.message}
            {errors.content && errors.content.type === "minLength" && (
              <span>Vous devez ajouter plus de contenu</span>
            )}
          </span>
        </div>
        <button className="text-white font-medium  bg-green-400 hover:bg-green-500 rounded-lg px-6 py-3 no-underline outline-none">
          Envoyer l'idée !
        </button>
      </form>
    </div>
  );
};
