import React from 'react';
import { I18n } from 'react-i18next';

import styles from './Features2.scss';

const Features2 = () => {
  return (
    <I18n ns="translations">
      {t => (
        <div className="container">
          <div className={`row ${styles.container}`}>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <h1 className={`title ${styles.nomargin}`}>FEATURES</h1>
              <br/>
            </div>
            <div className={styles.features}>
              <div className={`col-xs-12 col-sm-12 col-md-4 col-lg-4 ${styles.feature}`}>
                <div className={styles.icon}>
                  <img src="/img/no-id-needed.svg" alt="transparent" />
                </div>
                <p className={styles.name}>TRANSPARENT</p>
                <p className={styles.description}>We Are Upfront With Fees And Our Business Model</p>
              </div>
              <div className={`col-xs-12 col-sm-12 col-md-4 col-lg-4 ${styles.feature}`}>
                <div className={styles.icon}>
                  <img src="/img/decentralized.svg" alt="excellence" />
                </div>
                <p className={styles.name}>EXCELLENCE</p>
                <p className={styles.description}>We Are Continually Trying To Improve Our Service</p>
              </div>
              <div className={`col-xs-12 col-sm-12 col-md-4 col-lg-4 ${styles.feature}`}>
                <div className={styles.icon}>
                  <img src="/img/safe.svg" alt="customer service" />
                </div>
                <p className={styles.name}>CUSTOMER SERVICE</p>
                <p className={styles.description}>We Strive To Provide The Best Customer Service Available</p>
              </div>
              <div className={`col-xs-12 col-sm-12 col-md-4 col-lg-4 ${styles.feature}`}>
                <div className={styles.icon}>
                  <img src="/img/private.svg" alt="trust" />
                </div>
                <p className={styles.name}>TRUST</p>
                <p className={styles.description}>We Are Non Custodial Which Means We Never 
                  Hold Our Customers Balances Giving You Complete Control Of Your Assets</p>
              </div>
              <div className={`col-xs-12 col-sm-12 col-md-4 col-lg-4 ${styles.feature}`}>
                <div className={styles.icon}>
                  <img src="/img/open-source.svg" alt="reliability" />
                </div>
                <p className={styles.name}>RELIABILITY</p>
                <p className={styles.description}>Our Fast Trade Engine Ensures You Receive Your 
                  Assets Quicker Than Most If Not All Our Competitors</p>
              </div>
              <div className={`col-xs-12 col-sm-12 col-md-4 col-lg-4 ${styles.feature}`}>
                <div className={styles.icon}>
                  <img src="/img/easy-to-use.svg" alt="reliability" />
                </div>
                <p className={styles.name}>RELIABILITY</p>
                <p className={styles.description}>Our Fast Trade Engine Ensures You Receive Your 
                  Assets Quicker Than Most If Not All Our Competitors</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </I18n>
  );
};

export default Features2;
