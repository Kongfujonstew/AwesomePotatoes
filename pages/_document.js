import Document, { Head, Main, NextScript } from 'next/document';
// import flush from 'styled-jsx/server'
import { ServerStyleSheet } from 'styled-components';
//vendor scripts go here.

export default class MyDocument extends Document {
  // static async getInitialProps({ renderPage }) {
  //   const { html, head, errorHtml, chunks } = renderPage()
  //   const styles = flush()
  //   return { html, head, errorHtml, chunks, styles }

  static getInitialProps ({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />));
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  render() {
    return (
      <html>
        <Head>
          <title>Awesome Potatoes</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <script src="https://cdn.auth0.com/js/lock/10.5/lock.min.js"></script>
          <link href="https://fonts.googleapis.com/css?family=Cabin" rel="stylesheet"></link>
          {this.props.styleTags}
          <style>{`body { margin: 0;}`}</style>
        </Head>
        <body>
          {this.props.customValue}
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
