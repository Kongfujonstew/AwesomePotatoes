import Document, { Head, Main, NextScript } from 'next/document'
// import flush from 'styled-jsx/server'

//vendor scripts go here.

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const { html, head, errorHtml, chunks } = renderPage()
    // const styles = flush()
    return { html, head, errorHtml, chunks }
  }

  render() {
    return (
      <html>
        <Head>
          <title>Awesome Potatoes</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <script src="https://cdn.auth0.com/js/lock/10.5/lock.min.js"></script>
        </Head>
        <body className="custom_class">
          {this.props.customValue}
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
