import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import artisansData from '../components/data/datas.json';
import departementsData from '../components/data/departements.json';
import Rating from '../components/Rating';
import { VscDash } from 'react-icons/vsc';
import Breadcrumb from '../components/Breadcrumb.jsx';

const Fiche = () => {
  const { name } = useParams();
  const [formData, setFormData] = useState({ nom: '', objet: '', message: '' });
  const [formStatus, setFormStatus] = useState('');

  const artisanSlug = (text) => {
    return text
      .toLowerCase()
      .replace(/ /g, '-')
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');
  };

  const artisan = artisansData.find(
    (artisan) => artisanSlug(artisan.name) === name
  );

  if (!artisan) {
    return (
      <div className="text-center m-10 text-[var(--color-accent)]">
        <p className="mb-10">Artisan non trouvé</p>
        <Link to="/liste">
          <button
            className="text-white py-2 px-8 rounded-full transition-all duration-300 transform 
            bg-[var(--color-primary)] hover:bg-[var(--color-secondary)]">
            Retour à la liste
          </button>
        </Link>
      </div>
    );
  }

  const departement = departementsData[artisan.location];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const mailtoLink = `mailto:${artisan.email}?subject=${encodeURIComponent(formData.objet)}&body=${encodeURIComponent(`Nom: ${formData.nom}\n\nMessage: ${formData.message}`)}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="mx-auto max-w-[900px]">
      <div className="max-w-7xl mx-auto px-10">
        <header className="mb-5">
          <div className="text-xs">
            <Breadcrumb />
          </div>
          <h1 className="text-xl py-5 text-[var(--color-secondary)]">{artisan.name}</h1>
        </header>

        <section className="about mb-10">
          <div className="lg:pl-20">
            <VscDash className="dash text-7xl text-[var(--color-primary)]" />
            <h2 className="text-xl text-[var(--color-secondary)]">A propos</h2>
          </div>

          <div className="my-10 space-y-5">
            <div>
              <strong>{artisan.note}</strong> <Rating note={artisan.note} />
            </div>
            <p>
              <strong>Spécialité :</strong> {artisan.specialty}. {artisan.about}
            </p>
            <p>
              <strong>Localisation :</strong> {artisan.location}
              {departement && ` (${departement})`}.
            </p>
          </div>
        </section>

        <section className="contact-form">
          <div className="lg:pl-20">
            <VscDash className="dash text-7xl text-[var(--color-primary)]" />
            <h2 className="text-xl text-[var(--color-secondary)]">Envoyer un mail à cet artisan</h2>
          </div>

          <div className="my-10 ml-10 space-y-5 max-w-[600px] lg:max-w-[500px]">
            <p className="text-xs italic">Les champs marqués d'un astérisque (*) sont requis.</p>
            <form className="space-y-5" onSubmit={handleSubmit}>
              <label className="flex flex-col">
                <div className="flex flex-row pb-3">
                  Nom <div className='text-[var(--color-accent)]'>*</div>:
                </div>
                <input 
                  className="border rounded-full outline outline-1 outline-[var(--color-primary)] min-h-[35px] bg-[var(--color-white)]" 
                  type="text" 
                  name="nom" 
                  value={formData.nom} 
                  onChange={handleChange} 
                />
              </label>

              <label className="flex flex-col">
                <div className="flex flex-row pb-3">
                  Objet <div className='text-[var(--color-accent)]'>*</div>:
                </div>
                <input 
                  className="border rounded-full outline outline-1 outline-[var(--color-primary)] min-h-[35px] bg-[var(--color-white)]" 
                  type="text" 
                  name="objet" 
                  value={formData.objet} 
                  onChange={handleChange} 
                />
              </label>

              <label className="flex flex-col">
                <div className="flex flex-row pb-3">
                  Votre message <div className='text-[var(--color-accent)]'>*</div>:
                </div>
                <textarea 
                  className="border rounded-3xl outline outline-1 outline-[var(--color-primary)] min-h-[150px] bg-[var(--color-white)]" 
                  name="message" 
                  value={formData.message} 
                  onChange={handleChange}
                />
              </label>

              <input 
                className="text-white bg-[var(--color-primary)] py-2 px-8 rounded-full hover:cursor-pointer transition-all duration-300 transform hover:bg-[var(--color-secondary)] "
                type="submit" 
                value="Soumettre" 
              />
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Fiche;
