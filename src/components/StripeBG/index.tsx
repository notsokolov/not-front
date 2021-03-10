import React from "react";

export function StripeBG() {
  return (
    <header>
      <section className="intro container-lg">
        <h2>Turn your idea into a startup</h2>
        <div>
          <p>
            Stripe Atlas is a powerful, safe, and easy-to-use platform for
            forming a company. By removing lengthy paperwork, legal complexity,
            and numerous fees, Stripe Atlas helps you launch your startup from
            anywhere in the world.
          </p>
        </div>
        <a href="/#">Start your company</a>
      </section>

      <div className="StripeGrid anchorBottom  ">
        <div className="backgroundContainer">
          <div className="grid">
            <div className="background"></div>
          </div>
        </div>

        <div className="stripeContainer">
          <div className="grid">
            <div className="stripe"></div>
            <div className="stripe"></div>
            <div className="stripe"></div>
            <div className="stripe"></div>
            <div className="stripe"></div>
            <div className="stripe"></div>
            <div className="stripe"></div>
            <div className="stripe"></div>
            <div className="stripe"></div>
            <div className="stripe"></div>
            <div className="stripe"></div>
          </div>
        </div>
      </div>
    </header>
  );
}
