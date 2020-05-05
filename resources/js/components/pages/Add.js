import React from "react";
import { useForm } from "react-hook-form";
import axios from "../../utils/api";

export const PageAdd = () => {
  const { handleSubmit, register, errors } = useForm();
  const onSubmit = values => {
    const { title, content, category_id } = values;
    const data = { title, content, category_id: Number(category_id) };

    axios
      .post(`ideas`, data)
      .then(response => console.log({ response }))
      .catch(error => console.log({ error }));

    console.log(data);
  };

  return (
    <div>
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
        <button>Submit</button>
      </form>
    </div>
  );
};
