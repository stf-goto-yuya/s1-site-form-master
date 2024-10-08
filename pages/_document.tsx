import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head />
        <head>
          <title>S1 トライアル申し込みフォーム</title>
        </head>
        <body className="bg-gray-900">
          {/* Start of HubSpot Embed Code */}
          <script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/20687698.js"></script>
          {/* End of HubSpot Embed Code */}
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
