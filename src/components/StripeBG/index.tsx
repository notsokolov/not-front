import stripe from "./stripe.module.css";
import stripes from "./stripes.module.css";
// import stripes from './pink.module.css';

export function StripeBG() {
  return (
    <div className={stripe.StripeGrid}>
      <div className={stripe.backgroundContainer}>
        <div className={stripe.grid}>
          <div className={stripe.background}></div>
        </div>
      </div>
      <div className={stripe.stripeContainer}>
        <div className={stripe.grid}>
          <div className={stripes.stripe}></div>
          <div className={stripes.stripe}></div>
          <div className={stripes.stripe}></div>
          <div className={stripes.stripe}></div>
          <div className={stripes.stripe}></div>
          <div className={stripes.stripe}></div>
          <div className={stripes.stripe}></div>
          <div className={stripes.stripe}></div>
          <div className={stripes.stripe}></div>
          <div className={stripes.stripe}></div>
          <div className={stripes.stripe}></div>
        </div>
      </div>
    </div>
  );
}
