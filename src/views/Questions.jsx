const React = require('react');

const NavFooter = require('./NavFooter');

module.exports = function Questions({ questions, userID }) {
  return (

    <NavFooter userID={userID}>

      <div id="questions-container" className="d-flex flex-column justify-items-center align-items-center">

        {questions.map((question) => (
          <div data-id={question.id} key={question.id} className="d-flex flex-column align-items-center w-50">
            <h2 className="mt-2 mb-4">{question.question}</h2>
            <form className="d-flex flex-column align-items-center">
              <div className="mb-3">
                <input
                  type="text"
                  name="userAnswer"
                  placeholder="Ваш ответ"
                  className="form-control mb-2"
                  required
                />
              </div>
              <button type="submit" data-id={question.id} className="answer-button btn mb-2">Ответить</button>
            </form>
          </div>
        ))}

      </div>

    </NavFooter>

  );
};
