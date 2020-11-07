import React from "react";
import WebsiteImg from "../images/My website screen shot.PNG"
import CalCalImg from "../images/calorie calculator img.PNG"
import ForageImg from "../images/forageHMpage-screen-shot.PNG"

function PortfolioPage() {
  return (
    <div>
      <header className="container">
        <h1 className="text-center">Portfolio</h1>
      </header>

      <main className="row">
        <div className="card-deck">
          <div className="card">
            <img
              src={WebsiteImg}
              className="card-img-top"
              alt="pic of website Matthew Kerr built"
            />
            <section className="card-body">
              <h5 className="card-title">Professional Profile Website</h5>
              <p className="card-text">
                My first project was this website, which was completly built and
                designed from scratch using Bootstrap, HTML, and CSS.
              </p>
            </section>
            <div className="card-footer">
              <a
                className="btn-floating btn-lg btn-git"
                type="button"
                role="button"
                href="https://github.com/Matt777k/MJK-Profile-Website"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>

          <div className="card">
            <a
              href="https://vincy-code.github.io/Nutrition-Calculator/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={CalCalImg}
                className="card-img-top"
                alt="website for calorie calculator project"
              />
            </a>
            <section className="card-body">
              <h5 className="card-title">
                Calorie Calculator and Meal Plan Generator
              </h5>
              <p className="card-text">
                This project made use of my nutirition knowledge to create a web
                app that calculates the user's calorie needs and generate a meal
                plan based on the goal they selected. I also put in
                functionality that a user can use to search a database for a
                specific food item and its nutrition information. Technologies:
                Javascript, jQuery, Zurb Foundation, Nutritionix API, and
                FoodData Central API
              </p>
            </section>
            <div className="card-footer">
              <a
                className="btn-floating btn-lg btn-git"
                type="button"
                role="button"
                href="https://github.com/vincy-code/Nutrition-Calculator"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>

          <div className="card">
            <a href="https://forage-mealplan.herokuapp.com/" target="_blank" rel="noreferrer">
              <img
                src= {ForageImg}
                className="card-img-top"
                alt="pic of Homepage of Forage website"
              />
            </a>
            <section className="card-body">
              <h5 className="card-title">Forage</h5>
              <p className="card-text">
                Life is hard. Being healthy should be easy. That's why we
                created Forage. A social meal planning ecosystem that allows you
                to build custom meal plans and share it with your friends to
                keep everyone on the path to optimal health. Technologies:
                Javascript, jQuery, Materialize, Edamam API, Handlebars, MySQL,
                NodeJS, and Express.js
              </p>
            </section>
            <div className="card-footer">
              <a
                className="btn-floating btn-lg btn-git"
                type="button"
                role="button"
                href="https://github.com/Kooki-eByte/Forage"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="card mx-auto mt-3 mb-3 p-2 mb-2">
          <div className="card-header text-center">Skills:</div>
          <ul className="list-group list-group-flush text-center">
            <li className="list-group-item">HTML5</li>
            <li className="list-group-item">CSS3</li>
            <li className="list-group-item">Javascript</li>
            <li className="list-group-item">React</li>
            <li className="list-group-item">MySQL</li>
            <li className="list-group-item">MongoDB</li>
          </ul>
        </div>
      </main>
    </div>
  );
}

export default PortfolioPage;
