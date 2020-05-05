import React from "react";
import { useForm } from "react-hook-form";

export const PageAdd = () => {
  const { handleSubmit, register, errors } = useForm();
  const onSubmit = values => console.log(values);

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
              required: "Le champs est obligatoire."
            })}
            className="w-full px-4 py-2 font-medium bg-gray-100 rounded-lg outline-none"
          />

          <span className="text-red-500">
            {errors.content && errors.content.message}
          </span>
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};
