import React from 'react';
import Head from 'next/head';
import Router from 'next/router';

import ProtectedPage from '../../_protected';
import Error from '../../_error';

import Wrapper from '../../../components/Wrapper';
import Header from '../../../components/Header';
import Content from '../../../components/Content';
import Footer from '../../../components/Footer';

import ArticleForm from '../../../components/admin/ArticleForm';

import API from '../../../services/api';
import { getAllCookies } from '../../../services/cookies';

class NewArticlePage extends ProtectedPage {
  static async getInitialProps({ req, res }) {
    const cookies = getAllCookies(req);
    const parentProps = await super.getInitialProps({ req, res });
    const projects = await API.projects.find({}, cookies);
    const categories = await API.categories.find({}, cookies);

    return {
      ...parentProps,
      projects: projects.docs,
      categories: categories.docs,
    };
  }

  constructor(props) {
    super(props);

    this.state = { formDisabled: false };

    this.submit = this.submit.bind(this);
  }

  async submit(article) {
    const cookies = getAllCookies();

    this.setState({ formDisabled: true });

    try {
      const imageFile = article.image;
      let savedArticle;

      if (imageFile) {
        const [uploadedImage] = await API.upload(imageFile, cookies);
        const articleWithImage = { ...article, image: uploadedImage.id };

        savedArticle = await API.articles.create(articleWithImage, cookies);
      } else {
        savedArticle = await API.articles.create(article, cookies);
      }

      this.setState({ formDisabled: false });

      Router.push(`/admin/articles/edit?path=${savedArticle.path}`, `/admin/articles/${savedArticle.path}/edit`);
    } catch (error) {
      this.setState({ formDisabled: false });
    }
  }

  render() {
    const { projects, categories, error } = this.props;

    if (error) {
      return <Error statusCode={error.status} />;
    }

    return (
      <Wrapper>
        <Head>
          <title>Нова стаття / Панель керування</title>
        </Head>
        <Header admin />
        <Content className="container">
          <ArticleForm
            disabled={this.state.formDisabled}
            projects={projects}
            categories={categories}
            onSubmit={this.submit}
          />
        </Content>
        <Footer />
      </Wrapper>
    );
  }
}

export default NewArticlePage;
