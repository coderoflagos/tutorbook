import React from 'react';

import { GetStaticProps, GetStaticPaths } from 'next';

import Intercom from '../../intercom';
import Header from '../../header';
import Footer from '../../footer';
import TutorForm from '../../tutor-form';

import { getIntlProps, getIntlPaths, withIntl } from '../../intl';

class TutorsPage extends React.Component {
  public render(): JSX.Element {
    return (
      <>
        <Header />
        <TutorForm />
        <Footer />
        <Intercom />
      </>
    );
  }
}

export const getStaticProps: GetStaticProps = async (context) => ({
  props: await getIntlProps(context),
});

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: getIntlPaths(),
  fallback: false,
});

export default withIntl(TutorsPage);
