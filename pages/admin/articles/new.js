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
    const parentProps = await super.getInitialProps({ req, res });
    const projects = await API.projects.find({}, getAllCookies(req));
    const categories = await API.categories.find({}, getAllCookies(req));

    return {
      ...parentProps,
      projects: projects.docs,
      categories: categories.docs,
    };
  }

  static async submit(article) {
    const imageFile = article.image;
    let savedArticle;

    if (imageFile) {
      const [uploadedImage] = await API.upload(imageFile, getAllCookies());
      const articleWithImage = Object.assign({}, article, { image: uploadedImage.id });

      savedArticle = await API.articles.create(articleWithImage, getAllCookies());
    } else {
      savedArticle = await API.articles.create(article, getAllCookies());
    }

    Router.push(`/admin/articles/edit?path=${savedArticle.path}`, `/admin/articles/${savedArticle.path}/edit`);
  }

  render() {
    const { projects, categories, error } = this.props;

    if (error) {
      return <Error statusCode={this.props.error.status} />;
    }

    return (
      <Wrapper>
        <Head>
          <title>Нова стаття / Панель керування</title>
        </Head>
        <Header admin />
        <Content className="container">
          <ArticleForm projects={projects} categories={categories} onSubmit={NewArticlePage.submit} />
        </Content>
        <Footer />
      </Wrapper>
    );
  }
}

export default NewArticlePage;